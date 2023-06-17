import { proveedor } from "../models/proveedor.js";

export const getProveedor = async (req, res) => {
  try {
    const respuesta = await proveedor.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createProveedor = async (req, res) => {
  try {
    const { id,identificador,telefono,nombre,descripcion } = req.body;
    //if (cliente) {
    //  return res.status(400).json({ message: "Cliente ya existe" });
   // }
    const nuevoProveedor = await item.create({
      id,
      identificador,
      telefono,
      nombre,
      descripcion
    });
    res.status(201).json({
      message: "Proveedor creado Correctamente",
      data: nuevoProveedor,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const proveedor = await proveedor.findOne({ where: { id } });
    if (!proveedor)
      return res.status(404).json({ message: "proveedor no encontrado" });
    res.status(200).json(proveedor);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const proveedor = await proveedor.findOne({ where: { id } });
    if (!proveedor)
      return res.status(404).json({ message: "proveedor no encontrado" });
    await proveedor.destroy({ where: { id } });
    res.status(200).json({ message: "proveedor eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const { identificador,telefono,nombre,descripcion } = req.body;
    const proveedor = await proveedor.findOne({ where: { id } });
    if (!proveedor)
      return res.status(404).json({ message: "proveedor no encontrado" });
    await proveedor.update({ identificador,telefono,nombre,descripcion }, { where: { id } });
    res.status(200).json({ message: "proveedor actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

