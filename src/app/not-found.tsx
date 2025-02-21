"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const route = useRouter();
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    function test() {
      const timer1 = setInterval(() => {
        setCounter((prev)=>{
            if(prev<=0){
                clearInterval(timer1);
            }
            return prev-1;
        })
      }, 1000);

      const timer2 = setTimeout(() => {
        route.push("/");
      }, 5000);

      return () => {
          clearTimeout(timer2);
          clearInterval(timer1);
      };
    }
    test();
  }, []);

  return (
    <div>
      404 Page not found
      <br />
      Redirecting to HomePage in {counter} seconds...
    </div>
  );
}
