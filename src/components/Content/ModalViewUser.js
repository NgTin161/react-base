import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FcPlus } from 'react-icons/fc';
import axios from 'axios';
import { putUpdateUser } from '../../../src/services/apiServices';
import { toast } from 'react-toastify';
import _ from 'lodash';
const ModalViewUser = (props) => {
  const { show, setShow, dataUpdate } = props;
  console.log(props)
  const handleClose = () => {
    setShow(false);
    setEmail('');
    setUsername('');
    setPassword('');
    setRole("USER");
    setImage('');
    setPreImg('');
    props.resetUpdateData();
  }


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('USER');
  const [image, setImage] = useState('');
  const [preImg, setPreImg] = useState('');

  useEffect(() => {
    console.log('dataUpdateEffect', dataUpdate)
    if (!_.isEmpty(dataUpdate)) {
      setEmail(dataUpdate.email);
      setUsername(dataUpdate.username);
      setRole(dataUpdate.role);
      setImage('');
      if (dataUpdate.image) {
        setPreImg(`data:image/jpeg;base64,${dataUpdate.image}`);
      }
    }
  }, [props.dataUpdate]);
  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreImg(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0])
    }
    else
      setPreImg('');

  }


  const handleSubmitCreateUser = async () => {
    // let data = {
    //   email: email,
    //   username: username,
    //   password: password,
    //   role: role,
    //   userImage: image
    // }

    let data = await putUpdateUser(dataUpdate.id, username, role, image);
    console.log("Data:", data)
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      await props.fetchListUsers();
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  }
  console.log('dataUpdatecheck', props.dataUpdate)
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className='modal-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>Update a user </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} >
                <Form.Label>Email</Form.Label>
                <Form.Control disabled type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>Password</Form.Label>
                <Form.Control disabled type="password" placeholder="" value={password} onChange={(event) => setPassword(event.target.value)} />
              </Form.Group>
            </Row>


            <Row className="mb-3">
              <Form.Group as={Col} >
                <Form.Label>UserName</Form.Label>
                <Form.Control type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>Role</Form.Label>
                <Form.Select onChange={(event) => setRole(event.target.value)} value={role}>
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="md-12">
              <Form.Group as={Col}>
                {/* <Form.Label className="label-upload" htmlFor='labelUpload'><FcPlus /> Upload Image</Form.Label> */}
                <input id='labelUpload' type="file" hidden onChange={(event) => handleUploadImage(event)} />
              </Form.Group>

              <div className='col-md-12 img-preview'>
                {preImg ? <img src={preImg} /> :
                  <span>Preview Image</span>}
              </div>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalViewUser;