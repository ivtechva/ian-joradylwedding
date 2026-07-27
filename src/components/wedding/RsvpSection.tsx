import { QRCodeSVG } from "qrcode.react";
import floralDivider from "@/assets/floral-divider.png";

const RSVP_URL = "https://forms.gle/6Vvj7myD5iPvQAZy5";

const openRsvp = () => {
  try {
    (window.top || window).open(RSVP_URL, "_blank", "noopener,noreferrer");
  } catch {
    window.open(RSVP_URL, "_blank", "noopener,noreferrer");
  }
};

const RsvpSection = () => (
  <section className="py-20 px-4 bg-section-cream" id="rsvp">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">RSVP</h2>
      <img src={floralDivider} alt="Decorative divider" className="w-40 mx-auto mb-8 opacity-70" />
      <p className="text-muted-foreground font-serif text-lg mb-10">
        Kindly let us know if you can join us — scan the code or tap the button below.
      </p>

      <div className="card-garden rounded-2xl p-8 md:p-12 inline-block">
        <div className="bg-warm-white p-5 rounded-xl inline-block shadow-soft">
          <QRCodeSVG value={RSVP_URL} size={200} level="M" bgColor="transparent" fgColor="hsl(190 60% 16%)" />
        </div>
        <p className="text-muted-foreground text-sm mt-6 mb-6">Scan with your phone camera</p>
        <a
          href={RSVP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            openRsvp();
          }}
          className="inline-block bg-primary text-primary-foreground font-sans tracking-wide px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Open RSVP Form
        </a>
      </div>
    </div>
  </section>
);

export default RsvpSection;

