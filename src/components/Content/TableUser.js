
import Table from 'react-bootstrap/Table';

const TableUser = (props) => {
  const { listUsers } = props;

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers && listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`table-users-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email} </td>
                  <td>{item.role}</td>
                  <td>
                    <button className='btn btn-secondary' onClick={() => props.handleClickBtnView(item)}>View</button>
                    <button className='btn btn-warning mx-3' onClick={() => props.handleClickBtnUpdate(item)}>Update</button>
                    <button className='btn btn-danger' onClick={() => props.handldeClickBtnDelete(item)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
          {listUsers && listUsers.length === 0 && <tr><td colSpan={4}>Not found data</td></tr>}
        </tbody>
      </Table>
    </>
  )
}

export default TableUser;