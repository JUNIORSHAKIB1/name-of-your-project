import { useLoaderData } from "react-router-dom";
import Posts from "./Posts/Posts";

const Post = () => {

    const post = useLoaderData();
    
    return (
        <div>
            <h2>Post: {post.length}</h2>
            <div className="users">
                {
                    post.map(post => <Posts key={post.id}
                         posts={post}></Posts>)
                }
            </div>
        </div>
    );
};

export default Post;