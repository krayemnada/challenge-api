import "./App.css";
import ProductList from "./components/productList/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import { Title } from "./components/title/Title";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleProduct from "./components/singleProduct/SingleProduct";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <br />
                        <Title />

                        <br />
                        <br />
                        <ProductList />
                    </Route>
                    <Route
                        path="/product/:id"
                        render={(props) => <SingleProduct {...props} />}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
