import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg'

// class DisplayInfor extends React.Component {
//   render() {

//     //destructring object
//     const { listUsers } = this.props;
//     return (
//       <div className="display-infor-container">

//         {true &&
//           <>
//             {listUsers?.map((item) => {
//               return (
//                 <>
//                   <div className={item.age > 18 ? "green" : "red"} key={item.id}> Hello {item.name} and your age {item.age} </div>
//                   <button onClick={() => this.props.handleDeleteNewUser(item.id)}>Delete</button>
//                 </>
//               )

//               // if (item.age > 18) {
//               //   return (
//               //     <div className="red" key={item.id}> Hello {item.name} and your age {item.age} </div>
//               //   )
//               // }
//               // else {
//               //   return (
//               //     <div className="green" key={item.id}> Hello {item.name} and your age {item.age} </div>
//               //   )
//               // }
//             })}
//           </>
//         }
//       </div>
//     )
//   }
// }

const DisplayInfor = (props) => {
  //destructring object
  const { listUsers } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  }
  console.log("render")
  useEffect(() => {
    if (listUsers.length === 0) {
      alert('delete all')
    }
    console.log("useEffect")
  }, [listUsers]);
  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide List Users" : "Show List Users"}</span>
      </div>
      {isShowHideListUser &&
        <>
          {listUsers?.map((item) => {
            return (
              <>
                <div className={item.age > 18 ? "green" : "red"} key={item.id}> Hello {item.name} and your age {item.age} </div>
                <button onClick={() => props.handleDeleteNewUser(item.id)}>Delete</button>
              </>
            )

            // if (item.age > 18) {
            //   return (
            //     <div className="red" key={item.id}> Hello {item.name} and your age {item.age} </div>
            //   )
            // }
            // else {
            //   return (
            //     <div className="green" key={item.id}> Hello {item.name} and your age {item.age} </div>
            //   )
            // }
          })}
        </>
      }
    </div>
  )
}

export default DisplayInfor