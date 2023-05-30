// The imports
import { useParams } from "react-router-dom";
import { useAxios } from "../hooks/useAxios";

// Enter "api" to retrieve the data through the api or "mocks" to retrieve it through the mocks
let dataSources = "api";

/**
 *
 * @param {string} typeData user - Retrieves user data
 * @param {string} typeData activity - Retrieves user activity data
 * @param {string} typeData sessions - Retrieves user session data
 * @param {string} typeData performance - Retrieves user performance data
 * @returns {{data: Object}, {error: Object}}
 */
function getData(typeData) {
  // We get URL parameters with useParams().
  const { userId } = useParams(); // eslint-disable-line react-hooks/rules-of-hooks
  let link;

  // If the data sources previously chosen are "api".
  if (dataSources === "api") {
    // We check the type of data we want to recover.
    // eslint-disable-next-line default-case
    switch (typeData) {
      // If we want to recover user data.
      case "user":
        // Then the variable "link" is equal to this link
        link = `/user/${userId}`;
        // We use "break" to ensure that only the statements associated with this case will be executed.
        break;
      // If we want to retrieve user activity data.
      case "activity":
        link = `/user/${userId}/activity`;
        break;
      // If we want to retrieve user session data.
      case "sessions":
        link = `/user/${userId}/average-sessions`;
        break;
      // If we want to retrieve user performance data.
      case "performance":
        link = `/user/${userId}/performance`;
        break;
    }

    // Else if the data sources previously chosen are "mocks".
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

  // We return the result with the hook created "useAxios()" which takes the "link" variable as a parameter.
  return useAxios(link); // eslint-disable-line react-hooks/rules-of-hooks
}

/**
 * We retrieve the first name of the user with the previously created function "getData()".
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

export const getError = () => {
  const { error } = getData("user");

  if (error === 404) {
    return error;
  } else if (error === 500) {
    dataSources = "mocks";
  }
};
