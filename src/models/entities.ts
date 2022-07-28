import {Entity, Column, PrimaryColumn} from "typeorm";
import {Shopify} from "interfaces";
import {Exactly} from "@interfaces/Types";

@Entity()
export class Product implements Exactly<Shopify.Product, Product> {
    @PrimaryColumn("uuid")
    id: string;

    @Column({default: ""})
    title: string;

    @Column()
    vendor: string;

    @Column()
    product_type: string;

    @Column()
    status: "active"|"draft"|"archive";
}

/*
 *export interface Product {
    id: string;
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

*/
