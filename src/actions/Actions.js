import * as types from "./ActionTypes";

export const updateSerial = newSerial => dispatch => {
  dispatch({
    type: types.UPDATE_SERIAL,
    payload: {
      serialNumber: newSerial
    }
  });
};

export const updateAaBatteries = newCount => dispatch => {
  dispatch({
    type: types.UPDATE_AA_BATTERIES,
    payload: {
      aaBatteries: newCount
    }
  });
};

export const updateDBatteries = newCount => dispatch => {
  dispatch({
    type: types.UPDATE_D_BATTERIES,
    payload: {
      dBatteries: newCount
    }
  });
};

export const updateParallelPort = value => dispatch => {
  dispatch({
    type: types.UPDATE_PARALLEL_PORT,
    payload: {
      parallelPort: value
    }
  });
};

export const updateStrikes = value => dispatch => {
  if (value >= 0 && value <= 3) {
    dispatch({
      type: types.UPDATE_STRIKES,
      payload: {
        strikes: value
      }
    });
  }
};
