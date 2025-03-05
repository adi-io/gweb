"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

// Modal component for the expanded image
const ImageModal = ({
  card,
  isOpen,
  onClose,
}: {
  card: any;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="relative w-full max-w-5xl h-[80vh] rounded-lg overflow-hidden">
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50">
          <h3 className="text-xl md:text-2xl font-medium text-white">
            {card.title}
          </h3>
        </div>
      </div>
      <button
        className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        onClick={onClose}
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
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    onCardClick,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    onCardClick: (index: number) => void;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => onCardClick(index)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  ),
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null,
  );

  const handleCardClick = (index: number) => {
    setExpandedCardIndex(index);
  };

  const closeModal = () => {
    setExpandedCardIndex(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            onCardClick={handleCardClick}
          />
        ))}
      </div>

      {expandedCardIndex !== null && (
        <ImageModal
          card={cards[expandedCardIndex]}
          isOpen={expandedCardIndex !== null}
          onClose={closeModal}
        />
      )}
    </>
  );
}
