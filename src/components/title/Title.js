import React from "react";
import { Form, FormControl } from "react-bootstrap";
import "./Title.css";
export const Title = () => {
    return (
        <div className="tout">
            <h1 style={{ color: "#033b73" }}>This Is All Naruto's Series</h1>
            <Form>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{
                        background: "#fdc632",
                        border: "none",
                        height: "50px",
                        fontSize: "20px",
                        width: "50%",
                    }}
                />
            </Form>
        </div>
    );
};
