import { StaticImageData } from 'next/image'

export interface Equip {
  name: string
  stars: [number, number | null, number | null]
  potential: [number, number | null, number | null]
  image: typeof import("*.png")
  alt: [typeof import("*.png") | null, typeof import("*.png") | null]
}
