import { categoria} from "../models/categoria.js";

export const getCategoria = async (req, res) => {
  try {
    const respuesta = await categoria.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createCategoria = async (req, res) => {
  try {
    const { id,nombreCategoria } = req.body;
    //if (cliente) {
    //  return res.status(400).json({ message: "Cliente ya existe" });
   // }
    const nuevoCategoria = await categoria.create({
      id,
      nombreCategoria,
    });
    res.status(201).json({
      message: "Categoria creado Correctamente",
      data: nuevoCategoria,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await categoria.findOne({ where: { id } });
    if (!categoria)
      return res.status(404).json({ message: "Categoria no encontrado" });
    res.status(200).json(categoria);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await categoria.findOne({ where: { id } });
    if (!categoria)
      return res.status(404).json({ message: "Categoria no encontrado" });
    await categoria.destroy({ where: { id } });
    res.status(200).json({ message: "Categoria eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombreCategoria} = req.body;
    const categoria = await categoria.findOne({ where: { id } });
    if (!categoria)
      return res.status(404).json({ message: "Categoria no encontrado" });
    await categoria.update({ nombreCategoria }, { where: { id } });
    res.status(200).json({ message: "Categoria actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

