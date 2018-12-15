import * as constants from './constants';

const initialState = JSON.parse(localStorage.getItem('PersonList')) ? JSON.parse(localStorage.getItem('PersonList')).persons : [];

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case constants.REMOVE_PERSON:
            return state.filter(person => person.id !== payload);

        case constants.UPDATE_PERSON:
            const { id, person } = payload;
            const { name, surname, age } = person;
            return state.map(person => person.id === id ? {...person, name, surname, age} : person );

        case constants.ADD_PERSON:
            return [...state, payload];

        default:
            return state;
    }
};