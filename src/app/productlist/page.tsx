import Card from "@/components/Card";
import CardGrid from "@/components/CardGrid";
import data from "../../data/data.json"
export default function ProductList(){
    return(
        <div>
            <CardGrid>
                {data && data.shoes && data.shoes.map((item,id)=>(
                   <Card item={item} key={id}/>
                ))}

            </CardGrid>
        </div>
    )
}