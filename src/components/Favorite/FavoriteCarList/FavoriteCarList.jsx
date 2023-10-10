import CarCard from '../../Catalog/CarCard';
import { useSelector } from 'react-redux';
import { CarList, Title } from './FavoriteCarList.styled';
import { selectFavoriteCars } from 'redux/Favorite/selectors';

const FavoriteCarList = () => {
  const favoriteList = useSelector(selectFavoriteCars);

  if (favoriteList.length === 0) {
    return <Title>Yoy favorite list empty</Title>;
  }
  return (
    <CarList>
      {favoriteList.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </CarList>
  );
};
export default FavoriteCarList;
