export type Product = {
     id: number | string;
     title: string;
     category: string;
     price: string;
     image?: string;
}

export type CartProductProps = {
     id: string | number,
     title: string,
     quantity: number,
     category: string,
     price: string,
}

export type ProductUI = {
     id: string;
     name: string;
     description: string;
     price: number;
     rating: number;
     reviews: number;
     category: string;
     stock: 'in_stock' | 'out_of_stock';
     condition: 'new' | 'refurbished' | 'used';
     image: string;
     images?: string[];
}