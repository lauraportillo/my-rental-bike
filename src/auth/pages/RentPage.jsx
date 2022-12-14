import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useForm } from '../../hooks/useForm';
import { Navbar } from '../../ui';
import { bikes } from '../../bikes/data/bikes';
import './rentPage.scss';
import 'react-datepicker/dist/react-datepicker.css';

const formData = {
  displayName: '',
  email: '',
  telephone: '',
  numberDays: '',
};

export const RentPage = () => {
  const { displayName, email, telephone, numberDays, basePrice, totalPrice, onInputChange } = useForm(formData);
  const [selectedDate, setSelectedDate] = useState();
  const [selectBike, setSelectBike] = useState();
  const location = useLocation();

  const numberDaysInteger = numberDays * 1;

  const blockInvalidChar = (e) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

  const basePriceDolar = () => {
    if (selectedDate) {
      if (selectedDate.getDate() < 15) {
        return 10;
      } else {
        return 12;
      }
    }
  };

  const roadPriceDolar = () => {
    if (numberDaysInteger <= 3) {
      return basePriceDolar() * 3;
    } else {
      return basePriceDolar() * 3 + basePriceDolar() * (numberDaysInteger - 3);
    }
  };

  const cityPriceDolar = () => {
    if (numberDaysInteger <= 5) {
      return basePriceDolar() * 5;
    } else {
      return basePriceDolar() * 5 + basePriceDolar() * (numberDaysInteger - 5);
    }
  };

  const totalPriceDolar = () => {
    if (selectedDate && numberDays) {
      if (location?.state?.id.includes('electric') || selectBike?.includes('electric')) {
        return basePriceDolar() * numberDaysInteger;
      } else if (location?.state?.id.includes('road') || selectBike?.includes('road')) {
        return roadPriceDolar();
      } else if (location?.state?.id.includes('city') || selectBike?.includes('city')) {
        return cityPriceDolar();
      }
    }
  };

  const onRentSubmit = (ev) => {
    ev.preventDefault();
  };

  const renderSelectedBike = () => {
    const handleChange = (event) => {
      setSelectBike(event.target.value);
    };

    if (location?.state === null) {
      return (
        <div className="form-group mt-4">
          <select name="bikes" value={selectBike} onChange={handleChange} className="form-select mb-2">
            <option>Choose a bike</option>
            {bikes.map((bike) => (
              <option key={bike.id} value={bike.id}>
                {bike.type}-{bike.bike_name}
              </option>
            ))}
          </select>
        </div>
      );
    } else {
      return (
        <div className="d-flex flex-column align-items-center justify-content-center p-4 ">
          <div>
            <img
              src={`./assets/bikes/${location?.state?.id}.jpg`}
              alt={location?.state?.bike_name}
              className="img-fluid"
            />
          </div>
          <small className="rentPageTitle">{location?.state?.bike_name}</small>
        </div>
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="container col-8">
        <h1 className="mt-3 mb-3 rentPageTitle">Rent your bike:</h1>
        {renderSelectedBike()}

        <form onSubmit={onRentSubmit}>
          <div className="form-group">
            <label htmlFor="displayName">Full name</label>
            <input
              type="text"
              placeholder="Your Name"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              className="form-control mt-1 mb-2"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="email@google.com"
              name="email"
              value={email}
              onChange={onInputChange}
              className="form-control mt-1 mb-2"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Phone number</label>
            <input
              type="telephone"
              placeholder="123456789"
              name="telephone"
              value={telephone}
              onChange={onInputChange}
              className="form-control mt-1 mb-2"
              autoComplete="off"
            />
          </div>

          <div>
            <label>Choose first renting day</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              className="form-control mt-1 mb-2"
            />
          </div>

          <div className="form-group">
            <label htmlFor="numberDays">How many days do you need the bike?</label>
            <input
              type="number"
              placeholder="number of days"
              name="numberDays"
              value={numberDays}
              onKeyDown={blockInvalidChar}
              onChange={onInputChange}
              className="form-control mt-1 mb-2"
              autoComplete="off"
              min="1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="basePrice">Base price in $*</label>
            <input
              type="text"
              placeholder={basePriceDolar()}
              name="basePrice"
              value={basePrice}
              onChange={onInputChange}
              className="form-control mt-1 mb-2"
              autoComplete="off"
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="totalPrice">Total price in $</label>
            <input
              type="text"
              placeholder={totalPriceDolar()}
              name="totalPrice"
              value={totalPrice}
              onChange={onInputChange}
              className="form-control mt-1 mb-2"
              autoComplete="off"
              readOnly
            />
          </div>

          <div className="form-group">
            <small className="rentSmall">
              <b>*</b>The base price is USD 10 per day, if the request is made before the 15th of each month and 12 USD
              per day is made on the 15th or the following days.
            </small>
          </div>

          <button className="btn btn-primary rentBtn_custom mt-3">Rent bike</button>
        </form>
      </div>
    </>
  );
};
