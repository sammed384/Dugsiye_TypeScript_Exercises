interface ProductCardProps {
    name: string
    price: number
    description?: string
}

const ProductCard = ({ name, price, description }: ProductCardProps) => {
    return (
        <div>
            <h2>The Product is {name} </h2>
            <p>{price} $</p>
            <p>{description}</p>
        </div>
    )
}

export default ProductCard


