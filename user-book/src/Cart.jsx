import {useSelector} from "react-redux"
import {Container, Row, Col} from "react-bootstrap";
function Cart() {
    const {products} = useSelector((state) => state.cart)
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
                                <td>{product.originalPrice}</td>
                                <td><i className="bi bi-trash text-danger"></i></td>
                            </tr>
                        )
                       }
                    </tbody>
                </table>
                </Col>
            </Row>
        </Container>
    )
}
export default Cart