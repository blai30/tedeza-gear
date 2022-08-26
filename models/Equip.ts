export interface Equip {
  name: string
  stars: [number | null, number | null, number | null]
  potential: [number | null, number | null, number | null]
  image: typeof import("*.png")
  alt: [typeof import("*.png") | null, typeof import("*.png") | null]
}
