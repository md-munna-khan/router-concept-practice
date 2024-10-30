import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();

    const {userId}= useParams()
    const navigate = useNavigate();
    const {name,website}=user;
  
console.log(userId)
    const handleGoBack = ()=>{
navigate(-1)
    }
    return (
        <div style={{
            border:"2px solid red"
        }}>
            <h3>Name: {name}</h3>
            <p>Website: {website}</p>
            <button onClick={handleGoBack}> go back</button>
        </div>
    );
};

export default UserDetails;