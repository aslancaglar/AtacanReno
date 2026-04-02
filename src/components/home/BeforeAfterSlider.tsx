"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
  className?: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, alt, className = "" }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        e.preventDefault();
        updatePosition(e.clientX);
      }
    };
    const handleMouseUp = () => { isDragging.current = false; };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging.current) {
        e.preventDefault();
        updatePosition(e.touches[0].clientX);
      }
    };
    const handleTouchEnd = () => { isDragging.current = false; };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [updatePosition]);

  const handlePointerDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    if ("clientX" in e) {
      updatePosition(e.clientX);
    } else {
      updatePosition(e.touches[0].clientX);
    }
  }, [updatePosition]);

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden ${className}`}
    >
      {/* After image (full) */}
      <img
        src={afterImage}
        alt={`${alt} - Après`}
        className="w-full h-full object-cover pointer-events-none"
        draggable={false}
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={`${alt} - Avant`}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10 pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary shadow-lg flex items-center justify-center pointer-events-auto cursor-col-resize"
          onMouseDown={handlePointerDown}
          onTouchStart={handlePointerDown}
        >
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
            <path d="M13 4L17 10L13 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 4L3 10L7 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 bg-foreground/70 text-white text-xs font-semibold px-2 py-1 rounded z-10 pointer-events-none">
        Avant
      </div>
      <div className="absolute top-3 right-3 bg-primary/90 text-white text-xs font-semibold px-2 py-1 rounded z-10 pointer-events-none">
        Après
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
