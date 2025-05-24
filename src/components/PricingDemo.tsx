
"use client"

import { Check, ChevronRight, CreditCard, Crown, ExternalLink, Heart, Shield, ShoppingCart, Stars } from "lucide-react"
import { SinglePricingCard, type Testimonial } from "@/components/ui/single-pricing-card"

export function PricingDemo() {
  const features = [
    "Modern React with TypeScript",
    "Tailwind CSS Styling",
    "Shadcn/UI Components",
    "Responsive Design",
    "Dark Mode Support",
    "Authentication Ready",
    "SEO Optimized",
    "Performance Optimized",
    "Modern Build Tools",
    "Premium Support",
  ].map((text) => ({ text }))

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Full Stack Developer",
      company: "TechFlow",
      content:
        "This starter template saved me weeks of setup time. The integration is flawless, and the UI components are beautiful and easy to customize. Worth every penny!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Sarah Miller",
      role: "Frontend Engineer",
      company: "DesignHub",
      content:
        "I've used many starter templates, but this one stands out for its clean architecture and attention to detail. The TypeScript support is excellent.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateLabs",
      content:
        "Our team was able to launch our MVP in record time thanks to this template. The authentication flow worked right out of the box. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden flex justify-center" id="pricing">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-1 px-3 py-1 mb-4 rounded-full border border-primary/20 shadow-sm">
            <CreditCard className="mr-1 h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium">Simple Pricing</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Professional Development Services
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Everything you need to build your next great application
          </p>
        </div>

        <SinglePricingCard
          badge={{
            icon: Crown,
            text: "Premium Service",
          }}
          title="Development Consultation"
          subtitle="Get expert guidance for your next project with professional development services"
          price={{
            current: "$150/hr",
            original: "$200/hr",
            discount: "25% Off",
          }}
          benefits={[
            {
              text: "Flexible hourly rates",
              icon: Check,
            },
            {
              text: "100% satisfaction guarantee",
              icon: Shield,
            },
            {
              text: "Expert technical guidance",
              icon: Heart,
            },
          ]}
          features={features}
          featuresIcon={Check}
          featuresBadge={{
            icon: Stars,
            text: "All Services",
          }}
          primaryButton={{
            text: "Book Consultation",
            icon: ShoppingCart,
            chevronIcon: ChevronRight,
            onClick: () => window.open("mailto:akshay.harlalka@gmail.com?subject=Development Consultation", "_blank"),
          }}
          secondaryButton={{
            text: "View Portfolio",
            icon: ExternalLink,
            href: "#projects",
          }}
          testimonials={testimonials}
          testimonialRotationSpeed={5000}
        />
      </div>
    </section>
  )
}
