import SurveyHeader from "./Common/AppHeader/SurveyHeader/SurveyHeader";
import ExhibitionSurveyForm from "./FormTemplates/ExhibitionSurveyForm/ExhibitionSurveyForm";
import AppFooter from "../Components/Common/AppFooter/AppFooter";

const App = () => {
  return (
    <>
      <SurveyHeader />
      <ExhibitionSurveyForm />
      <AppFooter />
    </>
  );
};

export default App;
