import { useState } from "react";
import { ImageIcon } from "lucide-react";
import type { ServiceImage } from "@/lib/services";

export function ServiceImageCard({ image }: { image: ServiceImage }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-border bg-secondary/40 p-6 flex flex-col items-center justify-center text-center min-h-32 sm:min-h-40">
        <ImageIcon className="h-8 w-8 text-muted-foreground/60 mb-3" />
        <span className="text-xs font-medium text-muted-foreground/80 leading-relaxed">
          {image.label}
        </span>
      </div>
    );
  }

  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-xs transition-all duration-300 hover:shadow-md flex flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          width={1024}
          height={768}
          onError={() => setHasError(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <figcaption className="p-3 text-center text-xs font-medium text-muted-foreground leading-snug bg-card">
        {image.label}
      </figcaption>
    </figure>
  );
}
