import { Link, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    // Not semantic to user a button to navigate - this is just an example of using useNavigate
    function navigateHandler() {
        navigate('/products');
    }

    return (
        <>
            <h1>Home</h1>
            <p>Go to <Link to="/products">the list of products</Link></p>
            <p>
                <button onClick={navigateHandler}>Load Products</button>
            </p>
        </>
    );
}

export default Home;