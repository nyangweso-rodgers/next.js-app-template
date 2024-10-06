import pageStyles from "../../../styles/page.module.css";
import utilsStyles from "../../../styles/utils.module.css";

const ShowVisitorsFormPage = () => {
  return (
    <>
      <section className={`${pageStyles.section}`}>
        <div className={`container`}>
          <div className={`row`}>
            <h1>Form Header</h1>
          </div>
        </div>
        <form className={`container`}>
          <div className={`row ${pageStyles.row}`}>
            <label htmlFor="fullName" className={`col-sm-3 col-form-label`}>
              Full Name
            </label>
            <div className={`col-sm-9`}>
              <input
                id="fullName"
                name="fullName"
                type="text"
                className={`form-control`}
              ></input>
            </div>
          </div>
          <div className={`row ${pageStyles.row}`}>
            <label htmlFor="" className={`col-sm-3 col-form-label`}>
              Email
            </label>
            <div className={`col-sm-9`}>
              <input
                id=""
                name=""
                type="text"
                className={`form-control`}
              ></input>
            </div>
          </div>
          <div className={`row ${pageStyles.row}`}>
            <label htmlFor="" className={`col-sm-3 col-form-label`}>
              Phone
            </label>
            <div className={`col-sm-9`}>
              <input
                id=""
                name=""
                type="text"
                className={`form-control`}
              ></input>
            </div>
          </div>
          <div className={`row ${pageStyles.row}`}>
            <label htmlFor="" className={`col-sm-3 col-form-label`}>
              Current Location
            </label>
            <div className={`col-sm-9`}>
              <input
                id=""
                name=""
                type="text"
                className={`form-control`}
              ></input>
            </div>
          </div>
          <div className={`row ${pageStyles.row}`}>
            <label htmlFor="" className={`col-sm-3 col-form-label`}>
              Current Company
            </label>
            <div className={`col-sm-9`}>
              <input
                id=""
                name=""
                type="text"
                className={`form-control`}
              ></input>
            </div>
          </div>
          <div className={`row ${pageStyles.row}`}>
            <div>
              <div>
                <p className={`${utilsStyles.heading}`}>Question title</p>
              </div>
              <div className={`form-check`}>
                <input
                  id="yes"
                  name="yes"
                  type="radio"
                  className={`form-check-input`}
                ></input>
                <label htmlFor="yes" className={`form-check-label`}>
                  Yes
                </label>
              </div>
              <div className={`form-check`}>
                <input
                  id="no"
                  name="no"
                  type="radio"
                  className={`form-check-input`}
                ></input>
                <label htmlFor="no" className={`form-check-label`}>
                  No
                </label>
              </div>
            </div>
          </div>
          <div className={`row ${pageStyles.row}`}></div>
          <div className={`row ${pageStyles.row}`}></div>
          <div className={`row`}>
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default ShowVisitorsFormPage;
