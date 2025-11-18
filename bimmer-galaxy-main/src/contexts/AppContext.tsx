import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  currency: string;
  exchangeRate: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const countries = {
  'US': { currency: 'USD', rate: 1, symbol: '$' },
  'DE': { currency: 'EUR', rate: 0.85, symbol: '€' },
  'GB': { currency: 'GBP', rate: 0.73, symbol: '£' },
  'JP': { currency: 'JPY', rate: 110, symbol: '¥' },
  'CA': { currency: 'CAD', rate: 1.25, symbol: 'C$' },
  'AU': { currency: 'AUD', rate: 1.35, symbol: 'A$' },
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [selectedCountry, setSelectedCountry] = useState('US');
  
  const countryData = countries[selectedCountry as keyof typeof countries];
  
  return (
    <AppContext.Provider value={{
      selectedCountry,
      setSelectedCountry,
      currency: countryData.currency,
      exchangeRate: countryData.rate,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export { countries };