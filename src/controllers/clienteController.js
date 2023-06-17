import { cliente } from "../models/cliente.js";

export const getCliente = async (req, res) => {
  try {
    const respuesta = await cliente.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createCliente = async (req, res) => {
  try {
    const { id,contraseña,correo,dni} = req.body;
    //if (cliente) {
    //  return res.status(400).json({ message: "Cliente ya existe" });
   // }
    const nuevoCliente = await cliente.create({
      id,
      contraseña,
      correo,
      dni
    });
    res.status(201).json({
      message: "Cliente creado Correctamente",
      data: nuevoCliente,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await cliente.findOne({ where: { id } });
    if (!cliente)
      return res.status(404).json({ message: "Cliente no encontrado" });
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await cliente.findOne({ where: { id } });
    if (!cliente)
      return res.status(404).json({ message: "Cliente no encontrado" });
    await cliente.destroy({ where: { id } });
    res.status(200).json({ message: "Cliente eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { contraseña,correo,dni } = req.body;
    const cliente = await cliente.findOne({ where: { id } });
    if (!cliente)
      return res.status(404).json({ message: "Cliente no encontrado" });
    await cliente.update({ contraseña,correo,dni }, { where: { id } });
    res.status(200).json({ message: "Cliente actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

