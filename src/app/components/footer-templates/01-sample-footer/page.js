import pageStyles from "../../../styles/page.module.css";
import formStyles from "../../../styles/form.module.css";
import buttonStyles from "../../../styles/button.module.css";
import socialStyles from "../../../styles/social.module.css";

const FooterPage = () => {
  return (
    <>
      <footer>
        <div className={`container border border-primary p-5`}>
          <div className={`row border border-secondary p-4`}>
            <div className={`col-sm-9 border border-info p-3`}>
              <div className={`${pageStyles.flexColumnContainer}`}>
                <div>
                  <h5>Leave a Comment</h5>
                </div>

                <div>
                  <input
                    id="nameInput"
                    className={`form-control ${formStyles.formInput}`}
                    placeholder="YOUR NAME"
                    type="text"
                  ></input>
                </div>
                <div>
                  <input
                    id="emailInput"
                    className={`form-control ${formStyles.formInput}`}
                    placeholder="YOUR EMAIL"
                    type="email"
                  ></input>
                </div>
                <div>
                  <textarea
                    id="messageInput"
                    className={`form-control ${formStyles.formTextarea}`}
                    placeholder="YOUR MESSAGE"
                  ></textarea>
                </div>
                <div>
                  <button
                    className={`${buttonStyles.button} ${buttonStyles.submitButton}`}
                    type="submit"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </div>
            <div className={`col-sm-3 border border-dark p-3`}>
              <div className={`${pageStyles.flexColumnContainer}`}>
                <div>
                  <h5>Social</h5>
                </div>
                <div className={`${socialStyles.socialItem}`}>
                  <a
                    className={`fa-brands fa-linkedin`}
                    target="_blank"
                    href="https://www.linkedin.com/in/rodgers-nyangweso-305919b4/"
                  ></a>
                  <span className="">LinkedIn</span>
                </div>
                <div className={`${socialStyles.socialItem}`}>
                  <a
                    className={`fa-brands fa-github`}
                    target="_blank"
                    href="https://github.com/nyangweso-rodgers/"
                  ></a>
                  <span className="">GitHub</span>
                </div>
                <div className={`${socialStyles.socialItem}`}>
                  <a
                    className={`fa-brands fa-hashnode`}
                    target="_blank"
                    href="https://nyangweso-rodgers.hashnode.dev/"
                  ></a>
                  <span className="">Hashnode</span>
                </div>
                <div className={`${socialStyles.socialItem}`}>
                  <a
                    className={`fa-brands fa-x-twitter`}
                    target="_blank"
                    href="https://twitter.com/R_Nyangweso"
                  ></a>
                  <span className="">Twitter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterPage;
