import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Navbar />
      <section className="text-center mt-10 p-10 bg-gradient-to-b from-white via-gray-200 to-gray-400 w-full">
        <h1 className="text-8xl font-bold text-blue-500 font-sans">
          Trainer&apos;s Quest
        </h1>
        <p className="mt-8 text-2xl">Gotta Track &apos;Em All!</p>
        <p className="m-8 text-gray-700">
          Track, organise and showcase your Pokémon cards with Trainer&apos;s
          Quest, the ultimate card management app.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Button asChild className="text-xl m-4 p-8">
            <Link href="/login">Start Your Collection</Link>
          </Button>
          <Button
            asChild
            className="text-xl m-4 bg- text-black hover:bg-white border-2 p-8"
          >
            <Link href="/collection">Explore Cards</Link>
          </Button>
        </div>
      </section>
      <section className="w-full border-1 text-center text-blue-500">
        <h1 className="text-5xl font-semibold font-sans">Features</h1>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Getting Started</h2>
        <p className="mt-2">
          To get started, you can check out the documentation or explore the
          codebase.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Contributing</h2>
        <p className="mt-2">
          If you want to contribute to this project, feel free to open issues or
          pull requests.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2">
          For any questions or feedback, you can reach out via the
          project&apos;s GitHub repository.
        </p>
      </section>
      <footer className="mt-8">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Card Game App. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
