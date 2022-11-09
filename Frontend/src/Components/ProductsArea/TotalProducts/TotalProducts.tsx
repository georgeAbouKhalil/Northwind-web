import { Component } from "react";
import { Unsubscribe } from "redux";
import productsStore from "../../../Redux/Store";
import "./TotalProducts.css";

interface TotalProductsState {
	count: number;
}

class TotalProducts extends Component<{}, TotalProductsState> {

    private unsubscribeMe: Unsubscribe;

    componentDidMount() { // this funcation work 1 time
        // listing to change
        this.unsubscribeMe = productsStore.subscribe(() => { //now every time we have a change it will run it and do the change
            const count = productsStore.getState().products.length;
            this.setState({ count });
        });

        
    }

    public render(): JSX.Element {
        return (
            <div className="TotalProducts">
				{this.state?.count > 0 && <span>Total Products: {this.state.count}</span>}
            </div>
        );
    }

    componentWillUnmount(): void {
        this.unsubscribeMe();
    }
}

export default TotalProducts;
