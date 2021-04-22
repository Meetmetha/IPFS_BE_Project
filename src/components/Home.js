import React, { Component } from "react";

import withAuthorization from "./withAuthorization";
import { db } from "../firebase";

class HomePage extends Component {
  state = {
    users: null,
    username: "",
    success: '',
    failure: '',
    modalOpen: false,
    hash: '',
    data: '',
    loading: false,
    password: '',
    passwordhint: '',
    useruid: ''
  };

  componentDidMount() {
    // db.onceGetUsers().then(res => {
    //   this.setState({
    //     users: res.val()
    //   });
    // });

    const { loggedUser } = this.props;
    //db.doGetAnUnser(loggedUser.uid).then((CurrentUsername) => {
    this.setState({
        //username: CurrentUsername.username,
        //loading: false,
      useruid : loggedUser.uid
      });
   // })
  }

  render() {
    const { users, username, loading } = this.state;
    // console.log("dasdf", this.props.loggedUser);
    return (
      <div>
        <h1>Home</h1>
        {!loading && <p className="centered">Hello {username}!</p>}

        {/* {!!users && <UserList users={users} />} */}
      </div>
    );
  }
}

// const UserList = ({ users }) => (
//   <div>
//     {console.log("users", users)}
//     <h2>List of Usernames of Users</h2>
//     <p>(Saved on Sign Up in Firebase Database)</p>

//     {Object.keys(users).map(key => (
//       <div key={key}>{users[key].username}</div>
//     ))}
//   </div>
// );

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage); //grants authorization to open endpoint if an user is signed in
