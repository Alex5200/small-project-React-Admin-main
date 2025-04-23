import { useState, useEffect } from "react";

export default function FilterDropdown({datas}){
    const [category, setCategory] = useState([])
    useEffect(() => {
        (async () => {
          const response = await fetch(
            "http://localhost:4000/categories"
          );
          const parsed = await response.json();
          setCategory(parsed);
      
        })();
      }, []);        
      function renderList(){      
        return category.map((e)=>{
            <div key={e.name + e.id}>
                <input type="chekbox"/>
                <label></label>
            </div>
            })    
        }
    return(
     <div> 
        <renderList/>
     </div>   
    )
}