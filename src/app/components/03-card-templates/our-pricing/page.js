const OurPricingPage = () => {
  return (
    <>
      <main>
        <div className={`container`}>
          <div className={`row`}>
            <div>
              <h1>Pricing Table</h1>
            </div>
          </div>
          <div className={`row`}>
            <div className={`col-md-3`}>
              <div className={`card`}>
                <div className={`card-body`}>
                  <h3>Regular</h3>
                  <div>
                    $100
                    <span>Per Month</span>
                  </div>
                  <ul>
                    <li>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                  </ul>
                  <a className={`btn`} href="#">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className={`col-md-3`}>
              <div className={`card`}>
                <div className={`card-body`}>
                  <h3>Pro Pack</h3>
                  <div>
                    $200<span>Per Month</span>
                  </div>
                  <ul>
                    <li>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                  </ul>
                  <a className={`btn`} href="#">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className={`col-md-3`}>
              <div className={`card`}>
                <div className={`card-body`}>
                  <h3>Premium</h3>
                  <div>
                    $300 <span>Per Month</span>
                  </div>
                  <ul>
                    <li>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                  </ul>
                  <a className={`btn`} href="#">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className={`col-md-3`}>
              <div className={`card`}>
                <div className={`card-body`}>
                  <h3>Ultimate</h3>
                  <div>
                    <span> $400 </span>
                    <span>Per Month</span>
                  </div>
                  <ul>
                    <li>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                  </ul>
                  <a className={`btn`} href="#">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default OurPricingPage;
