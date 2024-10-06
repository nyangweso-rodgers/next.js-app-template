import styles from "../../../page.module.css";
const TrainBookingFormPage = () => {
  return (
    <>
      <main>
        <div className={`container`}>
          <div className="row">
            <h4>Test Train - Online Booking</h4>
          </div>
          <form className={`row ${styles.trainBookingForm}`}>
            <div className={`col-md-3`}>
              <label for="inputTrainType">TRAIN TYPE</label>
              <select
                id="inputTrainType"
                className="form-select form-select-lg"
              >
                <option selected>Select ...</option>
                <option value="1">Type 1</option>
                <option value="2">Type 2</option>
                <option value="3">Type 3</option>
              </select>
            </div>
            <div className={`col-md-3`}>
              <label for="inputFrom">FROM</label>
              <select id="inputFrom" className="form-select form-select-lg">
                <option selected>Select ...</option>
                <option value="1">Nairobi</option>
                <option value="2">Kisumu</option>
                <option value="3">Mombasa</option>
              </select>
            </div>
            <div className={`col-md-3`}>
              <label for="inputTo">TO</label>
              <select id="inputTo" className="form-select form-select-lg">
                <option selected>Select ...</option>
                <option value="1">Nairobi</option>
                <option value="2">Kisumu</option>
                <option value="3">Mombasa</option>
              </select>
            </div>
            <div className={`col-md-3`}>
              <label for="inputDepartureDate">DEPARTURE DATE</label>
              <input type="date"></input>
            </div>
            <div className={`col-md-2`}>
              <button type="submit" className="btn btn-primary">
                Book a train
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default TrainBookingFormPage;
