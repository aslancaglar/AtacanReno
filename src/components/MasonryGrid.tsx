"use client";

import React, { useState, useEffect, useMemo } from "react";

interface MasonryGridProps {
  /** Number of columns at each breakpoint */
  columns?: { sm?: number; md?: number; lg?: number };
  /** Gap between items in px */
  gap?: number;
  children: React.ReactNode;
}

export default function MasonryGrid({
  columns = { sm: 1, md: 2, lg: 3 },
  gap = 24,
  children,
}: MasonryGridProps) {
  const [colCount, setColCount] = useState<number>(columns.lg ?? 3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setColCount(columns.sm ?? 1);
      } else if (width < 1024) {
        setColCount(columns.md ?? 2);
      } else {
        setColCount(columns.lg ?? 3);
      }
    };
    
    handleResize(); // set initial count based on client width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [columns]);

  const items = React.Children.toArray(children);

  const cols = useMemo(() => {
    const colsArr: React.ReactNode[][] = Array.from({ length: colCount }, () => []);
    items.forEach((child, i) => {
      colsArr[i % colCount].push(child);
    });
    return colsArr;
  }, [items, colCount]);

  const gapPx = `${gap}px`;

  return (
    <div
      className="grid items-start transition-all duration-300"
      style={{
        gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))`,
        gap: gapPx,
      }}
    >
      {cols.map((col, colIdx) => (
        <div key={colIdx} className="flex flex-col" style={{ gap: gapPx }}>
          {col}
        </div>
      ))}
    </div>
  );
}
