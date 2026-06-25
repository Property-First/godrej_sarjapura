import { Building, MapPin, Trees, Shield } from "lucide-react"

const features = [
  {
    icon: Building,
    title: "2000+",
    description: "Premium Residences"
  },
  {
    icon: Trees,
    title: "36 Acres",
    description: "Low-Density Development"
  },
  {
    icon: MapPin,
    title: "10 Min",
    description: "Metro Connectivity"
  },
  {
    icon: Shield,
    title: "100+",
    description: "World-Class Amenities"
  }
]

export function Overview() {
  return (
    <section id="overview" className="py-4 lg:py-8 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Top Content */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Low-Density Luxury Living
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance max-w-4xl mx-auto">
            A Rare Blend of Nature, Space & Luxury in South Bangalore
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
            Spread across a massive 36-acre land parcel, Godrej Bannerghatta is a thoughtfully designed low-density residential community offering unmatched privacy, greenery, and premium living. With only ~55 units per acre, it delivers a peaceful lifestyle rarely found in Bangalore.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 lg:p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Project Overview */}
        <div className="mt-16 lg:mt-24">
          <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm text-center">
            The Luxury of Space
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Project Overview
          </h3>

          <div className="bg-card border border-border rounded-lg p-8 lg:p-12">
            <p className="text-muted-foreground leading-relaxed text-lg text-center max-w-4xl mx-auto">
              Godrej Bannerghatta is a landmark luxury development in South Bangalore featuring 16 high-rise towers with 3B + G + 30/32 floors. Designed with 89% open space and 65% greenery, the project includes a rare 4-acre private forest within the community. Homes are thoughtfully planned with only 4 units per floor, minimal wall sharing, and excellent natural ventilation. Strategically located off Bannerghatta Main Road, it offers seamless connectivity to IIM Bangalore, Electronic City, and key lifestyle hubs—making it ideal for both end-use and investment.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}