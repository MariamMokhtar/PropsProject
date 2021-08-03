import "./App.css";
import Profile from "./profile/Profile";
import img from "./a pic.png";

const annoying_alert = () => {
  alert("Mariam Mokhtar");
};
function App() {
  return (
    <>
      <Profile
        name={"Mariam Mokhtar"}
        bio={"I am a night person"}
        profession={"I am a web developer"}
        myAlert={annoying_alert}
      >
        <img src={img} alt="img" />
      </Profile>
    </>
  );
}

export default App;
