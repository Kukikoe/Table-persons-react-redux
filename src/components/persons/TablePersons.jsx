import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Person from "./components/Person";
import AddPerson from "./components/AddPerson";

const propTypes = {
    persons: PropTypes.array,
};

const defaultProps = {
    persons: []
};

class TablePersons extends Component {
    render() {
        const { addPerson, persons, onDelete, updatePerson } = this.props;
        return (
            <div className="main-block">
                <table className="table-block">
                    <caption>Table persons</caption>
                    <tbody>
                    <tr className="table-block__tr-header">
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                        <th> </th>
                    </tr>
                    { persons.map((person, i) => {
                        return <Person
                            key={i}
                            person={person}
                            onDelete={onDelete}
                            updatePerson={updatePerson}
                        />
                    })}

                    <AddPerson addPerson={addPerson} />
                    </tbody>
                </table>
            </div>
        );
    }
}

TablePersons.propTypes = propTypes;
TablePersons.defaultProps = defaultProps;

export default TablePersons;