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

    useEffect(() => {
        fetchNotes();
    }, []);


    return (
        <div>
            <Typography variant="h3" gutterBottom>
                Meine Notizen:
            </Typography>

            {notes.map(note => (
                <div key={note.noteId}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    <button onClick={() => handleDelete(note.noteId)}>Löschen</button>
                </div>
            ))}



            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>

        </div>
    )
}

export default App
