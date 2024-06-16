"use server";
import { prisma } from "@/lib/prismaClient";
import { redirect } from "next/navigation";

const main = async ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);
  const record = await prisma.url.findUnique({
    where:{ 
      short: params.slug
    }
  })
  if (record?.long) {
    redirect(record?.long);
  } else {
    redirect("/");
  }
};
export default main;
