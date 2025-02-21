import shoesData from "../../../data/data.json";
import "../../../styles/page.css"
export default async function product({
    params,
  }: {
    params: Promise<{ slug: string }>
  }){
    const slug=(await params).slug;
    const product=shoesData.shoes.find(shoe=>shoe.id===Number(slug));
    if(!product)return(
        <div>Product not found</div>
    )
    return(
        <div>
            <p className="product-name">{product.name}</p>
        </div>
    )
}