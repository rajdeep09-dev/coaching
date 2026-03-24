"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({
  children,
  className = "",
  delay = 0,
  as: Component = "span",
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = children.split(" ");

  return (
    <Component ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", rotateX: -90 }}
            animate={
              isInView
                ? {
                    y: "0%",
                    rotateX: 0,
                    transition: {
                      duration: 0.8,
                      delay: delay + i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }
                : {}
            }
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
