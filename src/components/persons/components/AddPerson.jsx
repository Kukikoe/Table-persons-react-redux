import React, { Component } from 'react';
import generateUUID from 'uuid';
import PropTypes from 'prop-types';

const propTypes = {
    addPerson: PropTypes.func,
};

const defaultProps = {
    addPerson: () => {},
};

class AddPerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            age: "",
        }
    }

    onChangeName = (event) => {
        this.setState({ name: event.target.value});
    };

    onChangeSurname = (event) => {
        this.setState({ surname: event.target.value})
    };

    onChangeAge = (event) => {
        this.setState({ age: event.target.value})
    };

    onAdd = () => {
        const { addPerson } = this.props;
        const { name, surname, age } = this.state;

        const person = {
            id: generateUUID(),
            name,
            surname,
            age: +age,
        };

        addPerson(person);
        this.setState({ name: '', surname: '', age: '' });
    };

    render() {
        const { name, surname, age } = this.state;
        return (
            <tr className="table-block__tr">
                <td>
                    <input type="text" className="table-block__input-add" value={name} onChange={this.onChangeName}/>
                </td>
                <td>
                    <input type="text" className="table-block__input-add" value={surname} onChange={this.onChangeSurname}/>
                </td>
                <td>
                    <input type="number" className="table-block__input-add" value={age} onChange={this.onChangeAge}/>
                </td>
                <td>
                    <button className="table-block__btn-add" onClick={this.onAdd}>Add</button>
                </td>
            </tr>
        );
    }
}

AddPerson.propTypes = propTypes;
AddPerson.defaultProps = defaultProps;


export default AddPerson;