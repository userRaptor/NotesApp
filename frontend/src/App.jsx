import React from 'react';
import axios from 'axios'

import { useState, useEffect } from 'react'
import { Typography } from '@mui/material'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';




function App() {
    const [notes, setNotes] = useState([]);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [openModalAddNote, setOpenModalAddNote] = React.useState(false);
    const handleOpenModalAddNote = () => setOpenModalAddNote(true);
    const handleCloseModalAddNote = () => {
        setOpenModalAddNote(false);
        setTitle('');
        setContent('');
    };

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


    const deleteNote = (noteId) => {
        if (
            window.confirm(
                "Are you sure to delete this Note?"
            )
        ) {
            axios
                .delete(`/api/notes/${noteId}`)
                .then(() => {
                    fetchNotes();
                })
                .catch((error) => {
                    console.error("Error deleting notification:", error);
                });
        }
    };

    const addNote = () => {
        if (title === '') {
            console.log('title is empty');
            return
        } else {
            axios
                .post(`/api/notes`, {
                    title: title,
                    content: content,
                })
                .then(() => {
                    fetchNotes();
                    handleCloseModalAddNote();
                    console.log('note added');
                })
                .catch((error) => {
                    console.error("Error adding notification:", error);
                });
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, mt: 3 }}>
                <Typography variant="h3" gutterBottom>
                    My Notes:
                </Typography>
                <Button variant="contained" onClick={handleOpenModalAddNote}>
                    Add Note
                    <AddCircleOutlineIcon fontSize="small" sx={{ ml: 1 }} />
                </Button>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 3,
                }}>
                {notes.map(note => (
                    <Card key={note.noteId} sx={{ width: '300px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {note.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {note.content}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => deleteNote(note.noteId)}>Delete</Button>
                            <Button size="small">Edit</Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>


            <Modal
                open={openModalAddNote}
                onClose={handleCloseModalAddNote}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    ...modalStyle,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Write your note:
                    </Typography>
                    <TextField
                        id="standard-basic"
                        label="Title:"
                        variant="standard"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="Content:"
                        multiline
                        rows={4}
                        variant="standard"
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                        <Button onClick={addNote}>Save</Button>
                        <Button onClick={handleCloseModalAddNote}>Close</Button>
                    </Box>
                </Box>
            </Modal>

        </div>
    )
}

export default App
