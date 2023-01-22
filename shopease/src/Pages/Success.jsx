import { Alert, AlertIcon, Box, Text } from '@chakra-ui/react'
import React from 'react'

const Success = () => {
  return (
    <Box>
         <Alert status='success' height="30rem" m="3rem">
            <AlertIcon />
            <Text as="b" fontSize="4xl">Congrats! Payment Successful.</Text>
          </Alert>
    </Box>
  )
}

export default Success