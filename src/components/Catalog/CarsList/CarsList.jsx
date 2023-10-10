import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars, getMoreCars } from "../../../redux/Cars/operation";
import { selectGetCars, selectIsLoading } from "../../../redux/Cars/selectors";
import CarCard from "../CarCard";
import { CarList, LoadMoreBtn } from "./CarsList.styled";
import { onTop } from "../../../utils/onTop";

const CarsList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const cars = useSelector(selectGetCars);
  const isLoading = useSelector(selectIsLoading);
  const pagination = useSelector((state) => state.carsList.pagination);

  useEffect(() => {
    if (page === 1) {
      dispatch(getCars());
    }
  }, [dispatch, page]);

  const handleLoadMoreCare = () => {
    dispatch(getMoreCars(page + 1));
    setPage(page + 1);
  };

  if (isLoading) {
    return <h1>Please vait, we search cars</h1>;
  }

  return (
    <>
      <CarList>
        {[...cars].map((car, index) => (
          <CarCard
            key={index}
            car={car}
          />
        ))}
      </CarList>
      {pagination ? (
        <LoadMoreBtn
          type="button"
          onClick={handleLoadMoreCare}
        >
          Load more
        </LoadMoreBtn>
      ) : document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20 ? (
        <LoadMoreBtn
          type="button"
          onClick={onTop}
        >
          Its all result, to up
        </LoadMoreBtn>
      ) : (
        <LoadMoreBtn type="button">Its all result</LoadMoreBtn>
      )}
    </>
  );
};
export default CarsList;
