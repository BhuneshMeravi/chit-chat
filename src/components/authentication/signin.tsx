import {
  Button,
  Field,
  Fieldset,
  For,
  Input,
  NativeSelect,
  Stack,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Fieldset.Root size="lg" maxW="md">
      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Email address</Field.Label>
          <Input
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field.Root>

        <Field.Root>
          <Field.Label>Password</Field.Label>
          <Input
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field.Root>
      </Fieldset.Content>
      <Button
        type="submit"
        alignSelf="flex-start"
        onClick={() =>
          signIn("credentials", { username: email, password: password, callbackUrl: "/", redirect: true })
        }
      >
        Sign In
      </Button>
    </Fieldset.Root>
  );
}
