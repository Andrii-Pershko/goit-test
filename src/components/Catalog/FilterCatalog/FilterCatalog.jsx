import { Formik } from 'formik';
import { useState } from 'react';
import { carBrandsList } from './carBrandsList';
import {
  ArrowDown,
  BrandField,
  BrandName,
  BrandNameSelect,
  DropBox,
  MilegeBox,
  MilegeFromField,
  MilegeToField,
  PriceField,
  SearchBtn,
  StyledForm,
  StyledLabel,
} from './FilterCatalog.styled';
import arrowDoun from '../../../img/chevron-down.svg';

const FilterCatalog = () => {
  const [openCarBrand, setOpenCarBrand] = useState(false);
  const [selectBrend, setSelectBrand] = useState('');

  const initialValues = {
    carBrand: selectBrend,
    price: '',
    carMileageFrom: '',
    carMileageTo: '',
  };

  const hundleSubmit = data => {
    console.log('Submit', data);
  };

  const hundleSelectModel = e => {
    setSelectBrand(e.currentTarget.textContent);
    setOpenCarBrand(false);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={hundleSubmit}>
      <StyledForm>
        <StyledLabel onClick={() => setOpenCarBrand(!openCarBrand)}>
          <ArrowDown src={arrowDoun} open={openCarBrand} />
          <p>Car brand</p>
          <BrandField
            disabled={true}
            type="text"
            name="carBrand"
            placeholder={selectBrend !== '' ? selectBrend : 'Enter the text'}
          />

          <DropBox open={openCarBrand}>
            {carBrandsList.map((brand, index) => {
              if (brand === selectBrend) {
                return (
                  <BrandNameSelect onClick={hundleSelectModel} key={index}>
                    <span>{brand}</span>
                  </BrandNameSelect>
                );
              }
              return (
                <BrandName onClick={hundleSelectModel} key={index}>
                  {brand}
                </BrandName>
              );
            })}
          </DropBox>
        </StyledLabel>

        <StyledLabel>
          <p>Price/ 1 hour</p>
          <ArrowDown src={arrowDoun} open={openCarBrand} />
          <PriceField
            type="number"
            name="price"
            placeholder="To $"
            disabled={true}
          />
        </StyledLabel>

        <MilegeBox>
          <StyledLabel>
            <p>Сar mileage / km</p>
            <MilegeFromField
              type="text"
              name="carMileageFrom"
              placeholder="From"
            />
          </StyledLabel>

          <StyledLabel>
            <MilegeToField type="text" name="carMileageTo" placeholder="To" />
          </StyledLabel>
        </MilegeBox>

        <SearchBtn type="submit">Search</SearchBtn>
      </StyledForm>
    </Formik>
  );
};

export default FilterCatalog;
