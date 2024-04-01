import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Home() {
  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center mt-45">
        Discover the future with Bay Area Technology Solutions. Explore now! 😍
      </h1>
      <Link href="/left">
        <div className="flex justify-center">
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">
            Go to Left Page
          </Button>
        </div>
      </Link>
    </div>
  );
}
