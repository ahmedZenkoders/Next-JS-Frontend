import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to Your Portal System
        </h1>
        <p className="text-lg mb-6">Manage your courses with ease!</p>
        <div className="flex justify-center space-x-4">
          <Link href="/signin">
            <Button>Sign In</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
