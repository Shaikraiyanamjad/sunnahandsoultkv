const SunnahConnection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative Element */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-px bg-accent" />
            <div className="w-3 h-3 rounded-full bg-accent mx-4 -mt-1" />
            <div className="w-24 h-px bg-accent" />
          </div>

          {/* Quote */}
          <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8 italic">
            "The Prophet ﷺ encouraged natural remedies and wholesome nourishment. 
            Sunnah & Soul brings these values into modern life with purity and care."
          </blockquote>

          {/* Decorative Element */}
          <div className="flex justify-center">
            <div className="w-24 h-px bg-accent" />
            <div className="w-3 h-3 rounded-full bg-accent mx-4 -mt-1" />
            <div className="w-24 h-px bg-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SunnahConnection;