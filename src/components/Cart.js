import React, { useContext, useEffect } from "react";
import { shopContext } from "../context/shopContext";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  Grid,
  Flex,
  Image,
  Link,
  Box,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
export const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem } =
    useContext(shopContext);

  return (
    <>
      <Drawer isOpen={isCartOpen} placement="right" onClose={closeCart}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            {checkout.lineItems?.length ? (
              checkout.lineItems.map((item) => (
                <Grid templateColumns="repeat(4,1fr)" gap={1} key={item.id}>
                  <Flex alignItems="center" justifyContent="center">
                    <CloseIcon
                      cursor="pointer"
                      onClick={() => removeLineItem(item.id)}
                    />
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Image src={item.variant.image.src} />
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Text>{item.title}</Text>
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Text>{item.variant.price}</Text>
                  </Flex>
                </Grid>
              ))
            ) : (
              <Box w="100%" h="100%">
                <Flex flexDir="column" alignItems="center" justifyContent="center" h="100%" w="100%">
                  Your Cart is Empty!
                </Flex>
              </Box>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" display={checkout.lineItems?.length ? "block" : "none"} mr={3} w="100%">
              <Link w="100%" href={checkout.webUrl}>
                Checkout
              </Link>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
