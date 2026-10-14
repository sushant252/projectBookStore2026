import {useSelector, useDispatch } from "react-redux"
import {Container, Row, Col, Button} from "react-bootstrap";
import { deleteProduct } from "./features/cart/cartSlice";
import {useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
function Cart() {
    const {products, totalCost} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function deleteBookFromCart(id) {
        dispatch(deleteProduct(id))
    }
    function goToCheckoutPage() {
        navigate('/CheckOut')
    }
    return(
        <Container>
            <Row>
                <Col>
                <h3 className="mt-3 text-center text-danger">Shoping cart</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Book Image</th>
                            <th>
                                Book Name
                            </th>
                            <th>
                                Author name
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        products.map((product) => 
                            <tr>
                                <td ><img src={product.bookImage} height="40px" alt={product.bookImage} /></td>
                                <td>{product.bookTittle}</td>
                                <td>{product.authorName}</td>
                                <td>₹ {product.originalPrice}</td>
                                <td><i className="bi bi-trash text-danger" onClick={() => deleteBookFromCart(product._id)}></i></td>
                            </tr>
                        )
                       }
                       <br />
                       <tr>
                                <td></td>
                                <td></td>
                                <th>Total Cost</th>

                                {/* <td></td> */}
                               
                                <th>₹ {totalCost}</th>
                            <td></td>
                       </tr>
                      <tr>
                          <td colSpan={1}></td>

                          <td colSpan={2} className="text-end p-3 text-white ">

                            <Button
                              variant="warning"
                              size="lg"
                              className="rounded-pill px-5 py-2 shadow fw-bold text-white"
                              onClick={goToCheckoutPage}
                            >
                              <i className="bi bi-shield-lock-fill me-2"></i>
                              Procees For Checkout
                              <i className="bi bi-arrow-right ms-2"></i>
                            </Button>
                          </td>
                          <td></td>
                        </tr>
                    </tbody>
                </table>
                </Col>
            </Row>
        </Container>
    )
}
export default Cart