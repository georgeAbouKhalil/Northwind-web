import "./Sales.css";

//sale category
// percent discount

interface SaleProps {
    category: string; //sale category
    percent: number; //sale percent
}

function Sales(props: SaleProps): JSX.Element {
    return (
        <div className="Sales Box">
			<p>Sale: {props.percent}% discount on all {props.category}</p>
        </div>
    );
}

export default Sales;
