import React from 'react'


class Filters extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: ''};

        this.handleChange = this.handleChange.bind(this);
//        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;

        this.props.onFilter({
            [name]: value
        });
    }


    render() {
      return ( <form >
            <label>
                <input type="text" name="filterText" onChange={this.handleChange}/><br />
                </label>
        </form>)


    }
}

export default Filters;