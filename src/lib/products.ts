import chair from "@/assets/p-chair.jpg";
import bag from "@/assets/p-bag.jpg";
import camera from "@/assets/p-camera.jpg";
import headphones from "@/assets/p-headphones.jpg";
import cap from "@/assets/p-cap.jpg";
import boots from "@/assets/p-boots.jpg";
import tv from "@/assets/p-tv.jpg";
import speaker from "@/assets/p-speaker.jpg";
import planter from "@/assets/p-planter.jpg";
import heels from "@/assets/p-heels.jpg";
import sneakers from "@/assets/p-sneakers.jpg";
import backpack from "@/assets/p-backpack.jpg";

export type Product = {
  slug: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  brand: string;
  category: string;
};

export const products: Product[] = [
  { slug: "modern-dining-chair", name: "Modern Dining Chair", price: 602, rating: 5, image: chair, brand: "Atelier", category: "Furniture" },
  { slug: "premium-tote-bag", name: "Premium Tote Bag", price: 122, rating: 4, image: bag, brand: "Lumière", category: "Bags" },
  { slug: "instant-mint-camera", name: "Instant Mint Camera", price: 122, oldPrice: 159, rating: 5, image: camera, brand: "Plesano", category: "Electronics" },
  { slug: "wireless-headphones-x9", name: "Wireless Headphones X9", price: 123.20, rating: 5, image: headphones, brand: "Sonox", category: "Audio" },
  { slug: "explorer-snapback-cap", name: "Explorer Snapback Cap", price: 42, rating: 4, image: cap, brand: "Northbound", category: "Accessories" },
  { slug: "tan-chelsea-boots", name: "Tan Chelsea Boots", price: 189, rating: 5, image: boots, brand: "Strider", category: "Shoes" },
  { slug: "ultra-led-smart-tv", name: "Ultra LED Smart TV 55\"", price: 899, oldPrice: 1199, rating: 5, image: tv, brand: "Mi", category: "Electronics" },
  { slug: "circle-smart-speaker", name: "Circle Smart Speaker", price: 199, rating: 4, image: speaker, brand: "Echo+", category: "Audio" },
  { slug: "ceramic-planter-stand", name: "Ceramic Planter Stand", price: 78, rating: 5, image: planter, brand: "Botanik", category: "Home Decor" },
  { slug: "crimson-bow-heels", name: "Crimson Bow Heels", price: 142, rating: 4, image: heels, brand: "Roselle", category: "Shoes" },
  { slug: "coral-high-top-sneakers", name: "Coral High-Top Sneakers", price: 89, rating: 4, image: sneakers, brand: "Kicks Co.", category: "Shoes" },
  { slug: "heritage-canvas-backpack", name: "Heritage Canvas Backpack", price: 1202, rating: 5, image: backpack, brand: "Travelco", category: "Bags" },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);