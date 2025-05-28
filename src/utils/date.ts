import { format } from "date-fns";

export const formatDate = (date:any, dateformat:any) => {
  const readableDate = date ? format(date, dateformat) : "";
  return readableDate;
};
