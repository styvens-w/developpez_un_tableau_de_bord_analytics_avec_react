import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Hook personnalisé qui va récupérer les données grâce à axios
 * @param url - url des données
 * @returns {{data: Object, error: number}}
 */
export function useAxios(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const { userId } = useParams();
  const idUser = userId;

  useEffect(() => {
    if (!url) return null;

    function getDataAxios() {
      axios
        .get(url)
        .then((response) => {
          if (url) {
            response.data.data
              ? setData(response.data.data)
              : setData(
                  response.data.find(
                    ({ id, userId }) =>
                      id === parseInt(idUser) || userId === parseInt(idUser)
                  )
                );
          }
        })
        .catch(function (error) {
          setError(error.response.status);
        });
    }

    getDataAxios();
  }, [url, idUser]);

  return { data, error };
}

useAxios.propTypes = {
  url: PropTypes.string,
};
