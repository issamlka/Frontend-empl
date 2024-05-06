import Single from "../../components/single/Single";
import { singlePost } from "../../data";
import "./post.scss"


//Fetch data and send to Single Component
const Post = () => {
  return (
    <div className="post">
        <Single {...singlePost}/>
    </div>
  );
};

export default Post;
