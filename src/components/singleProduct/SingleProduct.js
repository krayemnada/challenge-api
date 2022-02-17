import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
    fetchSingleProduct,
    fetchSingleProductSuccess,
} from "../../redux/Action";
import { useSelector, useDispatch } from "react-redux";

const SingleProduct = () => {
    const { results, loading } = useSelector((state) => ({ ...state.data }));
    const [modifiedResults, setModifiedResult] = useState(null);
    const { id } = useParams();
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleProduct(id));
    }, [id]);

    useEffect(() => {
        if (results.length > 0) {
            const {
                id: id,
                title: title,
                name: name,
                image: image_url,
                discription: synopsis,
                info: rated,
            } = results[0];
            const newResults = {
                title,
                name,
                rated,
                image_url,
                synopsis,
                id,
            };
            setModifiedResult(newResults);
        } else {
            setModifiedResult(null);
        }
    }, [id, results]);

    if (!modifiedResults) {
        return <h2> No Product to Display</h2>;
    } else {
        const { title, image, name, info, discription } = modifiedResults;
        return (
            <div>
                {loading ? (
                    <div className="spinner-grow" role="status">
                        <span> loading...</span>
                    </div>
                ) : (
                    <section className="section about-section">
                        <Link to="/">
                            <button style={{ widh: "100px", height: "50px" }}>
                                Go Back
                            </button>
                        </Link>
                        <div>
                            <h2>{title}</h2>
                            <div>
                                <img src={image} alt="img" />
                            </div>
                            <p>{name}</p>

                            {/* <a href="" /> */}
                            <p>{info}</p>
                            <p> {discription}</p>
                        </div>
                    </section>
                )}
            </div>
        );
    }
};

export default SingleProduct;
