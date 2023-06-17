import { usuario } from "../models/usuario.js";
import { encriptarContrasena } from "../libs/encryptPassword.js";
import config from "../config.js";
import  jwt  from "jsonwebtoken";

export const getUsuario = async (req, res) => {
  try {
    const respuesta = await usuario.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createUsuario = async (req, res) => {
  try {
    let { id,nombres,apellidoMaterno,apellidoPaterno,email,password,celular,dni,tipoUsuario} = req.body;
    //if (cliente) {
    //  return res.status(400).json({ message: "Cliente ya existe" });
   // }
   password = await encriptarContrasena(password)

    const nuevoUsuario = await usuario.create({
      id,
      nombres,
      apellidoMaterno,
      apellidoPaterno,
      email,
      password,
      celular,
      dni,
      tipoUsuario
    });  
    const token = jwt.sign({id: nuevoUsuario.id}, config.JWT_SECRET,{
      expiresIn: "24h"
    }) 
    res.json({
      message:'autoentificacion exitosa',
      token: token
    }) // aquí se envía la respuesta al cliente con el token
  } catch (error) {
    res.status(500).json({ message: "Error al generar el token" });
  }
};

export const getOneUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await usuario.findOne({ where: { id } });
    if (!usuario)
      return res.status(404).json({ message: "usuario no encontrado" });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await usuario.findOne({ where: { id } });
    if (!usuario)
      return res.status(404).json({ message: "usuario no encontrado" });
    await usuario.destroy({ where: { id } });
    res.status(200).json({ message: "usuario eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const {nombres,apellidoMaterno,apellidoPaterno,email,password,celular,dni,tipoUsuario } = req.body;
    const usuario = await usuario.findOne({ where: { id } });
    if (!usuario)
      return res.status(404).json({ message: "usuario no encontrado" });
    await usuario.update({nombres,apellidoMaterno,apellidoPaterno,email,password,celular,dni,tipoUsuario }, { where: { id } });
    res.status(200).json({ message: "detalleCompra actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

