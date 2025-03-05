"use client";

import { NavigationMenuDemo } from "@/components/ui/navbar";
import { type CarouselApi } from "@/components/ui/carousel";
import { FocusCards } from "@/components/ui/focus-cards";
import { FlipWords } from "@/components/ui/flip-words";
import { Icons } from "@/components/icons";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { apartment_pictures } from "@/lib";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();
  const wordsList = ["Luxury", "Comfort", "Style", "Modernity"];

  useEffect(() => {
    if (!api) return;

    const autoSlideInterval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(autoSlideInterval);
  }, [api]);
  return (
    <>
      <nav className="bg-white shadow-md py-4 fixed top-0 w-full z-10">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-8 w-8 text-blue-500" />
            <span className="font-bold text-xl">Gosia</span>
          </Link>
          <NavigationMenuDemo />
        </div>
      </nav>
      <div
        className="hero"
        style={{
          height: "1000px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="w-full h-screen bg-black">
          <div className="relative w-full h-full">
            <Carousel
              setApi={setApi}
              opts={{ loop: true }}
              className="absolute inset-0"
            >
              <CarouselContent>
                {apartment_pictures.map((picture) => (
                  <CarouselItem key={picture}>
                    <div className="flex h-screen w-full items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={`/apartment/${picture}.webp`}
                          alt={`Apartment picture ${picture}`}
                          fill
                          sizes="100vw"
                          quality={100} // Increase quality (default is 75)
                          priority
                          style={{
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Section 1 below the hero */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-3/5 p-8">
            <h3 className="text-4xl font-bold mb-6">Redefining Urban Living</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A beautiful 2+1 apartment in a quiet area of Prague 4 - Michle.
              The apartment with a total area of 55 m² is located on the top,
              5th floor of a revitalized apartment building with an elevator.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              This fully furnished apartment is move-in ready and completely
              stocked.
            </p>
            <a
              href="https://app.youform.com/forms/vxbxrjwz"
              className="px-6 py-3 bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors duration-300 inline-block"
            >
              Book Now
            </a>
          </div>

          {/* map Section */}
          <div className="md:w-2/5 p-4 flex justify-center">
            <div className="relative max-w-sm w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d540.0871542129876!2d14.45993343018328!3d50.04687700298523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93937eeda9e9%3A0x1ca0db70bc017819!2sMichelsk%C3%A1%201240%2F72%2C%20141%2000%20Praha%204-Michle!5e0!3m2!1sen!2scz!4v1741200069187!5m2!1sen!2scz"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2, multiple cards */}
      <div className="h-auto py-16 bg-white">
        <div className="h-1/5 p-4 text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Explore Our Apartment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the beautiful spaces and amenities our property has to
            offer.
          </p>
        </div>

        <div className="h-4/5 p-4">
          <FocusCards
            cards={[
              {
                title: "Modern Kitchen",
                src: "/apartment/6.webp",
              },
              {
                title: "Spacious Living Room",
                src: "/apartment/2.webp",
              },
              {
                title: "Cozy Bedroom",
                src: "/apartment/7.webp",
              },
            ]}
          />
        </div>
      </div>

      {/* Pre-Footer */}
      <div className="w-full bg-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="get-in-touch-div flex flex-col md:flex-row justify-between items-center">
            <div className="getintouch-details flex flex-col md:flex-row gap-8 items-center justify-between w-full">
              <div className="get-in-touch-heading-div max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Get in touch
                </h2>
              </div>
              <a
                href="https://app.youform.com/forms/vxbxrjwz"
                className="px-8 py-4 bg-white text-gray-800 text-lg font-semibold hover:bg-gray-100
                          transition-colors duration-300 inline-block rounded-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="footer-inner-div">
            {/* First Row */}
            <div className="footer-1st-row flex flex-col md:flex-row justify-between items-center md:items-start border-b border-gray-700 pb-10 mb-10">
              {/* Logo */}
              <Link href="/" className="mb-8 md:mb-0">
                <Image
                  src="/logo-light.svg"
                  alt="Logo"
                  width={162}
                  height={40}
                  className="footer-logo-img"
                />
              </Link>

              {/* Menu Links */}
              <div className="footer-menu-div flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 md:mb-0"></div>

              {/* Social Icons */}
              <div className="footer-social-div flex gap-4">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:opacity-80 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            {/* Second Row */}
            <div className="footer-2nd-row flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p className="mb-4 md:mb-0">
                © {new Date().getFullYear()} SwayBlocks. All Rights Reserved.
              </p>

              <div className="copyright-div flex gap-6">
                <Link href="/" className="hover:text-white transition-colors">
                  Terms
                </Link>
                <Link href="/" className="hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link
                  href="https://app.youform.com/forms/vxbxrjwz"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
