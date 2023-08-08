import types from "./types";

export function updateTable(table) {
  return {
    type: types.UPDATE_TABLE,
    table
  };
}