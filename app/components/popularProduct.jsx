import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

import { FcLike } from "react-icons/fc";
import { PiShoppingCartDuotone } from "react-icons/pi";

import img1 from '../../public/img1.jpg'

export default function PopularProduct() {
  return (
    <section>
        <h1>Popular Products</h1>
        <Flex justifyContent={'center'} gap={8} flexWrap={'wrap'} mt={10}>
            <Box width={'300px'} padding={5} rounded={5} className="card bg-slate-200">
                <Box className="card-img">
                    <Image src={img1} width={'100%'} height={'200px'}/>
                </Box>
                <Text className="card-title"></Text>
                <Text className="card-body"></Text>
                <Flex alignItems={'center'} gap={6} className="">
                    <Box className="cart">
                        <Button>Add To Cart</Button>
                    </Box>
                    <Box className="likes">
                        <FcLike/>
                    </Box>
                </Flex>
            </Box>
            <Box width={'300px'} padding={5} rounded={5} className="card bg-slate-200">
                <Box className="card-img">
                    <Image />
                </Box>
                <Text className="card-title"></Text>
                <Text className="card-body"></Text>
                <Flex alignItems={'center'} gap={6} className="">
                    <Box className="cart">
                        <Button>Add To Cart</Button>
                    </Box>
                    <Box className="likes">
                        <FcLike/>
                    </Box>
                </Flex>
            </Box>
            <Box width={'300px'} padding={5} rounded={5} className="card bg-slate-200">
                <Box className="card-img">
                    <Image />
                </Box>
                <Text className="card-title"></Text>
                <Text className="card-body"></Text>
                <Flex alignItems={'center'} gap={6} className="">
                    <Box className="cart">
                        <Button>Add To Cart</Button>
                    </Box>
                    <Box className="likes">
                        <FcLike/>
                    </Box>
                </Flex>
            </Box>

        </Flex>
    </section>
  )
}
