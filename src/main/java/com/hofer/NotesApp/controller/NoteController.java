package com.hofer.NotesApp.controller;

import com.hofer.NotesApp.model.Note;
import com.hofer.NotesApp.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
public class NoteController {

    private final NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping
    public List<Note> getAllNotes() {
        return noteService.getAllNotes();
    }

    @PostMapping
    public ResponseEntity<String> createNote(@RequestBody Note note){
        noteService.createNote(note);
        return ResponseEntity.ok("Note created successfully");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateNote(@PathVariable Long id, @RequestBody Note note){
        noteService.updateNoteById(id, note);
        return ResponseEntity.ok("Note updated successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteNote(@PathVariable Long id){
        noteService.deleteNoteById(id);
        return ResponseEntity.ok("Note deleted successfully");
    }
}