import { NextResponse } from "next/server";
import { client } from "../../../sanity/lib/client";

export async function GET() {
  try {
    const data = await client.fetch(`
    *[_type =="product"]{

    productName,
      category,
   price,
 description,
      status,
   "image_url":image.asset->url,
    }
    `);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
