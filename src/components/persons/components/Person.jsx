import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    person: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
        surname: PropTypes.string,
        age: PropTypes.number,
    }).isRequired,
    onDelete: PropTypes.func,
    updatePerson: PropTypes.func,
};

const defaultProps = {
    onDelete: () => {},
    updatePerson: () => {},
};

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdating: false
        }
    }

    handleClick = () => {
        this.setState({ isUpdating: true});
    };

    onRemove = () => {
        this.props.onDelete(this.props.person.id);
    };

    updatePerson = () => {
        let person = {
            name: this.refs.name.value,
            surname: this.refs.surname.value,
            age: +this.refs.age.value,
        };
        this.setState({ isUpdating: false});
        this.props.updatePerson(this.props.person.id, person);
    };

    render() {
        const { name, surname, age } = this.props.person;
        return (
            <tr className="table-block__tr">
                <td>
                    <input type="text" className="table-block__input" defaultValue={name} ref="name" onClick={this.handleClick}/>
                </td>
                <td>
                    <input type="text" className="table-block__input" defaultValue={surname} ref="surname" onClick={this.handleClick}/>
                </td>
                <td>
                    <input type="number" className="table-block__input" defaultValue={age} ref="age" onClick={this.handleClick}/>
                </td>
                <td>
                    {this.state.isUpdating ?
                        <div className="update" onClick={this.updatePerson}>
                            <svg
                                version="1.1"
                                id="Capa_1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 49 49"
                                xmlSpace="preserve"
                                width="20px"
                                height="20px"
                                fill="#000000"
                            >
                                <rect x="27.5" y="5" width="6" height="10"/>
                                <path d="M39.914,0H0.5v49h48V8.586L39.914,0z M10.5,2h26v16h-26V2z M39.5,47h-31V26h31V47z"/>
                                <path d="M13.5,32h7c0.553,0,1-0.447,1-1s-0.447-1-1-1h-7c-0.553,0-1,0.447-1,1S12.947,32,13.5,32z"/>
                                <path d="M13.5,36h10c0.553,0,1-0.447,1-1s-0.447-1-1-1h-10c-0.553,0-1,0.447-1,1S12.947,36,13.5,36z"/>
                                <path d="M26.5,36c0.27,0,0.52-0.11,0.71-0.29c0.18-0.19,0.29-0.45,0.29-0.71s-0.11-0.521-0.29-0.71c-0.37-0.37-1.04-0.37-1.41,0
                                c-0.19,0.189-0.3,0.439-0.3,0.71c0,0.27,0.109,0.52,0.29,0.71C25.979,35.89,26.229,36,26.5,36z"/>
                            </svg>
                        </div>
                        :
                        <div className="delete" onClick={this.onRemove}>
                            <svg
                                className="table-block__btn-delete"
                                version="1.1"
                                id="Capa_1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 59 59"
                                xmlSpace="preserve"
                                width="20px"
                                height="20px"
                                fill="#000000"
                            >
                                <path d="M52.5,6H38.456c-0.11-1.25-0.495-3.358-1.813-4.711C35.809,0.434,34.751,0,33.499,0H23.5c-1.252,0-2.31,0.434-3.144,1.289
                                C19.038,2.642,18.653,4.75,18.543,6H6.5c-0.552,0-1,0.447-1,1s0.448,1,1,1h46c0.552,0,1-0.447,1-1S53.052,6,52.5,6z M20.553,6
                                c0.112-1.048,0.435-2.496,1.24-3.319C22.24,2.223,22.799,2,23.5,2h9.999c0.701,0,1.26,0.223,1.708,0.681
                                c0.805,0.823,1.128,2.271,1.24,3.319H20.553z"/>
                                <path d="M10.456,54.021C10.493,55.743,11.565,59,15.364,59h28.272c3.799,0,4.871-3.257,4.907-4.958L50.376,10H8.624L10.456,54.021z
                                M17.5,42h24c0.552,0,1,0.447,1,1s-0.448,1-1,1h-24c-0.552,0-1-0.447-1-1S16.948,42,17.5,42z M17.5,47h24c0.552,0,1,0.447,1,1
                                s-0.448,1-1,1h-24c-0.552,0-1-0.447-1-1S16.948,47,17.5,47z M17.5,52h24c0.552,0,1,0.447,1,1s-0.448,1-1,1h-24
                                c-0.552,0-1-0.447-1-1S16.948,52,17.5,52z"/>
                            </svg>
                        </div>
                    }
                </td>
            </tr>
        );
    }
}

Person.propTypes = propTypes;
Person.defaultProps = defaultProps;

export default Person;