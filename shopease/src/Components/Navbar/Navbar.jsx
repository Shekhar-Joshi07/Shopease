import React from 'react';
// import { FaSistrix } from "react-icons/fa";
import { IoLocationOutline ,IoNotificationsOutline,IoCartOutline} from "react-icons/io5";
import {IoMdHeartEmpty} from "react-icons/io"


import {
  useDisclosure,
  MenuItem ,
  Menu,
  MenuButton,
  MenuList,
  Image
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

import {Box, Text, HStack, Flex} from "@chakra-ui/react"


import SearchComp from "../SearchComp"
// import {Search2Icon  } from '@chakra-ui/icons'

import { FcLike } from "react-icons/fc";

import Signup from '../Signup';


import './Navbar.Module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const Navbar = () => {
  const menu1 = useDisclosure()
  const menu2 = useDisclosure()
  const menu3 = useDisclosure()
  const menu4 = useDisclosure()
  const menu5 = useDisclosure()
  const menu6 = useDisclosure()
 


  const cart = useSelector((store) =>{
   
    return store.cartReducer.cart
    })

  return (
    <>
    
  <div className='navbar' >


  <div>
    <Link to="/">
      <img src="https://iili.io/HcHUepe.png" alt="logo" />
    </Link>
  </div>



{/* div for input taking  and search button*/}

<Box>
<SearchComp />
</Box>


  

 
{/* <FaSistrix /> */}
{/* <div>


<Search2Icon  marginRight={3} bg="#E9F6F7"  ml={2}/>

<input type="text" placeholder="What is on your mind Today ?" />


<button >Search</button>
</div> */}



<Box  >


  {/* icons div */}

<HStack spacing={5}>
<IoLocationOutline size={25} color='teal'/>
<IoNotificationsOutline size={25} color='teal'  />
<IoMdHeartEmpty color='red' size={25}  />
<Link to="/cart">
  <Flex>
  <IoCartOutline   size={25} color='teal'/>
  <Text mr="-1.3rem" color="white" textAlign="center" width="26px" position="relative" left="-0.65rem" top="-1rem" bg="#ff7856" rounded="full" >{cart.length}</Text>
  </Flex>
</Link>
<Signup/>
</HStack>




{/* button for signin.... */}




</Box>






  </div>



{/* // sun navbar -2 */}


<div  className='subnav1'>
<img src="https://images.shopclues.com/images/ui/madeinindia.png" 
alt="" />

<Menu isOpen={menu1.isOpen}>
            <MenuButton
            color="white"
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                //  _hover={{ bg: "white" }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={menu1.onOpen}
                onMouseLeave={menu1.onClose}
            >
                Mobiles & More {menu1.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList  ml="6%" onMouseEnter={menu1.onOpen} onMouseLeave={menu1.onClose}>
                <MenuItem color="gray" >
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://m.media-amazon.com/images/S/abs-image-upload-na/b/AmazonStores/A21TJRUUN4KGV/e03be2a69b82c33f815e7420eaa35488.w1000.h1000._CR0%2C0%2C1000%2C1000_SX200_.jpg'
        alt='I KAll'
        mr='12px'
      />
      <span>I KALL</span>
      </MenuItem >

      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/768px-Xiaomi_logo_%282021-%29.svg.png?20221112002517'
        alt='Mi'
        mr='12px'
      />
      <span>Mi</span>
      </MenuItem >
      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://seeklogo.com/images/R/realme-logo-5E8BC1E717-seeklogo.com.png'
        alt='Mi'
        mr='12px'
      />
      <span>Realme</span>
      </MenuItem >
      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://images.samsung.com/is/image/samsung/assets/in/about-us/brand/logo/pc/300_186_1.png?$568_N_PNG$'
        alt='Mi'
        mr='12px'
      />
      <span>Samsung</span>
      </MenuItem >
      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://etimg.etb2bimg.com/photo/75741441.cms'
        alt='Mi'
        mr='12px'
      />
      <span>Vivo</span>
      </MenuItem >
      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://wallpaperaccess.com/full/4392106.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Oppo</span>
      </MenuItem >
      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn3.iconfinder.com/data/icons/picons-social/57/56-apple-512.png'
        alt='Mi'
        mr='12px'
      />
      <span>Apple</span>
      </MenuItem >
      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://i.pinimg.com/originals/98/a3/2e/98a32e0ef25e6148b8a08954956eb0e4.png'
        alt='Mi'
        mr='12px'
      />
      <span>Infinix</span>
      </MenuItem >
      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='data:image/png;base64,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'
        alt='Mi'
        mr='12px'
      />
      <span>Micromax</span>
      </MenuItem >
            </MenuList>
          </Menu>


          <Menu isOpen={menu2.isOpen}>
            <MenuButton
            color="white"
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                //  _hover={{ bg: "white" }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={menu2.onOpen}
                onMouseLeave={menu2.onClose}
            >
                Men {menu2.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList ml="22%" onMouseEnter={menu2.onOpen} onMouseLeave={menu2.onClose}>
            <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://m.media-amazon.com/images/I/61aD5yO6EeL._UY550_.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>T-Shirt</span>
      </MenuItem >


      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15741110/2021/10/5/991c0270-41e1-4358-a783-8f0c9fc962c01633433615967JackJonesMenPurpleSlimFitOpaqueCasualShirt1.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Shirt</span>
      </MenuItem >



      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20970756/2022/11/28/56df1642-8ae6-40b2-87db-a1f05d4ca5c31669641493029HighStarMenBlueSlimFitJeans1.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Jeans</span>
      </MenuItem >



      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2389026/2018/2/13/11518499099305-Hubberholme-Men-Beige-Slim-Fit-Solid-Cargos-5611518499099225-1.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Cargos</span>
      </MenuItem >



      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16258448/2021/12/10/2a643a92-f4eb-45de-8963-3668f5286b431639121504280IVOCMenSlimFitSolidStretchableJoggers1.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Trousers</span>
      </MenuItem >


      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19444600/2022/8/30/0da2ab8e-5d8e-44bd-82d6-340b777988aa1661855827682-HRX-by-Hrithik-Roshan-Mens-Graphic-Black-Regular-Fit-Track-p-1.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Track Pants</span>
      </MenuItem >

      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19020562/2022/12/5/dcc413a1-f06a-4eab-bce3-c96bd91a01df1670217576282-US-Polo-Assn-Men-Black-Solid-Brand-Logo-Puffer-Jacket-346167-1.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Jackets</span>
      </MenuItem >

      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14811684/2021/7/27/4d6d18ee-ddbe-41ec-8168-4b6d22e976811627374278599-Campus-Sutra-Men-Stylish-Casual-Jackets-3981627374277842-1.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Winter Wear</span>
      </MenuItem >
      
                
            </MenuList>
          </Menu>




          <Menu isOpen={menu3.isOpen}>
            <MenuButton
            color="white"
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                //  _hover={{ bg: "white" }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={menu3.onOpen}
                onMouseLeave={menu3.onClose}
            >
                Women {menu3.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList ml="31%" onMouseEnter={menu3.onOpen} onMouseLeave={menu3.onClose}>
            <MenuItem color="gray"  >
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16697006/2022/1/5/4672c4bf-8fe1-4523-91f4-ac08301573251641392147135KALINIWomenMaroonWovenDesign1.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Sarees</span>
      </MenuItem >


      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17413232/2022/3/17/c861897a-f6d5-40fc-8336-a007cce0bede1647511510301-Anubhutee-Women-Kurtis-6081647511509773-1.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Kurtas & Kurtis</span>
      </MenuItem >



      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20036584/2022/9/17/cfef4cce-8ec2-496a-9d42-b82e1b5082c21663354847190FABPIXELPeach-ColouredGold-TonedEmbellishedSemi-StitchedLehe2.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Lehengas & Party Gowns</span>
      </MenuItem >



      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19486228/2022/8/13/3df7c23a-afb4-44f4-b470-e087b93994471660370150603KoskiiPinkGreenEmbroideredArtSilkUnstitchedDressMaterial1.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Dress Material</span>
      </MenuItem >



      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20924090/2022/11/25/c4431633-4f68-4fb5-9699-9c816ffa88081669373567343CottonSpandexSlimfitAnkleLengthPocketLeggingsforWomenGirls1.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Leggings & Churidar</span>
      </MenuItem >


      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17848848/2022/5/9/899ba6ae-39a7-4040-8740-09a9d5370b381652100015933-Leeza-Store-Black--Golden-Ethnic-Motifs-Woven-Design-Zari-Si-1.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Meia Store</span>
      </MenuItem >

     
      
                
            </MenuList>
          </Menu>


          <Menu isOpen={menu4.isOpen}>
            <MenuButton
            color="white"
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                //  _hover={{ bg: "white" }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={menu4.onOpen}
                onMouseLeave={menu4.onClose}
            >
               Home and Kitchen {menu4.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList ml="44%" onMouseEnter={menu4.onOpen} onMouseLeave={menu4.onClose}>
            <MenuItem color="gray"  >
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn.shopclues.com/images1/thumbnails/19901/280/1/91522579-19901396-1669175025.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Dinner Set</span>
      </MenuItem >


      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn.shopclues.com/images1/thumbnails/113017/280/1/151930480-113017611-1663835238.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Cookware</span>
      </MenuItem >



      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn.shopclues.com/images1/thumbnails/84855/280/1/137076261-84855545-1668508422.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Kitchen Tools</span>
      </MenuItem >



      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn.shopclues.com/images1/thumbnails/116207/280/1/153028892-116207048-1665756825.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Bed Sheets</span>
      </MenuItem >



      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn.shopclues.com/images1/thumbnails/32980/280/1/105132490-32980923-1668069144.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Curtains</span>
      </MenuItem >


      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn.shopclues.com/images1/thumbnails/93315/280/1/141312347-93315069-1663067012.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Towels</span>
      </MenuItem >

     
      
                
            </MenuList>
          </Menu>
   
  
          <Menu isOpen={menu5.isOpen}>
            <MenuButton
            color="white"
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                //  _hover={{ bg: "white" }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={menu5.onOpen}
                onMouseLeave={menu5.onClose}
            >
                Appliances {menu5.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList ml="63%" onMouseEnter={menu5.onOpen} onMouseLeave={menu5.onClose}>
            <MenuItem color="gray"  >
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn.shopclues.com/images/thumbnails/66671/320/320/124838267-66671295-1516110145.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Television</span>
      </MenuItem >


      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn.shopclues.com/images1/thumbnails/66671/280/1/124838237-66671202-1662682229.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Full HD</span>
      </MenuItem >



      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn.shopclues.com/images/banners/Work/HeaderChanges/SplitACs_15feb.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Air Conditioner</span>
      </MenuItem >



      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn.shopclues.com/images1/thumbnails/113303/280/1/152033350-113303882-1614253535.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Washing MAchine</span>
      </MenuItem >



      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn.shopclues.com/images/thumbnails/57793/280/1/10960446191042727gli302rpzl1081505349061146069839014607073861487746797.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Refrigerators</span>
      </MenuItem >


      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn.shopclues.com/images/thumbnails/63630/280/1/urluploadedfile149025833358d389a192c771490258338.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Inverters</span>
      </MenuItem >

     
      
                
            </MenuList>
          </Menu>
      


          <Menu isOpen={menu6.isOpen}>
            <MenuButton
            color="white"
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                //  _hover={{ bg: "white" }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={menu6.onOpen}
                onMouseLeave={menu6.onClose}
            >
                Sports & More{menu6.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList ml="85%" onMouseEnter={menu6.onOpen} onMouseLeave={menu6.onClose}>
            <MenuItem color="gray"  >
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn.shopclues.com/images1/thumbnails/79177/280/1/134478053-79177725-1660927196.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Whey Protien</span>
      </MenuItem >


      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn.shopclues.com/images1/thumbnails/22019/280/1/2364832-22019320-1673134182.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Weight Gainers</span>
      </MenuItem >



      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn.shopclues.com/images1/thumbnails/112084/280/1/151480109-112084936-1614147302.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Vitamins & Minerals</span>
      </MenuItem >



      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn.shopclues.com/images1/thumbnails/72736/280/1/129736854-72736671-1624248560.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Home Gym</span>
      </MenuItem >



      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn.shopclues.com/images1/thumbnails/4367/280/1/313857-4367078-1653486207.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Fitness Accessories</span>
      </MenuItem >


      <MenuItem color="gray">
                <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn.shopclues.com/images1/thumbnails/111503/280/1/151242052-111503831-1671188293.jpg'
        alt='Mi'
        mr='12px'
      />
      <span>Helmets</span>
      </MenuItem >

     
      
                
            </MenuList>
          </Menu>
      

</div>






{/* subnav-3 */}


<div className='subnav3'>
  <span>Time Sales</span>
  <span>Flu Care</span>
  <span>Food & Beverage</span>
  <span>Personal Hygiene</span>
  <span>Home cleaning</span>
  <span>Nutrients & Supplements</span>
  <span>Kitchen & Dining</span>
  <span>Mobile Accessories</span>
  
</div>





</>

    
    
  )
}
