import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Well, FormGroup, Button } from 'react-bootstrap';
import { postBook } from '../actions';

class BooksForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            isbn: '',
            _id: '',
            price: '',
        }
    }

    onSubmit() {
        const book = {...this.state, _id: this.state.isbn};        
        this.props.postBook(book);
        this.props.reset();
    }


    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-error' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    type={field.type || 'text'}
                    className="form-control"
                    placeholder={field.placeholder}
                    ref={field.ref}
                    {...field.input}
                />
                <p className="control-label">{touched ? error : ''}</p>
            </div>
        );
    }



    render() {
        const { handleSubmit } = this.props;
        return (
            <Well>
                <FormGroup>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field
                            label="Title"
                            name="title"
                            placeholder="Enter title"
                            //value={this.state.book.title}
                            onChange={(event) => { this.setState({ title: event.target.value }) }}
                            component={this.renderField}
                        />
                        <Field
                            label="Description"
                            name="description"
                            placeholder="Enter description"
                            onChange={(event) => { this.setState({ description: event.target.value }) }}
                            component={this.renderField}
                        />
                        <Field
                            label="ISBN"
                            name="isbn"
                            placeholder="Enter isbn"
                            onChange={(event) => { this.setState({ isbn: event.target.value }) }}
                            component={this.renderField}
                        />
                        <Field
                            label="Price"
                            name="price"
                            placeholder="Enter price"
                            onChange={(event) => { this.setState({ price: event.target.value }) }}
                            component={this.renderField}
                        />
                        <div className="">
                            <Button type="submit" bsStyle="primary" bsSize="small">Post Book</Button>
                            <Button type="reset" bsStyle="danger" bsSize="small" style={{ marginLeft: 5 }} onClick={() => { this.props.reset() }}>Cancel</Button>
                        </div>
                    </form>
                </FormGroup>
            </Well>
        );
    }
}


function validate(values) {
    const errors = {};
    // Validate inputs
    if (!values.title) {
        errors.title = "Title is required!";
    }
    if (!values.description) {
        errors.description = "Title is required!";
    }
    if (!values.isbn) {
        errors.isbn = "Isbn is required!";
    } 
    if (!values.price) {
        errors.price = "Price is required!";
    } 
    /* else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    } */
    // if errors is empty, the form is valid and can be submitted
    // if errors has any properties, the form is invalid
    return errors;
}


export default reduxForm({
    validate,
    form: 'BooksForm'
})(connect(null, { postBook })(BooksForm));