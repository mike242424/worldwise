import { createContext, useContext, useEffect, useState } from 'react';

export const CitiesContext = createContext();

const BASE_URL = 'http://localhost:8000';

const CitiesProvider = ({ children }) => {
  const [cityData, setCityData] = useState([]);
  const [isCitiesLoading, setIsCitiesLoading] = useState(false);
  const [isCityLoading, setIsCityLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function getCityData() {
      try {
        setIsCitiesLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        setCityData(data);
      } catch (error) {
        console.log('Error laoding data', error);
      } finally {
        setIsCitiesLoading(false);
      }
    }

    getCityData();
  }, []);

  async function getCity(id) {
    try {
      setIsCityLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();

      setCurrentCity(data);
    } catch (error) {
      console.log('Error laoding data', error);
    } finally {
      setIsCityLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cityData,
        isCitiesLoading,
        isCityLoading,
        currentCity,
        getCity,
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
