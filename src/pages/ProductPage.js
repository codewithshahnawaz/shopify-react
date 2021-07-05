import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Grid,
  Text,
  Image,
  Button,
  Heading,
  Flex,
  Center,
} from "@chakra-ui/react";
import { shopContext } from "../context/shopContext";

export const ProductPage = () => {
  const { handle } = useParams();

  const { fetchProductWithHandle, addItemToCheckOut, product } =
    useContext(shopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title) return <div>Loading...</div>;

  return (
    <Box w="100%">
      <Grid templateColumns={["repeat(1,1fr)", "repeat(2,1fr)"]} p={["1.5rem","4rem"]}>
        <Image src={product.images[0].src} />
        <Box>
          <Center
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            w="100%"
            h="100%"
          >
            <Box w={["100%", "70%"]} textAlign="center">
              <Heading textAlign="center" pb="2rem" pt={["2rem", "0"]}>{product.title}</Heading>
              <Text pb="2rem" fontWeight="bold">${product.variants[0].price}</Text>
              <Text pb="2rem" color="gray.500" w="100%">{product.description}</Text>
              <Button
                onClick={() => addItemToCheckOut(product.variants[0].id, 1)}
                backgroundColor="#FFA8E2"
                color="#fff"
                width="100%"
                p="2rem"
                _hover={{opacity:"70%"}}
              >
                Add To Cart
              </Button>
            </Box>
          </Center>
        </Box>
      </Grid>
    </Box>
  );
};
