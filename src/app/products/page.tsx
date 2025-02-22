import Card from "@/components/Card";
import CardGrid from "@/components/CardGrid";
import data from "../../data/data.json"
export default function ProductList(){
    return(
        <main className="product-section">
            <CardGrid>
                {data && data.map((item,id)=>(
                   <Card item={item} key={id}/>
                ))}
            </CardGrid>
        </main>
    )
}