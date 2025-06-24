import { Request,Response } from "express";
import * as ProducModel from '../models/productModel'
import { Product } from '../models/productModel';

export const getAllProducts = async(req: Request, res: Response):Promise<void>=>{
    try{
        const allProducts = await ProducModel.getAllProducts()
        res.status(200).json(allProducts)
    }catch(err){
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const getProductbyId = async(req: Request, res: Response):Promise<void>=>{
    try{
        const id = parseInt(req.params.id)
        const product = await ProducModel.getProductbyId(id)
        if(product){
            res.status(200).json(product)
        }
        else{
            res.status(404).json({error: 'product not found'})
        }
    }catch(err){
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const addProduct = async(req: Request, res: Response):Promise<void>=>{
    try{
        const newProduct:Product = req.body
        const id = await ProducModel.addProduct(newProduct)
        res.status(200).json({id:id})
    }catch(err){
        res.status(500).json({ error: 'Internal Server Error' })
    }
}