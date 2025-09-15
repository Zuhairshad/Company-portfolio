// src/components/GlobePins.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

const LAHORE = {
  country: "Pakistan",
  city: "Lahore",
  address: "Firdous Market, Block C",
  phone: "+92 314 1147714",
  lat: 31.5204,
  lng: 74.3587,
  color: "#ffffff",
};

export default function GlobePins({
  width = 320,
  height = 260,
  point = LAHORE,
  spinMs = 1800,      // spin before zoom
  zoomMs = 1800,      // zoom duration
  startAlt = 2.2,     // initial altitude
  endAlt = 1.1,       // ~50% of initial (closer)
  pixelRatioCap = 1.4,// cap devicePixelRatio to reduce GPU fill-rate
  placeholderSrc = "https://unpkg.com/three-globe/example/img/earth-dark.jpg",
}) {
  const wrapRef = useRef(null);
  const globeRef = useRef(null);

  const timers = useRef([]);
  const didAnimate = useRef(false);
  const [hovered, setHovered] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // user/env hints
  const [prefersReducedMotion, setPRM] = useState(false);
  const deviceMemory = (typeof navigator !== "undefined" && navigator.deviceMemory) || 4;

  // Lazy vendor component (react-globe.gl)
  const [GlobeCmp, setGlobeCmp] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const idleCbRef = useRef(null);

  // cleanup timers
  useEffect(() => {
    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      if (idleCbRef.current && "cancelIdleCallback" in window) {
        // @ts-ignore
        cancelIdleCallback(idleCbRef.current);
      }
    };
  }, []);

  // prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const update = () => setPRM(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Helper: safe idle callback
  const requestIdle = (fn) => {
    if (typeof window === "undefined") return;
    if ("requestIdleCallback" in window) {
      // @ts-ignore
      idleCbRef.current = requestIdleCallback(fn, { timeout: 1200 });
    } else {
      idleCbRef.current = setTimeout(fn, 300);
    }
  };

  // IntersectionObserver: import react-globe.gl when near viewport (or at idle)
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || GlobeCmp) return;

    let didLoad = false;

    const loadGlobe = async () => {
      if (didLoad || GlobeCmp) return;
      didLoad = true;
      try {
        const mod = await import("react-globe.gl"); // dynamic import -> separate chunk
        setGlobeCmp(() => mod.default);
      } catch (e) {
        console.warn("Failed to load react-globe.gl", e);
      }
    };

    // Idle-load as a backup (so it eventually loads even if offscreen)
    requestIdle(loadGlobe);

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      loadGlobe();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          loadGlobe();
          io.disconnect();
        }
      },
      { root: null, rootMargin: "200px 0px", threshold: [0, 0.25] }
    );

    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [GlobeCmp]);

  // Run the spin → zoom sequence once after Globe mounts
  useEffect(() => {
    if (!GlobeCmp || !isVisible || didAnimate.current === true) return;

    const t = setTimeout(() => {
      const g = globeRef.current;
      if (!g) return;

      // renderer tuning: cap pixel ratio; pick low-power on low-memory devices
      try {
        const r = g.renderer?.();
        if (r?.setPixelRatio) {
          const dpr = Math.min(window.devicePixelRatio || 1, pixelRatioCap);
          r.setPixelRatio(dpr);
        }
      } catch (e) {
        // no-op
      }

      // 1) initial POV
      g.pointOfView({ lat: point.lat, lng: point.lng, altitude: startAlt }, 600);

      // 2) brief spin (slower if PRM)
      const controls = g.controls?.();
      if (controls) {
        controls.autoRotate = !prefersReducedMotion;
        controls.autoRotateSpeed = prefersReducedMotion ? 0.3 : 0.9;
      }

      // 3) zoom & stop
      timers.current.push(
        setTimeout(() => {
          g.pointOfView(
            { lat: point.lat, lng: point.lng, altitude: endAlt },
            prefersReducedMotion ? zoomMs * 0.6 : zoomMs
          );
          if (controls) {
            timers.current.push(
              setTimeout(() => {
                controls.autoRotate = false;
              }, Math.min(zoomMs, 2000))
            );
          }
        }, spinMs)
      );

      didAnimate.current = true;
    }, 60);

    timers.current.push(t);
  }, [GlobeCmp, isVisible, point, spinMs, zoomMs, startAlt, endAlt, pixelRatioCap, prefersReducedMotion]);

  // Pause/resume on tab visibility
  useEffect(() => {
    const g = globeRef.current;
    if (!g) return;
    const controls = g.controls?.();

    const onVis = () => {
      if (document.hidden) {
        if (controls) controls.autoRotate = false;
      } else {
        // don’t auto-rotate again unless user wants it; keep it off
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [GlobeCmp]);

  // rAF-throttled mouse tracking for tooltip
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
        raf = 0;
      });
    };
    el.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      el.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // memo label data so props changes don't recreate arrays
  const labels = useMemo(() => [point], [point]);

  // rendererConfig tuned by device memory (less AA for low devices)
  const antialias = deviceMemory >= 4; // AA on mid/high devices
  const powerPreference = deviceMemory <= 2 ? "low-power" : "high-performance";

  return (
    <div
      ref={wrapRef}
      className="relative rounded-xl overflow-hidden"
      style={{ width, height }}
    >
      {/* Placeholder while offscreen or while vendor chunk is loading */}
      {!GlobeCmp && (
        <img
          src={placeholderSrc}
          alt="Earth"
          width={width}
          height={height}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      )}

      {/* Actual globe renders only after IO/idle + dynamic import */}
      {GlobeCmp && (
        <GlobeCmp
          ref={globeRef}
          width={width}
          height={height}
          backgroundColor="rgba(0,0,0,0)"
          rendererConfig={{
            antialias,
            alpha: true,
            powerPreference,
            // precision: "mediump"  // (three uses highp by default; mediump can further reduce cost if needed)
          }}
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-dark.jpg"
          bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
          atmosphereColor="#5AB6FF"
          atmosphereAltitude={0.18}
          labelsData={labels}
          labelLat={(d) => d.lat}
          labelLng={(d) => d.lng}
          labelText={(d) => d.city}
          labelColor={(d) => d.color}
          labelSize={() => 1.25}
          labelDotRadius={() => 0.95}
          labelAltitude={() => 0.015}
          onLabelHover={setHovered}
        />
      )}

      {/* Tooltip */}
      {hovered && (
        <div
          className="pointer-events-none absolute z-20 rounded-xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 text-white shadow-lg px-3 py-2"
          style={{
            transform: "translate(-50%, calc(-100% - 10px))",
            left: mouse.x,
            top: mouse.y,
          }}
        >
          <div className="text-xs font-semibold">{hovered.country}</div>
          <div className="text-[11px] opacity-90">
            {hovered.city}
            {hovered.city ? ", " : ""}
            {hovered.address}
          </div>
          {hovered.phone && (
            <div className="text-[11px] opacity-80">{hovered.phone}</div>
          )}
        </div>
      )}
    </div>
  );
}
