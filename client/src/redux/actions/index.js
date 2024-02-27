import axios from "axios";

export const GET_DOGS = "GET_DOGS";

export const GET_BY_NAME = "GET_BY_NAME";

export function getDogs () {
    return async function (dispatch) {
        const response = await axios ('https://api.thedogapi.com/v1/breeds');
        return dispatch({
            type: "GET_DOGS",
            payload: response.data
        })
    };
}

export function getByName (name) {
    return async function (dispatch) {
        const response = await axios (`https://localhost:3001/dogs/?name=${name}`);
        return dispatch({
            type: "GET_BY_NAME",
            payload: response.data
        })
    };
}

