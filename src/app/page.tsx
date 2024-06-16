import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form>
        <Input type="url" placeholder="url" />
        <button className="border-2">submit</button>
      </form>
    </main>
  );
}
