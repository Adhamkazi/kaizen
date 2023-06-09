import {
  Box,
  Button,
  Flex,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
// import ReCAPTCHA from "react-google-recaptcha";
import React, { useEffect, useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import { useToast } from '@chakra-ui/react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowUpIcon } from '@chakra-ui/icons'

const ContactPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh(); 

    return () => {
      AOS.refresh();
    };
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast()


  const handelCheck = async () => {
    let obj = {
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
    };
  
    // Check if any of the required fields are empty
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'company', 'message'];
    const emptyFields = requiredFields.filter(field => !obj[field]);
  
    if (emptyFields.length > 0) {
      // Display error toast for empty fields
      toast({
        description: `Please fill in the following fields: ${emptyFields.join(
          ", "
        )}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      return; // Stop execution if any required fields are empty
    }
  
    try {
      const res = await fetch('https://difficult-gold-vulture.cyclic.app/contact/contact-5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
      });
      let data = await res.json();
      console.log(data);
      toast({
        description: "Thanks for submitting.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setFirstName("");
      setLastName("");
       setEmail("");
       setPhone("");
       setCompany("");
       setMessage("");  
    } catch (error) {
      console.log(error);
      toast({
        description: "Something went wrong.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <Box bg="#0D47A1" mt={{ base: "100px", md: "10px" }} data-aos="fade-up">
        <Text
          fontSize={{ base: "30px", md: "50px" }}
          padding="30px"
          w={{ base: "90%", md: "90%" }}
          textAlign={"center"}
          color="white"
        >
          Grow Your Business With Our Expertise
        </Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} w={"80%"} margin={"auto"}  data-aos="fade-up">
        <Box mt="100px">
          <Text fontSize={"60px"} color={"#0D47A1"} fontWeight={600}>
            Contact Us
          </Text>
        </Box>
        <Box>
          <Flex direction={{ base: "column", md: "row" }} gap="30px" mt="40px" >
            <FormControl data-aos="fade-up">
              <FormLabel

                fontSize={{ base: "20px", md: "15px" }}
                fontWeight={400}
              >
                First Name*
              </FormLabel>
              <Input
                fontFamily="Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"
                fontStyle={"italic"}
                fontWeight={"bold"}
                color={"blue"}
                type="text"
                variant="flushed"
                borderBottom={"4px"}
                borderBottomColor={"blue"}
                _focus={{ borderBottom: "2px", borderBottomColor: "blue" }}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl data-aos="fade-up">
              <FormLabel
                fontSize={{ base: "20px", md: "15px" }}
                fontWeight={400}
              >
                Last Name*
              </FormLabel>
              <Input
                fontFamily="Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"
                fontStyle={"italic"}
                fontWeight={"bold"}
                color={"blue"}
                type="text"
                variant="flushed"
                borderBottom={"4px"}
                borderBottomColor={"blue"}
                _focus={{ borderBottom: "2px", borderBottomColor: "blue" }}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
          </Flex>
          <FormControl mt="40px " data-aos="fade-up">
            <FormLabel fontSize={{ base: "20px", md: "15px" }} fontWeight={400}>
              Email*
            </FormLabel>
            <Input
              fontFamily="Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"
              fontStyle={"italic"}
              fontWeight={"bold"}
              color={"blue"}
              type="text"
              variant="flushed"
              borderBottom={"4px"}
              borderBottomColor={"blue"}
              _focus={{ borderBottom: "2px", borderBottomColor: "blue" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mt="40px" data-aos="fade-up">
            <FormLabel fontSize={{ base: "20px", md: "15px" }} fontWeight={400}>
              Phone*
            </FormLabel>
            <Input
              fontFamily="Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"
              fontStyle={"italic"}
              fontWeight={"bold"}
              color={"blue"}
              type="text"
              variant="flushed"
              borderBottom={"4px"}
              borderBottomColor={"blue"}
              _focus={{ borderBottom: "2px", borderBottomColor: "blue" }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
          <FormControl mt="40px" data-aos="fade-up">
            <FormLabel fontSize={{ base: "20px", md: "15px" }} fontWeight={400}>
              Company*
            </FormLabel>
            <Input
              fontFamily="Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"
              fontStyle={"italic"}
              fontWeight={"bold"}
              color={"blue"}
              type="text"
              variant="flushed"
              borderBottom={"4px"}
              borderBottomColor={"blue"}
              _focus={{ borderBottom: "2px", borderBottomColor: "blue" }}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </FormControl>

          <FormControl mt="40px" data-aos="fade-up">
            <FormLabel fontSize={{ base: "20px", md: "15px" }} fontWeight={400}>
              Write a message?*
            </FormLabel>
            <Textarea
              fontFamily="Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"
              fontStyle={"italic"}
              fontWeight={"bold"}
              color={"blue"}
              variant="flushed"
              borderBottom="4px"
              borderBottomColor={"blue"}
              _focus={{ borderBottom: "2px", borderBottomColor: "blue" }}
              _placeholder={{
                color: "white",
                fontFamily: "Roboto, sans-serif",
                padding: "10px",
              }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>
        
          <Button
            _hover={{ bg: "black" }}
            mt="30px"
            variant="solid"
            bg="#0D47A1"
            rounded="full"
            size="lg"
            color="white"
            px="50px"
            onClick={handelCheck}
          >
            Submit
          </Button>
        </Box>
      </SimpleGrid>
      <Footer />
      <Button
      className="back-to-top d-flex align-items-center justify-content-center"  position="fixed"
      right="15px"
      bottom="15px"
      zIndex="996"
      width="40px"
      height="40px"
      borderRadius="50px"
      transition="all 0.4s"
      bg="#47b2e4"
      color="#fff"
      _hover={{ bg: "#6bc1e9", color: "#fff" }}
      _active={{ visibility: "visible", opacity: 1 }}
      onClick={handleScrollToTop}
    >
      <ArrowUpIcon />
    </Button>
    </div>
  );
};

export default ContactPage;
