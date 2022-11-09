import BackColorByHour from "../BackColorByHour/BackColorByHour";
import "./Deliveries.css";

interface DeliveriesProps {
	startingHour: string;
    endingHour: string;
}

function Deliveries(props: DeliveriesProps): JSX.Element {
    return (
        <div className="Deliveries">
			Delivery Hours: {props.startingHour} - {props.endingHour}
        </div>
    );
}

export default BackColorByHour(Deliveries); // Using the HOC
