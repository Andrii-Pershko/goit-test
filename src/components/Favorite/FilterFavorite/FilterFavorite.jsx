import { Field, Form, Formik } from "formik";

const FilterFavorite = () => {
  const initialValues = {
    carBrand: "",
    price: "",
    carMileageFrom: "",
    carMileageTo: "",
  };

  const hundleSubmit = () => {};
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={hundleSubmit}
    >
      <Form>
        <label>
          <p>Car brand</p>
          <Field
            type="text"
            name="carBrand"
            placeholder="Enter the text"
          />
        </label>

        <label>
          <p>Price/ 1 hour</p>
          <Field
            type="number"
            name="price"
            placeholder="Price $"
          />
        </label>

        <div>
          <label>
            <p>Сar mileage / km</p>
            <Field
              type="number"
              name="carMileageFrom"
              placeholder="From"
            />
          </label>

          <label>
            <Field
              type="number"
              name="carMileageTo"
              placeholder="To"
            />
          </label>
        </div>

        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default FilterFavorite;
