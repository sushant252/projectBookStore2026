import {Modal, Button , Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

function Login() {
    let [show, setShow] = useState(true);
    let [showLoginWindow, setShowLoginWindow] = useState(true);
    let [showSignupWindow, setShowSignupWindow] = useState(false);
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [title, settitle] = useState('Login')
    let [lemail, setLEmail] = useState('');
    let [lpassword, setLPassword] = useState('');
    
    function HandleClose() {
        setShow(false)
    }
    
    function signUp() {
        let data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        axios({
        url: apiUrl + '/create/user',
        method: 'Post',
        data: data
    }).then((res) => {
            alert(res.data.message)
    }).catch((err) => {
        alert(err)
    })    
    }
    function doLogin() {
        let loginData = {
             email: lemail,
            password: lpassword
        }
        axios({
            url: apiUrl + '/user/login',
            method: 'post',
            data: loginData
        }).then((res) => {
            alert("Login successfully")
            localStorage.setItem('token', res.data.data.token)
            localStorage.setItem('name',res.data.data.name)
            localStorage.setItem('email', res.data.data.email)
            localStorage.setItem('isLoggedIn', true)
            
            window.location.reload()
        }).catch((err)=> {
            alert(err)
        })
    }
    function openSingupWindow() {
        setShowLoginWindow(false)
        setShowSignupWindow(true)
        settitle('Sing Up')
    }
    function openLoginWindow() {
        setShowLoginWindow(true)
        setShowSignupWindow(false)
        settitle('Login')
    }
    return(
        <Modal show={show} onHide = {HandleClose} contentClassName="">
            <Modal.Header closeButton>

                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                {
                    showLoginWindow &&
                    <Form>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" onChange ={(e) => setLEmail(e.target.value)}></Form.Control>
                        </Form.Group>
                         <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="Password" onChange ={(e) => setLPassword(e.target.value)}></Form.Control>
                         </Form.Group>
                            <Button variant="success" className="mt-2" onClick={doLogin}>Login</Button><br />
                            <br />
                            <span> </span> <span className="fw-bold text-decoration-underline cursor-pointer" onClick={openSingupWindow}>Create Account</span>
                    </Form>
                    
                }

                { 
                    showSignupWindow && 
                <Form>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" onChange ={(e) => setFirstName(e.target.value) }></Form.Control>
                        
                    </Form.Group>
                     <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" onChange ={(e) => setLastName(e.target.value)}></Form.Control>
                    </Form.Group>
                     <Form.Group>
                        <Form.Label>Email</Form.Label> 
                        <Form.Control type="email" onChange ={(e) => setEmail(e.target.value)}></Form.Control>
                    </Form.Group>
                     <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="Password" onChange ={(e) => setPassword(e.target.value)}></Form.Control>
                    </Form.Group>
                     {/* <Form.Group>
                        <Form.Label>Conform Password</Form.Label>
                        <Form.Control type="Password" onChange ={(e) => setPassword(e.target.value)}></Form.Control>
                    </Form.Group> */}
                     <Button variant="success" className="mt-2" onClick ={signUp}>Sing up</Button><br />
                            <br />
                            <span>Do you have an account ?</span> <span className="fw-bold text-decoration-underline cursor-pointer" onClick={openLoginWindow}>Go form Login</span>
                </Form>
                }
               
            </Modal.Body>
        </Modal>
    )
}
export default Login