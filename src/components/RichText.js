import { Box,Flex, Text, Heading} from '@chakra-ui/react'
import React from 'react'
export const RichText = ({ heading, text}) => {
    return (
        <Box h="100%">
            <Flex alignItems="center" justifyContent="center" p="2rem" flexDir="column">
               <Heading >{heading&&heading}</Heading>
               {text?<Text p="1.5rem">{text}</Text>:null}
            </Flex>
        </Box>
    )
}
