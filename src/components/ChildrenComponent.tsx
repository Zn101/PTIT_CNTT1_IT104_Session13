type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

type ChildrenProps = {
    product: Product
}

const Children_Comp = ({product}: ChildrenProps) => {
    return (
        <div>
            <h3>Du lieu trong component con</h3>
            <p>id: {product.id}</p>
            <p>Product name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
        </div>
    )
}

export default Children_Comp;