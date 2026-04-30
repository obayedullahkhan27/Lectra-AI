import { PricingTable } from "@clerk/nextjs";

export default function SubscriptionsPage() {
  return (
    <div className="relative py-16">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-muted/40 to-transparent" />

      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">
            Pricing
          </span>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Choose the plan that fits you
          </h1>

          <p className="text-muted-foreground max-w-xl text-lg">
            Unlock more books, longer reading sessions, and premium features
            designed to enhance your experience.
          </p>
        </div>

        {/* Pricing Card Wrapper */}
        <div className="relative rounded-2xl border bg-background/70 backdrop-blur p-6 md:p-10 shadow-lg">
          {/* subtle glow */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />

          <PricingTable />
        </div>

        {/* Optional trust / reassurance */}
        <div className="mt-10 text-center text-sm text-muted-foreground">
          No hidden fees · Cancel anytime · Secure payments
        </div>
      </div>
    </div>
  );
}