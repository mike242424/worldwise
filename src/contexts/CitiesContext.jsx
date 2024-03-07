import { createContext, useContext, useEffect, useState } from 'react';

export const CitiesContext = createContext();

const BASE_URL = 'http://localhost:8000';

const CitiesProvider = ({ children }) => {
  const [cityData, setCityData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCityData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        setCityData(data);
      } catch (error) {
        console.log('Error laoding data', error);
      } finally {
        setIsLoading(false);
      }
    }

    getCityData();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cityData,
        setCityData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

export function useCities() {
  const context = useContext(CitiesContext);

  if (!context) {
    throw new Error('CitiescContext was used outside the CitiesProvider');
  }

  return context;
}

export default CitiesProvider;
