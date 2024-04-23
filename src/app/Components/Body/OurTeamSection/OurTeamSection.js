import Image from "next/image";
const OurTeamSection = () => {
  return (
    <>
      <main>
        <div className={`container border border-primary`}>
          <div className={`row border`}>
            <div className={`col-md-4`}>
              <a href="#" className={`card`}>
                <Image
                  src="/images/google-bigquery-logo.png"
                  alt="Google BigQuery Logo"
                  width="800"
                  height="600"
                  layout="responsive"
                />
                <div className={`card-body`}></div>
              </a>
            </div>
            <div className={`col-md-4`}>
              <a href="#" className={`card`}>
                <Image
                  src="/images/JavaScript-logo.png"
                  alt="Google BigQuery Logo"
                  width="800"
                  height="600"
                  layout="responsive"
                />
                <div className={`card-body`}></div>
              </a>
            </div>
            <div className={`col-md-4`}>
              <a href="#" className={`card`}>
                <Image
                  src="/images/next.js-logo.jpg"
                  alt="Google BigQuery Logo"
                  width="800"
                  height="600"
                  layout="responsive"
                />
                <div className={`card-body`}></div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default OurTeamSection;
