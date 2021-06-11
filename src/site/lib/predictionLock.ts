import moment from "moment";

export const predictionLock = moment().isAfter(moment.unix(1623436200));
