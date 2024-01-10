import React, { useContext , useEffect , useRef , useState} from 'react'
import noteContext from '../Context/Notes/NoteContext';
import NotesItem from './NotesItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
const {notes , getNotes}= context;
// eslint-disable-next-line
useEffect(() => {
  // eslint-disable-next-line
  getNotes()
  
}, [])


const ref = useRef(null)
const [note, setNote] = useState({  etitle: "", edesciption: "",  etag: "",}) 

const updateNote=(currentNote)=>{
  ref.current.click();
  setNote({etitle: currentNote.title , edesciption: currentNote.desciption , etag: currentNote.tag})
}


const handleClick = (e) => {
  console.log('updating the note.....', note)
  e.preventDefault();
};

const onChange = (e) => {
  setNote({ ...note, [e.target.name]: e.target.value });
};



return (
    <>
<AddNote/>



<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Update Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       
      <div>
      <div className="container my-3">
        <h1>Update Note</h1>

        <form className="container my-4">
          <div className="form-group">
            <label htmlFor="etitle">Title</label>
            <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" placeholder="Add a note"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edesciption">Desciption</label>
            <input type="text"  className="form-control"  id="edesciption"  name="edesciption" value={note.edesciption}  placeholder="Desciption"  onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edesciption">Tag</label>
            <input type="text" className="form-control" id="etag" name="etag" value={note.etag} placeholder="Insert a Tag" onChange={onChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary my-3"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
      </div>
    </div>
  </div>
</div>





      <div className="row my-2">
        <h1>Your Notes</h1>

        {/* // this is where the note starts  */}
        {notes.map((note) => {
          return <NotesItem key={note._id} updateNote={updateNote} note={note}/>
        })}
      </div>
    </>
  );
};

export default Notes;
