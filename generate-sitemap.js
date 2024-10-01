import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Définir l'URL de base
const hostname = "https://portfolio.zaaine.com";

// Liste des URLs statiques
const staticLinks = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/Portfolio", changefreq: "monthly", priority: 0.8 },
];

// Importer les projets dynamiques
import projectsData from "./src/assets/BDD_JSON/projects.json";

// Générer les liens pour les projets dynamiques
const projectLinks = projectsData.projects.map((project) => ({
  url: `/description/${project.id}`,
  changefreq: "monthly",
  priority: 0.7,
  lastmod: project.lastmod,
}));

// Combiner les liens statiques et dynamiques
const links = [...staticLinks, ...projectLinks];

// Fonction pour générer le sitemap
const generateSitemap = async () => {
  try {
    const stream = new SitemapStream({ hostname });
    const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(
      (data) => data.toString()
    );

    // Résoudre le chemin du fichier sitemap.xml dans le dossier public
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const sitemapPath = path.resolve(__dirname, "public", "sitemap.xml");

    // Écrire le fichier sitemap.xml
    await fs.writeFile(sitemapPath, xml);
    console.log("Sitemap généré avec succès !");
  } catch (error) {
    console.error("Erreur lors de la génération du sitemap :", error);
  }
};

// Exécuter la fonction
generateSitemap();
