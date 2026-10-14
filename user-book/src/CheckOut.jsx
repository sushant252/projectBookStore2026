import {Container, Row, Col, Form } from "react-bootstrap";
import {useSelector } from "react-redux";
function CheckOut() {
const {products, totalCost} = useSelector((state) => state.cart);
    return(
        
        <Container>
            <Row>
                <Col>
                <h3 className="text-center text-danger mt-5">Shipping details</h3>
                <Form>
                    <Row>
                        <Col>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        </Col>   
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"></Form.Control>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        </Col>   
                    </Row>
                    
                    <h5 className="mt-2 text-primary" > Shipping Address : </h5>
                    <Row className="mt-3">
                        <Col>
                        <Form.Group>
                            <Form.Label>Address Line 1</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        </Col>      
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group>
                            <Form.Label>Address Line 2</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        </Col>      
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Form.Group>
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group>
                            <Form.Label>Country </Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group>
                            <Form.Label>Pin Code</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        </Col>
                    </Row>
                </Form>
                </Col>
                <Col>
                <h3 className="text-center text-danger mt-5">Product Summary</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Book Image</th>
                            <th>
                                Book Name
                            </th>
                           
                            <th>
                                Price
                            </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                       {
                        products.map((product) => 
                            <tr>
                                <td></td>
                                <td ><img src={product.bookImage} height="40px" alt={product.bookImage} /></td>
                                <td>{product.bookTittle}</td>
                                <td>₹ {product.originalPrice}</td>
                
                            </tr>
                        )
                       }
                       <br />
                       <tr>
                                <td></td>
                                <td></td>
                                <th>Total Cost</th>
                                <th>₹ {totalCost}</th>
                            <td></td>
                       </tr>
                    
                    </tbody>
                </table>
                </Col>
            </Row>
        </Container>     
    )
}
export default CheckOut;