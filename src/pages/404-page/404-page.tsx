import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Helmet } from 'react-helmet-async';
import styles from './404-page.module.css';

function Page404(): JSX.Element {
  return (
    <div className={styles.page404}>
      <Helmet>
        <title>404</title>
      </Helmet>
      <h1>404</h1>
      <h2>Oops! This page was not found</h2>
      <Link className={styles.link} to={AppRoute.Root}>To main page</Link>
    </div>
  );
}

export default Page404;
