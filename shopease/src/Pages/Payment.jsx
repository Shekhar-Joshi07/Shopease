import {
    Box,
    Text,
    Image,
    Button,
    Checkbox,
    Input,
    Select,
    useDisclosure,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import Logo from "../assets/Logo.png"
// import Swal from 'sweetalert2'

// export const Nav = styled.div`
//     height: 100px;
//     width: 100%;
//     background: #24aeb1;
//     display: flex;
//     gap: 30px;
//     padding: 10px;
//     padding-top: 22px;
//     margin-bottom: 20px;
//     top: 0;
//   `;
export const PaymentNav = styled.div`
    height: 70px;
    width: 76%;
    background: #ff7856;
    display: flex;
    justify-content: space-between;
    padding: 2px;
    padding-top: 15px;
    margin-left: 7.5rem;
    border-radius: 10px;
  `;

const Payment = () => {
    const [flag, setFlag] = useState(false);
    const [check, setCheck] = useState(false);
    console.log(check);

    // let PaymentData = JSON.parse(localStorage.getItem("Price")) || "";
    // let DiscountPrice = JSON.parse(localStorage.getItem("DiscountPrice")) || "";

    // console.log(PaymentData);
    // console.log(DiscountPrice);

    const navigate = useNavigate();

   

    const handleproceed = () =>{
        setTimeout(() =>{
           navigate("/cart/payment/success");
        },2000);

    }

    return (
        <>
            <Box height={"auto"} bg={"#F3F7FB"}>
                {/* <Nav>
                    <Link to="/">
                        <img
                            width="160px"
                            style={{ marginTop: "8px" }}
                            height="150px"
                            src="https://iili.io/HcHUepe.png"
                            alt="Shopease"
                        />
                    </Link>
                </Nav> */}

                <PaymentNav>
                    <Text fontWeight={500} fontSize={"x-large"} pl={5} color={"white"}>
                        Payment Details
                    </Text>
                    <Box mr={8} mt={2} color={"white"} display={"flex"} gap={8}>
                        <Box>
                            <Link to="/cart">
                                {" "}
                                <Text fontSize={"smaller"}>Your Cart</Text>{" "}
                            </Link>
                        </Box>

                        <Box>
                            <Text fontSize={"smaller"}>Order Review</Text>
                        </Box>
                        <Box>
                            <Text fontSize={"smaller"}>Payment Details</Text>
                        </Box>
                    </Box>
                </PaymentNav>

                <Box height={"auto"} bg={"#F3F7FB"}>
                    <Box
                        display={"flex"}
                        gap={8}
                        mt={5}
                        width={"76%"}
                        ml={125}
                        height={"auto"}
                    >
                        <Box
                            bg={"#F3F7FB"}
                            p={0}
                            rounded={"lg"}
                            height={"auto"}
                            width={"100%"}
                        >
                            <Box bg={"white"} p={0} rounded={"lg"} height={50} width={"100%"}>
                                <Box display={"flex"} gap={5} p={4}>
                                    <Checkbox />
                                    <Text fontSize={"smaller"}>VOUCHERS</Text>
                                </Box>
                            </Box>

                            <Box
                                p={4}
                                bg={"white"}
                                mt={5}
                                rounded={"lg"}
                                height={"auto"}
                                width={"100%"}
                            >
                                <Text fontSize={"smaller"}>PREFERRED PAYMENT</Text>
                                <Box display={"flex"} pr={3} justifyContent={"space-between"}>
                                    <Box display={"flex"} pt={3} gap={8}>
                                        <Image
                                            height={30}
                                            src="https://www.netmeds.com/assets/pgicon/Paytm_lo.png"
                                            alt="paytm"
                                        />
                                        <Text pt={1}>Paytm</Text>
                                        <Text></Text>
                                    </Box>
                                    <Box color={"#EF4281"} pt={3} fontSize={"smaller"}>
                                        {" "}
                                        <Link to="/">LINK</Link>{" "}
                                    </Box>
                                </Box>
                            </Box>

                            <Box
                                p={4}
                                bg={"white"}
                                mt={5}
                                rounded={"lg"}
                                height={"auto"}
                                width={"100%"}
                            >
                                <Text fontSize={"smaller"}> REWARD PAY </Text>
                                <Box display={"flex"} pr={3} justifyContent={"space-between"}>
                                    <Box display={"flex"} pt={3} gap={8}>
                                        <Image
                                            height={30}
                                            src="https://www.netmeds.com/msassets/images/icons/TWID.png"
                                            alt="paytm"
                                        />
                                        <Text pt={1}>Pay With Rewards </Text>
                                        <Text></Text>
                                    </Box>
                                    <Box color={"#EF4281"} pt={3} fontSize={"smaller"}>
                                        {" "}
                                        <Checkbox />{" "}
                                    </Box>
                                </Box>
                            </Box>

                            <Box
                                p={4}
                                bg={"white"}
                                mt={5}
                                rounded={"lg"}
                                height={"auto"}
                                width={"100%"}
                            >
                                <Text fontSize={"smaller"}> WALLET </Text>
                                <Box display={"flex"} pr={3} justifyContent={"space-between"}>
                                    <Box display={"flex"} pt={3} gap={8}>
                                        <Image
                                            height={30}
                                            src="	https://www.netmeds.com/assets/pgicon/Free_Charge_lo.png"
                                            alt="paytm"
                                        />
                                        <Box fontSize={"sm"}>
                                            <Text pt={1}>Freecharge PayLater | Wallet </Text>
                                            <Text>
                                                Get up to Rs. 30 Freecharge cashback (10%) on your
                                                transaction using Freecharge wallet on Netmeds. Offer
                                                valid ONCE per user till 30th June 2022. *T&C apply
                                            </Text>
                                        </Box>
                                    </Box>
                                    <Box color={"#EF4281"} pt={3} fontSize={"smaller"}>
                                        {" "}
                                        <Link to="/">LINK</Link>{" "}
                                    </Box>
                                </Box>
                            </Box>

                            <Box
                                p={4}
                                bg={"white"}
                                mt={5}
                                rounded={"lg"}
                                height={"auto"}
                                width={"100%"}
                            >
                                <Text fontSize={"smaller"}> Simpl </Text>
                                <Box
                                    display={"flex"}
                                    pt={3}
                                    gap={8}
                                    justifyContent={"space-between"}
                                >
                                    <Image
                                        height={30}
                                        src="https://www.netmeds.com/msassets/images/icons/simpl-logo.png"
                                        alt="paytm"
                                    />
                                    <Box fontSize={"sm"}>
                                        <Text pt={1}>
                                            Get flat 5% Simpl cashback up to Rs. 500. Valid for all
                                            customers. OR Get flat 8% Simpl cashback up to 500. Valid
                                            for new customers.
                                        </Text>
                                        <Text>
                                            Link Account is required to complete the payment
                                        </Text>
                                    </Box>
                                    <Box color={"#EF4281"} pt={3} fontSize={"smaller"}>
                                        {" "}
                                        <Link to="/">LINK</Link>{" "}
                                    </Box>
                                </Box>
                            </Box>

                            <Box
                                p={4}
                                bg={"white"}
                                mt={5}
                                rounded={"lg"}
                                height={"auto"}
                                width={"100%"}
                            >
                                <Text fontSize={"smaller"}> OTHER PAYMENTS </Text>
                                <Box display={"flex"} pr={3} justifyContent={"space-between"}>
                                    <Box display={"flex"} pt={3} gap={8}>
                                        <Image
                                            height={30}
                                            src="https://www.netmeds.com/assets/pgicon/Phone_Pay_lo.png"
                                            alt="paytm"
                                        />
                                        <Text pt={1}> PhonePe </Text>
                                        <Text></Text>
                                    </Box>
                                    <Box>
                                        <Box>
                                            <Box
                                                display={"flex"}
                                                justifyContent={"end"}
                                                pt={3}
                                                fontSize={"smaller"}
                                            >
                                                {" "}
                                                <Checkbox pl={10} onChange={(e) => setCheck(!check)} />
                                            </Box>
                                            <Box>
                                                {!check ? (
                                                    <Box></Box>
                                                ) : (
                                                    <Button
                                                        mt={3}
                                                        mr={0}
                                                        bg={"#24AEB1"}
                                                        color={"white"}
                                                    >
                                                        SAVE CARD
                                                    </Button>
                                                )}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                            <Box
                                p={4}
                                bg={"white"}
                                mt={5}
                                rounded={"lg"}
                                height={"auto"}
                                width={"100%"}
                            >
                                <Text fontSize={"smaller"}> UPI </Text>
                                <Box display={"flex"} pr={3} justifyContent={"space-between"}>
                                    <Box display={"flex"} pt={3} gap={8}>
                                        <Image
                                            height={30}
                                            src="	https://www.netmeds.com/assets/pgicon/googlepaylogo.png"
                                            alt="paytm"
                                        />
                                        <Text pt={1}>Google Pay </Text>
                                        <Text></Text>
                                    </Box>
                                    <Box color={"#EF4281"} pt={3} fontSize={"smaller"}>
                                        {" "}
                                        <Checkbox />{" "}
                                    </Box>
                                </Box>
                            </Box>

                            <Box
                                p={4}
                                bg={"white"}
                                mt={5}
                                rounded={"lg"}
                                height={"auto"}
                                width={"100%"}
                            >
                                <Text fontSize={"smaller"}> CREDIT CARDS & DEBIT CARDS </Text>
                                <Box textAlign={"center"} mt={4} borderTop={"1px solid grey"}>
                                    {!flag ? (
                                        <Button
                                            border={"none"}
                                            bg={"white"}
                                            onClick={() => setFlag(true)}
                                        >
                                            ADD NEW CARD
                                        </Button>
                                    ) : (
                                        <>
                                            <Box textAlign={"left"}>
                                                <Text mb={3} fontSize={"sm"}>
                                                    ENTER CARD DETAILS
                                                </Text>
                                                <Text color={"#24AEB1"}>CARD NUMBER</Text>
                                                <Input mb={3} variant="flushed" type={"number"} />
                                                <Box display={"flex"} gap={2}>
                                                    <Box>
                                                        <Text color={"#24AEB1"}>EXPIRY DATE</Text>
                                                        <Input
                                                            mb={3}
                                                            width={150}
                                                            placeholder={"MM"}
                                                            variant="flushed"
                                                            type={"number"}
                                                        />
                                                    </Box>
                                                    <Box>
                                                        <Input
                                                            mb={3}
                                                            mt={6}
                                                            width={150}
                                                            placeholder={"YY"}
                                                            variant="flushed"
                                                            type={"number"}
                                                        />
                                                    </Box>
                                                    <Box>
                                                        <Text color={"#24AEB1"}>CVV</Text>
                                                        <Input
                                                            mb={3}
                                                            width={150}
                                                            variant="flushed"
                                                            type={"number"}
                                                        />
                                                    </Box>
                                                </Box>
                                                <Box>
                                                    <Text color={"#24AEB1"}>NAME ON CARD</Text>
                                                    <Input
                                                        mb={3}
                                                        width={150}
                                                        variant="flushed"
                                                        type={"text"}
                                                    />
                                                </Box>
                                                <Box display={"flex"} mb={6} gap={8}>
                                                    <Checkbox />
                                                    <Text>Save this card for future payments. </Text>
                                                </Box>

                                                <Button bg={"#24AEB1"}>PAY</Button>
                                            </Box>
                                        </>
                                    )}
                                </Box>
                            </Box>

                            <Box
                                bg={"teal"}
                                mt={8}
                                p={0}
                                rounded={"lg"}
                                height={"auto"}
                                width={"100%"}
                            >
                                <Box
                                    bg={"white"}
                                    mt={8}
                                    p={0}
                                    rounded={"lg"}
                                    height={"auto"}
                                    width={"100%"}
                                >
                                    <Text p={3} fontSize={"smaller"}>
                                        NET BANKING{" "}
                                    </Text>
                                    <Box
                                        display={"flex"}
                                        pt={3}
                                        gap={8}
                                        justifyContent={"space-around"}
                                    >
                                        <Box>
                                            <Image
                                                pl={2}
                                                height={50}
                                                src="https://www.netmeds.com/assets/pgicon/axis.png"
                                                alt="paytm"
                                            />
                                            <Text fontSize={"smaller"} pt={1}>
                                                Axis Bank
                                            </Text>
                                        </Box>

                                        <Box>
                                            <Image
                                                pl={2}
                                                height={50}
                                                src="https://www.netmeds.com/assets/pgicon/Hdfc.png"
                                                alt="paytm"
                                            />
                                            <Text fontSize={"smaller"} pt={1}>
                                                HDFC Bank
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Image
                                                pl={1}
                                                height={50}
                                                src="https://www.netmeds.com/assets/pgicon/icici.png"
                                                alt="paytm"
                                            />
                                            <Text fontSize={"smaller"} pt={1}>
                                                ICICI Bank
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Image
                                                pl={2}
                                                height={50}
                                                src="https://www.netmeds.com/assets/pgicon/kotak.png"
                                                alt="paytm"
                                            />
                                            <Text fontSize={"smaller"} pt={1}>
                                                Kotak Bank
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Image
                                                pl={7}
                                                height={50}
                                                src="https://www.netmeds.com/assets/pgicon/Sbi.png"
                                                alt="paytm"
                                            />
                                            <Text fontSize={"smaller"} pt={1}>
                                                State Bank of India
                                            </Text>
                                        </Box>
                                    </Box>
                                    <Select
                                        p={3}
                                        width={200}
                                        placeholder="More Banks"
                                        size={"sm"}
                                    >
                                        <option value="option1">Bank of Maharashtra</option>
                                        <option value="option2">Central Bnak of India </option>
                                        <option value="option3">Abhyudaya Co-Op Bank</option>
                                        <option value="option2">Central Bank of India </option>
                                        <option value="option3">Yes Bank</option>
                                        <option value="option3">Union Bank</option>
                                        <option value="option3">Canara Bank</option>
                                    </Select>
                                </Box>
                            </Box>
                            <Box
                                fontSize={"smaller"}
                                p={4}
                                bg={"white"}
                                mt={5}
                                rounded={"lg"}
                                height={"auto"}
                                width={"100%"}
                            >
                                <Box display={"flex"} pr={3} justifyContent={"space-between"}>
                                    <Box display={"flex"} pt={3} gap={5}>
                                        <Image
                                            height={30}
                                            src="https://www.netmeds.com/assets/pgicon/COD.png"
                                            alt="paytm"
                                        />
                                        <Box>
                                            <Text pt={1}>Cash On Delivery </Text>
                                            <Text>
                                                Hear us out! Pay online and earn 100% NMS SuperCash (up
                                                to Rs. 3000) on all prepaid orders
                                            </Text>
                                        </Box>
                                    </Box>
                                    <Box color={"#EF4281"} pt={3} fontSize={"smaller"}>
                                        {" "}
                                        <Checkbox />{" "}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box
                            bg={"white"}
                            rounded={"lg"}
                            p={5}
                            pr={8}
                            width={470}
                            height={"260px"}
                        >
                            <Text mb={1} color={"grey"} fontSize={"sm"}>
                                PAYMENT DETAILS
                            </Text>
                            <Box
                                fontSize={"sm"}
                                mt={3}
                                justifyContent={"space-between"}
                                display={"flex"}
                            >
                                <Text> MRP Total</Text>
                                <Text>Rs 3745.00</Text>
                            </Box>
                            <Box
                                fontSize={"sm"}
                                mt={3}
                                justifyContent={"space-between"}
                                display={"flex"}
                            >
                                <Text>Discount</Text>
                                <Text>-Rs 00.00</Text>
                            </Box>
                            <Box
                                fontSize={"sm"}
                                fontWeight={500}
                                mt={3}
                                justifyContent={"space-between"}
                                display={"flex"}
                            >
                                <Text>Total Amount*</Text>
                                <Text>Rs 3745.00</Text>
                            </Box>
                            

                            <Box
                                p={2}
                                fontWeight={500}
                                bg={"white"}
                                mt={5}
                                justifyContent={"space-between"}
                                display={"flex"}
                            >
                                <Box>
                                    <Text fontSize={"xs"}>TOTAL AMOUNT </Text>
                                    <Text fontSize={"larger"}>Rs 3745.00</Text>
                                </Box>

                                <Box>
                                    <Link to="/cart/payment">
                                        {" "}
                                        <Button onClick={handleproceed} bg="#ff7856" color="white" size={"lg"}>PROCEED</Button>{" "}
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <div>Payment</div>
            </Box>
        </>
    );
};

export default Payment