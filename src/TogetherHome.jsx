import React, { useState } from "react";

import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import './styles/custom.css';

import heroImg from "./assets/hero.jpg";
import founderImg from "./assets/founders/founder-voices.jpg";
import chantelleImg from "./assets/founders/chantelle.jpg";
import nimratImg from "./assets/founders/nimrat.jpg";
import connectIcon from "./assets/icons/connect.png";
import fundIcon from "./assets/icons/fund.png";
import talkIcon from "./assets/icons/talk.png";
import brandIcon from "./assets/icons/brand.png";
import spotlightIcon from "./assets/icons/spotlight.png";
import podcastIcon from "./assets/icons/podcast.png";
import podcastImg from "./assets/podcast/podcast-img.png";


const NavButtons = () => (
  <>
    <button className="px-4 py-2 rounded font-semibold text-black-600 hover:underline">Home</button>
    <button className="px-4 py-2 rounded font-semibold text-black-600 hover:underline">Funding</button>
    <button className="px-4 py-2 rounded font-semibold text-black-600 hover:underline">Community</button>
    <button className="px-4 py-2 rounded font-semibold text-black-600 hover:underline">Resources</button>
  </>
);


export default function TogetherHome() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <nav className="sticky top-0 bg-white shadow p-4 flex justify-between items-center z-50">
        <h1 className="text-xl font-bold">Together</h1>

        {/* Hamburger Menu for Mobile */ }
        <button
          className="ml-auto md:hidden text-black-600 focus:outline-none"
          onClick={ () => setIsOpen(!isOpen) }
        >
          {/* Hamburger Icon */ }
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Menu */ }
        <div className="ml-auto hidden md:flex space-x-4">
          <NavButtons />
        </div>
        <button className="ml-4 px-4 py-2 rounded font-semibold border border-black-600 text-black-600 hover:bg-black-50">
          Login
        </button>

      </nav>

      {/* Mobile Menu */ }
      { isOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-4 pb-4 transition-all duration-300 mr-4">
          <NavButtons />
        </div>
      ) }


      <div className="space-y-10">
        {/* Hero Section */ }
        <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-50">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              TOGET<span className="text-red">H</span>ER:<br />
              INDIA’S MOST<br />
              POWERFUL FEMALE FOUNDER NETWORK
            </h1>
            <p className="text-lg">
              From Goa to global — Together helps you connect with like-minded founders, raise funds, grow your company and build your personal brand.
            </p>
            <div className="space-x-4 mt-4">
              <Button className="my-button">JOIN THE COMMUNITY</Button>
              <Button variant="outline" className="white-outline-button">I’M LOOKING FOR FUNDING</Button>
            </div>
          </div>
          <img src={ heroImg } alt="Together Hero" className="md:w-1/2 rounded-lg mt-6 md:mt-0" />
        </section>

        {/* Features */ }
        <section className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-8">WHAT YOU’LL FIND AT TOGETHER</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={ fundIcon } alt="Funding" className="mx-auto mb-2" />
              <h3 className="font-bold">Funding Resources</h3>
              <p className="text-sm">Grants, investors, and pitch opportunities curated for female founders.</p>
            </div>
            <div>
              <img src={ connectIcon } alt="Connections" className="mx-auto mb-2" />
              <h3 className="font-bold">Founder Network</h3>
              <p className="text-sm">Join a trusted network of peers to share, learn, and grow together.</p>
            </div>
            <div>
              <img src={ talkIcon } alt="Conversations" className="mx-auto mb-2" />
              <h3 className="font-bold">Expert Access</h3>
              <p className="text-sm">Tap into mentors, advisors, and industry experts across domains.</p>
            </div>
          </div>
        </section>

        {/* Founder Voices */ }
        <section className="p-8 bg-gray-50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-center">
              <h2 className="text-2xl font-bold mb-6">Join the Tribe</h2>
              <div className="mt-6">
                <p className="text mt-2">We vet every startup carefully to ensure alignment.</p>
                <a href="https://form.typeform.com/to/yZKv4xsc" target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                  <Button className="my-button">ADD MY STARTUP</Button>
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="founder-voices-img"><img src={ founderImg } alt="Founder Group" className="rounded-lg" /></div>
            </div>
          </div>

        </section>

        {/* Startup Belongs Section */ }
        <section className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-6">YOUR STARTUP BELONGS HERE</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={ brandIcon } alt="Brand" className="mx-auto mb-2" />
              <p className="font-semibold">BUILD MY <span className="font-normal">PERSONAL BRAND</span></p>
            </div>
            <div>
              <img src={ spotlightIcon } alt="Spotlight" className="mx-auto mb-2" />
              <p className="font-semibold">FOUNDER SPOTLIGHT</p>
            </div>
            <div>
              <img src={ podcastIcon } alt="Podcast" className="mx-auto mb-2" />
              <p className="font-semibold"><a href="https://www.youtube.com/watch?v=PMRF2vT37YI" target="_blank" rel="noopener noreferrer">PODCAST</a></p>
            </div>
          </div>
        </section>

        {/* Founder Spotlight */ }
        <section className="text-center p-8 py-12 fonder-spolight-wrapper bg-gray-100">
          <h2 className="text-2xl font-bold mb-6">Founder Spotlight</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <div className="founder-img">
                <img src={ chantelleImg } alt="Chantelle" className="rounded-full" />
              </div>
              <p className="italic">Grants, investors, and pitch opportunities curated for female founders.</p>
              <p className="font-semibold mt-2">Rhea, EdTech Founder</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="founder-img">
                <img src={ nimratImg } alt="Nimrat" className="rounded-full" />
              </div>
              <p className="italic">“It’s more than a network—it’s my startup tribe.”</p>
              <p className="font-semibold mt-2">Nimrat, Consumer Brand Founder</p>
            </div>
          </div>
        </section>

        {/* Podcast Feature */ }
        <section class="text-center p-6">
          <h2 class="text-2xl font-bold">🎧 Podcast Feature</h2>
          <p>Meet our 98-year-old founder who started at 91. Proof it’s never too late.</p>
          <div className="space-y-4 mt-4">
            <div className="podcast-img">
              <a href="https://www.youtube.com/watch?v=PMRF2vT37YI" target="_blank">
                <img src={ podcastImg } alt="Founder Group" className="rounded-lg" />
              </a>
            </div>
          </div>
          <a href="https://www.youtube.com/watch?v=PMRF2vT37YI" target="_blank" class="text-blue-600 underline mt-2 inline-block">Listen to the Episode</a>
        </section>
      </div>

      {/* Footer */ }
      <footer className="p-6 border-t text-center text-sm text-gray-600">
        <div className="space-x-4">
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
        <p className="mt-2">&copy; 2025 Together. All rights reserved.</p>
      </footer>
    </div>
  );
}