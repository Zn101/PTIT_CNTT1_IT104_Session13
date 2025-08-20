import {useState} from "react";
import Children_Comp from "./Children_Comp";

const Parent_Comp = () => {
    const [name] = useState("Nguyen Van A");
    
    return (
        <div>
        <p> Ho va ten ben component cha: </p>
        <Children_Comp name={name} />
        </div>
    )
}

export default Parent_Comp;