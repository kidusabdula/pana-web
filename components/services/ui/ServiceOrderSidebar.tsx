"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Printer } from "lucide-react";
import { ServiceSpec } from "@/types/service";

export default function ServiceOrderSidebar({ service }: { service: ServiceSpec }) {
  const [quantity, setQuantity] = useState(100);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedFinish, setSelectedFinish] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSides, setSelectedSides] = useState("");
  const [deadline, setDeadline] = useState<string>("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isValid, setIsValid] = useState(false);

  const basePrice = service.basePrice ?? 0.5;
  const price = (basePrice * quantity * (selectedSides === "Double-Sided" ? 1.8 : 1)).toFixed(2);

  useEffect(() => {
    const required = service.options?.sizes && service.options?.materials;
    const filled = required ? selectedSize && selectedMaterial && uploadedFiles.length > 0 : uploadedFiles.length > 0;
    setIsValid(!!filled);
  }, [selectedSize, selectedMaterial, selectedSides, uploadedFiles, service]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setUploadedFiles(Array.from(e.target.files));
  };

  return (
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
        {service.options?.sizes && (
          <div>
            <label className="block text-sm font-medium mb-1">Size</label>
            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} className="w-full rounded-md border bg-background p-2">
              <option value="" disabled>
                Choose size
              </option>
              {service.options.sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Material */}
        {service.options?.materials && (
          <div>
            <label className="block text-sm font-medium mb-1">Material</label>
            <select value={selectedMaterial} onChange={(e) => setSelectedMaterial(e.target.value)} className="w-full rounded-md border bg-background p-2">
              <option value="" disabled>
                Select material
              </option>
              {service.options.materials.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Finish */}
        {service.options?.finishes && (
          <div>
            <label className="block text-sm font-medium mb-1">Finish</label>
            <select value={selectedFinish} onChange={(e) => setSelectedFinish(e.target.value)} className="w-full rounded-md border bg-background p-2">
              <option value="" disabled>
                Optional finish
              </option>
              {service.options.finishes.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Color & Sides */}
        <div className="grid grid-cols-2 gap-3">
          {service.options?.colors && (
            <div>
              <label className="block text-sm font-medium mb-1">Color</label>
              <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} className="w-full rounded-md border bg-background p-2">
                <option value="" disabled>
                  Color
                </option>
                {service.options.colors.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          )}
          {service.options?.sides && (
            <div>
              <label className="block text-sm font-medium mb-1">Sides</label>
              <select value={selectedSides} onChange={(e) => setSelectedSides(e.target.value)} className="w-full rounded-md border bg-background p-2">
                <option value="" disabled>
                  Sides
                </option>
                {service.options.sides.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium mb-1">Quantity</label>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 10))}>
              -
            </Button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-24 text-center rounded-md border bg-background p-2"
            />
            <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 10)}>
              +
            </Button>
          </div>
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">Upload Artwork</label>
          <div className="border-2 border-dashed border-primary/20 rounded-xl p-4 text-center cursor-pointer hover:border-primary/40 transition-colors">
            <input type="file" multiple accept="image/*,.pdf,.ai,.psd" onChange={handleFileUpload} className="hidden" id="artwork-ui" />
            <label htmlFor="artwork-ui" className="cursor-pointer flex flex-col items-center">
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

        {/* Price Preview */}
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span className="text-primary">ETB {price}</span>
        </div>

        <Button className="w-full btn-pana text-lg" disabled={!isValid}>
          {isValid ? "Place Order" : "Complete Form"}
        </Button>
      </CardContent>
    </Card>
  );
}