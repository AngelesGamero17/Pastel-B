import express from 'express';
import config from "./config.js";
import indexRouter from "./routes/index.routes.js";
import categoriaRouter from "./routes/categoria.routes.js";
import clienteRouter from "./routes/cliente.routes.js";
import compraRouter from "./routes/compra.routes.js";
import detalleCompraRouter from "./routes/detalleCompra.routes.js";
import detalleVentaRouter from "./routes/detalleVenta.routes.js";
import itemRouter from "./routes/item.routes.js";
import proveedorRouter from "./routes/proveedor.routes.js";
import tipoItemRouter from "./routes/tipoItem.routes.js";
import tipoUsuarioRouter from "./routes/tipoUsuario.routes.js";
import usuarioRouter from "./routes/usuario.routes.js";
import ventaRouter from "./routes/venta.routes.js";
import loginRouter from "./routes/login.routes.js"

import path from 'path';
const __dirname = path.resolve();

const app =  express();
import cors from 'cors';
app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000'
}));

//midellewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set("port" , config.APP_PORT);
app.set("host", config.APP_HOST);

//routes
app.use("/", indexRouter);
app.use(`/api/${config.API_VERSION}/categoria`, categoriaRouter);
app.use(`/api/${config.API_VERSION}/cliente`, clienteRouter);
app.use(`/api/${config.API_VERSION}/compra`, compraRouter);
app.use(`/api/${config.API_VERSION}/detalleCompra`, detalleCompraRouter);
app.use(`/api/${config.API_VERSION}/detalleVenta`, detalleVentaRouter);
app.use(`/api/${config.API_VERSION}/item`, itemRouter);
app.use(`/api/${config.API_VERSION}/proveedor`, proveedorRouter);
app.use(`/api/${config.API_VERSION}/tipoItem`, tipoItemRouter);
app.use(`/api/${config.API_VERSION}/tipoUsuario`, tipoUsuarioRouter);
app.use(`/api/${config.API_VERSION}/usuario`, usuarioRouter);
app.use(`/api/${config.API_VERSION}/venta`, ventaRouter);
app.use(`/api/${config.API_VERSION}/login`, loginRouter);

//export

import routerCategoria from './routes/categoria.routes.js';
app.use('/api/v1/categoria', routerCategoria)
import routerCliente from './routes/cliente.routes.js';
app.use('/api/v1/cliente', routerCliente)
import routerCompra from './routes/compra.routes.js';
app.use('/api/v1/compra', routerCompra)
import routerDetalleCompra from './routes/detalleCompra.routes.js';
app.use('/api/v1/detalleCompra', routerDetalleCompra)
import routerDetalleVenta from './routes/detalleVenta.routes.js';
app.use('/api/v1/detalleVenta', routerDetalleVenta)
import routerItem from './routes/item.routes.js';
app.use('/api/v1/item', routerItem)
import routerProveedor from './routes/proveedor.routes.js';
app.use('/api/v1/proveedor', routerProveedor)
import routerTipoItem from './routes/tipoItem.routes.js';
app.use('/api/v1/tipoItem', routerTipoItem)
import routerTipoUsuario from './routes/tipoUsuario.routes.js';
app.use('/api/v1/tipoUsuario', routerTipoUsuario)
import routerUsuario from './routes/usuario.routes.js';
app.use('/api/v1/usuario', routerUsuario)
import routerVenta from './routes/venta.routes.js';
app.use('/api/v1/venta', routerVenta)
import routerLogin from './routes/login.routes.js';
app.use('/api/v1/login', routerLogin)

export default app;