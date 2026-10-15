import Image from "next/image";
import type { Photo as PhotoData } from "@/content/photos";

type PhotoProps = {
  photo: PhotoData;
  /** Atributo sizes do next/image: quanto da largura da tela a foto ocupa. */
  sizes: string;
  className?: string;
  preload?: boolean;
};

/** Foto que preenche o elemento pai (o pai precisa ter position relative e altura/aspect definidos). */
export function Photo({ photo, sizes, className = "", preload = false }: PhotoProps) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={sizes}
      preload={preload}
      className={`object-cover ${className}`}
      style={{ objectPosition: photo.position ?? "50% 50%" }}
    />
  );
}
