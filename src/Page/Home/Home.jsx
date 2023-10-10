import { ImgThumb, OferItem, OfferTitile, Title, WeOffer } from "./Home.styled";

const Home = () => {
  return (
    <>
      <Title>Welcome to the best car rental service provider.</Title>
      <OfferTitile>We offer</OfferTitile>
      <WeOffer>
        <OferItem>
          <p> Large fleet cars</p>
          <ImgThumb>
            <img
              src="https://www.cheapfleet.co.uk/wp-content/uploads/2016/12/merc.jpg"
              alt="auto fleet"
            />
          </ImgThumb>
        </OferItem>
        <OferItem>
          <p>Services in different regions of the country</p>
          <ImgThumb>
            <img
              src=" https://www.pngall.com/wp-content/uploads/12/Ukraine-Map-PNG-Image.png"
              alt="map Ukraine"
            />
          </ImgThumb>
        </OferItem>
        <OferItem>
          <p>Fast online booking</p>
          <ImgThumb>
            <img
              src=" https://archbishopvining.edu.ng/wp-content/uploads/2021/09/registration.jpeg"
              alt="map Ukraine"
            />
          </ImgThumb>
        </OferItem>
      </WeOffer>
    </>
  );
};

export default Home;
