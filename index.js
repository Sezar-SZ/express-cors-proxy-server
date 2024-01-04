import express from "express";
import request from "request";

const app = express();

app.use("/api", function (req, res) {
    req.pipe(request(process.env.URL + req.url)).pipe(res);
});

app.listen(process.env.PORT || 5000);
