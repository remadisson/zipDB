"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 2701;
app.get('/*', (req, res) => {
    res.send({
        status: 200,
        message: "Welcome to zipDB. Currently this service will only provide Information for DACH (Germany, Austria and Switzerland). If you want to use this API, then consider contacting remadisson somewhere.",
        request: (req.params == null ? "Empty" : req.params)
    });
});
app.listen(port, () => {
    console.log("Server is listening on Port: " + port);
});
//# sourceMappingURL=index.js.map