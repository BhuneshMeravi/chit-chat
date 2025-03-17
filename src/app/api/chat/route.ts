import { NextResponse } from "next/server"

export default async function GET() {
  return NextResponse.json( {
    status: 200,
    body: "Hello, World!",
  })
}
