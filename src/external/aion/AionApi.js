import { AION_URL, CALENDAR_PATH, FILTER_PATH } from "../../Config";

const AION_VND = "application/vnd.merricklabs.aion.v1+json";

export const createCalendar = calendar =>
  createAionResource(`${AION_URL}/${CALENDAR_PATH}`, calendar);

export const createFilter = filter =>
  createAionResource(`${AION_URL}/${FILTER_PATH}`, filter);

const createAionResource = (url, payload) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": AION_VND,
      Accept: AION_VND
    },
    body: JSON.stringify(payload)
  }).then(response => {
    if (response.status !== 201) {
      console.error(`Bad response from Aion API: ${response.status}`);
      return Promise.reject();
    }
    return response.json();
  });
};
