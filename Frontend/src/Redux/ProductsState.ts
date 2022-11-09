import ProductModel from "../Models/ProductModel";

// Products AooState:
export class ProductState{
    public products: ProductModel[] = [];
}

// Products ActionType - Which actions we can perform on the data:
export enum ProductsActionType {
    fetchProducts = "fetchProducts", // Must be a string
    AddProduct = "AddProduct",
    UpdateProduct = "UpdateProduct",
    DeleteProduct = "DeleteProduct"
    //...
}

// Products Action - A single object containing data to perform for a single ActionType
export interface ProductAction {
    type: ProductsActionType; // The action type
    payload: any; // The action date
}

// Products Action Creators - funcations for creating object for sending to duspatch
export function fetchProductAction(products: ProductModel[]): ProductAction {
    return{ type: ProductsActionType.fetchProducts, payload: products };
}

export function addProductAction(productToAdd: ProductModel): ProductAction {
    return { type: ProductsActionType.AddProduct, payload: productToAdd };
}

export function updateProductAction(productToUpdate: ProductModel): ProductAction {
    return { type: ProductsActionType.UpdateProduct, payload: productToUpdate };
}

export function deleteProductAction(idToDelete: number): ProductAction {
    return { type: ProductsActionType.DeleteProduct, payload: idToDelete };
}

//Products Reducer - the funcation actually performing the operations:
export function productsReducer(currentProductState: ProductState = new ProductState(), action: ProductAction): ProductState{

    //Duplicate the current products state int a new one:
    const newProductState = { ...currentProductState };
    // ...

    switch(action.type){

        case ProductsActionType.fetchProducts: //Here action.payload is products array download from the server
            newProductState.products = action.payload;
            break;

        case ProductsActionType.AddProduct: //Here action.payload is a single product to add
            newProductState.products.push(action.payload);
            break;

        case ProductsActionType.UpdateProduct: //Here action.payload is a single product to update
            const indexToUpdate = newProductState.products.findIndex(p => p.id === action.payload.id);
            newProductState.products[indexToUpdate] = action.payload;
            break;

        case ProductsActionType.DeleteProduct: //Here action.payload is the of the product to delete
            const indexToDelete = newProductState.products.findIndex(p => p.id === action.payload);
            newProductState.products.splice(indexToDelete, 1); // 1 = delete only item
            break;
    }

    return newProductState;
}