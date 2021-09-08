import {useState} from "react";
import "./PostForm.css";

export default function PostForm({onClose, onSubmit}: {onClose: () => void, onSubmit: (title: string, thought: string) => void}) {
    const [title, setTitle] = useState("");
    const [thought, setThought] = useState("");
    return (
        <div className="modal">
            <form onSubmit={(e) => {
                e.preventDefault();
                onSubmit(title, thought);
                onClose()
            }}>
                <i className="fas fa-times-circle" onClick={() => {onClose()}}/>
                <label htmlFor="">Title</label>
                <input type="text" name="" id="" onChange={(event) => {setTitle(event.target.value)}} />
                <label htmlFor="">Thought</label>
                <textarea name="" id="" onChange={(event) => {setThought(event.target.value)}}></textarea>
                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}