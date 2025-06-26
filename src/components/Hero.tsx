import background from "../assets/gb.jpg";
// Optional: Replace with your animation

const Hero = () => {
  return (
    <section
      id="Home"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-16 md:py-24"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-300 to-cyan-400 leading-tight drop-shadow-lg">
            SIGN SPELL
          </h1>

          <p className="text-2xl text-white font-semibold tracking-wide">
            Voicing the Unspoken
          </p>

          <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
            <strong>Sign Spell</strong> is an AI-powered platform that converts speech into Indian Sign Language (ISL) using lifelike 3D avatars — promoting inclusive communication across public and government platforms.
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <a
              href="https://saisurya7860.github.io/SignSpell/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              Get Started
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
