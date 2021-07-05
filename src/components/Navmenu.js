import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { shopContext } from "../context/shopContext";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Flex,
  Text,
  Center,
} from "@chakra-ui/react";
export const Navmenu = () => {
  const { isMenuOpen, closeMenu } = useContext(shopContext);
  return (
    <Box>
      <Drawer isOpen={isMenuOpen} placement="left" onClose={closeMenu}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textTransform="uppercase">Shop With Shan</DrawerHeader>

          <DrawerBody w="100%" p="1rem">
            <Flex
              justifyContent="center"
              h="100%"
              w="100%"
              flexDir="column"
              textAlign="center"
            >
              <Link to="/" w="100%">
                <Text
                  borderTop="0.1rem solid #333"
                  _hover={{ opacity: "80%" }}
                  borderBottom="0.1rem solid #333"
                  px="5rem"
                  py="1rem"
                  w="100%"
                >
                  Home
                </Text>
              </Link>
              <Link to="/" w="100%">
                <Text _hover={{ opacity:"80%"}} borderBottom="0.1rem solid #333" px="5rem" py="1rem" w="100%">Contact</Text>
              </Link>
              <Link to="/" w="100%">
                <Text _hover={{ opacity:"80%"}} borderBottom="0.1rem solid #333" px="5rem" py="1rem" w="100%">About</Text>
              </Link>
            </Flex>
          </DrawerBody>
          <DrawerFooter  textAlign="center">
            <Center  w="100%">
              <Text  p="1rem">
                Copyright &copy; codewithshan {new Date().getFullYear()}
              </Text>
            </Center>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
