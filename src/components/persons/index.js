import { connect } from 'react-redux';
import TablePersons from './TablePersons';
import * as selectors from './selectors';
import * as actions from './actions';

const mapStateToProps = state => ({
    persons: selectors.getPersons(state),
});

const mapDispatchToProps = {
    onDelete: actions.removePerson,
    updatePerson:  actions.updatePerson,
    addPerson: actions.addPerson
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TablePersons);