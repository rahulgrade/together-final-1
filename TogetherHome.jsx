import React from "react";

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

export default function TogetherHome() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */ }
      <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-50">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            TOGET<span className="text-orange-600">HER</span>:<br />
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
            <img src={ connectIcon } alt="Connections" className="mx-auto mb-2" />
            <h3 className="font-bold">Connections That Count</h3>
            <p className="text-sm">Meet investors, unicorn founders & future cofounders.</p>
          </div>
          <div>
            <img src={ fundIcon } alt="Funding" className="mx-auto mb-2" />
            <h3 className="font-bold">Funding Opportunities</h3>
            <p className="text-sm">Get access to India’s most-active diversity-focused fund.</p>
          </div>
          <div>
            <img src={ talkIcon } alt="Conversations" className="mx-auto mb-2" />
            <h3 className="font-bold">Real Conversations</h3>
            <p className="text-sm">Not panels — real talk with those who’ve done it.</p>
          </div>
        </div>
      </section>

      {/* Founder Voices */ }
      <section className="p-8 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-left">FOUNDER VOICES</h2>
            <div className="flex items-center gap-4">
              <img src={ chantelleImg } alt="Chantelle" className="w-16 h-16 rounded-full" />
              <div>
                <p>“I came to Together feeling like an Imposter. I left feeling like a founder.”</p>
                <p className="text-sm font-semibold">Chantelle, New Delhi</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src={ nimratImg } alt="Nimrat" className="w-16 h-16 rounded-full" />
              <div>
                <p>“Best founder event I’ve been to. Period.”</p>
              </div>
            </div>
          </div>
          <img src={ founderImg } alt="Founder Group" className="rounded-lg" />
        </div>
        <div className="text-center mt-6">
          <Button className="my-button">ADD MY STARTUP</Button>
          <p className="text-xs mt-2">We vet every startup carefully to ensure alignment.</p>
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
            <p className="font-semibold">PODCAST</p>
          </div>
        </div>
      </section>

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