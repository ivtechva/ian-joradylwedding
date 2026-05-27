import { useState } from "react";
import envelopeBg from "@/assets/envelope-invite.jpg";

interface EnvelopeIntroProps {
  onOpen: () => void;
}

const EnvelopeIntro = ({ onOpen }: EnvelopeIntroProps) => {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, 1400);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-opacity duration-700 ${
        opening ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--sage-light)) 50%, hsl(var(--accent) / 0.25) 100%)",
      }}
    >
      <div
        className={`relative w-full max-w-2xl transition-all duration-1000 ease-out ${
          opening ? "scale-110 -translate-y-10 opacity-0" : "scale-100"
        }`}
      >
        {/* Envelope card */}
        <div className="relative rounded-lg overflow-hidden shadow-elevated">
          <img
            src={envelopeBg}
            alt="Wedding invitation envelope"
            className="w-full h-auto block"
          />

          {/* Overlay text */}
          <div className="absolute inset-0 flex flex-col items-center justify-between py-[10%] px-6 text-center pointer-events-none">
            <div>
              <p className="font-script text-4xl md:text-6xl text-primary/90 drop-shadow-sm">
                You are
              </p>
              <p className="font-serif tracking-[0.3em] text-3xl md:text-5xl text-primary mt-2 drop-shadow-sm">
                INVITED!
              </p>
            </div>

            <button
              onClick={handleOpen}
              className="pointer-events-auto group relative animate-gentle-float"
              aria-label="Open invitation"
            >
              <span className="absolute inset-0 rounded-full bg-accent/40 blur-xl group-hover:bg-accent/60 transition-all" />
              <span className="relative block w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-warm-white/40 bg-accent text-warm-white font-serif text-xs md:text-sm shadow-elevated hover:scale-110 transition-transform">
                <span className="absolute inset-0 flex items-center justify-center tracking-widest uppercase">
                  Open
                </span>
              </span>
            </button>

            <p className="font-serif italic text-base md:text-lg text-primary/80">
              Click the seal to see details
            </p>
          </div>
        </div>

        <p className="text-center mt-6 font-script text-2xl text-primary/80">
          Ian & Joradyl
        </p>
      </div>
    </div>
  );
};

export default EnvelopeIntro;