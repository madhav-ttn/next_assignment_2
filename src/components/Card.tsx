import "../styles/components.css"
export default function Card({item}:{item:any}){
    return(
        <div className="card-comp">
            {item.name}
        </div>
    )
}