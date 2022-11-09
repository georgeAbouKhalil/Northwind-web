import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import authService from "../../../Services/AuthService";
import notifyService from "../../../Services/NotifyService";
import productsService from "../../../Services/ProductsService";
import config from "../../../Utils/Config";
import "./AddProduct.css";

function AddProduct(): JSX.Element {
    
    const navigate = useNavigate();
    
    useEffect(()=> {
        if(!authService.isLoggedIn()){
            alert("you are not logged in");
            navigate("/login");
        }
    });

    
    const { register, handleSubmit, formState } = useForm<ProductModel>();

    async function submit(product: ProductModel) {
        try {
            const addedProduct = await productsService.addProduct(product);
            // alert("Product has been added. id: " + addedProduct.id); //In real life - never show ids to the user.
            notifyService.success("Product has been added. id: " + addedProduct.id);
            navigate("/products"); // navigate to the product page after to adding
        } catch (error:any) {
            alert(error.message)
            notifyService.error(error);
        }
        
    }

    return (
        <div className="AddProduct Box">
            {/* Native Validation */}
            <h2>Add Product</h2>
            {/* <input type="text" {...register("name")} required minLength={3} maxLength={100}/> */}
			
            <form onSubmit={handleSubmit(submit)}> { /* we cant call submit we need to call handleSubmit and handle will return to submit the details */ }
            {/* useFormValidation */}
                <label >Name:</label>
                <input type="text" {...register("name", {
                    required: {value:true, message: "Missing name"},
                    minLength:{value:3, message: "Name must be minimum 3 chars"},
                    maxLength:{value:100, message: "Name can't exceed 100 chars"}
                })}/>
                <span >{formState.errors.name?.message}</span>

                <label >Price:</label>
                {/* <input type="number" {...register("price")} required min={0} max={1000} step="0.01"/> */} {/* Native Validation */}
                <input type="number" {...register("price", {
                    required: {value:true, message: "Missing Price"},
                    min:{value:0, message: "Price must be minimum 0"},
                    max:{value:1000, message: "Price must be max 1000"}
                })} step="0.01"/>
                <span >{formState.errors.price?.message}</span>

                <label >Stock:</label>
                {/* <input type="number" {...register("stock")} required min={0} max={10000}/> */} {/* Native Validation */}
                <input type="number" {...register("stock",{
                    required: {value:true, message: "Missing stock"},
                    min:{value:0, message: "Stock must be minimum 0"},
                    max:{value:10000, message: "Stock must be max 10000"},
                    validate:{value: (stock: number) => +stock %2 === 0}
                })}/>
                <span >{formState.errors.stock?.message}</span>

                <label >Image:</label>
                {/* <input type="file" accept="image/*" {...register("image")} required/> { /* accept will accept only image */ } {/* Native Validation */}
                <input type="file" accept="image/*" {...register("image",{
                    required: {value:true, message: "Missing Image"},
                })}/>
                <span >{formState.errors.image?.message}</span>

                <button >Add</button>
                

            </form>
        </div>
    );
}

export default AddProduct;
