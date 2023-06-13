import express from 'express';
import bodyParser from 'body-parser';

import {zipRoute} from "./routes/zipRouteHandler";

const app = express();
const port = 2701;

app.use(bodyParser.json());

app.use('/zip', zipRoute);

app.get('/*', (req, res) => {
    res.send({
        status: 200,
        message: "Welcome to zipDB. Currently this service will only provide Information for DACH (Germany, Austria and Switzerland). If you want to use this API, then consider contacting remadisson somewhere."
    });
});

app.listen(port, () => {
    console.log("Server is listening on Port: " + port);
});