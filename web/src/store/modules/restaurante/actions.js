import types from "./types";

export function updateTable(payload) {
  return {
    type: types.UPDATE_TABLE,
    payload,
  };
}