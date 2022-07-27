export interface Product {
    title: string;
    vendor: string; // Brand
    product_type: string;
    status: "active"|"draft"|"archive";
    options: ProductOption[];
    variants: ProductVariant[];
}

export type ProductOption = {name: ProductOptionsName, values: string[]}
export type ProductOptionsName = "Color"|"Size";
export type ProductVariant = {[optionNumber: string]: string};
