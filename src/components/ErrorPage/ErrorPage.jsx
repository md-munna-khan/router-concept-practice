import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h3>OOpppss</h3>
            <p>{error.statusText || error.message}</p>
            {
error.status === 404 && <div>
    <h3>go back where are you from</h3>
    <Link to="/"> <button>Home</button></Link>
</div>
            }
        </div>
    );
};

export default ErrorPage;