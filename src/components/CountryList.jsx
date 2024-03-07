import styles from './CountryList.module.css';
import CountryItem from './CountryItem';
import Message from './Message';
import Spinner from './Spinner';
import { useCities } from '../contexts/CitiesContext';

const CountryList = () => {
  const { cityData, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cityData.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  // allows a country to only be added to the array once
  const countries = cityData.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <div>
      <ul className={styles.countryList}>
        {countries.map((country) => (
          <CountryItem country={country} key={country.country} />
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
