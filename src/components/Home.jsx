import React, { useState } from "react";
import { Box, Button, Input, Text, VStack, HStack, useToast, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const toast = useToast();

    const handleChange = (e) => {
        const value = e.target.value;

        // Allow only numbers (positive or negative)
        if (!/^-?\d*$/.test(value)) return;

        // Limit the number of digits to 10
        if (value.length > 10) return;

        setInputValue(value);
        setError(false);
    };

    const handleSubmit = () => {
        if (inputValue === "") {
            setError(true);
            toast({
                title: "Input Required",
                description: "Please enter a number before submitting.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        const number = parseInt(inputValue, 10);
        if (isNaN(number) || number < 0) {
            setError(true);
            setMessage("Enter a positive value");
        } else if (number % 2 === 0) {
            setMessage(
                `Next 3 even numbers: ${number + 2}, ${number + 4}, ${number + 6}`
            );
        } else {
            setMessage(
                `Next 3 odd numbers: ${number + 2}, ${number + 4}, ${number + 6}`
            );
        }
    };

    const handleClear = () => {
        setInputValue("");
        setMessage("");
        setError(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    // Use color mode values for background, border color, and text color
    const bg = useColorModeValue("gray.100", "gray.800");
    const inputBg = useColorModeValue("white", "gray.700");
    const borderColor = useColorModeValue("gray.300", "gray.600");
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
            fontFamily="Arial"
            p={4}
        >
            <VStack spacing={6} width="100%" maxW="400px">
                <Text fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} fontWeight="bold">
                    Number Input
                </Text>
                <Input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter a number"
                    size="lg"
                    bg={inputBg}
                    borderColor={borderColor}
                    _placeholder={{ color: "gray.400" }}
                    _hover={{ borderColor: "gray.500" }}
                    aria-label="Number input field"
                />
                <HStack spacing={4} width="100%">
                    <Button
                        onClick={handleSubmit}
                        colorScheme="teal"
                        size="lg"
                        width="50%"
                        aria-label="Submit button"
                    >
                        Submit
                    </Button>
                    <Button
                        onClick={handleClear}
                        colorScheme="red"
                        size="lg"
                        width="50%"
                        aria-label="Clear button"
                    >
                        Clear
                    </Button>
                </HStack>
                <Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>{message}</Text>
            </VStack>
        </Box>
    );
};

export default Home;
