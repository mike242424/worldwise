import { useCities } from '../contexts/CitiesContext';
import CityItem from './CityItem';
import styles from './CityList.module.css';
import Message from './Message';
import Spinner from './Spinner';

const CityList = () => {
  const { cityData, isCitiesLoading } = useCities();

  if (isCitiesLoading) return <Spinner />;

  if (!cityData.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <div>
      <ul className={styles.cityList}>
        {cityData.map((city) => (
          <CityItem city={city} key={city.id} />
        ))}
      </ul>
    </div>
  );
};

export default CityList;
