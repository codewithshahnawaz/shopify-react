import React, { useContext, useEffect } from "react";
import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { shopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import { MdMenu, MdShoppingBasket } from "react-icons/md";
export const Navbar = () => {
  const { openCart, openMenu, checkout } = useContext(shopContext);

  return (
    <Flex
      backgroundColor="#FFA8E2"
      alignItems="center"
      justifyContent={"space-between"}
      p="2rem"
    >
      <Icon
        onClick={openMenu}
        fill="white"
        cursor="pointer"
        as={MdMenu}
        w={30}
        h={30}
      />
      <Link to="/">
        <Image
          src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540"
          w={100}
          h={100}
        />
      </Link>
      <Icon
        fill="white"
        onClick={openCart}
        cursor="pointer"
        as={MdShoppingBasket}
        w={30}
        h={30}
      />
    </Flex>
  );
};
