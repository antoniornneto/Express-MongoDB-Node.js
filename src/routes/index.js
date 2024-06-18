import express from "express";
import livros from "./autoresRoutes.js";
import autores from "./livrosRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de node.js"));

  app.use(express.json(), livros, autores);
};

export default routes;
