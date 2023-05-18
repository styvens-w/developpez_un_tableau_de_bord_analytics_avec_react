import { getUserInfos } from "../utils/services/app.service";

function Title() {
  const { firstName } = getUserInfos();

  return (
    <div className="title">
      <h1>
        Bonjour <span>{firstName}</span>
      </h1>

      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default Title;
