export type Product = {
  thumbnail: any;
  specialThumbnail: any;
  images: any;
  model: string;
  dimensions: string;
  movement: string;
  sku: string;
  description: string;
  numberWatches: string;
  bracelet: string;
  id: string;
};

export type ProductMapped = {
  id: number;
  thumbnail: string;
  sku: string;
  model: string;
  movement: string;
  actions: any[];
};
