import React, { Component } from "react";
import axios from "axios";

const UserContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

//Provider, Consumer

export class UserProvider extends Component {
  state = {
    users: [],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  componentDidMount = async () => {
    try{
      const response = await axios.get("http://localhost:3004/users");
    this.setState({
      users: response.data,
    });
    }
    catch(error) {}
    
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    ); // this.props.children yerine <App /> yazabiliriz.
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
