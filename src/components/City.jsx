import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import styles from './City.module.css';
import { useCities } from '../contexts/CitiesContext';
import { useEffect } from 'react';
import Spinner from './Spinner';
import Button from './Button';

function City() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getCity, currentCity, isCityLoading } = useCities();

  useEffect(() => {
    getCity(id);
  }, [id]);

  // TEMP DATA
  // const currentCity = {
  //   cityName: 'Lisbon',
  //   emoji: '🇵🇹',
  //   date: '2027-10-31T15:59:59.138Z',
  //   notes: 'My favorite city so far!',
  // };

  const formatDate = (date) =>
    new Intl.DateTimeFormat('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    }).format(new Date(date));

  if (isCityLoading) return <Spinner />;

  return (
    <>
      <div className={styles.city}>
        <div className={styles.row}>
          <h6>City name</h6>
          <h3>
            <span>{currentCity.emoji}</span> {currentCity.cityName}
          </h3>
        </div>

        <div className={styles.row}>
          <h6>You went to {currentCity.cityName} on</h6>
          <p>{formatDate(currentCity.date || null)}</p>
        </div>

        {currentCity.notes && (
          <div className={styles.row}>
            <h6>Your notes</h6>
            <p>{currentCity.notes}</p>
          </div>
        )}

        <div className={styles.row}>
          <h6>Learn more</h6>
          <a
            href={`https://en.wikipedia.org/wiki/${currentCity.cityName}`}
            target="_blank"
            rel="noreferrer"
          >
            Check out {currentCity.cityName} on Wikipedia &rarr;
          </a>
        </div>

        <div>
          <Button
            type="back"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            &larr; Back
          </Button>
        </div>
      </div>
    </>
  );
}

export default City;
