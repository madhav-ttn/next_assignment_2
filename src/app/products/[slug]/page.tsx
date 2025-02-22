import Card from "@/components/Card";
import shoesData from "../../../data/data.json";
export default async function product({
    params,
  }: {
    params: Promise<{ slug: string }>
  }){
    const slug=(await params).slug;
    const product=shoesData.find(shoe=>shoe.id===Number(slug));
    if(!product)return(
        <div>Product not found</div>
    )
    return(
      <div className="container">
        <Card item={product} />
      </div>
    )
}