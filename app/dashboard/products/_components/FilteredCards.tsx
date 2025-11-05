'use client'

import { Product, Provider } from "@/entities";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Divider, Input, Select, SelectItem } from "@heroui/react";

const FilteredCards = ({ products, providers }: { products: Product[], providers: Provider[] }) => {

    const [filter, setFilter] = useState<string>("");
    const [provider, setProvider] = useState<string>();
    const [show, setShow] = useState(false);
    const [productsList, setProductsList] = useState<Product[]>(products)
  
    useEffect(() => {
        const filterProducts = products.filter((product) => {
            if(product.productName.toLowerCase().includes(filter.toLowerCase()) && product.provider.providerId === provider){
                return true
            } else {
                return false
            }
        })
        setProductsList(filterProducts);
        setShow(true)
    }, [filter, provider, products ])
    if(!show) return ""
    return (
        <div className="max-h-[90vh] min-h-[90vh] overflow-y-auto flex flex-col gap-4 border-r-orange-400 px-10 border-2 pt-10">
            <Select className="bg-white rounded-xl" label="Provedores" onChange={(e) => {
                setProvider(e.target.value)
            }}>
                {providers.map((provider) => (
                <SelectItem textValue={provider.providerId} className="bg-slate-100" key={provider.providerId} >
                    <b>{provider.providerName}</b>
                    <Divider/>
                </SelectItem>
                ))}
            </Select>

            <Input onChange={(e) => {
                setFilter(e.target.value);
            }} label="Nombre del producto" />
            {
                show && productsList.map((product) => {
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