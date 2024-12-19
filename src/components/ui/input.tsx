"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 250;
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    
    return (
      <div 
        className="relative group"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <motion.div
          style={{
            background: useMotionTemplate`
              radial-gradient(
                ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
                rgba(56, 189, 248, 0.4),
                rgba(56, 189, 248, 0) 80%
              )
            `,
          }}
          className="absolute -inset-px rounded-lg transition duration-300 group-hover:opacity-100 opacity-0 blur-sm"
        />
        <motion.div
          style={{
            background: useMotionTemplate`
              radial-gradient(
                ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
                rgba(56, 189, 248, 0.15),
                transparent 80%
              )
            `,
          }}
          className="absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition duration-300"
        />
        <input
          type={type}
          className={cn(
            `relative w-full border border-neutral-800 bg-zinc-900/80 text-white rounded-lg px-4 py-2 text-sm
            placeholder:text-neutral-400
            focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50
            disabled:cursor-not-allowed disabled:opacity-50
            transition duration-200
            `,
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input }; 