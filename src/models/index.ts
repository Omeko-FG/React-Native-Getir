export declare class Category {
  readonly id: string;
  readonly name: string;
  readonly src: string;
  readonly subCategories: string[];
}

export declare class Product {
  readonly id: string;
  readonly image: string;
  readonly name: string;
  readonly miktar: string;
  readonly fiyat: string;
  readonly fiyatIndirim?: string;
  readonly images: string[];
}
