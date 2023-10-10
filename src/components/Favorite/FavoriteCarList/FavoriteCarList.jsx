import CarCard from "../../Catalog/CarCard";
import { useSelector } from "react-redux";
import { CarList } from "./FavoriteCarList.styled";

const FavoriteCarList = () => {
  const favoriteList = useSelector((store) => store.favorite.favoriteCars);

  return (
    <CarList>
      {favoriteList.map((car, index) => (
        <CarCard
          key={index}
          car={car}
        />
      ))}
    </CarList>
  );
};
export default FavoriteCarList;
