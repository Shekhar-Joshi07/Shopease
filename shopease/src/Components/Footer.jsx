import React from 'react'
import{Heading,Grid, HStack} from "@chakra-ui/react"
import {BsShieldCheck} from "react-icons/bs"
import {TbCurrencyRupee} from "react-icons/tb"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {FaPinterestP} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"
import {AiFillGooglePlusSquare} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
import {FaLinkedinIn} from "react-icons/fa"
import {
    Box,
    Container,
    Link ,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    useColorModeValue,
    Image
 

  } from '@chakra-ui/react';

const Footer = () => {
  return (
   <>
   <hr />
   <Box mt={4}  w="100%" h="200px" d="flex" flexDirection={{base:"column",md:"row",lg:"row"}}  >
    <Heading as="h3" fontSize="21px" color="#555555" textAlign="center" >Band Of Trust</Heading>
    <Grid templateColumns='repeat(3, 1fr)' display="flex" justifyContent="space-around" alignItems="center"  >  
     <Box pt="7px" mt="20px"   w="200px" height="120px" 
   
   >
   <BsShieldCheck style={{margin:"auto", mb:"8px"}} color="#4fb5c4"  size="50px" />
   <Text textAlign="center" mt={2}  color="#777675" fontSize="20px">Great Selection</Text>
   </Box>
   <Box pt="7px" mt="20px"   w="200px" height="120px" 
  
  >
  <TbCurrencyRupee style={{margin:"auto", mb:"8px"}} color="#4fb5c4"  size="50px" />
  <Text  textAlign="center" mt={2}  color="#777675" fontSize="20px">Low Price</Text>
  </Box>   
  
  <Box pt="7px" mt="20px"   w="200px" height="120px" 
  
  >
  <AiOutlineShoppingCart style={{margin:"auto", mb:"8px"}} color="#4fb5c4"  size="50px" />
  <Text  textAlign="center" mt={2}  color="#777675" fontSize="20px">Speedy Delivery</Text>
  </Box> 
  
    </Grid>
    
    

   </Box>
   <hr />

   <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <Heading as="h3" fontSize="16px" mb={3} >Shopper Central</Heading>
            <Link color="#777675" href={'#'}>
Easy Returns & Replacement</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link color="#777675" href={'#'}>Sign In/Register</Link>
            </Stack>
            <Link color="#777675" href={'#'}>Our Policies</Link>
            <Link color="#777675" href={'#'}>CluesBucks</Link>
            <Link color="#777675" href={'#'}>Payment Options</Link>
            <Link color="#777675" href={'#'}>ShopClues Bazaa Surety</Link>
            <Link color="#777675" href={'#'}>FAQs (Help)</Link>
            <Link color="#777675" href={'#'}>Service Centers</Link>
            <Link color="#777675" href={'#'}>UserAgreement</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Heading as="h3" fontSize="16px" mb={3}>Merchant Central</Heading>
            <Link color="#777675" href={'#'}>Merchant Panel</Link>
            <Link color="#777675" href={'#'}>How To Sell</Link>
            <Link color="#777675" href={'#'}>Commission Structure</Link>
            <Link color="#777675" href={'#'}>Fullfill Policy</Link>
            <Link color="#777675" href={'#'}>Policies & Rules</Link>
            <Link color="#777675" href={'#'}>User Agreement</Link>
            <Link color="#777675" href={'#'}>Testimonials</Link>
            <Link color="#777675" href={'#'}>Seller Summit</Link>
            <Link color="#777675" href={'#'}>Merchant Blog</Link>
            <Link color="#777675" href={'#'}>Developer Resources</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Heading as="h3" color="#4fb5c4" fontSize="16px" mb={3}>About Us</Heading>
            <Link color="#777675" href={'#'}>History</Link>
            <Link color="#777675" href={'#'}>Band of Trust</Link>
            <Link color="#777675" href={'#'}>In the News</Link>
            <Link color="#777675" href={'#'}>Awards</Link>
            <Link color="#777675" href={'#'}>Careers</Link>
            <Link color="#777675" href={'#'}>Blog</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Heading as="h3" fontSize="16px" mb={3}>Contact Us</Heading>
            <Link color="#777675" href={'#'}>Merchant Support</Link>
            <Link color="#777675" href={'#'}>Bulk Orders</Link>
            <Link color="#777675" href={'#'}>Press</Link>
           
          </Stack>
        
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
         
        </Flex>
       
      </Box>
    </Box>
    
    <Box pr="20px" pl="20px" width="100%" h="100px"  display="flex" flexDirection={{base:"column",md:"row",lg:"row"}} justifyContent="space-between" alignItems="center"  >
      <Box w="300px" >
      <Heading s="h3" fontSize="16px" mb={3}>Keep In Touch</Heading>
      <HStack spacing={4} >
      <AiFillFacebook color="#4fb5c4"  size="40px" />
      <FaPinterestP color="#4fb5c4"  size="40px" />
      <BsTwitter color="#4fb5c4"  size="40px"/>
      <AiFillGooglePlusSquare color="#4fb5c4"  size="40px"/>
      <AiFillYoutube color="#4fb5c4"  size="40px"/>
      <FaLinkedinIn color="#4fb5c4"  size="40px"/>
      </HStack>
      
      </Box>

      <Box w="600px"  >
      <Heading s="h3" fontSize="16px" mb={3} textAlign="start">
      100% Secure and Trusted Payment</Heading>
      <HStack>
      <Image src="https://images.shopclues.com/images/ui/pgateway_dkt@2x.png" />
      </HStack>
      </Box>

    </Box>
    <hr />

   </>
  )
}

export default Footer