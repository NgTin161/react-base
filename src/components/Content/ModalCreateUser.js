import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FcPlus } from 'react-icons/fc';
const ModalCreateUser = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('USER');
  const [image, setImage] = useState('');
  const [preImg, setPreImg] = useState('');
  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0])
      setPreImg(URL.createObjectURL(event.target.files[0]));
    else
      setPreImg('');

  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className='modal-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>Add new user </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.targer.value)} />
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.targer.value)} />
              </Form.Group>
            </Row>


            <Row className="mb-3">
              <Form.Group as={Col} >
                <Form.Label>UserName</Form.Label>
                <Form.Control type="text" value={username} onChange={(event) => setUsername(event.targer.value)} />
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>Role</Form.Label>
                <Form.Select onChange={(event) => setRole(event.targer.value)}>
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="md-12">
              <Form.Group as={Col}>
                <Form.Label className="label-upload" htmlFor='labelUpload'><FcPlus /> Upload Image</Form.Label>
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
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCreateUser;