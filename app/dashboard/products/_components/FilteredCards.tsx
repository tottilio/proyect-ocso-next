'use client'

import { Product } from "@/entities";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Input } from "@heroui/react";

const FilteredCards = ({ products }: { products: Product[] }) => {

    const [filter, setFilter] = useState<string>("");
    const [productsList, setProductsList] = useState<Product[]>(products)
  
    useEffect(() => {
        const filterProducts = products.filter((product) => {
            if(product.productName.toLowerCase().includes(filter.toLowerCase())){
                return true
            } else {
                return false
            }
        })
        setProductsList(filterProducts);
    }, [filter])

    return (
        <div className="max-h-[90vh] min-h-[90vh] overflow-y-auto flex flex-col gap-8 border-r-orange-400 px-10 border-2 pt-10">
            <Input onChange={(e) => {
                setFilter(e.target.value);
            }} label="Nombre del producto" />
            {
                productsList.map((product) => {
                    return (
                        <Link className="hover:scale-110 transition-transform" key={product.productId} href={{ pathname: `/dashboard/products/${product.productId}` }}>
                            <ProductCard product={product} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default FilteredCards;