import Image from "next/image";
import { Input } from "@/components/ui/input";
import { prisma } from "@/lib/prismaClient";

export default function Home() {
  async function createUrl(formData: FormData) {
    "use server";
    const rawFormData = {
      longUrl: formData.get("longUrl") as string,
    };
    console.log(rawFormData.longUrl);
    let x = Date.now().toString();
    await prisma.url.create({
      data: {
        long: rawFormData.longUrl,
        short: x,
      },
    });

    // ...
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={createUrl}>
        <input type="text" placeholder="url" name="longUrl" />
        <button className="border-2">submit</button>
      </form>
    </main>
  );
}
