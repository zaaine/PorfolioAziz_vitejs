import { useState, useEffect } from "react";
import { Grid, Image, Box, Text } from "@chakra-ui/react";
import "../styles/_components.scss/About.scss";

// Utilisation de import.meta.glob pour charger toutes les images du dossier about_img
const images = import.meta.glob(
  "../assets/images/about_img/*.{png,jpg,jpeg,svg,webp}"
);

async function loadImages() {
  const imagePromises = Object.keys(images).map(async (path) => {
    const imageModule = await images[path]();
    return {
      path: imageModule.default,
      name: path.replace("../assets/images/about_img/", ""),
    };
  });
  return Promise.all(imagePromises);
}

function About() {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    loadImages().then((result) => setLoadedImages(result));
  }, []);

  return (
    <Box className="about_container">
      <h1 className="about_title">Bienvenue sur mon Portfolio</h1>
      <Text>
        Je m'appelle <strong>Aziz</strong>, développeur web passionné basé à
        Paris. Il y a 5 ans, j'ai découvert l'univers du code, et cela a
        rapidement transformé ma carrière. Aujourd'hui, je me consacre
        pleinement à la création de sites web fonctionnels, modernes et centrés
        sur l'utilisateur, avec une expertise particulière en{" "}
        <strong>React</strong> et <strong>JavaScript</strong>.
      </Text>
      <br />
      <Text>
        Avant de me lancer dans le développement, j'ai travaillé pendant 12 ans
        en tant que Responsable dans diverses structures, où j'ai acquis une
        solide expérience en <strong>management</strong>. J'ai eu l'occasion de
        collaborer avec des équipes aux profils variés, aussi bien en France
        qu'à l'étranger, ce qui m'a permis de développer une grande adaptabilité
        et une richesse humaine. Mon rôle consistait à placer la satisfaction
        client au centre de mes priorités, tout en bâtissant des relations
        solides et durables avec des personnes issues d'horizons différents.
      </Text>
      <br />

      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={7}>
        {loadedImages.slice(0, 6).map((image) => (
          <Image
            key={image.name}
            src={image.path}
            alt={image.name}
            width="355px"
            height="290px"
            borderRadius="md"
            loading="lazy"
          />
        ))}
      </Grid>
      <br />
      <p>
        Ces 12 années d'expérience dans le commerce m'ont permis d'apprendre à
        gérer des projets avec efficacité, tout en gardant l'utilisateur final
        au cœur de mes réflexions. J'ai ensuite décidé de me professionnaliser
        en suivant une formation de 18 mois chez <strong>OpenClassrooms</strong>
        , où j'ai approfondi mes compétences en <strong>React</strong>,{" "}
        <strong>JavaScript</strong>, <strong>HTML</strong>, <strong>CSS</strong>
        , <strong>PHP</strong> et <strong>SASS</strong>. Grâce à cette formation
        et à mon parcours professionnel, j'ai acquis une approche du
        développement web axée sur des solutions simples et efficaces, en
        m'assurant toujours que le produit final réponde parfaitement aux
        besoins de l'utilisateur.
      </p>
      <br />
      <p>
        En dehors du travail, je suis une personne dynamique et curieuse.
        J'adore partir en <strong>randonnée</strong>, découvrir de nouvelles
        cultures lors de <strong>voyages</strong>, et me lancer dans des projets
        de <strong>bricolage</strong> ou de <strong>réparation</strong>. Je
        m'engage également dans des actions de <strong>bénévolat</strong>, car
        contribuer à des causes importantes est pour moi essentiel.
      </p>
      <br />
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={7}>
        {loadedImages.slice(6, 10).map((image) => (
          <Image
            key={image.name}
            src={image.path}
            alt={image.name}
            width="355px"
            height="290px"
            borderRadius="md"
            loading="lazy"
          />
        ))}
      </Grid>
      <br />
      <p>
        Sur ce site, je vous présente mes <strong>projets réalisés</strong> dans
        le cadre de ma formation ainsi que des{" "}
        <strong>projets personnels</strong>. Je continue de{" "}
        <strong>coder régulièrement</strong> de nouveaux projets, que je mets à
        jour dans mon dépôt{" "}
        <a
          href="https://github.com/zaaine"
          title="Visiter mon profil GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="about_link"
        >
          {" "}
          <strong>GitHub</strong>{" "}
        </a>
        , où vous pouvez suivre mon évolution. Je vous invite également à me
        suivre sur les <strong>réseaux sociaux</strong> pour découvrir mes
        dernières réalisations.
      </p>
      <br />
      <p>
        N'hésitez pas à <strong>me contacter</strong> pour discuter de vos idées
        ou de <strong>futurs projets</strong>. Je suis toujours à la recherche
        de nouvelles collaborations créatives et enrichissantes.
      </p>
    </Box>
  );
}

export default About;
