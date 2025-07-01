import React from "react";

import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";

export default function TogetherHome() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="sticky top-0 bg-white shadow p-4 flex justify-between items-center z-50">
        <h1 className="text-xl font-bold">Together</h1>
        <div className="space-x-4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Funding</Button>
          <Button variant="ghost">Community</Button>
          <Button variant="ghost">Resources</Button>
          <Button variant="outline">Login</Button>
        </div>
      </nav>

      <div className="p-6 space-y-10">
        <section className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Together: India’s Most Powerful Female Founder Network</h2>
          <p className="text-lg max-w-2xl mx-auto">
            From our roots in Goa to WhatsApp groups across the country, Together is your platform to connect, fund, grow, and thrive.
          </p>
          <div className="flex justify-center space-x-4">
            <Button>I’m Looking for Funding</Button>
            <Button variant="outline">Join the Community</Button>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">What You’ll Find at Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card><CardContent><h3 className="font-semibold">Funding Resources</h3><p>Grants, investors, and pitch opportunities curated for female founders.</p></CardContent></Card>
            <Card><CardContent><h3 className="font-semibold">Founder Network</h3><p>Join a trusted network of peers to share, learn, and grow together.</p></CardContent></Card>
            <Card><CardContent><h3 className="font-semibold">Expert Access</h3><p>Tap into mentors, advisors, and industry experts across domains.</p></CardContent></Card>
          </div>
        </section>

        <section className="text-center bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">Join the Tribe</h2>
          <p>Enter your startup into our founder database to get discovered and supported.</p>
          <a href="https://form.typeform.com/to/yZKv4xsc" target="_blank" rel="noopener noreferrer">
            <Button className="mt-2">Submit Your Startup</Button>
          </a>
        </section>

        <section className="text-center py-12">
          <h2 className="text-2xl font-bold mb-6">Founder Spotlight</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <img src="https://via.placeholder.com/96" alt="Founder 1" className="rounded-full mx-auto mb-4" />
              <p className="italic">“Together gave me the courage to go bigger.”</p>
              <p className="font-semibold mt-2">Rhea, EdTech Founder</p>
            </div>
            <div className="p-4 border rounded-lg">
              <img src="https://via.placeholder.com/96" alt="Founder 2" className="rounded-full mx-auto mb-4" />
              <p className="italic">“It’s more than a network—it’s my startup tribe.”</p>
              <p className="font-semibold mt-2">Nimrat, Consumer Brand Founder</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 text-center p-6">
          <h2 className="text-2xl font-bold">🎧 Podcast Feature</h2>
          <p>Meet our 98-year-old founder who started at 91. Proof it’s never too late.</p>
          <a href="https://www.youtube.com/watch?v=PMRF2vT37YI" target="_blank" className="text-blue-600 underline mt-2 inline-block">Listen to the Episode</a>
        </section>
      </div>

      <footer className="bg-white border-t p-6 text-center mt-12">
        <p className="text-sm">&copy; 2025 Together. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-blue-500">Instagram</a>
          <a href="#" className="text-blue-500">LinkedIn</a>
          <a href="#" className="text-blue-500">Newsletter</a>
        </div>
      </footer>
    </div>
  );
}
