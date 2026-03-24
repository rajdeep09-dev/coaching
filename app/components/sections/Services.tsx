"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible";
import { TextReveal } from "../animations/TextReveal";
import { Target, Users, TrendingUp, Sparkles } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Executive Coaching",
    description:
      "One-on-one premium coaching for C-suite executives and business leaders seeking breakthrough performance.",
    price: "$2,500",
    period: "/month",
  },
  {
    icon: Users,
    title: "Team Transformation",
    description:
      "Transform your organization's culture and performance with our intensive team coaching programs.",
    price: "$10,000",
    period: "/program",
  },
  {
    icon: TrendingUp,
    title: "Growth Accelerator",
    description:
      "Rapid scaling strategies for entrepreneurs ready to 10x their business in record time.",
    price: "$5,000",
    period: "/month",
  },
  {
    icon: Sparkles,
    title: "Elite Mastermind",
    description:
      "Join an exclusive group of high-achievers for peer learning and accountability.",
    price: "$1,000",
    period: "/month",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      className="relative"
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 h-full"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        data-cursor-hover
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6">
            <Icon className="w-7 h-7 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
          <p className="text-white/60 mb-8 leading-relaxed">
            {service.description}
          </p>

          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-amber-500">
              {service.price}
            </span>
            <span className="text-white/40">{service.period}</span>
          </div>

          <motion.button
            className="mt-6 w-full py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <FadeInWhenVisible>
            <span className="text-amber-500 text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Programs
            </span>
          </FadeInWhenVisible>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <TextReveal>Coaching Designed For</TextReveal>
            <TextReveal delay={0.1} className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Elite Performance
            </TextReveal>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
