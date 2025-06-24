import db from '../db'

export interface Product{
    id: number,
    name: string,
    price: number,
    description?: string
}

export const getAllProducts = async(): Promise<Product[]> =>{
    return db('product').select('*')
}

export const getProductbyId = async(id:number): Promise<Product> =>{
    const product = db('Product').where({id}).first()
    if(!product){
        throw new Error('Product not found')
    }
    return product
}

export const addProduct = async(product: Omit<Product,'id'>):Promise<number> =>{
    const [id] = await db('product').insert(product)
    return id
}