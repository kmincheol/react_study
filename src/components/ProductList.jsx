import ProductCard from "./ProductCard";

function ProductList() {
    const productList = [
        {id:1, name: '아이폰', price: 1000000},
        {id:2, name: '노트북', price: 11000000},
    ];

    return (
        <div>
            {productList.map((product) => (
                <ProductCard key={product.id} name={product.name} price={product.price} />
            ))}
        </div>
    )
}

export default ProductList;