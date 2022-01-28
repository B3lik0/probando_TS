"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUsuarios = (req, res) => {
    res.json({
        msg: "soy una respuesta",
    });
};
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "soy una respuesta",
        id,
    });
};
const postUsuario = (req, res) => {
    const { body } = req;
    res.json({
        msg: "soy una respuesta",
        body,
    });
};
const putUsuario = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "soy una respuesta",
        body,
    });
};
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "deleteado",
        id,
    });
};
//# sourceMappingURL=usuario.js.map