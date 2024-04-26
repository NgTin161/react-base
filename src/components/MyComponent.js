import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Tin", age: "30" },
//       { id: 2, name: "Nguyen", age: "30" },
//       { id: 3, name: "Trung", age: "18" }
//     ]
//   }

//   handleAddNewUser = (useObj) => {
//     console.log(useObj)
//     this.setState({
//       listUsers: [
//         ...this.state.listUsers,
//         useObj
//       ]
//     })
//   }

//   handleDeleteNewUser = (userId) => {
//     let listUsersClone = this.state.listUsers;
//     listUsersClone = listUsersClone.filter(item => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone
//     })
//   }

//   render() {

//     return (
//       <div>

//         <AddUserInfor
//           handleAddNewUser={this.handleAddNewUser}

//         />
//         <DisplayInfor
//           listUsers={this.state.listUsers}
//           handleDeleteNewUser={this.handleDeleteNewUser}
//         />
//       </div>

//     );
//   }
// }


const MyComponent = (props) => {

  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Tin", age: "30" },
    { id: 2, name: "Nguyen", age: "30" },
    { id: 3, name: "Trung", age: "18" }
  ])

  const handleAddNewUser = (useObj) => {
    console.log(useObj)
    setListUsers([...listUsers, useObj])
  }

  const handleDeleteNewUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter(item => item.id !== userId);
    setListUsers(listUsersClone)
  }
  return (
    <div>

      <AddUserInfor
        handleAddNewUser={handleAddNewUser}

      />
      <DisplayInfor
        listUsers={listUsers}
        handleDeleteNewUser={handleDeleteNewUser}
      />
    </div>

  );

}
export default MyComponent