import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
    const [notes, setNotes] = useState([]);

    const fetchNotes = () => {
        axios
            .get(`/api/notes`)
            .then((response) => {
                console.log(response.data); 
                setNotes(response.data);
            })
            .catch((error) => {
                console.error("Error fetching notifications:", error);
            });
    };

    useEffect(() => {
        fetchNotes();
    }, []);



    return (
        <div>
            <h2>Alle Notizen</h2>
            {notes.map(note => (
                <div key={note.id}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    <button onClick={() => handleDelete(note.id)}>Löschen</button>
                </div>
            ))}

        </div>
    )
}

export default App
