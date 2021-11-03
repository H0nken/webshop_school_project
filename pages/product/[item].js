/* eslint-disable sort-keys */
import { React, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/[item].module.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import useCart from "../../lib/hooks/useCart";
import { CART_ACTIONS } from "../../lib/reducers/cartReducer";
Post.propTypes = {
  product: PropTypes.array,
};

export default function Post({ product }) {
  //const [quantity, setQuantity] = useState(1)
  const cart = useCart();
  const quantityRef = useRef(1);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card}>
          <div>
            <div className={styles.cardItems}>
              <div className="box-content w-1/5 m-4">
                <Image
                  className="display:inline"
                  height="400px"
                  width="200px"
                  variant="top"
                  src={product[0].image_url}
                />
              </div>
              <div className="block w-4/5">
                <h3 className="font-bold text-lg">{product[0].name}</h3>
                <p className="font-light">{product[0].description}</p>

                <ListGroupItem>
                  <Row>
                    <br />
                    <Col>Alc: {product[0].abv}</Col>
                    <Col>Bitterness: {product[0].ibu}</Col>
                    <Col>pH: {product[0].ph}</Col>
                    <br />
                  </Row>
                </ListGroupItem>
                <ListGroup className="list-group-flush">
                  <ListGroupItem className={styles.listGroupItemPrice}>
                    <Row>
                      <Col>Price: </Col>
                      <Col>
                        <div className={styles.priceTag}>${product[0].ibu}</div>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Row className={styles.quantityRow}>
                    <p>Quantity</p>
                    <input
                      className="m-1"
                      ref={quantityRef}
                      type="number"
                      placeholder="1"
                      min="1"
                      defaultValue="1"
                    ></input>
                  </Row>
                  <Row>
                    <Link href={`/`}>
                      <Button className={styles.buttonBack} as={Col}>
                        Continue Shopping
                      </Button>
                    </Link>
                    <Button
                      as={Col}
                      className={styles.buttonAddToCart}
                      // eslint-disable-next-line no-alert
                      onClick={() => {
                        for (
                          let i = 0;
                          i < quantityRef.current.value.valueOf();
                          i += 1
                        ) {
                          cart.cartDispatch({
                            type: CART_ACTIONS.ADD,
                            payload: {
                              ...product[0],
                              quantity: 1,
                            },
                          });
                        }

                        // eslint-disable-next-line implicit-arrow-linebreak
                        Swal.fire({
                          title: `Added ${quantityRef.current.value.valueOf()}st ${
                            product[0].name
                          } to your Shopping Cart`,
                          imageUrl:
                            "https://media.giphy.com/media/Od0QRnzwRBYmDU3eEO/giphy.gif",
                          imageWidth: 600,
                          imageHeight: 400,
                          width: 1500,
                          height: 1000,
                          timer: 2000,
                        });
                      }}
                    >
                      {" "}
                      Add to cart
                    </Button>
                  </Row>
                </Card.Body>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://api.punkapi.com/v2/beers?page1&per_page=80");
  const data = await res.json();

  const paths = data.map((product) => ({
    params: { item: `${product.id.toString()}` },
  }));

  return {
    fallback: true,
    paths,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.punkapi.com/v2/beers/${params.item}`);
  const data = await res.json();
  return { props: { product: data } };
}
