import moment from "moment";

const usernames = [];

export const predictionLock = (username: string) => {
  return (
    moment().isAfter(moment.unix(1623436200)) && !usernames.includes(username)
  );
};
