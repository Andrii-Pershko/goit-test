import PropTypes from "prop-types";
import favorite from "../../../img/like.svg";
import noFavorite from "../../../img/no-like.svg";
import { useState } from "react";
import Modal from "../../Modal";
import { addCommas } from "../../../utils/addComas";
import { useDispatch, useSelector } from "react-redux";
import { updateFavorite } from "../../../redux/Favorite/FavoriteSlice";
import {
  CarCardItem,
  Dollar,
  FavotiteSvg,
  ImgThumb,
  InfBlock,
  LearnMore,
  ModelCar,
  NameInf,
  Price,
} from "./CarCard.styled";
import skillet from "../../../img/skilet.jpg";
import dollar from "../../../img/dollar.svg";

const CarCard = ({ car }) => {
  const [openModal, setOpenModal] = useState(false);
  const [errorLoadImg, setErrorLoadImg] = useState(false);
  const favoriteList = useSelector((store) => store.favorite.favoriteCars);
  const dispatch = useDispatch();
  const [inFavorite, setInFavorite] = useState(
    favoriteList.filter((carInf) => carInf.id === car.id).length > 0
  );

  const changeFavoriteCars = () => {
    if (inFavorite) {
      const deleteInFavoriteList = favoriteList.filter(
        (item) => item.id !== car.id
      );
      dispatch(updateFavorite(deleteInFavoriteList));
      setInFavorite(false);
      return;
    }
    const addInFavoriteList = [...favoriteList, car];

    dispatch(updateFavorite(addInFavoriteList));
    setInFavorite(true);
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <CarCardItem>
      <FavotiteSvg
        src={inFavorite ? favorite : noFavorite}
        alt={"add/remove in favorite"}
        onClick={changeFavoriteCars}
      />
      <ImgThumb>
        <img
          src={errorLoadImg ? skillet : car.img}
          alt={car.make}
          onError={() => setErrorLoadImg(true)}
        />
      </ImgThumb>

      <NameInf>
        {car.make} <ModelCar>{car.model}</ModelCar>, {car.year}
        <Price>
          {car.rentalPrice.split("$")[1]} <Dollar src={dollar} />
        </Price>
      </NameInf>
      <InfBlock>
        <p>{car.address.split(",")[1]}</p>
        <p>{car.address.split(",")[2]}</p>
        <p>{car.rentalCompany}</p>
        <p>{car.type}</p>
        <p>{car.model}</p>
        <p>{addCommas(car.mileage)}</p>
      </InfBlock>
      <LearnMore onClick={toggleModal}>Learn more</LearnMore>
      {openModal && (
        <Modal
          car={car}
          toggleModal={toggleModal}
        />
      )}
    </CarCardItem>
  );
};
export default CarCard;

CarCard.propTypes = {
  car: PropTypes.object,
  setFavoriteList: PropTypes.func,
};
