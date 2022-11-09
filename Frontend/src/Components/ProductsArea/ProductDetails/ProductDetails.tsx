import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import config from "../../../Utils/Config";
// import { RouteComponentProps } from "react-router-dom";
import "./ProductDetails.css";

//Route parameter interface:
// interface RouteParams {
//     id: string; // Route oaramater are always string. name must match to parameter name declared in the routing.
// }

// we need to extends the above interface into props interface
interface ProductDetailsProps { }

interface ProductDetailsState {
	product: ProductModel;
}

class ProductDetails extends Component<ProductDetailsProps, ProductDetailsState> {

    public async componentDidMount() {
        try {
            const lastSlashIndex = window.location.pathname.lastIndexOf("/"); // last index we get the /
            const id = +window.location.pathname.substr(lastSlashIndex + 1); // here we add + 1 to get the number after the /
            const product = await productsService.getOneProduct(id);
            this.setState({ product });
            
        } catch (error: any) {
            alert(error.message);
        }
        
    }

    public render(): JSX.Element {
        return (
            <div className="ProductDetails Box">
				
                <h2>Product Details:</h2>

                <h3>Name:  {this.state?.product?.name}</h3>

                <h3>Price: ${this.state?.product?.price} | Stock: {this.state?.product?.stock}</h3>

                <img src={config.urls.productImages + this.state?.product?.imageName} />

                <NavLink to={"/products"}>Back</NavLink>

            </div>
        );
    }
}

export default ProductDetails;
