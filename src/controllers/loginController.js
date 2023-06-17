import { compararPassword } from "../middlewares/compararPassword.js";
import { usuario } from "../models/usuario.js";
import jwt from 'jsonwebtoken';

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(404).json({ message: "All fields are required" });
        const emailExist = await usuario.findOne({
            where: {
                email: email
            }
        })

        if (emailExist) {
            let passwordIsCorrect = compararPassword(password, emailExist.password)
            if (passwordIsCorrect) {
                const token = jwt.sign({ emailExist }, process.env.JWT_SECRET, {
                    expiresIn: "24h"
                });
                return res.status(200).json({
                    message: "Logueado correctamente",
                    token: token,
                    data: {
                        id: emailExist.ID,
                        tipoUsuario: emailExist.tipoUsuario
                    }
                })
            } else {
                return res.status(200).json({
                    message: "Contraseña incorrecta"
                })
            }
        } else {
            return res.status(200).json({ message: "Usuario no encontrado" })
        }

        res.status(201).json({ message: "Login Correcto", data: emailExist });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

};
