import { Product, products } from "@/model";
import { NextApiRequest, NextApiResponse } from "next";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Product | { message: string }>
) {
    const { slug } = req.query
    const product = products.find((p) => p.slug === slug)
    if (product) {
        res.status(200).json(product)
    } else {
        res.status(404).json({ message: "Product not found" })
    }
}
