import express from "express";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";

// Configurer __dirname dans un module ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Activer la compression Brotli et Gzip
app.use(compression());

// Servir les fichiers statiques générés par Vite dans le dossier "dist"
app.use(express.static(path.join(__dirname, "dist")));

// Rediriger toutes les autres routes vers index.html (pour une application React/SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Si process.env n'existe pas, définir une variable par défaut pour le port
const PORT = (typeof process !== "undefined" && process.env.PORT) || 4000;

// Démarrer le serveur sur le port
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur le port ${PORT}`);
});
