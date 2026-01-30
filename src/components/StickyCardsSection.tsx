import { useTheme } from "@/contexts/ThemeContext";

const StickyCardsSection = () => {
  const { theme } = useTheme();

  const cards = [
    {
      imageLight: "/secure-files-light.png",
      imageDark: "/secure-files-dark.png",
      title: "Secure files sharing",
      description: "Upload contracts, proposals, deliverables, and legal docs with controlled permissions and view history"
    },
    {
      imageLight: "/realtime-updates-light.png",
      imageDark: "/realtime-updates-dark.png",
      title: "Real-time project updates",
      description: "Every change — new task, file, message, approval — appears instantly. No refresh needed"
    },
    {
      imageLight: "/smart-notifications-light.png",
      imageDark: "/smart-notifications-dark.png",
      title: "Smart notifications",
      description: "Clients get meaningful updates — project progress, new files, tasks ready for review — without noise"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-background">
      <div className="section-container">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="sticky rounded-3xl"
              style={{
                top: `${80 + index * 40}px`,
              }}
            >
              <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="aspect-video md:aspect-[2/1] bg-gradient-to-br from-primary/5 to-primary/10">
                  <img
                    src={theme === 'dark' ? card.imageDark : card.imageLight}
                    alt={card.title}
                    className="w-full h-full object-cover object-center transition-opacity duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 lg:p-12">
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-4">
                    {card.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickyCardsSection;
