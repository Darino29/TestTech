import ProductModel from "../models/product.js";
import express from "express";

const router = express.Router();
// a faire
export const getProduct = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) { res.status(404).send({ message: error.message }); }
};

export const getSpecificProduct = async (req, res) => {
  const email = req.params.id;
  try {
    const existingProduct = await ProductModel.findOne({ email: email });
    if (!existingProduct) {
      res.statusMessage = "contact us your Product doesn't exists";
      return res.status(404).send("contact us your Product doesn't exists");
    }
    res.status(200).json(existingProduct);
  } catch (error) { res.status(404).send({ message: error.message }); }
};

export const updateProduct = async (req, res) => {
  try {
    const _id = req.params.id
    res.status(200).json(await ProductModel.findOneAndUpdate({_id}, {...req.body}));
  } catch (error) { res.status(404).send({ message: error.message }); }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  try {
    const newProduct = new ProductModel(product);
    res.status(201).json(await newProduct.save());
  } catch (error) { res.status(409).send({ message: error.message }); }
};

export const deleteProduct = async (req, res) => {
  try {
    console.log('Hello World')
    res.status(200).json(await ProductModel.findOneAndDelete({ _id: req.params.id }));
  } catch (error) { res.status(404).send({ message: error.message }); }
};

export default router;
