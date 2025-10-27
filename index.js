// =============================
// 💊 Pharma Max — Serveur local
// =============================
import express from "express";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Reconstituer __dirname (compatibilité ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  const articles = [
    { code: "ART001", designation: "Paracétamol 500 mg", stock: 50, prix: 1500, tva: "Oui" },
    { code: "ART002", designation: "Ibuprofène 400 mg", stock: 30, prix: 2000, tva: "Non" }
  ];
  res.render("index", { articles });
});

app.listen(PORT, "localhost", () => {
  console.log(`🚀 Serveur local lancé sur http://localhost:${PORT}`);
});
