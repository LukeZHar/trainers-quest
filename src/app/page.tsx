import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-screen flex-col items-center justify-between pt-24">
      <Navbar />
      <section className="text-center mt-10 p-10 bg-gradient-to-b from-white via-gray-200 to-gray-400 w-full">
        <h1 className="text-9xl font-bold text-blue-500">
          Trainer&apos;s Quest
        </h1>
        <p className="mt-8 p-8 text-3xl">Gotta Track &apos;Em All!</p>
        <p className="m-8 p-8 text-xl text-gray-700">
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
      <section className="w-full text-center mt-3">
        <h1 className="text-5xl font-semibold font-sans text-blue-500 mt-4">
          Features
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 m-8">
          <div className="p-6 bg-white shadow-md rounded-lg border">
            <h1 className="text-3xl font-sans text-blue-500">Card Tracking</h1>
            <p className="mt-4 text-gray-700">
              Search and add Pokemon cards to your collection. Track condition,
              value, and quantity with organisation by set and rarity.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg border">
            <h1 className="text-3xl font-sans text-blue-500">
              Collection Book View
            </h1>
            <p className="mt-4 text-gray-700">
              Search and add Pokemon cards to your collection. Track condition,
              value, and quantity with organisation by set and rarity.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg border">
            <h1 className="text-3xl font-sans text-blue-500">
              Showcase Profile
            </h1>
            <p className="mt-4 text-gray-700">
              Create a public profile to showcase your collection. Share your
              favourite cards and your highest value cards.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg border">
            <h1 className="text-3xl font-sans text-blue-500">
              Web3 Integration
            </h1>
            <p className="mt-4 text-gray-700">
              Connect your wallet to verify ownership of cards and earn rewards
              for contributing to the community. Trade cards with other users
              securely.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg border">
            <h1 className="text-3xl font-sans text-blue-500">Value Tracking</h1>
            <p className="mt-4 text-gray-700">
              Keep track of your collection&apos;s value over time. Monitor
              market trends and make informed decisions about your investments.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg border">
            <h1 className="text-3xl font-sans text-blue-500">
              Community Driven
            </h1>
            <p className="mt-4 text-gray-700">
              Join a community of collectors. Share your collection,
              discover rare finds, and trade with fellow collectors.
            </p>
          </div>
        </section>
      </section>
      <section className="mt-8 bg-gray-300 w-full text-center">
        <Separator className="bg-gray-500 mt-4 max-w-2/3"/> 
        <h2 className="text-2xl font-semibold">Getting Started</h2>
        <p className="mt-2">
          To get started, you can check out the documentation or explore the
          codebase.
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
