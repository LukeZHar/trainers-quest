import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-screen flex-col items-center justify-between pt-24">
      <Navbar />
      <section className="text-center mt-10 p-10 bg-gradient-to-b from-white via-gray-200 to-gray-400 w-full">
        <h1 className="text-9xl font-bold">
          Trainer&apos;s Quest
        </h1>
        <p className="mt-8 p-8 text-3xl">Gotta Track &apos;Em All!</p>
        <p className="m-8 p-8 text-xl">
          Track, organise and showcase your Pokémon cards with Trainer&apos;s
          Quest, the ultimate card management app.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Button asChild className="text-xl m-4 p-8">
            <Link href="/wallet">Start Your Collection</Link>
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
        <h1 className="text-5xl font-semibold mt-4">
          Features
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 m-8">
          <div className="p-6 bg-white shadow-md rounded-lg border">
            <h1 className="text-3xl">Card Tracking</h1>
            <p className="mt-4">
              Search and add Pokemon cards to your collection. Track condition,
              value, and quantity with organisation by set and rarity.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg border">
            <h1 className="text-3xl">
              Collection Book View
            </h1>
            <p className="mt-4">
              Search and add Pokemon cards to your collection. Track condition,
              value, and quantity with organisation by set and rarity.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg border">
            <h1 className="text-3xl">
              Showcase Profile
            </h1>
            <p className="mt-4">
              Create a public profile to showcase your collection. Share your
              favourite cards and your highest value cards.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg border">
            <h1 className="text-3xl">
              Web3 Integration
            </h1>
            <p className="mt-4">
              Connect your wallet to verify ownership of cards and earn rewards
              for contributing to the community. Trade cards with other users
              securely.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg border">
            <h1 className="text-3xl">Value Tracking</h1>
            <p className="mt-4">
              Keep track of your collection&apos;s value over time. Monitor
              market trends and make informed decisions about your investments.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg border">
            <h1 className="text-3xl">
              Community Driven
            </h1>
            <p className="my-4 ">
              Join a community of collectors. Share your collection, discover
              rare finds, and trade with fellow collectors.
            </p>
          </div>
        </section>
      </section>
      <section className="my-8 bg-gray-300 w-full text-center">
        <div className="text-gray-500 my-6">__________________________________________________________________________________________</div>
        <h1 className="text-5xl font-semibold my-4">
          Why Choose Trainer&apos;s Quest?
        </h1>
        <p className="my-6 p-8 text-xl">
          Trainer&apos;s Quest is more than just a card management app.
          It&apos;s a community-driven platform designed to help you track,
          organise, and showcase your Pokémon card collection. Whether
          you&apos;re a seasoned collector or just starting out, Trainer&apos;s
          Quest has everything you need to manage your collection effectively.
        </p>
      </section>
      <section className="my-4 p-8 w-full text-center">
        <h1 className="text-5xl font-semibold">
          Ready to start your Trainer&apos;s Quest?
        </h1>
        <p className="mt-6 pt-8 text-xl">
          Join the Trainer&apos;s Quest community today and start your journey
          to becoming a Pokémon card master!
        </p>
        <Button asChild className="text-xl p-8 mt-8">
          <Link href="/wallet">Connect</Link>
        </Button>
      </section>
      <footer className="mt-8 bg-gray-200 w-full text-center p-2">
        <p className="text-sm">
          © {new Date().getFullYear()} Card Game App. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
