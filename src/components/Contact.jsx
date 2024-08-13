import React from "react";
import { Box, Text, VStack, Button, useColorModeValue, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Contact = () => {
    // Use color mode values for background and text color
    const bg = useColorModeValue("gray.100", "gray.800");
    const textColor = useColorModeValue("gray.800", "white");

    return (
        <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            bg={bg}
            color={textColor}
            minHeight="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={4}
        >
            <VStack spacing={6} width="100%" maxW="600px" textAlign="center">
                <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold">
                    Contact Information
                </Text>

                <Box
                    p={6}
                    bg={useColorModeValue("white", "gray.700")}
                    borderRadius="md"
                    shadow="md"
                >
                    <Text fontSize="xl" fontWeight="semibold">
                        Mohd Ahmad
                    </Text>
                    <Text fontSize="md" mt={1}>
                        <strong>Phone:</strong> +91 8929691406
                    </Text>
                    <Text fontSize="md" mt={1}>
                        <strong>Current Location:</strong> Bangalore
                    </Text>

                    <Text fontSize="md" mt={4}>
                        Aspiring React Developer with hands-on experience in building dynamic web applications using React and related technologies. Proficient in front-end development with a strong understanding of the MERN stack. Eager to contribute to innovative projects and grow in a tech environment.
                    </Text>
                </Box>

                <Divider borderColor={useColorModeValue("gray.300", "gray.600")} my={6} />

                <VStack spacing={4} width="100%">
                    <Button colorScheme="teal" size="lg" width="100%" onClick={() => window.location.href = "mailto:m.ahmad8929@gmail.com"}>
                        Email Me
                    </Button>
                    <Button colorScheme="blue" size="lg" width="100%" onClick={() => window.open("https://www.linkedin.com/in/ahmad8929", "_blank")}>
                        LinkedIn Profile
                    </Button>
                    <Button colorScheme="purple" size="lg" width="100%" onClick={() => window.open("https://drive.google.com/file/d/1UgCQhyKeDNDmL-KAmz5nKnUQiflgqo-z/view?usp=sharing", "_blank")}>
                        View Resume
                    </Button>
                </VStack>
            </VStack>
        </Box>
    );
};

export default Contact;
