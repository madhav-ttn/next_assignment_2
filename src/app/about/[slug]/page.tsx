import empData from "@/data/Employees.json";
import Link from "next/link";
export default async function EmployeeDetails({params}:{params:Promise<{slug:string}>}){
   const slug= (await params).slug;
   const emp=empData.find(em=>em.id===Number(slug));
   if(!emp){
      return(
        <div>
            Employee Details Not Found
        </div>
      )
   }
   return(
     <div className="container">
       <Link href={`/products/${emp.id}`} className="card-comp">
            <ul>
               {Object.entries(emp).map(([key,value],id)=>(
                  <li key={id}>
                    <span>{key}</span>
                    <span>{value}</span>
                  </li>
               ))}
            </ul>
        </Link>
      </div>
     
   )
}