import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layout, MessageSquare, Rocket } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * Custom hook to detect if an element is in view
 */
function useIsVisible(ref: React.RefObject<Element>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.unobserve(el);
      }
    }, { threshold: 0.1 });

    observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

/**
 * Standard Rounded Rect for Canvas compatibility
 */
function drawRoundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

/**
 * Canvas-based Transform Section for Hamza Digital Studio
 */
export default function TransformSection() {
  const containerRef = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isVisible = useIsVisible(containerRef);
  const { theme } = useTheme();

  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let startTime = Date.now();

    // Data definitions
    const scatteredData = [
      { text: "Slack pings", desktopX: -350, desktopY: -100, mobileX: -100, mobileY: -220, opacity: 0.7 },
      { text: "Figma links", desktopX: -380, desktopY: 20, mobileX: 80, mobileY: -240, opacity: 0.8 },
      { text: "Asset folders", desktopX: -290, desktopY: 140, mobileX: -60, mobileY: -160, opacity: 0.6 },
      { text: "Email feedback", desktopX: -220, desktopY: -180, mobileX: 100, mobileY: -140, opacity: 0.7 },
      { text: "Zoom calls", desktopX: -150, desktopY: 100, mobileX: 0, mobileY: -190, opacity: 0.9 },
    ];

    const streamlinedData = [
      { text: "Live design previews", desktopY: -140, color: "#2ca2ab" }, // Teal
      { text: "Consolidated feedback", desktopY: -70, color: "#E1306C" },
      { text: "Brand asset library", desktopY: 0, color: "#28A745" },
      { text: "Interactive roadmaps", desktopY: 70, color: "#DC3545" },
      { text: "One-click approvals", desktopY: 140, color: "#007BFF" },
    ];

    const render = () => {
      const now = Date.now();
      const elapsed = (now - startTime) / 1000;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0) return;

      const isMobile = rect.width < 768;
      const isDark = theme === 'dark';

      // Theme Colors inside render to react to changes
      const colors = {
        bg: isDark ? '#0f172a' : '#ffffff', // Slate-900 : White
        cardBg: isDark ? '#1e293b' : '#ffffff', // Slate-800 : White
        text: isDark ? '#f8fafc' : '#0f172a',    // Slate-50 : Slate-900
        subText: isDark ? '#94a3b8' : '#475569', // Slate-400 : Slate-600
        line: isDark ? 'rgba(148, 163, 184, 0.4)' : 'rgba(148, 163, 184, 0.35)',
        cardStroke: isDark ? '#334155' : '#e2e8f0',
        hubStart: '#2ca2ab', // Teal Light
        hubEnd: '#1d7a82',   // Teal Dark
        pillBg: isDark ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.9)',
      };

      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const hubSize = isMobile ? 90 : 130;

      // 1. Draw Scattered Nodes (Top on Mobile, Left on Desktop)
      scatteredData.forEach((node, i) => {
        const floatY = Math.sin(elapsed + i) * 10;
        const floatX = Math.cos(elapsed * 0.8 + i) * 6;

        let nx, ny;
        if (isMobile) {
          nx = centerX + node.mobileX;
          ny = centerY + node.mobileY + floatY;
        } else {
          nx = centerX + node.desktopX + floatX;
          ny = centerY + node.desktopY + floatY;
        }

        // Line to Hub
        ctx.beginPath();
        ctx.setLineDash([6, 6]);
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = colors.line;
        ctx.moveTo(nx, ny);
        if (isMobile) {
          ctx.quadraticCurveTo(nx, centerY - hubSize / 2, centerX, centerY - 20);
        } else {
          ctx.quadraticCurveTo(centerX - hubSize / 2, ny, centerX - 20, centerY);
        }
        ctx.stroke();

        // Bubble
        ctx.setLineDash([]);
        ctx.fillStyle = colors.pillBg;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(0,0,0,0.03)";
        const bw = isMobile ? 85 : 110;
        const bh = isMobile ? 32 : 40;
        drawRoundedRect(ctx, nx - bw / 2, ny - bh / 2, bw, bh, bh / 2);
        ctx.fill();
        ctx.strokeStyle = colors.cardStroke;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = colors.subText;
        ctx.font = `bold ${isMobile ? 10 : 12}px Inter, sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(node.text, nx, ny + (isMobile ? 3 : 4));
      });

      // 2. Draw Streamlined Nodes (Bottom on Mobile, Right on Desktop)
      streamlinedData.forEach((node, i) => {
        const revealFactor = Math.min(1, Math.max(0, (elapsed - 0.4) * 1.5 - i * 0.15));

        let targetX, targetY;
        if (isMobile) {
          targetX = centerX - (rect.width * 0.4);
          targetY = centerY + (hubSize / 2) + 40 + (i * 45);
        } else {
          targetX = centerX + 180;
          targetY = centerY + node.desktopY;
        }

        if (revealFactor > 0) {
          ctx.beginPath();
          ctx.setLineDash([5, 5]);
          ctx.lineWidth = 2;
          ctx.strokeStyle = `rgba(44, 162, 171, ${revealFactor * 0.4})`; // Keep Teal for connecting lines

          if (isMobile) {
            ctx.moveTo(centerX, centerY + 20);
            ctx.quadraticCurveTo(centerX, targetY, targetX + 100, targetY);
          } else {
            ctx.moveTo(centerX + 20, centerY);
            ctx.quadraticCurveTo(centerX + 100, targetY, targetX, targetY);
          }
          ctx.stroke();

          ctx.save();
          ctx.globalAlpha = revealFactor;
          ctx.fillStyle = colors.pillBg;
          ctx.shadowBlur = 15;
          ctx.shadowColor = "rgba(0,0,0,0.04)";
          const cw = isMobile ? rect.width * 0.8 : 240;
          const ch = isMobile ? 36 : 40;
          const cx = isMobile ? centerX - cw / 2 : targetX;
          drawRoundedRect(ctx, cx, targetY - ch / 2, cw, ch, 10);
          ctx.fill();
          ctx.strokeStyle = colors.cardStroke;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Dot
          ctx.fillStyle = node.color;
          ctx.beginPath();
          ctx.arc(cx + 20, targetY, 4, 0, Math.PI * 2);
          ctx.fill();

          // Text
          ctx.fillStyle = colors.text;
          ctx.textAlign = "left";
          ctx.font = `bold ${isMobile ? 11 : 13}px Inter, sans-serif`;
          ctx.fillText(node.text, cx + 40, targetY + 4);
          ctx.restore();
        }
      });

      // 3. Central Hub
      ctx.shadowBlur = 30;
      ctx.shadowColor = "rgba(44, 162, 171, 0.35)"; // Teal Shadow
      const grad = ctx.createLinearGradient(centerX - hubSize / 2, centerY - hubSize / 2, centerX + hubSize / 2, centerY + hubSize / 2);
      grad.addColorStop(0, colors.hubStart);
      grad.addColorStop(1, colors.hubEnd);
      ctx.fillStyle = grad;
      drawRoundedRect(ctx, centerX - hubSize / 2, centerY - hubSize / 2, hubSize, hubSize, isMobile ? 24 : 40);
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.font = `bold ${isMobile ? 18 : 24}px serif`;
      ctx.fillText("HM", centerX, centerY - (isMobile ? 2 : 5));
      ctx.font = `bold ${isMobile ? 10 : 12}px Inter, sans-serif`;
      ctx.fillText("STUDIO", centerX, centerY + (isMobile ? 12 : 18));

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, theme]);

  return (
    <section ref={containerRef} className="py-12 md:py-24 overflow-hidden relative bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">

        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-[9px] font-black uppercase tracking-[0.2em] mb-6 border border-teal-100/50 dark:border-teal-800/50">
            <Sparkles className="w-3.5 h-3.5" />
            Workflow Transformation
          </div>

          <h2 className="text-3xl md:text-6xl font-serif text-slate-900 dark:text-white leading-[1.1] mb-6 max-w-4xl mx-auto tracking-tight">
            From scattered feedback to a <span className="italic text-[#2ca2ab]">seamless</span> launch experience
          </h2>

          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Hamza Digital Studio provides a transparent design environment. Stop digging through emails and start seeing your digital vision come to life.
          </p>
        </div>

        <div className={`relative w-full aspect-[2/3] sm:aspect-[4/3] md:aspect-[21/9] min-h-[600px] md:min-h-[500px] border border-slate-100 dark:border-slate-800 rounded-[2.5rem] bg-white dark:bg-slate-900/50 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.08)] dark:shadow-none overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <canvas ref={canvasRef} className="w-full h-full" />

          <div className="absolute top-6 left-6">
            <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.3em] text-slate-300 dark:text-slate-600">
              <div className="w-2 h-2 rounded-full border-2 border-slate-200 dark:border-slate-700 border-dashed animate-spin-slow" />
              Fragmented Sources
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-teal-50/20 dark:bg-teal-900/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-indigo-50/20 dark:bg-indigo-900/10 blur-[100px] rounded-full" />
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
}
