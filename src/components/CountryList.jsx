import CityItem from './CityItem';
import styles from './CountryList.module.css';
import CountryItem from './CountryItem';
import Message from './Message';
import Spinner from './Spinner';

const CountryList = ({ cityData, isLoading }) => {
  // console.log(cityData);
  // console.log(isLoading);

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
