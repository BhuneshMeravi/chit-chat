import {
  Button,
  Field,
  Fieldset,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const toast = Toast();

  const handleSignUp = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await axios.post("/api/auth/register", {
      name,
      email,
      password,
    });

    const data = await res.data;

    // Toast({
    //   title: "Account created",
    //   description: "We've created your account for you",
    //   status: "success",
    //   duration: 3000,
    //   isClosable: true,
    // });

    console.log(data);  
    return data

  };
  return (
    <Fieldset.Root size="lg" maxW="md">
      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Name</Field.Label>
          <Input name="name" type="text" onChange={(e)=> setName(e.target.value)} />
        </Field.Root>

        <Field.Root>
          <Field.Label>Email address</Field.Label>
          <Input name="email" type="email" onChange={e => setEmail(e.target.value)} />
        </Field.Root>

        <Field.Root>
          <Field.Label>Password</Field.Label>
          <Input name="password" type="password" onChange={e => setPassword(e.target.value)} />
        </Field.Root>

        <Field.Root>
          <Field.Label>Confirm Password</Field.Label>
          <Input name="confirm-password" type="password" onChange={e=> setConfirmPassword(e.target.value)} />
        </Field.Root>
      </Fieldset.Content>

      <Button
        type="submit"
        alignSelf="flex-start"
        onClick={handleSignUp}
      >
        Sign Up
      </Button>
    </Fieldset.Root>
  );
}
