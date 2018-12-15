import * as constants from './constants';

export const removePerson = id => ({
    type: constants.REMOVE_PERSON,
    payload: id
});

export const updatePerson = (id, person) => ({
    type: constants.UPDATE_PERSON,
    payload: { id, person }
});

export const addPerson = person => ({
    type: constants.ADD_PERSON,
    payload: person
});