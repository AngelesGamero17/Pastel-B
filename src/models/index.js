import {categoria } from "./categoria.js";
import {cliente} from "./cliente.js";
import {compra} from "./compra.js";
import {detalleCompra} from "./detalleCompra.js";
import {detalleVenta } from "./detalleVenta.js";
import {item} from "./item.js";
import {proveedor} from "./proveedor.js";
import {tipoItem} from "./tipoItem.js";
import {tipoUsuario} from "./tipoUsuario.js";
import {usuario} from "./usuario.js";
import {venta} from "./venta.js";
//relacion 
item.hasMany(tipoItem, { foreignKey: "idTipoItem", sourceKey: "id" });
item.hasMany(categoria, { foreignKey: "idCategoria", sourceKey: "id" });

usuario.hasMany(tipoUsuario, { foreignKey: "tipoUsuario", sourceKey: "id" });

venta.hasMany(cliente, { foreignKey: "idCliente", sourceKey: "id" });
venta.hasMany(usuario, { foreignKey: "idUsuario", sourceKey: "id" });

detalleVenta.hasMany(item, { foreignKey: "idItem", sourceKey: "id" });
detalleVenta.hasMany(venta, { foreignKey: "idVenta", sourceKey: "id" });

compra.hasMany(proveedor, { foreignKey: "idProveedor", sourceKey: "id" });

detalleCompra.hasMany(compra, { foreignKey: "idCompra", sourceKey: "id" });
detalleCompra.hasMany(item, { foreignKey: "idItem", sourceKey: "id" });


