import React from 'react'
import SingleCheckboxOption from './SingleCheckboxOption'
import AggregationItem from './AggregationItem'

export default class SingleCheckbox extends React.Component {
  render() {
    const listComponentProps = {
      fieldName: this.props.fieldName
    }

    return (
      <section className="single-checkbox">
        <h5>{this.props.title}</h5>
        <div className="m-form-field m-form-field__checkbox">
            <ul>
              <SingleCheckboxOption listComponent={AggregationItem}
                                    listComponentProps={listComponentProps}
                                    options={this.props.options}
              />
            </ul>
        </div> 
      </section>
    );
  }
}