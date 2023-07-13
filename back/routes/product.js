import express from "express";
import { getProduct,  getSpecificProduct, createProduct, updateProduct, deleteProduct} from "../controllers/product.js";
import auth from "../middleware/auth.js";
const router = express.Router({mergeParams: true});

router.get("/", getProduct);
router.get('/:id',  getSpecificProduct);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
