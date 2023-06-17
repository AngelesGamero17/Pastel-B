import { tipoUsuario } from "../models/tipoUsuario.js";

export const getTipoUsuario = async (req, res) => {
  try {
    const respuesta = await tipoUsuario.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createTipoUsuario = async (req, res) => {
  try {
    const { id,rol} = req.body;
    //if (cliente) {
    //  return res.status(400).json({ message: "Cliente ya existe" });
   // }
    const nuevoTipoUsuario = await tipoUsuario.create({
      id,
      rol
    });
    res.status(201).json({
      message: "TipoUsuario creado Correctamente",
      data: nuevoTipoUsuario,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneTipoUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const tipoUsuario = await tipoUsuario.findOne({ where: { id } });
    if (!tipoUsuario)
      return res.status(404).json({ message: "tipoUsuario no encontrado" });
    res.status(200).json(tipoUsuario);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteTipoUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const tipoUsuario = await tipoUsuario.findOne({ where: { id } });
    if (!tipoUsuario)
      return res.status(404).json({ message: "tipoUsuario no encontrado" });
    await tipoUsuario.destroy({ where: { id } });
    res.status(200).json({ message: "tipoUsuario eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTipoUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { rol} = req.body;
    const tipoUsuario = await tipoUsuario.findOne({ where: { id } });
    if (!tipoUsuario)
      return res.status(404).json({ message: "tipoUsuario no encontrado" });
    await tipoUsuario.update({ rol }, { where: { id } });
    res.status(200).json({ message: "tipo Usuario actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

