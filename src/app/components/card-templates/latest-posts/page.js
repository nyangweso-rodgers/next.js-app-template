"use client";

import Link from "next/link";

import pageStyles from "../../../styles/page.module.css";
import utilsStyles from "../../../styles/utils.module.css";

const LatestPostsPage = () => {
  return (
    <>
      <main className={`${pageStyles.main}`}>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`${pageStyles.displayFlexColumnCenterContainer}`}>
              <h1>Latest Posts</h1>
            </div>
          </div>
          <div className={`row`}>
            <div className={`col-md-3`}>
              <div className={`card ${pageStyles.latestPostCard}`}>
                <div className={`card-body ${pageStyles.latestPostCardBody}`}>
                  <h2 className="">Card Title Goes Here</h2>
                  <p className="">
                    Title paragraph goes here, test
                  </p>
                  <a
                    href="#"
                    className={`card-link ${pageStyles.latestPostCardLink}`}
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className={`col-md-3`}>
              <div className={`card ${pageStyles.latestPostCard}`}>
                <div className={`card-body ${pageStyles.latestPostCardBody}`}>
                  <h2 className="">Second card title foe </h2>
                  <p className="">
                    Second title paragraph goes, test
                  </p>
                  <a
                    href="#"
                    className={`card-link ${pageStyles.latestPostCardLink}`}
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className={`col-md-3`}>
              <div className={`card ${pageStyles.latestPostCard}`}>
                <div className={`card-body ${pageStyles.latestPostCardBody}`}>
                  <h2 className="">Third Card Title Goes Here</h2>
                  <p className="">
                    Third title paragraph goes here
                  </p>
                  <a
                    href="#"
                    className={`card-link ${pageStyles.latestPostCardLink}`}
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className={`col-md-3`}>
              <div className={`card ${pageStyles.latestPostCard}`}>
                <div className={`card-body ${pageStyles.latestPostCardBody}`}>
                  <h2 className="">
                    Fourth Card Title Goes Here
                  </h2>
                  <p className="">
                    Fourth title paragraph goes here
                  </p>
                  
                  <a
                    href="#"
                    className={`card-link ${pageStyles.latestPostCardLink}`}
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={`row`}>
            <div className={`${pageStyles.displayFlexColumnCenterContainer}`}>
              <Link href="#" className={`${utilsStyles.btn}`}>
                Read More
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LatestPostsPage;
