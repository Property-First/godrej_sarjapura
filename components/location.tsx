import { MapPin, Train, Plane, School, Building2, ShoppingBag } from "lucide-react"

const landmarks = [
  { icon: Train, title: "Kalena Agrahara Metro", distance: "10 mins" },
  { icon: ShoppingBag, title: "Royal Meenakshi Mall", distance: "15 mins" },
  { icon: School, title: "IIM Bangalore", distance: "15 mins" },
  { icon: Building2, title: "Electronic City", distance: "20 mins" },
]
export function Location() {
  return (
    <section id="location" className="py-4 lg:py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Location
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Seamlessly connected to prime landmarks, ensuring convenience and accessibility for modern living.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62140.52891582029!2d77.5392831!3d13.0977399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19b9b2b3e0d1%3A0x8f63a0e8f1b89d9b!2sYelahanka%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Off Bannerghatta Main Road, South Bangalore
              </h3>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
  Strategically located in South Bangalore, this premium development offers seamless connectivity to key educational institutions, IT hubs, metro access, and lifestyle destinations. Enjoy the perfect balance of urban convenience and serene green living.
</p>
            <div className="grid grid-cols-2 gap-4">
              {landmarks.map((landmark, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <landmark.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{landmark.title}</p>
                    <p className="text-muted-foreground text-xs">{landmark.distance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
