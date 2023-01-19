import { Flex } from '@chakra-ui/react'
import React from 'react'

const MobileCart = ({title, img_section, p_price, old_prices, prd_discount}) => {
  return (
    <div>
        <img src={img_section} alt={title} />
        <h3>{title}</h3>
        <Flex>
            <h5>{p_price}</h5>
            <p>{old_prices}</p>
            <h3 style={{color:"#4ca8b6"}}>{prd_discount}</h3>
        </Flex>
    </div>
  )
}

export default MobileCart