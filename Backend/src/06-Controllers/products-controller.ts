import express, { NextFunction, Request, Response } from "express";
import path from "path";
import ProductModel from "../03-Models/product-model";
import logic from "../05-BLL/products-logic";

const router = express.Router();

router.get("/", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const products = await logic.getAllProducts();
        response.json(products);
    }
    catch(err: any) {
        next(err);
    }
});

router.get("/:id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id;
        const product = await logic.getOneProduct(id);
        response.json(product);
    }
    catch(err: any) {
        next(err);
    }
});

// POST
router.post("/", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const product = new ProductModel(request.body);
        const addedProduct = await logic.addProduct(product);
        response.status(201).json(addedProduct);
    }
    catch(err: any) {
        next(err);
    }
});

// PUT
router.put("/:id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id;
        request.body.id = id;
        const product = new ProductModel(request.body);
        const updatedProduct = await logic.updateFullProduct(product);
        response.json(updatedProduct);
    }
    catch(err: any) {
        next(err);
    }
});

router.patch("/:id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id;
        request.body.id = id;
        const product = new ProductModel(request.body);
        const updatedProduct = await logic.updatePartialProduct(product);
        response.json(updatedProduct);
    }
    catch(err: any) {
        next(err);
    }
});

// DELETE
router.delete("/:id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id;
        await logic.deleteProduct(id);
        response.sendStatus(204);
    }
    catch(err: any) {
        next(err);
    }
});

router.get("/images/:imageName", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const imageName = request.params.imageName;
        const absolutePath = path.join(__dirname, "..", "Assets", "Images", "products", imageName);
        response.sendFile(absolutePath);
    }
    catch(err: any) {
        next(err);
    }
});

export default router;