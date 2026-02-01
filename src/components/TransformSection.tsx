import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Layout, MessageSquare, Rocket } from 'lucide-react';

/**
 * Canvas-based Transform Section for Hamza Digital Studio
 * Adapted to website's teal color scheme
 */
function TransformSection() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let startTime = Date.now();

    // Contextual nodes for a Web Design Agency
    const scatteredNodes = [
      { text: "Slack pings", x: 140, y: 120, offset: 0, opacity: 0.7 },
      { text: "Figma links", x: 100, y: 240, offset: 2, opacity: 0.8 },
      { text: "Asset folders", x: 200, y: 340, offset: 4, opacity: 0.6 },
      { text: "Email feedback", x: 280, y: 80, offset: 1, opacity: 0.7 },
      { text: "Zoom calls", x: 300, y: 260, offset: 3, opacity: 0.9 },
    ];

    const streamlinedNodes = [
      { text: "Live design previews", y: 100, color: "#2ca2ab" },
      { text: "Consolidated feedback", y: 170, color: "#E1306C" },
      { text: "Brand asset library", y: 240, color: "#28A745" },
      { text: "Interactive roadmaps", y: 310, color: "#DC3545" },
      { text: "One-click approvals", y: 380, color: "#007BFF" },
    ];

    const render = () => {
      const now = Date.now();
      const elapsed = (now - startTime) / 1000;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const hubSize = 130;
      const hubX = centerX - hubSize / 2;
      const hubY = centerY - hubSize / 2;

      // 1. Draw Scattered Side Connections (LEFT)
      scatteredNodes.forEach((node) => {
        const floatY = Math.sin(elapsed + node.offset) * 12;
        const floatX = Math.cos(elapsed * 0.8 + node.offset) * 8;
        const nx = node.x + floatX;
        const ny = node.y + floatY;

        ctx.beginPath();
        ctx.setLineDash([8, 6]);
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = `rgba(100, 116, 139, ${node.opacity * 0.5})`;
        ctx.moveTo(nx + 40, ny);
        ctx.quadraticCurveTo(centerX - 120, ny, centerX - 40, centerY);
        ctx.stroke();
      });

      // 2. Draw Streamlined Side Connections (RIGHT)
      streamlinedNodes.forEach((node, i) => {
        const targetX = centerX + 180;
        const targetY = node.y;
        const revealFactor = Math.min(1, Math.max(0, (elapsed - 0.4) * 1.5 - i * 0.2));

        if (revealFactor > 0) {
          ctx.beginPath();
          ctx.setLineDash([7, 5]);
          ctx.lineWidth = 2.5;
          ctx.strokeStyle = `rgba(44, 162, 171, ${revealFactor * 0.6})`;
          ctx.moveTo(centerX + 40, centerY);
          ctx.quadraticCurveTo(centerX + 100, targetY, targetX, targetY);
          ctx.stroke();
        }
      });

      // 3. Draw Left Bubbles
      scatteredNodes.forEach((node) => {
        const floatY = Math.sin(elapsed + node.offset) * 12;
        const floatX = Math.cos(elapsed * 0.8 + node.offset) * 8;
        const nx = node.x + floatX;
        const ny = node.y + floatY;

        ctx.setLineDash([]);
        ctx.fillStyle = `rgba(255, 255, 255, ${node.opacity})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(0,0,0,0.05)";
        ctx.beginPath();
        ctx.roundRect(nx - 55, ny - 20, 110, 40, 20);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.strokeStyle = "rgba(203, 213, 225, 0.9)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = "#334155";
        ctx.font = "bold 13px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(node.text, nx, ny + 5);
      });

      // 4. Draw Center Hub (Hamza Digital Studio - Teal)
      ctx.shadowBlur = 40;
      ctx.shadowColor = "rgba(44, 162, 171, 0.4)";
      const grad = ctx.createLinearGradient(hubX, hubY, hubX + hubSize, hubY + hubSize);
      grad.addColorStop(0, "#3cb3bd");
      grad.addColorStop(1, "#2ca2ab");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(hubX, hubY, hubSize, hubSize, 40);
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.font = "bold 22px Playfair Display, serif";
      ctx.fillText("HM", centerX, centerY - 5);
      ctx.font = "bold 14px Inter, sans-serif";
      ctx.fillText("STUDIO", centerX, centerY + 18);

      // 5. Draw Right Capsules
      streamlinedNodes.forEach((node, i) => {
        const targetX = centerX + 180;
        const targetY = node.y;
        const revealFactor = Math.min(1, Math.max(0, (elapsed - 0.4) * 1.5 - i * 0.2));

        if (revealFactor > 0) {
          ctx.save();
          ctx.globalAlpha = revealFactor;
          ctx.fillStyle = "white";
          ctx.shadowBlur = 12;
          ctx.shadowColor = "rgba(0,0,0,0.06)";
          ctx.beginPath();
          ctx.roundRect(targetX, targetY - 20, 250, 40, 12);
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.strokeStyle = "#F1F5F9";
          ctx.stroke();

          ctx.fillStyle = node.color;
          ctx.beginPath();
          ctx.arc(targetX + 25, targetY, 5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "#0f172a";
          ctx.textAlign = "left";
          ctx.font = "700 14px Inter, sans-serif";
          ctx.fillText(node.text, targetX + 48, targetY + 5);
          ctx.restore();
        }
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView]);

  return (
    <section ref={containerRef} className="py-16 md:py-24 lg:py-32 overflow-hidden relative bg-background">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="pill-badge mb-6 inline-flex"
          >
            <Sparkles className="w-3.5 h-3.5" />
            The Studio Workflow
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground max-w-5xl mx-auto leading-tight mb-6 md:mb-8"
          >
            From scattered feedback to a <span className="italic text-primary">seamless</span> launch experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Hamza Digital Studio provides a transparent design environment. Stop digging through emails and start seeing your digital vision come to life.
          </motion.p>
        </div>

        {/* The Interaction Canvas */}
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] min-h-[450px] md:max-h-[650px] border border-border rounded-3xl md:rounded-[3rem] bg-card shadow-soft overflow-hidden mb-12 md:mb-20">
          <canvas ref={canvasRef} className="w-full h-full" />

          <div className="absolute top-6 md:top-10 left-6 md:left-10">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/50">
              <div className="w-3 h-3 rounded-full border-2 border-muted-foreground/30 border-dashed animate-spin-slow" />
              Fragmented Sources
            </div>
          </div>

          <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-8 md:gap-12 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-muted border border-border" />
              Old Process
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_15px_rgba(44,162,171,0.6)]" />
              HM Studio
            </div>
          </div>
        </div>

        {/* Service Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: Layout, title: "Live Previews", desc: "Interact with your website designs in real-time. Review prototypes on desktop and mobile instantly.", color: "primary" },
            { icon: MessageSquare, title: "Design Feedback", desc: "No more long email chains. Leave feedback directly on the design frames for faster revisions.", color: "secondary" },
            { icon: Rocket, title: "Launch Roadmap", desc: "Track every step from wireframes to development. Know exactly when your site will go live.", color: "accent" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * idx, duration: 0.8 }}
              className="group p-8 md:p-10 bg-card border border-border rounded-2xl md:rounded-3xl hover:border-primary/30 hover:shadow-lg transition-all duration-500"
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 md:mb-8 transition-transform group-hover:scale-110 duration-500 ${item.color === 'primary' ? 'bg-primary/10 text-primary' :
                item.color === 'secondary' ? 'bg-secondary/10 text-secondary-foreground' : 'bg-accent/10 text-accent-foreground'
                }`}>
                <item.icon className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-5">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/5 blur-[150px] rounded-full" />
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default TransformSection;
