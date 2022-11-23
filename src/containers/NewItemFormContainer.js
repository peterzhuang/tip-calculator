import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NewItemForm } from '../components/NewItemForm';
import { addNewItem } from '../store/items/actions';

// traditional syntax
const mapDispatchToPropsOld = (dispatch) => {
    // return {
    //     onSubmit: (name, price) => dispatch(addNewItem(name, price))
    // };
    return bindActionCreators({
        onSubmit: (name, price) => addNewItem(name, price)
    }, dispatch);
}

// shorter syntax 
const mapDispatchToProps = {
        onSubmit: (name, price) => addNewItem(name, price)
};

export const NewItemFormContainer = connect(null, mapDispatchToProps)(NewItemForm);