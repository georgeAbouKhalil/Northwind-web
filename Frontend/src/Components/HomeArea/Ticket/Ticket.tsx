import { Component } from "react";
import "./Ticket.css";

interface TicketProps{
    date: string;
    performer: string;
    price: number;
}

class Ticket extends Component<TicketProps> {

    public render(): JSX.Element {
        return (
            <div className="Ticket Box">
				<p>Date: {this.props.date}, Performer: {this.props.performer}, Price: {this.props.price}</p>
            </div>
        );
    }
}

export default Ticket;
