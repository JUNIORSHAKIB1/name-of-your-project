import { Link } from "react-router-dom";

const Posts = ({posts}) => {

    const {id, title,} = posts;

    const postStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px',
    }
    return (
        <div style={postStyle}>
            <h4>Post Of Id: {id}</h4>
            <p>{title}</p>
           <Link to={`/posts/${id}`}>Post Detail</Link>
           <Link to={`/posts/${id}`}> <button>Show Details</button></Link>
        </div>
    );
};

export default Posts;