"use client";

import SignIn from "@/components/authentication/signin";
import SignUp from "@/components/authentication/signup";
import { Box, Container, Tabs, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState<string | null>("first");
  return (
    <Container maxW="xl" centerContent>
      {/* <Box
        display="flex"
        p={3}
        // bg="white"
        width="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          width="100%"
          fontSize="4xl"
          fontFamily="Work sans"
          color="black"
          textAlign="center"
        >
          ChitChat
        </Text>
      </Box> */}
      <Box w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs.Root
          colorScheme="green"
          value={value}
          onValueChange={(e) => setValue(e.value)}
        >
          <Tabs.List width="100%">
            <Tabs.Trigger justifyContent="center" width="50%" value="first">Sign Up</Tabs.Trigger>
            <Tabs.Trigger justifyContent="center" width="50%" value="second">Log In</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="first"><SignUp /></Tabs.Content>
          <Tabs.Content value="second"><SignIn /></Tabs.Content>
        </Tabs.Root>
      </Box>
    </Container>
  );
}
