import { detalleCompra } from "../models/detalleCompra.js";

export const getDetalleCompra = async (req, res) => {
  try {
    const respuesta = await detalleCompra.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createDetalleCompra = async (req, res) => {
  try {
    const { id,idItem,idCompra,stock,precio } = req.body;
    //if (cliente) {
    //  return res.status(400).json({ message: "Cliente ya existe" });
   // }
    const nuevoDetalleCompra = await detalleCompra.create({
      id,
      idItem,
      idCompra,
      stock,
      precio
    });
    res.status(201).json({
      message: "DetalleCompra creado Correctamente",
      data: nuevoDetalleCompra,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneDetalleCompra = async (req, res) => {
  try {
    const { id } = req.params;
    const detalleCompra = await detalleCompra.findOne({ where: { id } });
    if (!detalleCompra)
      return res.status(404).json({ message: "detalleCompra no encontrado" });
    res.status(200).json(detalleCompra);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteDetalleCompra = async (req, res) => {
  try {
    const { id } = req.params;
    const detalleCompra = await detalleCompra.findOne({ where: { id } });
    if (!detalleCompra)
      return res.status(404).json({ message: "detalleCompra no encontrado" });
    await detalleCompra.destroy({ where: { id } });
    res.status(200).json({ message: "DetalleCompra eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateDetalleCompra = async (req, res) => {
  try {
    const { id } = req.params;
    const { idItem,idCompra,stock,precio } = req.body;
    const detalleCompra = await detalleCompra.findOne({ where: { id } });
    if (!detalleCompra)
      return res.status(404).json({ message: "detalleCompra no encontrado" });
    await detalleCompra.update({ idItem,idCompra,stock,precio }, { where: { id } });
    res.status(200).json({ message: "detalleCompra actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

