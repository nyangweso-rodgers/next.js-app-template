//import LatestPostsPage from "../components/card-templates/latest-posts/page.js";
import ShowVisitorsFormPage from "../components/form-templates/show-visitors-survey-form/page.js";
import ExhibitionSurveyFormPage from "../components/form-templates/exhibitors-survey-form/page.js";
import FooterPage from "../components/footer-templates/01-sample-footer/page.js";

import CardTemplateOne from "../components/card-templates/01-cards/page.js";
import ProfileCardTemplate from "./card-templates/02-profile-card-template/page.js";
import BlogPostCardTemplate from "./card-templates/03-blog-post-card-template/page.js";

const App = () => {
  return (
    <>
      {/*<ShowVisitorsFormPage />*/}
      {/*<ExhibitionSurveyFormPage />*/}
      {/*<SurveyAppHeader />
      <AppFooter />*/}

      {/*<FooterPage />*/}
      <CardTemplateOne />
      <ProfileCardTemplate />
      <BlogPostCardTemplate />
    </>
  );
};

export default App;
