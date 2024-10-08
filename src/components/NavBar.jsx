import { useState, useEffect } from "react";
import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  useMediaQuery,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/_components.scss/NavBar.scss";
import logo from "../assets/profile/AZ_logo.webp";

export default function NavBar() {
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  const [isAboutPage, setIsAboutPage] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleEmail = () => {
    window.location.href =
      "mailto:contact@zaaine.com?subject=Prise de contact&body=Bonjour Aziz,";
  };

  useEffect(() => {
    if (location.pathname === "/about") {
      setIsAboutPage(true);
    } else {
      setIsAboutPage(false);
    }
  }, [location.pathname]);

  const scrollToPortfolio = () => {
    const isHomePage = window.location.pathname === "/";

    if (isHomePage) {
      const projectsSection = document.querySelector("#portfolio");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#portfolio");
    }
  };

  useEffect(() => {
    const changeScroll = () =>
      document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
        ? setScroll(true)
        : setScroll(false);

    window.addEventListener("scroll", changeScroll);

    return () => {
      window.removeEventListener("scroll", changeScroll);
    };
  }, []);

  return (
    <div>
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        h={16}
        boxShadow={scroll ? "base" : "none"}
        zIndex="sticky"
        position="fixed"
        as="header"
        justifyContent={"space-between"}
        alignItems={"center"}
        w="100%"
      >
        <Button variant="ghost">
          <Tooltip
            label="Retour à l'accueil"
            aria-label="infobulle retour accueil"
          >
            <Link to="/">
              <img
                src={logo}
                alt="Retour page accueil"
                className="nav_logo"
                style={{ cursor: "help" }}
              />
            </Link>
          </Tooltip>
        </Button>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7} className="stack_btns">
            {isLargerThanMD ? (
              <>
                {isAboutPage ? (
                  <Button variant="ghost">
                    <Link to="/">Home</Link>
                  </Button>
                ) : (
                  <Button variant="ghost">
                    <Link to="/about">About</Link>
                  </Button>
                )}

                <Button
                  variant="ghost"
                  onClick={scrollToPortfolio}
                  aria-label="infobulle portfolio"
                >
                  Portfolio
                </Button>
                <Button
                  variant="ghost"
                  onClick={handleEmail}
                  aria-label="infobulle contact"
                >
                  Contact
                </Button>
              </>
            ) : null}

            <Button
              onClick={toggleColorMode}
              aria-label="Changer le mode d'affichage"
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            {!isLargerThanMD && (
              <>
                <Button
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  onClick={onOpen}
                  aria-label="Ouvrir le menu"
                />
                <Drawer
                  placement="top"
                  onClose={onClose}
                  isOpen={isOpen}
                  className="Touch"
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerBody>
                      {isAboutPage ? (
                        <Button
                          variant="ghost"
                          px={6}
                          py={4}
                          minW="44px"
                          minH="44px"
                        >
                          <Link
                            to="/"
                            style={{
                              display: "block",
                              minWidth: "44px",
                              minHeight: "44px",
                            }}
                          >
                            Home
                          </Link>
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          px={6}
                          py={4}
                          minW="60px"
                          minH="60px"
                        >
                          <Link
                            to="/about"
                            style={{
                              display: "block",
                              minWidth: "60px",
                              minHeight: "60px",
                            }}
                          >
                            About
                          </Link>
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        onClick={scrollToPortfolio}
                        px={6}
                        py={4}
                        minW="60px"
                        minH="60px"
                      >
                        Portfolio
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={handleEmail}
                        px={6}
                        py={4}
                        minW="60px"
                        minH="60px"
                      >
                        Contact
                      </Button>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </Stack>
        </Flex>
      </Flex>
    </div>
  );
}
