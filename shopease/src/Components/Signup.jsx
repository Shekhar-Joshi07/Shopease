import React from 'react'
import {

    Button,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Image,
    ModalBody,
    ModalCloseButton,
    useDisclosure

 
  } from '@chakra-ui/react';


 
  import { useAuth0 } from "@auth0/auth0-react";

const Signup = () => {
  const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
  const { isOpen, onOpen, onClose } = useDisclosure()
 
    
  return (
    
    <>
      {isAuthenticated && <Text as="i" fontSize="md" fontWeight="semibold">Welcome  {user.name}</Text>} <br />
    <Button onClick={onOpen}>Sign Up / Sign In</Button>


<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent pt={3} >
    <Image margin="auto"  borderRadius='full' border="2px solid #f58014" boxSize="120px" src='https://iili.io/HcHUepe.png' />
    <ModalHeader textAlign="center" >Login to continue with Shopease😊 </ModalHeader>
    <ModalCloseButton />
    <ModalBody textAlign="center">
    {isAuthenticated && <Text as="i" fontSize="md" fontWeight="semibold">Welcome  {user.name}</Text>} <br />

{isAuthenticated? <Button onClick={() => logout({ returnTo: window.location.origin })}>
    Log Out
  </Button>: <Button onClick={loginWithRedirect}>Login</Button>  }
    </ModalBody>

   
  </ModalContent>
</Modal>















   
  
    </>
 
    
);
}

export default Signup