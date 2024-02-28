import CityItem from './CityItem';
import styles from './CityList.module.css';
import Message from './Message';
import Spinner from './Spinner';

const CityList = ({ cityData, isLoading }) => {
  // console.log(cityData);
  // console.log(isLoading);

  if (isLoading) return <Spinner />;

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
