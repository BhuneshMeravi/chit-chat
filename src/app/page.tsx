// "use client"

import { getServerSession } from "next-auth";

// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

// export default function Home() {
//   return (
//     <SessionProvider>
//       <RealHome />
//     </SessionProvider>
//   );
// }

// function RealHome() {
//   const session= useSession();
//   return (
//     <div>
//       {JSON.stringify(session)}
//       {session.status === "authenticated" && <button onClick={() => signOut()}>Sign out</button> }
//       {session.status === "unauthenticated" && <button onClick={() => signIn()}>Sign In</button> }
//     </div>
//   );
// }

// =========================================================

export default async function Home() {
  const session = await getServerSession();
  console.log("session",session)
  return <>
  <div>{JSON.stringify(session)}</div>
  <div>{"ok"}</div>
  </> 
}

// =========================================================

// import { Button, HStack } from "@chakra-ui/react"

// export default function Demo() {
//   return (
//     <HStack>
//       <Button>Click me</Button>
//       <Button>Click me</Button>
//     </HStack>
//   )
// }