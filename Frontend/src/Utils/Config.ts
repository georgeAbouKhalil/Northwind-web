abstract class Config {
    public urls = {
        products: "",
        productImages: "",
        productsDelayed: "",
        register: "",
        login: "",
    }

    public constructor(baseUrl: string){
        this.urls = {
            products: baseUrl + "products/",
            productImages: baseUrl + "products/images/",
            productsDelayed: baseUrl + "products/delayed/",
            register: baseUrl + "auth/register/",
            login: baseUrl + "auth/login/",
        };
    }
}

class DevelopmentConfig extends Config {
    public constructor(){
        super("http://localhost:3001/api/");
    }
}

class ProductionConfig extends Config {
    public constructor(){
        super("https://northwind-website-by-george.herokuapp.com/api/");
    }
}


const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;