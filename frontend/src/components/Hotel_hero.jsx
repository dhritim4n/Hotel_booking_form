export default function Hotel_hero() {
  return (
    <section className="relative w-full h-screen min-h-150 flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Hotel Interior" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay: This is crucial for text contrast */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Subtle Brand Note */}
        <p className="text-(--secondary-color) tracking-[0.3em] uppercase text-sm font-semibold mb-6">
          The Grand Horizon
        </p>

        {/* Minimalist Heading */}
        <h1 className="text-4xl md:text-7xl font-serif text-white leading-tight mb-8">
          Refined stay, <br /> 
          uncomplicated luxury.
        </h1>

        {/* Short, Direct Subtext */}
        <p className="text-gray-200 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Book your next escape in seconds. Experience world-class 
          hospitality in the heart of the city.
        </p>

        {/* Single Focused Button */}
        <button className="bg-(--secondary-color) text-(--primary-color) hover:bg-white px-12 py-4 rounded-full font-bold transition-all duration-300 shadow-xl hover:scale-105">
          Book Your Stay
        </button>
      </div>
    </section>
  );
}