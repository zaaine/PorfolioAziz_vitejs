import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Heading,
  Divider,
  Button,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import bookieImage from "../assets/images/home_img/Bookie.webp";

// Utilisation de import.meta.glob pour charger les images dynamiquement
const images = import.meta.glob(
  "../assets/images/home_img/*.{png,jpg,jpeg,webp}"
);

async function loadImage(imageName) {
  const imageModule = await images[
    `../assets/images/home_img/${imageName}`
  ]?.();
  return imageModule ? imageModule.default : null;
}

export default function Cards({ project }) {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (project.id !== 1) {
      loadImage(project.image).then((src) => setImageSrc(src));
    }
  }, [project.image, project.id]);

  const goToDescription = () => {
    navigate(`/description/${project.id}`);
  };

  return (
    <Card
      key={project.id}
      maxW={{ base: "100%", sm: "sm", md: "md", lg: "lg" }}
      m="4"
      height="auto"
      width="auto"
      css={css`
        @media (max-width: 400px) {
          height: auto;
          width: 100%;
        }
      `}
    >
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Image
          src={project.id === 1 ? bookieImage : imageSrc}
          alt={project.name}
          borderRadius="lg"
          height="210px"
          width="438px"
          min-width="100%"
          loading="lazy"
        />
        <Stack mt="6" spacing="3" flexGrow="1">
          <Heading size="md" noOfLines={2}>
            {project.name}
          </Heading>
          <Text noOfLines={3}>{project.description}</Text>
          <Text color="blue.600" fontSize="sm">
            Langages utilisés : {project.languages.join(", ")}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup
          spacing="2"
          mt="1rem"
          mb="1rem"
          display="inline-flex"
          justifyContent="space-around"
          alignItems="baseline"
          alignContent="center"
          flexDirection="row"
          width="100%"
          p="1"
        >
          <Button
            variant="solid"
            colorScheme="blue"
            bg="blue.700"
            onClick={goToDescription}
          >
            Description
          </Button>
          <a href={project.Link_Git} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" colorScheme="blue">
              Mon code Git
            </Button>
          </a>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
