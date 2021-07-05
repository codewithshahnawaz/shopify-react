import React, { useContext, useEffect } from "react";
import { shopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image, Center } from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import { RichText } from "../components/RichText";
import { ImageWithText } from "../components/ImageWithText";
export const Home = () => {
  const { fetchAllProducts, products } = useContext(shopContext);
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <Box>Loading...</Box>;
  return (
    <Box>
      <Hero />
      <RichText heading="The relaxation you’ve been waiting for." text="Our Bath bombs guarantee a fun, relaxing, and colorful night."/>
      <Grid
        templateColumns={["repeat(1,1fr)", "repeat(3,1fr)"]}
        gap={["1", "0"]}
      >
        {products.map((product) => (
          <Box
            _hover={{ opacity: "80%" }}
            textAlign="center"
            position="relative"
          >
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Image src={product.images[0].src} />
              <Center position="absolute" bottom="5%" flexDir="column" w="100%">
                <Text>{product.title}</Text>
                <Text color="gray.500">${product.variants[0].price}</Text>
              </Center>
            </Link>
          </Box>
        ))}
      </Grid>
      <RichText heading="Treat yourself!" />
      <ImageWithText
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
        heading="Heading"
        text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. "
      />
      <ImageWithText
        reverse
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758"
        heading="Second Heading"
        text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. "
      />
    </Box>
  );
};
