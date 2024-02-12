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
      <div
        className="container-fluid"
        style={{
          overflow: "hidden",
          maxHeight: "1670px",
          marginBottom: "20px",
        }}
      >
        <iframe
          width="640px"
          height="10000x"
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAcpRHOVUNDhXRkkwQ0hMRzJTU1EwVEhHSUpNQ1ZUUC4u&embed=true"
          style={{
            overflow: "hidden",
            border: "none",
            maxWidth: "100%",
            maxHeight: "1931px",
            borderRadius: "10px",
          }}
          allowFullScreen
          className="box"
        >
          {" "}
        </iframe>
      </div>
    </center>
  );
};

export default Questionnaire;
