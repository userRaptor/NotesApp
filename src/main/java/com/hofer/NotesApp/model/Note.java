package com.hofer.NotesApp.model;

import jakarta.persistence.*;
import lombok.Setter;

@Entity
@Table(name = "note")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long noteId;

    @Setter
    @Column(nullable = false)
    private String title;

    @Setter
    @Lob
    private String content;

    // Lombok
    public Long getNoteId() {
        return noteId;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }
}
