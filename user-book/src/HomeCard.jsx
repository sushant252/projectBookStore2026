import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row, Col,Card, Button, Badge,Spinner} from "react-bootstrap";

import "./HomeCard.css";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

function HomeCard() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios({
      url: apiUrl + "/user/books",
      method: "get",
    })
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  function goToDetailPage(id) {
    // alert(id);
    navigate("/user/book/detail/" + id);

  }

  // Add To Cart
  function addToCart(book, e) {
    // Card click ko rokega
    // e.stopPropagation();
    alert(book.bookTittle + " added to cart 🛒");
  }

  return (
    <section className="books-section">
      <Container  fluid
      style={{
        minHeight: "100vh",
        padding: "50px 60px",
        background:
          "linear-gradient(135deg, #fff5f5 0%, #f6f0ff 50%, #eef5ff 100%)",
      }}>
        {/* ================= HEADING ================= */}

        <div className="books-heading-wrapper text-center">
          <span className="section-tag">📚 OUR COLLECTION</span>

          <h2 className="books-heading">
            Explore Our <span>Books</span>
          </h2>

          <p className="books-subtitle">
            Discover stories, knowledge and adventures waiting for you.
          </p>

          <div className="heading-line"></div>
        </div>

        {/* ================= LOADING ================= */}

        {loading ? (
          <div className="loading-box">
            <Spinner animation="border" variant="warning" />
            <p>Loading books...</p>
          </div>
        ) : books.length === 0 ? (
          <div className="empty-books">
            <div className="empty-icon">📚</div>
            <h4>No books available</h4>
            <p>New books will be added soon.</p>
          </div>
        ) : (
          /* ================= BOOK GRID ================= */

          <Row className="g-4">
            {books.map((book,I) => (
              <Col key={I}  xs={12} sm={6} md={4} lg={3}>
                <Card className="book-card h-100">
                  {/* ================= IMAGE ================= */}

                  <div className="book-image-container">
                    <Card.Img
                      variant="top"
                      src={book.bookImage}
                      className="book-image"
                      alt={book.bookTittle}
                    />

                    <Badge className="book-badge">NEW</Badge>

                    {/* Image overlay */}

                    <div className="image-overlay">
                      <Button
                        className="quick-view-btn"
                        onClick={() => goToDetailPage(book._id)}
                      >
                        Quick View
                      </Button>
                    </div>
                  </div>

                  {/* ================= CONTENT ================= */}

                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="book-title">
                      {book.bookTittle}
                    </Card.Title>

                    <Card.Text className="book-author">
                      By <span>{book.authorName}</span>
                    </Card.Text>

                    {/* Rating */}

                    <div className="book-rating">
                      <span>★★★★★</span>
                      <small> 4.8</small>
                    </div>

                    {/* Price */}

                    <div className="book-price">₹ {book.originalPrice}</div>

                    {/* Buttons */}

                    <div className="book-buttons">
                      <Button className="details-btn"  onClick={() => goToDetailPage(book._id)}>View Details</Button>

                      <Button className="cart-btn" onClick={addToCart}>
                        🛒
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
}

export default HomeCard;
