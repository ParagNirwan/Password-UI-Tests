import "./Questionnaire.css";
import "animate.css";
import "firebase/compat/database";
import "./main.css";

interface QuestionnaireProps {
  onFinish: () => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = () => {
  return (
    // <div className="container">
    //   <br />
    //   <center>
    //     <iframe
    //       src="https://docs.google.com/forms/d/e/1FAIpQLSdvavEIlHLl_YZr0UmeoHBnUdOAFIt97K5zPxD-m4qGvU_fIA/viewform?embedded=true"
    //       width="500"
    //       height="1961"
    //       frameBorder="0"
    //       className="box"
    //     >
    //       Loading…
    //     </iframe>
    //   </center>
    // </div>
    <center>
      <iframe
        width="640px"
        height="10000x"
        src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAcpRHOVUNDhXRkkwQ0hMRzJTU1EwVEhHSUpNQ1ZUUC4u&embed=true"
        style={{
          border: "none",
          maxWidth: "100%",
          maxHeight: "100vh",
        }}
        allowFullScreen
        className="box"
      >
        {" "}
      </iframe>
    </center>
  );
};

export default Questionnaire;
