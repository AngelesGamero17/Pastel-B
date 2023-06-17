import { compra } from "../models/compra.js";

export const getCompra = async (req, res) => {
  try {
    const respuesta = await compra.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createCompra = async (req, res) => {
  try {
    const { id,idProveedor,fechaCompra,igv,total } = req.body;
    //if (cliente) {
    //  return res.status(400).json({ message: "Cliente ya existe" });
   // }
    const nuevoCompra = await clienteModel.create({
      id,
      idProveedor,
      fechaCompra,
      igv,
      total
    });
    res.status(201).json({
      message: "Compra creado Correctamente",
      data: nuevoCompra,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneCompra = async (req, res) => {
  try {
    const { id } = req.params;
    const compra = await compra.findOne({ where: { id } });
    if (!compra)
      return res.status(404).json({ message: "Compra no encontrado" });
    res.status(200).json(compra);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteCompra = async (req, res) => {
  try {
    const { id } = req.params;
    const compra = await compra.findOne({ where: { id } });
    if (!compra)
      return res.status(404).json({ message: "compra no encontrado" });
    await compra.destroy({ where: { ID } });
    res.status(200).json({ message: "Compra eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateCompra = async (req, res) => {
  try {
    const { id } = req.params;
    const { idProveedor,fechaCompra,igv,total } = req.body;
    const compra = await compra.findOne({ where: { id } });
    if (!compra)
      return res.status(404).json({ message: "Compra no encontrado" });
    await compra.update({ idProveedor,fechaCompra,igv,total }, { where: { id } });
    res.status(200).json({ message: "compra actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

