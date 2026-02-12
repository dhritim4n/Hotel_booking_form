export default function About() {
  return (
    <section id="about" className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Editorial Image Grid */}
          <div className="relative group">
            {/* Main large image */}
            <div className="rounded-sm overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000" 
                alt="Hotel Lobby" 
                className="w-full h-125 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col">
            <span className="text-(--secondary-color) font-bold tracking-[0.3em] uppercase text-sm mb-4">
              Our Heritage
            </span>
            
            <h2 className="text-4xl md:text-5xl font-serif text-(--primary-color) leading-tight mb-8">
              Defining Elegance <br /> 
              <span className="italic text-(--text-muted) font-light">Since 1924</span>
            </h2>

            <div className="space-y-6 text-(--text-main) leading-relaxed text-lg">
              <p>
                Nestled in the vibrant heart of the city, <span className="font-semibold text-(--primary-color) text-nowrap">The Grand Horizon</span> began as a sanctuary for travelers seeking more than just a place to rest. Our founders believed that hospitality is an art form, practiced with precision and delivered with heart.
              </p>
              <p>
                Over the past century, we have hosted dignitaries, artists, and families alike, evolving with the times while maintaining the timeless sophistication that defines us. Every corner of our estate tells a story of refined luxury and unwavering commitment to your comfort.
              </p>
            </div>

            {/* Feature Icons/Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-gray-100 pt-10">
              <div>
                <h4 className="text-(--secondary-color) font-serif text-3xl mb-1">100+</h4>
                <p className="text-xs uppercase tracking-widest text-(--text-muted) font-bold">Luxury Suites</p>
              </div>
              <div>
                <h4 className="text-(--secondary-color) font-serif text-3xl mb-1">5★</h4>
                <p className="text-xs uppercase tracking-widest text-(--text-muted) font-bold">Michelin Dining</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}