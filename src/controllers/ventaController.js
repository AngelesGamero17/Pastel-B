import { venta } from "../models/venta.js";

export const getVenta = async (req, res) => {
  try {
    const respuesta = await venta.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createVenta = async (req, res) => {
  try {
    const { id,idUsuario,idCliente,fechaVenta,total,igv} = req.body;
    //if (cliente) {
    //  return res.status(400).json({ message: "Cliente ya existe" });
   // }
    const nuevoVenta = await venta.create({
      id,
      idUsuario,
      idCliente,
      fechaVenta,
      total,
      igv
    });
    res.status(201).json({
      message: "Venta creado Correctamente",
      data: nuevoVenta,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneVenta = async (req, res) => {
  try {
    const { id } = req.params;
    const venta = await venta.findOne({ where: { id } });
    if (!venta)
      return res.status(404).json({ message: "venta no encontrado" });
    res.status(200).json(venta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteVenta = async (req, res) => {
  try {
    const { id } = req.params;
    const venta = await venta.findOne({ where: { id } });
    if (!venta)
      return res.status(404).json({ message: "venta no encontrado" });
    await venta.destroy({ where: { id } });
    res.status(200).json({ message: "venta eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateVenta = async (req, res) => {
  try {
    const { id } = req.params;
    const { idUsuario,idCliente,fechaVenta,total,igv } = req.body;
    const venta = await venta.findOne({ where: { id } });
    if (!venta)
      return res.status(404).json({ message: "venta no encontrado" });
    await venta.update({ idUsuario,idCliente,fechaVenta,total,igv}, { where: { id } });
    res.status(200).json({ message: "venta actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

