import { STRINGS } from "../constants/strings";

export const getMainTextPrefix = (
  submitted: boolean,
  status?: string
): string => {
  if (submitted && (status === "Approved" || status === "Submitted")) {
    return STRINGS.TRANSACTION.SENT;
  }
  return STRINGS.TRANSACTION.SENDING;
};
