import TourCardList from '../../features/tour/Components/TourList';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <section>
        <div className="image-container ">
          <img
            src="../../assets/images/malaga-homepage.webp"
            alt="malaga pic"
            loading="eager"
          />
          <h1>
            Explore the heart of Andalusia and unlock the secrets of Málaga
          </h1>
        </div>
      </section>
      <h2>Discover the best tours</h2>
      <TourCardList />
    </div>
  );
};

export default HomePage;
