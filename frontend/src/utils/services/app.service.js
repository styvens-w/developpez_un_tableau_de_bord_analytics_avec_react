// Les imports
import { useNavigate, useParams } from "react-router-dom";
import { useAxios } from "../hooks/useAxios";

// Entrez "api" pour récupérer les données via l'api ou "mocks" pour les récupérer via les mocks
let dataSources = "api";

/**
 * Les calls api
 * @param {string} typeData user - Récupère les données de l'utilisateur
 * @param {string} typeData activity - Récupère les données d'activité des utilisateurs
 * @param {string} typeData sessions - Récupère les données de session utilisateur
 * @param {string} typeData performance - Récupère les données de performance des utilisateurs
 * @returns {{data: Object}, {error: Object}}
 */
function getData(typeData) {
  // Nous obtenons les paramètres d'URL avec useParams().
  const { userId } = useParams(); // eslint-disable-line react-hooks/rules-of-hooks
  let link;

  // Si les sources de données précédemment choisies sont "api".
  if (dataSources === "api") {
    // Nous vérifions le type de données que nous voulons récupérer.
    // eslint-disable-next-line default-case
    switch (typeData) {
      // Si nous voulons récupérer les données de l'utilisateur.
      case "user":
        // Alors la variable "link" est égale à ce lien
        link = `/user/${userId}`;
        // Nous utilisons "break" pour nous assurer que seules les instructions associées à ce cas seront exécutées.
        break;
      case "activity":
        link = `/user/${userId}/activity`;
        break;
      case "sessions":
        link = `/user/${userId}/average-sessions`;
        break;
      case "performance":
        link = `/user/${userId}/performance`;
        break;
    }

    // Sinon si les sources de données précédemment choisies sont "mocks".
  } else if (dataSources === "mocks") {
    // eslint-disable-next-line default-case
    switch (typeData) {
      case "user":
        link = "/mocks/userData.json";
        break;
      case "activity":
        link = "/mocks/userActivity.json";
        break;
      case "sessions":
        link = "/mocks/userSessions.json";
        break;
      case "performance":
        link = "/mocks/userPerformance.json";
        break;
    }
  }

  // On retourne le résultat avec le hook créé "useAxios()" qui prend la variable "link" en paramètre.
  return useAxios(link); // eslint-disable-line react-hooks/rules-of-hooks
}

/**
 * On récupère le prénom de l'utilisateur avec la fonction "getData()" créée précédemment.
 * @returns {string}
 */
export const getUserInfos = () => {
  const { data } = getData("user");

  return { ...data?.userInfos };
};

export const getScore = () => {
  const { data } = getData("user");

  return data?.todayScore ? data?.todayScore : data?.score;
};

export const getKeyData = () => {
  const { data } = getData("user");

  return data?.keyData;
};

export const getActivity = () => {
  const { data } = getData("activity");

  return data?.sessions;
};

export const getSessions = () => {
  const { data } = getData("sessions");

  return data?.sessions;
};

export const getPerformance = () => {
  const { data } = getData("performance");

  return data;
};

/**
 * On récupère les erreurs liées
 * @returns {Object}
 */
export const getError = () => {
  // On récupère les erreurs dû à l'api
  const { error } = getData("user");
  const { data } = getData("user");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  // S'il y a l'erreur 404 ou qu'il n'y a aucune données dans les mocks, on redirige l'utilisateur vers la page error
  if (error === 404 || (dataSources === "mocks" && data === undefined)) {
    navigate("/404");

    //Sinon s'il y a une erreur 500, on redirige l'utilisateur vers la page error
  } else if (error === 500) {
    navigate("/500");
  }
};
