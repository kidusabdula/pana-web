"use client";

import { motion } from "framer-motion";
import ServiceHero from "@/components/services/ui/ServiceHero";
import ServiceDescription from "@/components/services/ui/ServiceDescription";
import ServiceImageGallery from "@/components/services/ui/ServiceImageGallery";
import ServiceOrderSidebar from "@/components/services/ui/ServiceOrderSidebar";
import { ServiceSpec } from "@/types/service";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.7 } } };

export default function ServiceLayout({ service }: { service: ServiceSpec }) {
  return (
    <section className="min-h-screen bg-linear-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-6 pt-28 lg:pt-32 pb-16 lg:pb-20">
        {/* Desktop: Two Columns */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-12 items-start">
          <motion.div className="lg:col-span-2 space-y-12" initial="initial" animate="animate" variants={fadeUp}>
            <ServiceHero service={service} />
            <ServiceDescription service={service} />
            <ServiceImageGallery images={service.images.slice(1)} />
          </motion.div>
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiceOrderSidebar service={service} />
            </div>
          </div>
        </div>

        {/* Mobile: Stacked + Sheet Sidebar */}
        <div className="lg:hidden space-y-12">
          <ServiceHero service={service} />
          <ServiceDescription service={service} />
          <ServiceImageGallery images={service.images.slice(1)} />

          <Sheet>
            <SheetTrigger asChild>
              <Button className="w-full btn-pana text-lg flex items-center gap-2">
                <Menu className="w-5 h-5" /> Place Order
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh] overflow-y-auto">
              <SheetHeader>
                <SheetTitle>{service.title}</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <ServiceOrderSidebar service={service} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
}