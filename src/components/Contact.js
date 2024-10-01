import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
    const [userInfo, setUserInfo] = useState({
        email: "",
        msg: ""
    });

    function submitInfo() {
        console.log(userInfo);
    }

    return (
        <div className="container mt-5">
            <Form className='pb-5'>
                <h1 className='mb-5 text-center'>Contact Us</h1>

                {/* Email Input */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter Email Address</Form.Label>
                    <Form.Control
                        required
                        value={userInfo.email}
                        onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
                        type="email"
                        placeholder="name@example.com"
                        style={{ width: '100%' }}  // Responsive width
                    />
                </Form.Group>

                {/* Message Input */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                        required
                        value={userInfo.msg}
                        onChange={e => setUserInfo({ ...userInfo, msg: e.target.value })}
                        as="textarea"
                        rows={4}
                        style={{ width: '100%' }}  // Responsive width
                    />
                </Form.Group>

                {/* Submit Button */}
                <div className="d-flex justify-content-center">
                    <Button onClick={submitInfo} variant="primary" type="submit" className='mb-5'>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default Contact;
