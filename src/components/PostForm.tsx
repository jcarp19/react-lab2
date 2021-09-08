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
                <i aria-label="close" role="button" className="fas fa-times-circle" onClick={() => {onClose()}}/>
                <label htmlFor="">Title</label>
                <input aria-label="title" role="textbox" type="text" name="" id="" onChange={(event) => {setTitle(event.target.value)}} />
                <label htmlFor="">Thought</label>
                <textarea aria-label="thought" role="textarea" name="" id="" onChange={(event) => {setThought(event.target.value)}}></textarea>
                <button aria-label="submit" role="button" type="submit">Add Post</button>
            </form>
        </div>
    )
}