import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import {
  Overlay,
  ModalStyle,
  Img,
  Close,
  Description,
  Acessories,
  InfBlockFavorite,
  Rental,
  RentalItem,
  RentalBlock,
  RentalBtn,
} from "./modal.styled";
import { useEffect, useState } from "react";
import close from "../../img/x-mark.svg";
import { addCommas } from "../../utils/addComas";
import skillet from "../../img/skilet.jpg";
import { InfBlock, ModelCar, NameInf } from "../Catalog/CarCard/CarCard.styled";

const Modal = ({ toggleModal, car }) => {
  const modalRoot = document.querySelector("#modal-root");
  const [errorLoadImg, setErrorLoadImg] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      toggleModal();
    }
  };

  const handleClickOverlay = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleClickOverlay}>
      <ModalStyle>
        <Img
          src={errorLoadImg ? skillet : car.img}
          alt={car.make}
          onError={() => setErrorLoadImg(true)}
          width={461}
          height={345}
        />
        <NameInf>
          {car.make} <ModelCar>{car.model}</ModelCar>, {car.year},
        </NameInf>
        <InfBlockFavorite>
          <p>{car.address.split(",")[1]}</p>
          <p>{car.address.split(",")[2]}</p>
          <p>{car.id}</p>
          <p>Type: {car.type}</p>
          <p>Fuel consumption: {car.fuelConsumption}</p>
          <p>Engine size: {car.engineSize}</p>
        </InfBlockFavorite>
        <Description>{car.description}</Description>
        <div>
          <Acessories>Accessories and functionalities:</Acessories>
          <InfBlock>
            {car.functionalities.map((functionaliti, index) => (
              <p key={index}>{functionaliti}</p>
            ))}
          </InfBlock>
        </div>
        <Rental>Rental Conditions: </Rental>
        <RentalBlock>
          {car.rentalConditions.split("\n").map((rentalCondition, index) => {
            if (index === 0) {
              const age = rentalCondition.split(":");
              return (
                <RentalItem key={index}>
                  {age[0]} :
                  <span style={{ color: "var(--primal-color)" }}>{age[1]}</span>
                </RentalItem>
              );
            }
            return <RentalItem key={index}>{rentalCondition}</RentalItem>;
          })}
          <RentalItem>
            Mileage:{" "}
            <span style={{ color: "var(--primal-color)" }}>
              {addCommas(car.mileage)}
            </span>
          </RentalItem>
          <RentalItem>
            Price:{" "}
            <span style={{ color: "var(--primal-color)" }}>
              {addCommas(car.rentalPrice.split("$")[1])}$
            </span>
          </RentalItem>
        </RentalBlock>

        <RentalBtn type="button">
          <a href="tel:+380730000000">Rental car</a>
        </RentalBtn>
        <Close
          type="button"
          onClick={toggleModal}
        >
          <img
            src={close}
            alt="close window"
          />
        </Close>
      </ModalStyle>
    </Overlay>,
    modalRoot
  );
};
export default Modal;

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  car: PropTypes.object.isRequired,
};
