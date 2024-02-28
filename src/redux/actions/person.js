import { createAction } from "@reduxjs/toolkit";
import request from "../../utils/request";

export const setPeople = createAction("PEOPLE");
export const setPerson = createAction("PERSON");

export function getPeople() {
  return (dispatch, getState) => {
    if (getState().people.length === 0) {
      request("/users").then(({ data }) => dispatch(setPeople(data)));
    }
  };
}

export const getPerson = (id) => (dispatch) => {
  dispatch(setPerson({}));
  request(`/users/${id}`).then(({ data }) => dispatch(setPerson(data)));
};
