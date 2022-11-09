import { Component } from "react";
import "./Clock.css";

interface ClockProps {
	
}

interface ClockState {
	time: string;
}

class Clock extends Component<ClockProps, ClockState> {

    //constructor - pass props, init state, don't do side-effects:
    public constructor(props: ClockProps) {
        super(props);
        this.state = { time: this.getTime() };
    }

    private getTime():string {
        const now = new Date();
        return now.toLocaleTimeString();
    }

    private timerId: number; // for to get the timer id

    //componentDidMount - performs once, can do side-effects:
    public componentDidMount(): void {
        this.timerId = window.setInterval(() => this.setState({ time: this.getTime() }),1000); //the funcation setInterval he return number (id)
    }

    //componentDidUpdate - performs whenever props or state changes, can do side-effects:
    public componentDidUpdate(prevProps:ClockProps, prevState:ClockState): void {
        //...
    }

    //componentWillUnmount - performs once just before component destroyed, can do side-effects:
    public componentWillUnmount(): void {
        window.clearInterval(this.timerId); //to stop the timer
    }

    //render - performs whenever commponent needs to update ui, don't do side-effects:
    public render(): JSX.Element {
        return (
            <div className="Clock Box">
				<p> {this.state.time} </p>
            </div>
        );
    }
}

export default Clock;
