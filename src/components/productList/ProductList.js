import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProduct } from "../../redux/Action";
import "./ProductList.css";

const ProductList = () => {
    const { results, loading } = useSelector((state) => ({ ...state.data }));
    const [modifiedProduct, setModifiedProduct] = useState([]);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct());
    }, []);

    useEffect(() => {
        if (results) {
            const newResults = results.map((item) => {
                const { name, id, image_url, title, rated } = item;
                return {
                    id: id,
                    title: title,
                    name: name,
                    image: image_url,
                    info: rated,
                };
            });
            setModifiedProduct(newResults);
        } else {
            setModifiedProduct([]);
        }
    }, [results]);

    if (loading) {
        return (
            <div className="spinner-grow" role="status">
                <span> loading...</span>
            </div>
        );
    }

    if (!results) {
        return <h2>No Products matched your search criteria</h2>;
    }
    return (
        <div className="container">
            <div className="all">
                {modifiedProduct.map((item) => {
                    const { id, name, image, info, title } = item;
                    return (
                        <div key={id}>
                            {/* <div>
                                <Card
                                    style={{
                                        width: "20rem",
                                        height: "460px",
                                        marginTop: "100px",
                                        background: "#eeeeee",
                                        border: "none",
                                    }}
                                >
                                    <Card.Img
                                        variant="top"
                                        src={image}
                                        height={300}
                                    />
                                    <Card.Body>
                                        <Card.Title
                                            style={{ color: "#033b73" }}
                                        >
                                            {title}{" "}
                                        </Card.Title>
                                        <Card.Text style={{ color: "#033b73" }}>
                                            {name}
                                            <br />
                                            {info}
                                        </Card.Text>
                                        <Link to={`/product/${id}`}>
                                            <Button
                                                className="but"
                                                style={{
                                                    backgroundColor: "#033b73",
                                                    color: "#033b73",
                                                    borderRadius: "0",
                                                    border: "none",
                                                }}
                                            >
                                                Watch Movie HD
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div> */}
                            <div className="">
                            <div className="all">
                                <div className="pictr">
                                    <div className="single_event position-relative">
                                        <div className="img">
                                            <img
                                                src={image}
                                                alt=""
                                                width={500}
                                                height={450}
                                                style={{ marginBottom: "40px" }}
                                            />
                                        </div>
                                        <div className="event_details">
                                            <div className="tit">
                                                <h3>{title} </h3>
                                                <div className="tit2">
                                                    <h6>{name} </h6>
                                                </div>
                                            </div>
                                            <div>
                                                <p>{info}</p>
                                                <Link to={`/product/${id}`}>
                                                    {" "}
                                                    <a
                                                        href="button"
                                                        className="btn"
                                                        style={{
                                                            background:
                                                                "#fdc632",
                                                            color: "#033f7b",
                                                        }}
                                                    >
                                                        View details
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductList;
