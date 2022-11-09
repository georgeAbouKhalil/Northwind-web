abstract class Config {
    public port: number;
    public mySql = { host: "", user: "", password: "", database: "" };
}

class DevelopmentConfig extends Config {
    public constructor() {
        super();
        this.port = 3001;
        this.mySql = { host: "localhost", user: "root", password: "", database: "Northwind" };
    }
}

class ProductionConfig extends Config {
    public constructor() {
        super();
        this.port = +process.env.PORT;
        this.mySql = { host: "eu-cdbr-west-03.cleardb.net", user: "b3f618843b39bc", password: "fb300926", database: "heroku_2b9701d3770b786" };
    }
}

const config = process.env.ENVIRONMENT === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
