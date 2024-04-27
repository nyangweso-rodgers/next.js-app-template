const ExhibitionSurveyForm = () => {
  return (
    <>
      <main>
        <form className={`container`}>
          <div className={`row`}>
            <div className={`col-md-4`}>
              <div>
                <label className={`form-label`}>First name</label>
                <input
                  className={`form-control`}
                  type="text"
                  placeholder="First name"
                ></input>
              </div>
            </div>
            <div className={`col-md-4`}>
              <div>
                <label className={`form-label`}>Last name</label>
                <input
                  className={`form-control`}
                  type="text"
                  placeholder="Last name"
                ></input>
              </div>
            </div>
            <div className={`col-md-4`}>
              <div>
                <label className={`form-label`}>Email address</label>
                <input
                  className={`form-control`}
                  type="email"
                  placeholder="name@example.com"
                ></input>
              </div>
            </div>
          </div>
          <div className={`row`}>
            <div className={`col-md-6`}>
              <div></div>
            </div>
            <div className={`col-md-6`}></div>
          </div>
          <div className={`row`}>
            <div className={`col-md-6`}>
              <div>
                <label className={`form-label`}>
                  How did you hear about this exhibition event?
                </label>
                <select className={`form-select`}>
                  <option selected>Select</option>
                  <option value="1">Social media</option>
                  <option value="2">Any other</option>
                </select>
              </div>
            </div>
            <div className={`col-md-6`}></div>
          </div>
          <div className={`row`}>
            <div>
              <label className={`form-label`}>
                What should we <b>KEEP</b> doing?
              </label>
              <textarea className={`form-control`} id="" rows="4"></textarea>
            </div>
          </div>
          <div className={`row`}>
            <div>
              <label className={`form-label`}>
                What should we <b>START</b> doing?
              </label>
              <textarea className={`form-control`} id="" rows="4"></textarea>
            </div>
          </div>
          <div className={`row`}>
            <div>
              <label className={`form-label`}>
                What should we <b>STOP</b> doing?
              </label>
              <textarea className={`form-control`} id="" rows="4"></textarea>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default ExhibitionSurveyForm;
