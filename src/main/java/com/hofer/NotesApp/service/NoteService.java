package com.hofer.NotesApp.service;

import com.hofer.NotesApp.model.Note;
import com.hofer.NotesApp.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {

    private final NoteRepository noteRepository;

    @Autowired
    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public List<Note> getAllNotes(){
        return noteRepository.findAll();
    }

    public void createNote(Note note){
        noteRepository.save(note);
    }

    public void deleteNoteById(Long id){
        noteRepository.deleteById(id);
    }

    public void updateNoteById(Long id, Note note) {
        Note existingNote = noteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Note not found"));

        existingNote.setTitle(note.getTitle());
        existingNote.setContent(note.getContent());

        noteRepository.save(existingNote);
    }
}
