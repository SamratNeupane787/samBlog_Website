import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const trendposts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 1,
    });
    return new NextResponse(JSON.stringify(trendposts), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
