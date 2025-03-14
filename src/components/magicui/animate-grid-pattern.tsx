'use client';

import { motion } from 'motion/react';
import {
  ComponentPropsWithoutRef,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import { cn } from '@/lib/utils';

export interface AnimatedGridPatternProps
  extends ComponentPropsWithoutRef<'svg'> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: any;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState(() => generateSquares(numSquares));

  function getPos() {
    return [];
  }

  // Adjust the generateSquares function to return objects with an id, x, and y
  function generateSquares(count: number) {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: [
        Math.floor((Math.random() * dimensions.width) / width),
        Math.floor((Math.random() * dimensions.height) / height),
      ],
    }));
  }

  // Function to update a single square's position
  const updateSquarePosition = (id: number) => {
    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === id
          ? {
              ...sq,
              pos: [
                Math.floor((Math.random() * dimensions.width) / width),
                Math.floor((Math.random() * dimensions.height) / height),
              ],
            }
          : sq,
      ),
    );
  };

  // Update squares to animate in
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions, numSquares]);

  // Resize observer to update container dimensions
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30',
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [x, y], id }, index) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: 'reverse',
            }}
            onAnimationComplete={() => updateSquarePosition(id)}
            key={`${x}-${y}-${index}`}
            width={width - 1}
            height={height - 1}
            x={x * width + 1}
            y={y * height + 1}
            fill="currentColor"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
}

// 'use client';
//
// import { motion } from 'motion/react';
// import {
//   ComponentPropsWithoutRef,
//   useCallback,
//   useEffect,
//   useId,
//   useRef,
//   useState,
// } from 'react';
//
// import { cn } from '@/lib/utils';
//
// export interface AnimatedGridPatternProps
//   extends ComponentPropsWithoutRef<'svg'> {
//   width?: number;
//   height?: number;
//   x?: number;
//   y?: number;
//   strokeDasharray?: any;
//   numSquares?: number;
//   maxOpacity?: number;
//   duration?: number;
//   repeatDelay?: number;
// }
//
// export function AnimatedGridPattern({
//   width = 40,
//   height = 40,
//   x = -1,
//   y = -1,
//   strokeDasharray = 0,
//   numSquares = 50,
//   className,
//   maxOpacity = 0.5,
//   duration = 4,
//   repeatDelay = 0.5,
//   ...props
// }: AnimatedGridPatternProps) {
//   const id = useId();
//   const containerRef = useRef(null);
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//   const [squares, setSquares] = useState(() => generateSquares(numSquares));
//
//   // Adjust the generateSquares function to return objects with an id, x, and y
//   const generateSquares = useCallback(
//     (count: number) => {
//       return Array.from({ length: count }).map((x, i) => ({
//         id: i,
//         pos: [
//           Math.floor((Math.random() * dimensions.width) / width),
//           Math.floor((Math.random() * dimensions.height) / height),
//         ],
//       }));
//     },
//     [dimensions.width,dimensions.height, width, height],
//   );
//
//   // Function to update a single square's position
//   const updateSquarePosition = (id: number) => {
//     setSquares((currentSquares) =>
//       currentSquares.map((sq) =>
//         sq.id === id
//           ? {
//               ...sq,
//               pos: [
//                 Math.floor((Math.random() * dimensions.width) / width),
//                 Math.floor((Math.random() * dimensions.height) / height),
//               ],
//             }
//           : sq,
//       ),
//     );
//   };
//
//   // Update squares to animate in
//   useEffect(() => {
//     if (dimensions.width && dimensions.height) {
//       setSquares(generateSquares(numSquares));
//     }
//   }, [dimensions, numSquares, generateSquares]);
//
//   // Resize observer to update container dimensions
//   useEffect(() => {
//     const resizeObserver = new ResizeObserver((entries) => {
//       for (const entry of entries) {
//         setDimensions({
//           width: entry.contentRect.width,
//           height: entry.contentRect.height,
//         });
//       }
//     });
//
//     if (containerRef.current) {
//       resizeObserver.observe(containerRef.current);
//     }
//
//     return () => {
//       if (containerRef.current) {
//         resizeObserver.unobserve(containerRef.current);
//       }
//     };
//   }, [containerRef]);
//
//   return (
//     <svg
//       ref={containerRef}
//       aria-hidden="true"
//       className={cn(
//         '] fill-g-900/30 pointer-events-none absolute inset-0 h-full w-full stroke-gray-400/30',
//         className,
//       )}
//       {...props}
//     >
//       <defs>
//         <motion.pattern
//           id={id}
//           width={width}
//           height={height}
//           patternUnits="userSpaceOnUse"
//           x={x}
//           y={y}
//         >
//           <motion.path
//             animate={{ opacity: [0.4, 1, 0.4] }}
//             transition={{
//               repeat: Infinity,
//               duration: 2,
//             }}
//             d={`M.5 ${height}V.5H${width}`}
//             fill="none"
//             strokeDasharray={strokeDasharray}
//           />
//         </motion.pattern>
//       </defs>
//       <rect width="100%" height="100%" fill={`url(#${id})`} />
//       <svg x={x} y={y} className="overflow-visible">
//         {squares.map(({ pos: [x, y], id }, index) => (
//           <motion.rect
//             initial={{ opacity: 0 }}
//             animate={{ opacity: maxOpacity }}
//             transition={{
//               duration,
//               repeat: 1,
//               delay: index * 0.1,
//               repeatType: 'reverse',
//             }}
//             onAnimationComplete={() => updateSquarePosition(id)}
//             key={`${x}-${y}-${index}`}
//             width={width - 1}
//             height={height - 1}
//             x={x * width + 1}
//             y={y * height + 1}
//             fill="currentColor"
//             strokeWidth="0"
//           />
//         ))}
//       </svg>
//     </svg>
//   );
// }
