import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    surname: "",
    email: "",
    phonenumber: "",
  };

  onFirst = (e) => {
    localStorage.clear();
  };

  

  add = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.surname === "" ||
      this.state.email === "" ||
      this.state.phonenumber === ""
    ) {
      alert("All the fields are mandatory!");
      return;
    }

    this.props.addContactHandler(this.state);
    this.setState({ name: "", surname: "", email: "", phonenumber: "" });
  };

  
  render() {
    
    return (

      <div className="ui-main">
        <h2> Registration Form </h2>
        <form className="ui-form">
          <div className="field">
            <label> Name </label>
            <form>
              <input
                type="text"
                name="name"
                placeholder="Adı"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              
            </form>
          </div>

          <div className="field">
            <label> Surname </label>
            <form>
              <input
                type="text"
                name="Surname"
                placeholder=" Add Surname"
                value={this.state.surname}
                onChange={(e) => this.setState({ surname: e.target.value })}
              />
            </form>
          </div>

          <div className="field">
            <label> E-mail </label>
            <form>
              <input
                type="text"
                name="name"
                placeholder="Add E-mail"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </form>
          </div>

          <div className="field">
            <label> Phone Number </label>
               <form>
              <input
                type="text"
                name="name"
                placeholder="Add Phone Number"
                value={this.state.phonenumber}
                onChange={(e) => this.setState({ phonenumber: e.target.value })}
              />
            </form>
           
          </div>
          <div>
          <div>  
        <p>
           <strong>
            "Please fill all the texts in the fields."
            </strong>
          </p>
            </div>
          <button  onClick={this.add}> Add </button>
          <button onClick={this.onFirst}> Delete</button>
          </div>
          
        </form>
      </div>
    );
  }
}
export default AddContact;
