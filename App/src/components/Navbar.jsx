import { Modal, Alert } from "react-bootstrap";

import { useState } from "react";

import createLogin from "../api/login";

import FormLogin from "./FormLogin";

const Navbar = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await createLogin(user);

        if (!response.code) {
            localStorage.setItem('token', response.data.token)

        } else {
            setError(
                "Invalid credentials, please check your account and password"
            )
        }
    }

    return (
        <>
            <nav className={"w-100 navbar d-flex justify-content-around bg-dark border border-0 py-3"}>
                <a href="#" className="navbar-brand text-light">
                    My Finance
                </a>

                {
                    !localStorage.getItem('token')
                        ?
                        <button className="btn btn-dark border  border-dark-subtle border-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={handleShow}>Login</button>
                        :
                        <button className="btn btn-dark border  border-dark-subtle border-1" onClick={() => localStorage.removeItem('token')}>Logout</button>}
            </nav>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard="false" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Enter your credentials</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormLogin onSubmit={handleSubmit} onClose={handleClose} onError={setError} />
                </Modal.Body>
                <Modal.Footer>
                    {error && <Alert variant="danger">{error}</Alert>}
                </Modal.Footer>
            </Modal>

        </>
    )

}

export default Navbar;

