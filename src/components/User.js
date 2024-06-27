import React, { Component } from "react";
import UserConsumer from "../context";
import PropTypes from "prop-types";

class User extends Component {
  state = {
    inVisible: false,
  };
  onClickEvent = (e) => {
    this.setState({
      inVisible: !this.state.inVisible,
    });
  };
  onDeleteUser = (dispatch, e) => {
    const { id } = this.props;
    dispatch({ type: "DELETE_USER", payload: id });
  };
  componentWillUnmount(s) {
    console.log("Component Will Unmount");
  }

  render() {
    //Destructing
    const { name, salary, department } = this.props;
    const { inVisible } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="col-md-8 mb-4">
              <div
                className="card"
                style={
                  inVisible ? { backgroundColor: "cbf5f3", color: "red" } : null
                }
              >
                <div className="card-header d-flex justify-content-between">
                  <h4 className="d-inline" onClick={this.onClickEvent}>
                    {name}
                  </h4>
                  <i
                    onClick={this.onDeleteUser.bind(this, dispatch)}
                    className="fa-solid fa-trash-can"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
                {inVisible ? (
                  <div className="card-body">
                    <p className="card-text">Maaş:{salary}</p>
                    <p className="card-text">Department:{department}</p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

User.defaultProps = {
  name: "Bilgi Yok.",
  salary: "Bilgi Yok",
  department: "Blgi Yok",
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default User;
