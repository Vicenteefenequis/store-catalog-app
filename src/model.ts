export interface Product {
    id: string;
    name: string;
    description: string
    image_url: string;
    slug: string;
    price: number;
    created_at: string;
}

export const products: Product[] = [
    {
        id: "uuid",
        name: "Produto 1",
        price: 10,
        description: "Descrição do produto 1",
        image_url: "https://source.unsplash.com/random?product," + Math.random(),
        created_at: "2023-01-01T00:00:00.000Z",
        slug: "produto-1"
    },
    {
        id: "uuid 2",
        name: "Produto 2",
        price: 20,
        description: "Descrição do produto 1",
        image_url: "https://source.unsplash.com/random?product," + Math.random(),
        created_at: "2023-01-01T00:00:00.000Z",
        slug: "produto-2"
    }
]
