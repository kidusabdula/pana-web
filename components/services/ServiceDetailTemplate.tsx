"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ChevronRight, Printer, Shield, Upload, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export type ServiceImage = { src: string; alt: string };
export type ServiceOptions = {
  sizes: string[];
  materials: string[];
  finishes: string[];
  colors: string[];
  sides: string[];
};
export type ServiceData = {
  slug: string;
  title: string;
  subtitle: string;
  description: string; // can include simple HTML tags
  features: string[];
  equipment?: string;
  images: ServiceImage[];
  options: ServiceOptions;
  basePrice?: number; // price per unit baseline
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

export default function ServiceDetailTemplate({ service }: { service: ServiceData }) {
  const [quantity, setQuantity] = useState(100);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedFinish, setSelectedFinish] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSides, setSelectedSides] = useState("");
  const [deadline, setDeadline] = useState<string>("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isFormValid, setIsFormValid] = useState(false);

  const basePrice = service.basePrice ?? 0.5;
  const price = (basePrice * quantity * (selectedSides === "Double-Sided" ? 1.8 : 1)).toFixed(2);

  useEffect(() => {
    const valid = selectedSize && selectedMaterial && selectedSides && uploadedFiles.length > 0;
    setIsFormValid(!!valid);
  }, [selectedSize, selectedMaterial, selectedSides, uploadedFiles]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setUploadedFiles(Array.from(e.target.files));
  };

  return (
    <section className="relative min-h-screen bg-linear-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,oklch(var(--primary)/0.08),transparent_50%)] opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,oklch(var(--accent)/0.06),transparent_50%)] opacity-50" />

      <div className="container mx-auto px-6 pt-28 pb-16 relative">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* LEFT: CONTENT */}
          <motion.div variants={stagger} initial="initial" animate="animate" className="lg:col-span-2 space-y-12">
            <motion.div variants={fadeUp}>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Printer className="w-3 h-3 mr-1" /> Service #{service.slug.split("-")[0].toUpperCase()}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold bg-linear-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-3">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">{service.subtitle}</p>
            </motion.div>

            {/* Hero Image */}
            {service.images?.[0] && (
              <motion.div variants={fadeUp} className="relative rounded-3xl overflow-hidden shadow-2xl group" whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }}>
                <div className="aspect-video relative">
                  <Image src={service.images[0].src} alt={service.images[0].alt} fill priority className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-medium opacity-90">Featured Project</p>
                    <p className="text-lg font-bold">{service.images[0].alt}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Description */}
            <motion.div variants={fadeUp} className="prose prose-lg max-w-none">
              <div className="text-foreground leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: service.description }} />
            </motion.div>

            <Separator className="bg-primary/10" />

            {/* Features */}
            <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6">
              {service.features.map((feat, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 group">
                  <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex shrink-0 items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{feat}</p>
                </motion.div>
              ))}
            </motion.div>

            <Separator className="bg-primary/10" />

            {/* Equipment */}
            {service.equipment && (
              <motion.div variants={fadeUp} className="bg-muted/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" /> Powered by Industry-Grade Equipment
                </h3>
                <p className="text-muted-foreground text-sm">{service.equipment}</p>
              </motion.div>
            )}

            {/* Gallery */}
            {service.images?.length > 1 && (
              <motion.div variants={fadeUp} className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">Real Projects, Real Impact</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {service.images.slice(1).map((img, i) => (
                    <motion.div key={i} whileHover={{ y: -8 }} className="relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer group">
                      <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform group-hover:scale-110 duration-700" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-4">
                        <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">{img.alt}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* RIGHT: STICKY ORDER SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="shadow-xl border-0 overflow-hidden">
                <div className="bg-linear-to-br from-primary/10 to-secondary/10 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Printer className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{service.title}</p>
                      <p className="text-xs text-muted-foreground">Starting at ETB {basePrice}/unit</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-5">
                  {/* Size */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Size</label>
                    <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} className="w-full rounded-md border bg-background p-2">
                      <option value="" disabled>Choose size</option>
                      {service.options.sizes.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Material */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Material</label>
                    <select value={selectedMaterial} onChange={(e) => setSelectedMaterial(e.target.value)} className="w-full rounded-md border bg-background p-2">
                      <option value="" disabled>Select material</option>
                      {service.options.materials.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>

                  {/* Finish */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Finish</label>
                    <select value={selectedFinish} onChange={(e) => setSelectedFinish(e.target.value)} className="w-full rounded-md border bg-background p-2">
                      <option value="" disabled>Optional finish</option>
                      {service.options.finishes.map((f) => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                  </div>

                  {/* Color & Sides */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Color</label>
                      <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} className="w-full rounded-md border bg-background p-2">
                        <option value="" disabled>Color</option>
                        {service.options.colors.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Sides</label>
                      <select value={selectedSides} onChange={(e) => setSelectedSides(e.target.value)} className="w-full rounded-md border bg-background p-2">
                        <option value="" disabled>Sides</option>
                        {service.options.sides.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Quantity</label>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 10))}>
                        -
                      </Button>
                      <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-24 text-center rounded-md border bg-background p-2" />
                      <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 10)}>
                        <ChevronRight className="w-4 h-4 rotate-180" />
                      </Button>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Upload Artwork</label>
                    <div className="border-2 border-dashed border-primary/20 rounded-xl p-4 text-center cursor-pointer hover:border-primary/40 transition-colors">
                      <input type="file" multiple accept="image/*,.pdf,.ai,.psd" onChange={handleFileUpload} className="hidden" id="artwork" />
                      <label htmlFor="artwork" className="cursor-pointer flex flex-col items-center">
                        <Upload className="w-8 h-8 mb-2 text-primary/60" />
                        <span className="text-sm text-muted-foreground">
                          {uploadedFiles.length > 0 ? `${uploadedFiles.length} file(s) selected` : "Click to upload (PDF, AI, PSD, Images)"}
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Deadline */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Deadline (Optional)</label>
                    <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="w-full rounded-md border bg-background p-2" />
                  </div>

                  <Separator />

                  {/* Price & CTA */}
                  <div className="space-y-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Estimated Total</span>
                      <span className="text-primary">ETB {price}</span>
                    </div>

                    <Sheet>
                      <SheetTrigger asChild>
                        <Button className={cn("w-full", "text-lg")} disabled={!isFormValid}>
                          {isFormValid ? "Place Order Now" : "Complete Form to Order"}
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Order Summary</SheetTitle>
                        </SheetHeader>
                        <div className="mt-6 space-y-4">
                          <p><strong>Service:</strong> {service.title}</p>
                          <p><strong>Size:</strong> {selectedSize}</p>
                          <p><strong>Material:</strong> {selectedMaterial}</p>
                          <p><strong>Sides:</strong> {selectedSides}</p>
                          <p><strong>Quantity:</strong> {quantity}</p>
                          <p><strong>Price:</strong> ETB {price}</p>
                          <Button className="w-full">Confirm & Pay</Button>
                        </div>
                      </SheetContent>
                    </Sheet>

                    <Button variant="outline" className="w-full">Get Custom Quote</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* MOBILE: SIMPLE COLLAPSIBLE ORDER */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t shadow-2xl z-50">
          <details>
            <summary className="px-6 py-4 text-lg font-semibold cursor-pointer">
              <div className="flex items-center justify-between w-full pr-4">
                <span>Quick Order • ETB {price}</span>
                <Badge variant="secondary">Tap to Configure</Badge>
              </div>
            </summary>
            <div className="px-6 pb-6 pt-2 space-y-3">
              <select className="w-full rounded-md border bg-background p-2" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                <option value="" disabled>Size</option>
                {service.options.sizes.map((s) => (<option key={s} value={s}>{s}</option>))}
              </select>
              <select className="w-full rounded-md border bg-background p-2" value={selectedMaterial} onChange={(e) => setSelectedMaterial(e.target.value)}>
                <option value="" disabled>Material</option>
                {service.options.materials.map((m) => (<option key={m} value={m}>{m}</option>))}
              </select>
              <select className="w-full rounded-md border bg-background p-2" value={selectedSides} onChange={(e) => setSelectedSides(e.target.value)}>
                <option value="" disabled>Sides</option>
                {service.options.sides.map((s) => (<option key={s} value={s}>{s}</option>))}
              </select>
              <input type="number" className="w-full rounded-md border bg-background p-2" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} />
              <input type="date" className="w-full rounded-md border bg-background p-2" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
              <Button className="w-full" disabled={!isFormValid}>{isFormValid ? "Place Order" : "Complete Form"}</Button>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}