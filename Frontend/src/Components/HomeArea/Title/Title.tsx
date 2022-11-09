import { useEffect } from "react";
import "./Title.css";

function Title(): JSX.Element {

    const title = "Northwind Traders";

    //Invoking useEffect as componentDidMount
    useEffect( () =>{
        // Side-Effect - needs to perform only once:
        document.title = title;

    }, []); // when we put like this empty array the funcation will run 1 time couse the array will not change


    return (
        <div className="Title Box">
			<p> {title} </p>
        </div>
    );
}

export default Title;
