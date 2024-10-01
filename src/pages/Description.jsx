import { useState, useEffect } from "react";
import { Button, Tooltip } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import data from "../assets/BDD_JSON/presentation_projects.json";
import "../styles/_pages.scss/Description.scss";

// Charger les images du dossier landscape_img et screenshots
const landscapeImages = import.meta.glob(
  "../assets/images/landscape_img/*.{png,jpg,jpeg,webp}"
);
const screenshotsImages = import.meta.glob(
  "../assets/images/screenshots/*.{png,jpg,jpeg,webp}"
);

async function loadImage(imageName, imageCollection) {
  const imagePath = Object.keys(imageCollection).find((path) =>
    path.includes(imageName)
  );
  if (imagePath) {
    const imageModule = await imageCollection[imagePath]();
    return imageModule.default;
  }
  return null;
}

export default function Description() {
  const { id } = useParams(); // Récupérer l'ID depuis l'URL
  const [project, setProject] = useState(null); // État pour stocker le projet sélectionné
  const [landscapeImage, setLandscapeImage] = useState(null);
  const [screenshotImage, setScreenshotImage] = useState(null);

  useEffect(() => {
    const projectId = parseInt(id, 10);

    const selectedProject = data.presentation_projects.find(
      (proj) => proj.id === projectId
    );
    setProject(selectedProject);

    if (selectedProject) {
      // Charger les images dynamiquement
      loadImage(selectedProject.landscape, landscapeImages).then(
        setLandscapeImage
      );
      loadImage(selectedProject.screenshot, screenshotsImages).then(
        setScreenshotImage
      );
    }
  }, [id]);

  if (!project) {
    return <p>Projet non trouvé</p>;
  }

  return (
    <div className="contenaire-description">
      {landscapeImage && (
        <img
          src={landscapeImage}
          alt={`${project.name} Landscape`}
          className="description-image_landscape"
          loading="lazy"
        />
      )}
      <h1 className="description_title">{project.name}</h1>

      <div className="contenaire-texts">
        <h2>
          <strong>Mission :</strong>
        </h2>
        <p className="description_text">{project.Mission}</p>

        <h2>
          <strong>Description :</strong>
        </h2>
        <p className="description_text">{project.description}</p>

        <h2>
          <strong>Livraison :</strong>
        </h2>
        <p className="description_text">{project.livraison}</p>

        <p className="description_text">
          <strong>Langages utilisés :</strong> {project.languages.join(", ")}
        </p>

        {screenshotImage && (
          <img
            src={screenshotImage}
            alt={`${project.name} Screenshot`}
            className="description-image_screenshot"
            loading="lazy"
          />
        )}
      </div>

      <div className="contenaire_buttons">
        {project.link_projet && (
          <Tooltip label="Visiter le site" aria-label="infobulle link">
            <a
              href={project.link_projet}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                colorScheme="blue"
                rounded="full"
                px={6}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Site Web
              </Button>
            </a>
          </Tooltip>
        )}

        <Tooltip label="Voir le code Git" aria-label="infobulle GitHub">
          <a href={project.Link_Git} target="_blank" rel="noopener noreferrer">
            <Button
              colorScheme="blue"
              rounded="full"
              px={6}
              _hover={{
                bg: "blue.500",
              }}
            >
              GitHub
            </Button>
          </a>
        </Tooltip>
      </div>
    </div>
  );
}
