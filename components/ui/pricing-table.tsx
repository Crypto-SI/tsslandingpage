"use client"

import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  featured?: boolean
  cta: string
}

interface PricingTableProps {
  tiers: PricingTier[]
  title?: string
  description?: string
}

export default function PricingTable({ 
  tiers, 
  title = "Pricing Plans", 
  description = "Choose the perfect plan for your needs" 
}: PricingTableProps) {
  return (
    <section className="w-full py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <Card 
              key={tier.name} 
              className={`relative h-full flex flex-col ${
                tier.featured ? 'ring-2 ring-primary border-primary shadow-lg' : ''
              }`}
            >
              {/* Featured badge */}
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">/{tier.period}</span>
                </div>
                <CardDescription className="mt-2">
                  {tier.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      {feature.startsWith('✓') ? (
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className={`w-full ${
                    tier.featured ? 'bg-primary hover:bg-primary/90' : 'bg-background hover:bg-muted'
                  }`}
                  size="lg"
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional pricing info */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>
            All prices include VAT. Payment plans available for longer terms. 
            <a href="/contact" className="text-primary hover:underline ml-1">
              Contact us
            </a>{' '}
            for custom group rates.
          </p>
        </div>
      </div>
    </section>
  )
}