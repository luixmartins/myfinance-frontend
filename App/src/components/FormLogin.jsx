import { Form, FloatingLabel, Button } from "react-bootstrap"

const FormLogin = ({ onSubmit }) => {
    return (

        <Form onSubmit={onSubmit}>
            <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
            >
                <Form.Control
                    type="email"
                    placeholder="Username"
                />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control
                    type="password"
                    placeholder="Password"
                />
            </FloatingLabel>
            
            <Button variant="dark" type="submit" className="mt-3"> Login</Button>
        </Form >
    )

}

export default FormLogin; 