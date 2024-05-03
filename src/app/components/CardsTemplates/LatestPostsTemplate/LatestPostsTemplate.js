"use client";
import styles from "../../../page.module.css";
const LatestPostsTemplate = () => {
  return (
    <>
      <main>
        <div className={`container`}>
          <div className={`row`}>
            <div>
              <h1>Latest Posts</h1>
            </div>
          </div>
          <div className={`row`}>
            <div className={`col-md-3`}>
              <a className={`card h-100`} href="#" target="_blank">
                <div className={`card-body ${styles.displayFlexColumnCenter}`}>
                  <h3>Post title</h3>
                  <button className={`${styles.btn} ${styles.cardButton}`}>
                    Topic
                  </button>
                </div>
              </a>
            </div>
            <div className={`col-md-3`}>
              <a className={`card h-100`} href="#" target="_blank">
                <div className={`card-body ${styles.displayFlexColumnStart}`}>
                  <h3>Post title</h3>
                  <button className={`${styles.btn} ${styles.cardButton}`}>
                    Topic
                  </button>
                </div>
              </a>
            </div>
            <div className={`col-md-3`}>
              <a className={`card h-100`} href="#" target="_blank">
                <div className={`card-body ${styles.displayFlexColumnStart}`}>
                  <h3>Post title</h3>
                  <button className={`${styles.btn} ${styles.cardButton}`}>
                    Topic
                  </button>
                </div>
              </a>
            </div>
            <div className={`col-md-3`}>
              <a className={`card h-100`} href="#" target="_blank">
                <div className={`card-body ${styles.displayFlexColumnStart}`}>
                  <h3>Post title</h3>
                  <button className={`${styles.btn} ${styles.cardButton}`}>
                    Topic
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LatestPostsTemplate;
