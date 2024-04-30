import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../services/apiServices';
import { toast } from 'react-toastify';
const ModelDeleteUser = (props) => {
  const { show, setShow, dataDelete } = props;

  const handleClose = () => setShow(false);

  const handleSubmitDeleteUser = async () => {
    let data = await deleteUser(dataDelete.id);
    console.log("Data:", data)
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      // await props.fetchListUsers();
      props.setCurrentPage(1)
      await props.fetchListUsersWithPaginate(1);
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  }
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} backdrop="static" >
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete the user ? </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this user have email <b> {dataDelete.email} </b> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cance
          </Button>
          <Button variant="primary" onClick={() => handleSubmitDeleteUser()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModelDeleteUser;