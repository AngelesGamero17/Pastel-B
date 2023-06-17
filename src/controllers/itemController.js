import { item } from "../models/item.js";

export const getItem = async (req, res) => {
  try {
    const respuesta = await item.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createItem = async (req, res) => {
  try {
    const { id,idTipoItem,idCategoria,nombre,tipoPrecio,stock,descripcion,fechaVencimiento } = req.body;
    //if (cliente) {
    //  return res.status(400).json({ message: "Cliente ya existe" });
   // }
    const nuevoItem = await detalleCompra.create({
      id,
      idTipoItem,
      idCategoria,
      nombre,
      tipoPrecio,
      stock,
      descripcion,
      fechaVencimiento
    });
    res.status(201).json({
      message: "Item creado Correctamente",
      data: nuevoItem,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await item.findOne({ where: { id } });
    if (!item)
      return res.status(404).json({ message: "item no encontrado" });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await item.findOne({ where: { id } });
    if (!item)
      return res.status(404).json({ message: "item no encontrado" });
    await item.destroy({ where: { id } });
    res.status(200).json({ message: "Item eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { idTipoItem,idCategoria,nombre,tipoPrecio,stock,descripcion,fechaVencimiento } = req.body;
    const item = await item.findOne({ where: { id } });
    if (!item)
      return res.status(404).json({ message: "item no encontrado" });
    await item.update({ idTipoItem,idCategoria,nombre,tipoPrecio,stock,descripcion,fechaVencimiento}, { where: { id } });
    res.status(200).json({ message: "Item actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

