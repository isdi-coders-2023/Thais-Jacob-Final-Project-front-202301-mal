import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <article className="not-found-container">
      <div className="not-found-elements">
        <h1>Oh, that page could not be found.</h1>
        <Link to={'/app'}>Go back</Link>
      </div>
      <div className="not-found-image">
        <img
          src="../../assets/images/404-error.svg"
          alt="Illustration of a man looking to a 404 error"
        />
      </div>
    </article>
  );
};

export default NotFound;
