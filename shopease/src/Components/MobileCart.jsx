import { Flex, Grid } from '@chakra-ui/react'
import React from 'react'

const MobileCart = ({title, img_section, p_price, old_prices, prd_discount}) => {
  return (
    <Grid gap={4} w="20rem" p="2rem" _hover={{ border: "1px solid #4ca8b6", boxShadow:'md' }}>
        <img width="100%" src={img_section} alt={title} />
        <h5>{title}</h5>
        <Flex gap={2} justifyContent="center">
            <h5>{p_price}</h5>
            <p>{old_prices}</p>
            <h3 style={{color:"#4ca8b6"}}>{prd_discount}</h3>
        </Flex>
    </Grid>
  )
}

export default MobileCart