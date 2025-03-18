package com.hofer.NotesApp.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "note")
public class Note {

    // Lombok: @Setter, @Getter -> It creates automatic getter and setter methods.

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long noteId;

    @Column(nullable = false)
    private String title;

    @Lob
    private String content;
}
