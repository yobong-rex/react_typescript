import { Router } from "express";
import * as ProductConttroler from '../controllers/productController'

const router = Router()

router.get('/product',ProductConttroler.getAllProducts)
router.get('/product/:id',ProductConttroler.getProductbyId)
router.post('/product',ProductConttroler.addProduct)

export default router