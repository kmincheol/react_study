function ProductCard({name, price}) {
    return (
        <div style={{border:'1px solid blue', padding:'3px'}}>
            <h2>{name}</h2>
            <h2>{price}</h2>
        </div>
    );
}

export default ProductCard;