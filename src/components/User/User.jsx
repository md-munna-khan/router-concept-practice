import { Link,useNavigate } from "react-router-dom";


const User = ({user}) => {
    const {id,name,username,email}=user;
 
    const navigate = useNavigate();
    const handleNavigate=()=>{
navigate(`/user/${id}`)
    }
    return (
        <div style={{
            border:"2px solid red",
            borderRadius:"10px"
        }}>
            <h3>Name: {name}</h3>
            <h3>Username:{username}</h3>
            <h3>Email : {email}</h3>
        <Link to={`/user/${id}`}>
        <button>Click me</button>
        </Link>
        <button onClick={handleNavigate}>click to see details</button>
        </div>
    );
};

export default User;