import Link from "next/link";
import cardStyles from "../../../styles/cards.module.css";

const BlogPostCardTemplate = () => {
  return (
    <>
      <section>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col`}>
              <div>
                <h2>Blog Post Card Template</h2>
              </div>
            </div>
          </div>
          <div className={`row`}>
            <div className={`col-sm-3 ${cardStyles.cards}`}>
              <div className={`card ${cardStyles.blogPostCard}`}>
                <div className={`card-body`}>
                  <h4 className={`card-title`}>Post Title</h4>
                  <p className={`${cardStyles.meta}`}>
                    By Rodgers Nyangweso on 2024-10-05
                  </p>
                  <div className={`${cardStyles.content}`}>Post content</div>
                  <Link href="#" className={`${cardStyles.readMoreButton}`}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className={`col-sm-3 ${cardStyles.cards}`}>
              <div className={`card ${cardStyles.blogPostCard}`}>
                <div className={`card-body`}>
                  <h4 className={`card-title`}>Post Title</h4>
                  <p className={`${cardStyles.meta}`}>
                    By Rodgers Nyangweso on 2024-10-05
                  </p>
                  <div className={`${cardStyles.content}`}>Post content</div>
                  <Link href="#" className={`${cardStyles.readMoreButton}`}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className={`col-sm-3 ${cardStyles.cards}`}>
              <div className={`card ${cardStyles.blogPostCard}`}>
                <div className={`card-body`}>
                  <h4 className={`card-title`}>Post Title</h4>
                  <p className={`${cardStyles.meta}`}>
                    By Rodgers Nyangweso on 2024-10-05
                  </p>
                  <div className={`${cardStyles.content}`}>Post content</div>
                  <Link href="#" className={`${cardStyles.readMoreButton}`}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className={`col-sm-3 ${cardStyles.cards}`}>
              <div className={`card ${cardStyles.blogPostCard}`}>
                <div className={`card-body`}>
                  <h4 className={`card-title`}>Post Title</h4>
                  <p className={`${cardStyles.meta}`}>
                    By Rodgers Nyangweso on 2024-10-05
                  </p>
                  <div className={`${cardStyles.content}`}>Post content</div>
                  <Link href="#" className={`${cardStyles.readMoreButton}`}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostCardTemplate;
