import {useState} from "react";
import Children_Comp from "./ChildrenComponent";

const ParentComponent = () => {
    const [product] = useState({
        id: 1,
        name:"Buoi ba roi",
        price:12000,
        quantity: 6,
    })
    
    return (
        <div>
        <p> Ho va ten ben component cha: </p>
        <Children_Comp product={product}/>
        </div>
    )
}

export default ParentComponent;