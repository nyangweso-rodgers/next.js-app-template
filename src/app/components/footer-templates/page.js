import styles from "../../page.module.css";
const FooterPage = () => {
  return (
    <>
      <footer>
        <div className={`container`}>
          <div className={`row`}>
            <div>
              <hr />
            </div>
          </div>
          <div className={`row`}>
            <div className={`col-sm-6 border`}>
              <div className={`${styles.flexContainerWithFlexStart}`}>
                <a
                  className={`fa-brands fa-linkedin`}
                  target="_blank"
                  href="https://www.linkedin.com/in/rodgers-nyangweso-305919b4/"
                ></a>
                <a
                  className={`fa-brands fa-github`}
                  target="_blank"
                  href="https://github.com/nyangweso-rodgers/"
                ></a>
                <a
                  className={`fa-brands fa-hashnode`}
                  target="_blank"
                  href="https://nyangweso-rodgers.hashnode.dev/"
                ></a>
                <a
                  className={`fa-brands fa-x-twitter`}
                  target="_blank"
                  href="https://twitter.com/R_Nyangweso"
                ></a>
              </div>
            </div>
            <div className={`col-sm-6 border`}>
              <div className={`${styles.flexContainerWithFlexEnd}`}>
                <div>
                  <span>Terms Of Use</span>
                </div>
                <div>
                  <span>Privacy Policy</span>
                </div>
                <div>
                  <span>&copy;</span> <span>{new Date().getFullYear()}</span>{" "}
                  <span>Rodgers Nyangweso</span>
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
