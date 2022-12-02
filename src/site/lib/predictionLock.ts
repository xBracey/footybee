import moment from "moment";

const usernames = [];

export const predictionLock = (username: string) => {
  return (
    moment().isAfter(moment.unix(1668959940)) && !usernames.includes(username)
  );
};

export const teamPredictionLock = (username: string) => {
  return (
    moment().isAfter(moment.unix(1670079540)) && !usernames.includes(username)
  );
};

export const knockoutStart = (username: string) => {
  return (
    moment().isAfter(moment.unix(1670014800)) && !usernames.includes(username)
  );
};
