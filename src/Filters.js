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
      return ( 
        <div class="col-md-4">
      <form >
           
                <input type="text" class="col-md-12 form-control"   name="filterText" placeholder="Search.." onChange={this.handleChange}/><br/><br/>
             
        </form></div>)


    }
}

export default Filters;