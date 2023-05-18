import logoCalories from "../assets/images/logoCalories.svg";
import logoProtein from "../assets/images/logoProtein.svg";
import logoCarbs from "../assets/images/logoCarbs.svg";
import logoFat from "../assets/images/logoFat.svg";

function KeyInfos({ name, value }) {
  let logo;

  // eslint-disable-next-line default-case
  switch (name) {
    case "Calories":
      logo = logoCalories;
      break;
    case "Protéines":
      logo = logoProtein;
      break;
    case "Glucides":
      logo = logoCarbs;
      break;
    case "Lipides":
      logo = logoFat;
      break;
  }

  return (
    <div className="keyInfoCard">
      <img src={logo} alt={name} />
      <div className="text">
        <p>{value}</p>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default KeyInfos;
