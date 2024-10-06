import Image from "next/image";
import cardStyles from "../../../styles/cards.module.css";

const ProfileCardTemplate = () => {
  return (
    <>
      <section>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col`}>
              <div>
                <h2>Profile Card Template</h2>
              </div>
            </div>
          </div>
          <div className={`row`}>
            <div className={`col-sm-3`}>
              <div className={`card ${cardStyles.profileCard}`}>
                <Image
                  src="/images/JavaScript-logo.png"
                  alt="Google BigQuery Logo"
                  className={`${cardStyles.profileImage}`}
                  width="400"
                  height="400"
                  layout="responsive"
                />
                <div className={`card-body`}>
                  <h5 className={`${cardStyles.profileTitle}`}>
                    FirstName, LastName
                  </h5>
                  <h6 className={`${cardStyles.profileJobTitle}`}>Job Title</h6>
                  <p className={`${cardStyles.profileDescription}`}>
                    Profile description
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-sm-3`}>
              <div className={`card ${cardStyles.profileCard}`}>
                <Image
                  src="/images/JavaScript-logo.png"
                  alt="Google BigQuery Logo"
                  className={`${cardStyles.profileImage}`}
                  width="400"
                  height="400"
                  layout="responsive"
                />
                <div className={`card-body`}>
                  <h5 className={`${cardStyles.profileTitle}`}>
                    FirstName, LastName
                  </h5>
                  <h6 className={`${cardStyles.profileJobTitle}`}>Job Title</h6>
                  <p className={`${cardStyles.profileDescription}`}>
                    Profile description
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-sm-3`}>
              <div className={`card ${cardStyles.profileCard}`}>
                <Image
                  src="/images/JavaScript-logo.png"
                  alt="Google BigQuery Logo"
                  className={`${cardStyles.profileImage}`}
                  width="400"
                  height="400"
                  layout="responsive"
                />
                <div className={`card-body`}>
                  <h5 className={`${cardStyles.profileTitle}`}>
                    FirstName, LastName
                  </h5>
                  <h6 className={`${cardStyles.profileJobTitle}`}>Job Title</h6>
                  <p className={`${cardStyles.profileDescription}`}>
                    Profile description
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-sm-3`}>
              <div className={`card ${cardStyles.profileCard}`}>
                <Image
                  src="/images/JavaScript-logo.png"
                  alt="Google BigQuery Logo"
                  className={`${cardStyles.profileImage}`}
                  width="400"
                  height="400"
                  layout="responsive"
                />
                <div className={`card-body`}>
                  <h5 className={`${cardStyles.profileTitle}`}>
                    FirstName, LastName
                  </h5>
                  <h6 className={`${cardStyles.profileJobTitle}`}>Job Title</h6>
                  <p className={`${cardStyles.profileDescription}`}>
                    Profile description
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileCardTemplate;
