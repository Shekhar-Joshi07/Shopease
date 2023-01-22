import React from 'react'
import {

    Button,
    Image,
    Text,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    HStack,
    useDisclosure

 
  } from '@chakra-ui/react';

  import {MdAccountCircle} from "react-icons/md"
 
  import { useAuth0 } from "@auth0/auth0-react";

const Signup = () => {
  const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
 
 
    
  return (
    
    <>
    <HStack>
    <Button variant="link" ref={btnRef} colorScheme='teal' onClick={onOpen}> <MdAccountCircle size={25} />
    </Button>
    </HStack>
    
     
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Image margin="auto" mt={5}  borderRadius='full' border="2px solid #f58014" boxSize="120px" src='https://iili.io/HcHUepe.png' />
          <DrawerHeader textAlign="center" >Create your account to Continue 😊</DrawerHeader>
          
          <DrawerBody textAlign="center" >
          {isAuthenticated && <Text color="blue.600" as="i" fontSize="md" fontWeight="semibold">Welcome  {user.name}</Text>} <br />

{isAuthenticated? <Button mt={3} colorScheme="red"  onClick={() => logout({ returnTo: window.location.origin })}>
    Log Out
  </Button>: <Button mt={3}  colorScheme="green"   onClick={loginWithRedirect}>Login</Button>  }
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="blue" variant='outline' mr={3} onClick={onClose}>
             Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>















   
  
    </>
 
    
);
}

export default Signup