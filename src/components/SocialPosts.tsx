import "./SocialPosts.css";
import {useState} from "react";
import Post from "../models/Post";
import PostInList from "../components/PostInList";
import PostForm from "../components/PostForm";

export default function SocialPosts() {
    const [formIsVisible, setFormIsVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [thought, setThought] = useState("");
    const [posts, setPosts] = useState<Post[]>
    ([
        {title: "Grand Circus", thought: "Grand Circus is cool."},
        {title:"React", thought:"React give ne power"},
        {title:"Beatrice", thought:"My friend Beatrice has mad skills. She made the top 10~ I'm just so proud of her!"}
    ]);
    function deletePost(i:number) {
        //copy then modify
        let copiedPosts = [...posts];
        copiedPosts.splice(i,1);
        setPosts(copiedPosts);
    }
    function onSubmit(title: string, thought: string) {
        // copy then modify
        let copiedPosts = [...posts];
        copiedPosts.unshift({"title": title, "thought":thought}) 
        setPosts(copiedPosts);
    }
    return (
        <div className="SocialPosts">
            <h1>My Thoughts</h1>

            <button onClick={() => {setFormIsVisible(true)}}>New Thought</button>
            {formIsVisible && <PostForm onClose={() => {setFormIsVisible(false)}} onSubmit={onSubmit} />}
            <div className="postContainer">
                {posts.map((post, index) => (
                    <PostInList key={index} post={post} onDelete={() => {deletePost(index)}} />
                ))}
            </div>
        </div>
    )
};