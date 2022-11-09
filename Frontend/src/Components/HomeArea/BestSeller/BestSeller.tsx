import { Component } from "react";
import "./BestSeller.css";

// if we dont have interface props we can do it with null object {}
//if we want interface props we need to build interface props and change the {} to the name of the interface example BestSellerProps

interface BestSellerState {
    item: string;
    price: number;
}

class BestSeller extends Component<{}, BestSellerState> {// First one is always the Props, second one is always the State

    // the constructor job is two things:
    // 1. get the props as argument and pass it to to the parent
    // 2. Init the state as a new object
    public constructor(props:{}){
        super(props); // 1

        // The data managed by our component (called state)
        this.state = {item: "", price: 0}; // 2
        
    }


    // private item:string = "";
    // private price:number = 0;

    private initProduct = () =>{
        //Won't work:
        //this.state = {item: "Pizza", price: 70};
        
        //Won't work:
        // this.item = "pizza";
        // this.price = 70;

        //the Only wat to change the state:
        this.setState({item: "Pizza", price: 70}); //Will render the component immediately and this will change the UI
    }

    private showProduct = () => {
        alert("Bestseller Product: " + this.state.item + ", Price: " + this.state.price);
    }

    public render(): JSX.Element {
        return (
            <div className="BestSeller Box">
				<p>
                    <button onClick={this.initProduct}>Init Bestseller Product</button>
                    <button onClick={this.showProduct}>Show bestSeller Product</button>
                    <span>Bestseller Product: {this.state.item}, Price: {this.state.price}</span>
                </p>
            </div>
        );
    }
}

export default BestSeller;
