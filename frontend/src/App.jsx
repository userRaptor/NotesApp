import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Typography } from '@mui/material'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';




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

    const deleteNote = (noteId) => {
        axios
            .delete(`/api/notes/${noteId}`)
            .then(() => {
                fetchNotes();
            })
            .catch((error) => {
                console.error("Error deleting notification:", error);
            });
    };

    useEffect(() => {
        fetchNotes();
    }, []);


    return (
        <div>
            <Typography variant="h3" gutterBottom>
                My Notes:
            </Typography>
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
        </div>
    )
}

export default App
