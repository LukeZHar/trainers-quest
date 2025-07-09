"use client";

import { Navbar } from "@/components/Navbar";
import { useState } from "react";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = () => {
    // implement search logic from pokemon tcg api
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    setSearchResults([
      // Mock search results for demonstration
      "Pikachu",
      "Charizard",
      "Bulbasaur",
      "Squirtle",
    ]);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Navbar />
      <section className="max-w-2xl w-full p-4">
        <h1 className="text-4xl font-bold mb-4">Search</h1>
        <p className="mb-6">
          Use the search bar to find your Pokémon cards or just to look up
          cards.
        </p>
      </section>
      <section className="max-w-2xl w-full p-4 bg-white shadow-md rounded-lg">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for Pokémon cards..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch} 
          className="mt-4 w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Search 
        </button>
      </section>
      <section className="max-w-2xl w-full p-4 mt-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
        {searchResults.length > 0 ? (
          <p className="text-gray-700">
            No results found. Try searching for a different card.
          </p>
        ) : (
          <ul className="list-disc pl-5 text-gray-700">
            {searchResults.map((result, index) => (
              <li key={index} className="mb-2">
                {result}
              </li>
            ))}
          </ul>
        )
      }
        {/* Add search results here */}
      </section>
      <section className="max-w-2xl w-full p-4 mt-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Popular Searches</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {/* add a top search list function */}
        </ul>
      </section>
    </main>
  );
}
