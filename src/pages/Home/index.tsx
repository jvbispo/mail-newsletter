import "./styles.scss";
import HomeImage from "../../assets/home.jpg";

const HomePage = () => {
  return (
    <div className="container">
      <div className="center-container">
        <section className="img-section">
          <img src={HomeImage} alt="" />
        </section>
        <section className="form-section">
          <h1>Awesome newsletter</h1>
          <span>Digite seu email e inscreva-se</span>
          <input type="text" />
          <button>INSCREVER</button>
        </section>
      </div>
    </div>
  );
};

export { HomePage };
