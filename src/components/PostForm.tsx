import "./PostForm.css";

export default function PostForm({onClose, setTitle, setThought, onSubmit}: {onClose: () => void, setTitle: React.Dispatch<React.SetStateAction<string>>, setThought: React.Dispatch<React.SetStateAction<string>>, onSubmit: () => void}) {
    return (
        <div className="modal">
            <form onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
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