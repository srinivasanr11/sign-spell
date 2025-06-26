import pilot from "../assets/pilot.png";
import { Sparkles, Bot, Accessibility, Languages } from "lucide-react"; // Lucide icons

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-16 px-8 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Avatar Image */}
          <img
            src={pilot}
            alt="Animated avatar illustrating sign language communication"
            className="w-[280px] md:w-[360px] object-contain rounded-xl shadow-xl"
          />

          {/* Feature Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-center md:text-left mb-6">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Why Choose{" "}
              </span>
              SignSpell?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 text-center md:text-left">
              SignSpell is not just a tool - it’s a movement towards accessible, inclusive communication. Here’s what makes it powerful:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <Bot className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">AI-Powered Real-Time Translation</h3>
                  <p className="text-muted-foreground">
                    Converts live speech into Indian Sign Language (ISL) using animated avatars.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Built with robust models </h3>
                  <p className="text-muted-foreground">
                    Google AI Studio, Sentence Transformer, LLMs, and more to ensure high accuracy and performance.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <Accessibility className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Avatar-Based Visual Delivery</h3>
                  <p className="text-muted-foreground">
                    Uses 2D and 3D avatars for sign gestures Fallback to fingerspelling when custom sign isn’t available
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4">
                <Languages className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Budget-Friendly Accessibility</h3>
                  <p className="text-muted-foreground">
                    Reduces interpreter costs Open-source readiness for public institutions
                  </p>
                </div>
              </div>
            </div>

            {/* Optional CTA */}
            {/* <button className="mt-10 px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition-colors">
              Try It Now
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};
