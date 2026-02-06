import { MapPin, Car, Bus, Lightbulb, ExternalLink, AlertTriangle } from "lucide-react";
import floralDivider from "@/assets/floral-divider.png";

const LocationGuide = () => {
  const locations = [
    {
      name: "The Transfiguration of Christ Parish",
      type: "Ceremony Venue",
      address: "M.L. Quezon Street Extension, Brgy. San Roque, Antipolo City",
      mapUrl: "https://maps.app.goo.gl/ZFjaGYNU8EGMYcfQ6",
      driving: {
        routes: "Via Ortigas Ave Ext. or Marcos Highway/Sumulong Highway.",
        parking: "The church has ample gated parking within the compound.",
        note: "It is best to arrive 30 minutes before the mass as the gated area can fill up quickly during peak wedding season. A PWD-friendly ramp is available from the parking area to the main entrance.",
      },
      commute: {
        dropOff: "Alight at Robinsons Antipolo or Shopwise.",
        lastLeg: 'Take a tricycle and tell the driver: "Transfiguration Church, Mission Hills."',
      },
    },
    {
      name: "Flor's Garden",
      type: "Reception Venue",
      address: "Sitio Tanza 2, Brgy. San Jose, Antipolo City",
      mapUrl: "https://maps.app.goo.gl/WC53NqumGTBmFxEU7",
      driving: {
        routes: "Follow Marcos Highway past Boso-Boso Highland Resort. Turn RIGHT at Tayrosa Trading Hardware (Km 35).",
        parking: "There is a dedicated parking area inside the 5-hectare estate for guests.",
        note: "The venue is in a secluded, nature-heavy area. Ensure your vehicle is in good condition for the uphill drive. Pointed heels are not recommended due to the garden terrain.",
      },
      commute: {
        dropOff: "Alight at the Prayer Mountain corner (Tayrosa Hardware) along Marcos Highway.",
        lastLeg: "Take a tricycle from the highway corner to Flor's Garden. Note: It is difficult to get a Grab/Jeep from the venue at night; private transport is highly recommended.",
      },
    },
  ];

  const quickTips = [
    {
      icon: MapPin,
      text: 'Search for "Transfiguration of Christ Parish" and "Flor\'s Garden Antipolo" on Waze or Google Maps.',
    },
    {
      icon: AlertTriangle,
      text: "Please allow 2 hours for travel from Metro Manila.",
    },
    {
      icon: Lightbulb,
      text: "We recommend bringing insect repellent for the garden reception.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-section-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            How to Get There
          </h2>
          <img
            src={floralDivider}
            alt="Decorative divider"
            className="w-40 mx-auto mb-4 opacity-70"
          />
          <p className="text-muted-foreground font-serif text-lg">
            📍 Event Location Guide
          </p>
        </div>

        <div className="space-y-8">
          {locations.map((location) => (
            <div
              key={location.name}
              className="card-garden rounded-2xl p-6 md:p-8"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-sage-light/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-primary font-sans font-medium uppercase tracking-wide">
                    {location.type}
                  </span>
                  <h3 className="font-serif text-xl text-foreground">
                    {location.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {location.address}
                  </p>
                </div>
              </div>

              <div className="ml-0 md:ml-16 space-y-5">
                {/* Private Vehicle */}
                <div className="bg-sage-light/20 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Car className="w-5 h-5 text-primary" />
                    <h4 className="font-serif text-foreground font-semibold">
                      🚗 Private Vehicle & Parking
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <span className="font-medium text-foreground">Routes:</span>{" "}
                      {location.driving.routes}
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Parking:</span>{" "}
                      {location.driving.parking}
                    </li>
                    <li className="bg-gold/10 rounded-lg p-3 border border-gold/20">
                      <span className="font-medium text-foreground">📌 Note:</span>{" "}
                      {location.driving.note}
                    </li>
                  </ul>
                </div>

                {/* Commute */}
                <div className="bg-sage-light/20 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Bus className="w-5 h-5 text-primary" />
                    <h4 className="font-serif text-foreground font-semibold">
                      🚌 Commute
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <span className="font-medium text-foreground">Drop-off:</span>{" "}
                      {location.commute.dropOff}
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Last Leg:</span>{" "}
                      {location.commute.lastLeg}
                    </li>
                  </ul>
                </div>

                {/* Map Button */}
                <button
                  onClick={() => {
                    const w = window.top || window;
                    w.open(location.mapUrl, '_blank', 'noopener,noreferrer');
                  }}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium px-5 py-2 rounded-full transition-all duration-300 text-sm tracking-wide"
                >
                  View on Google Maps
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Quick Tips */}
          <div className="card-garden rounded-2xl p-6 md:p-8">
            <h3 className="font-serif text-xl text-foreground mb-5 text-center">
              💡 Quick Tips for Guests
            </h3>
            <div className="space-y-4">
              {quickTips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-sage-light/20 rounded-lg p-4"
                >
                  <tip.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationGuide;
