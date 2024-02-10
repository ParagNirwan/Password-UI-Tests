import "./Questionnaire.css";
import "animate.css";
import "firebase/compat/database";
import "./main.css";

interface QuestionnaireProps {
  onFinish: () => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = () => {
  return (
    <>
      <br />
      <center>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdvavEIlHLl_YZr0UmeoHBnUdOAFIt97K5zPxD-m4qGvU_fIA/viewform?embedded=true"
          width="500"
          height="1961"
          frameBorder="0"
          className="box"
        >
          Loading…
        </iframe>
      </center>
    </>
  );
};

export default Questionnaire;
