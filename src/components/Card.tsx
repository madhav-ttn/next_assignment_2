import { Item } from "@/types/types"
import "../styles/components.css"
import Link from "next/link"
export default function Card({item}:{item:Item}){
    return(
        <Link href={`/products/${item.id}`} className="card-comp">
            <ul>
               {Object.entries(item).map(([key,value],id)=>(
                  <li key={id}>
                    <span>{key}</span>
                    <span>{value}</span>
                  </li>
               ))}
            </ul>
        </Link>
    )
}