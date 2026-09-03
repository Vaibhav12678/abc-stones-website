"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface QuoteContextType {
  isOpen: boolean;
  prefillStone: string;
  openQuote: (stoneName?: string) => void;
  closeQuote: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefillStone, setPrefillStone] = useState("");

  const openQuote = (stoneName?: string) => {
    setPrefillStone(stoneName || "");
    setIsOpen(true);
  };

  const closeQuote = () => {
    setIsOpen(false);
  };

  return (
    <QuoteContext.Provider value={{ isOpen, prefillStone, openQuote, closeQuote }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
}
