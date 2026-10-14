import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col,Button } from "react-bootstrap";
import {useDispatch} from 'react-redux';
import {addProduct} from './features/cart/cartSlice.js'
const apiUrl = import.meta.env.VITE_API_URL;

function BookDetail() {
  let [book, setBook] = useState({});
  let params = useParams();
  let dispatch = useDispatch()
  let id = params.id;
  useEffect(() => {
    axios({
      url: apiUrl +"/user/book/" + id,
      method: "get",
    })
      .then((res) => {
        setBook(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function addToCart() {
    dispatch(addProduct(book))
  }
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <img src={book.bookImage} height={400} width={300}
           style={{
              border: "solid",
              border: "5px",
              borderRadius: "10px",
            }}></img>
          <Button className ="mt-3"style={{width : '300px' }} 
          size ="lg" variant="primary" onClick={addToCart}> Add To Cart</Button>
        </Col>
        
        <Col>
          <h2 style={{ color: "grey" }}>{book.bookTittle}</h2>
          <h6 style={{ color: "grey" }}> Author Name: {book.authorName}(ISBN NO: {book.isbnNo} )</h6>
          <h5 className="mt-2"> rating : <span style={{ color: "grey", gap: "8px" }}>{book.rating}</span> </h5>
          <br></br>
          <h4 style={{ color: "grey" }}> Product HighLight </h4>
          <br></br>
          <h5> Price : <span style={{ color: "grey", gap: "8px" }}> &#x20b9;{book.originalPrice}</span></h5>
          <h5> shortDescription : <span style={{ color: "grey", gap: "8px" }}>{book.shortDescription}</span> </h5>
          <h5> Description : <span style={{ color: "grey", gap: "8px" }}>{book.description}</span> </h5>
          <h5> Publisher : <span style={{ color: "grey", gap: "8px" }}>{book.publisher}</span> </h5>
          <h5> Publication Year : <span style={{ color: "grey", gap: "8px" }}>{book.publicationYear}</span> </h5>
          <h5> productFrom : <span style={{ color: "grey", gap: "8px" }}>{book.productFrom}</span> </h5>
          <h5> genre : <span style={{ color: "grey", gap: "8px" }}>{book.genre}</span> </h5>
          <h5> bookCategory : <span style={{ color: "grey", gap: "8px" }}>{book.bookCategory}</span> </h5>
          <h5> edition : <span style={{ color: "grey", gap: "8px" }}>{book.edition}</span> </h5>
          <h5> language : <span style={{ color: "grey", gap: "8px" }}>{book.language}</span> </h5>
          <h5> countryOfOrigin : <span style={{ color: "grey", gap: "8px" }}>{book.countryOfOrigin}</span> </h5>
          <h5> nameOfManufacturer : <span style={{ color: "grey", gap: "8px" }}>{book.nameOfManufacturer}</span> </h5>
          <h5> addressOfManufacturer : <span style={{ color: "grey", gap: "8px" }}>{book.addressOfManufacturer}</span> </h5>
          <h5> nameOfPackager : <span style={{ color: "grey", gap: "8px" }}>{book.nameOfPackager}</span> </h5>
          <h5> addressOfPackager : <span style={{ color: "grey", gap: "8px" }}>{book.nameOfPackager}</span> </h5>
          <h5> reviews : <span style={{ color: "grey", gap: "8px" }}>{book.reviews}</span> </h5>
          
         
          
        </Col>
      </Row>
    </Container>
  );
}
export default BookDetail;