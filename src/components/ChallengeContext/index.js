import React, { createContext, useState, useEffect, useContext } from "react";
//import { designChallenges } from './mockData.json';
import axios from "axios";
import Cookies from "js-cookie";
import { URL } from "../../constants";

const url = `${URL}/fetchChallenge.php`;

export const ChallengeContext = createContext();
export const useChallenge = () => {
  const context = useContext(ChallengeContext);
  return context;
};
export const ChallengeProvider = (props) => {
  const userProfile = Cookies.get("challenge-user");
  const [challenges, setChallenge] = useState([]);
  const [loading, setLoading] = useState(true);
  const [challengeUser, setChallengeUser] = useState(
    userProfile ? JSON.parse(userProfile) : null
  );

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((res) => {
          setLoading(false);
          let chs = res.data.challenges;
          setChallenge(chs ? chs : []);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, []);

  const isEdit = (id, history) => {
    if (id.length > 0) {
      history.push(`/design-challenge/type=previous&id=${id}`);
    }
  };
  return (
    <ChallengeContext.Provider
      value={{
        challenges,
        isEdit: isEdit,
        updateChallenge: setChallenge,
        loading,
        updateChallengeUser: setChallengeUser,
        challengeUser,
      }}
    >
      {props.children}
    </ChallengeContext.Provider>
  );
};
