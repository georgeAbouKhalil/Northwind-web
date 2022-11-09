import { SyntheticEvent } from "react";
import "./Recommended.css";

function Recommended(): JSX.Element {

    const item1 = "Irish Coffee";
    const item2 = "Green Tea";

    function showItem(): void {
        alert("Recommended Item: " + item1);
        // alert(`Recommended Item: ${item}`); this is the same
    }
    
    function showItem2(args: SyntheticEvent): void {
        console.log(args); // data regarding the event
        console.log(args.target); // the HTML element raising the event
        
        alert("Recommended Item: " + item2);
    }


    return (
        <div className="Recommended Box">
            <p>
			    <button onClick={showItem}>Recommend 1</button>
			    <button onClick={showItem2}>Recommend 2</button>
            </p>
        </div>
    );
}

export default Recommended;
