import { Component } from "react";
import "./RandomProduct.css";

interface RandomProductState{
    randomProduct: string;
}

class RandomProduct extends Component<{}, RandomProductState> {

    public constructor(props: {}){
        super(props);
        
        // Init state with one random number:
        this.state = {randomProduct: this.getRandomProduct()};
    }

    // helper funcation returning a random product
    private getRandomProduct(): string {
        const products = ["Apple", "Banana", "Peach", "Grapes", "Orange"];
        const index = Math.floor(Math.random() * products.length);
        return products[index];
    }

    componentDidMount(): void {
        //create timer which set a random number in state each second:
        setInterval(() => this.setState({ randomProduct: this.getRandomProduct() }), 1000);
    }

    // returning the UI
    public render(): JSX.Element {
        return (
            <div className="RandomProduct Box">
				<p> {this.state.randomProduct} </p>
            </div>
        );
    }
}

export default RandomProduct;
