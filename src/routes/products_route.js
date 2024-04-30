import { Router } from "express";
import controller from "../controller/product_controller.js";

const router = Router();

router.get("/products", controller.getProducts);
router.get("/products/:id", controller.getProductByID);


export default router;
