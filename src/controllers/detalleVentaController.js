import { detalleVenta } from "../models/detalleVenta.js";

export const getDetalleVenta = async (req, res) => {
  try {
    const respuesta = await detalleVenta.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createDetalleVenta = async (req, res) => {
  try {
    const { id,idItem,cantidad,precio,idVenta } = req.body;
    //if (cliente) {
    //  return res.status(400).json({ message: "Cliente ya existe" });
   // }
    const nuevoDetalleVenta = await detalleVenta.create({
      id,
      idItem,
      cantidad,
      precio,
      idVenta
    });
    res.status(201).json({
      message: "DetalleVenta creado Correctamente",
      data: nuevoDetalleVenta,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneDetalleVenta = async (req, res) => {
  try {
    const { id } = req.params;
    const detalleVenta = await detalleVenta.findOne({ where: { id } });
    if (!detalleVenta)
      return res.status(404).json({ message: "detalleVenta no encontrado" });
    res.status(200).json(detalleVenta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteDetalleVenta = async (req, res) => {
  try {
    const { id } = req.params;
    const detalleVenta = await detalleVenta.findOne({ where: { id } });
    if (!detalleVenta)
      return res.status(404).json({ message: "detalleVenta no encontrado" });
    await detalleVenta.destroy({ where: { id } });
    res.status(200).json({ message: "DetalleVenta eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateDetalleVenta = async (req, res) => {
  try {
    const { id } = req.params;
    const { idItem,cantidad,precio,idVenta } = req.body;
    const detalleVenta = await detalleVenta.findOne({ where: { id } });
    if (!detalleVenta)
      return res.status(404).json({ message: "detalleVenta no encontrado" });
    await detalleVenta.update({ idItem,cantidad,precio,idVenta}, { where: { id } });
    res.status(200).json({ message: "detatlleVenta actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

