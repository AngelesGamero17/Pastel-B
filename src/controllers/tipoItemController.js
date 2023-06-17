import {tipoItem } from "../models/tipoItem.js";

export const getTipoItem = async (req, res) => {
  try {
    const respuesta = await tipoItem.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createTipoItem = async (req, res) => {
  try {
    const { id,nombreItem} = req.body;
    //if (cliente) {
    //  return res.status(400).json({ message: "Cliente ya existe" });
   // }
    const nuevoTipoItem = await detalleCompra.create({
      id,
      nombreItem
    });
    res.status(201).json({
      message: "tipoItem creado Correctamente",
      data: nuevoTipoItem,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneTipoItem = async (req, res) => {
  try {
    const { id } = req.params;
    const tipoItem = await tipoItem.findOne({ where: { id } });
    if (!tipoItem)
      return res.status(404).json({ message: "tipoItem no encontrado" });
    res.status(200).json(tipoItem);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteTipoItem = async (req, res) => {
  try {
    const { id } = req.params;
    const tipoItem = await tipoItem.findOne({ where: { id } });
    if (!tipoItem)
      return res.status(404).json({ message: "tipoItem no encontrado" });
    await tipoItem.destroy({ where: { id } });
    res.status(200).json({ message: "tipoItem eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTipoItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombreItem } = req.body;
    const tipoItem = await tipoItem.findOne({ where: { id } });
    if (!tipoItem)
      return res.status(404).json({ message: "tipoItem no encontrado" });
    await tipoItem.update({ nombreItem }, { where: { id } });
    res.status(200).json({ message: "tipoItem actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

