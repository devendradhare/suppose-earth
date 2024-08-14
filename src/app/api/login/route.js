import { NextResponse } from "next/server";

export async function GET(req) {
  // console.log(req);
  const asdf = req;
  return NextResponse.json({ req: asdf });
}
