import { AION_URL, CALENDAR_PATH } from "../../Config";

const AION_VND = "application/vnd.merricklabs.aion.v1+json";

export const createCalendar = calendar => {
  return fetch(`${AION_URL}${CALENDAR_PATH}`, {
    method: "POST",
    headers: {
      "Content-Type": AION_VND,
      Accept: AION_VND
    },
    body: JSON.stringify(calendar)
  }).then(response => {
    if (response.status !== 201) {
      console.error(`Bad response from Aion API: ${response.status}`);
      return Promise.reject();
    }
    return response.json();
  });
};
