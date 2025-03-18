# <img src="./frontend/public/notes-svgrepo-com.svg" alt="Logo" width="100" /> NotesApp 


Die Anwendung ist eine kleine **Webanwendung zur Verwaltung von Notizen**. Jede Notiz besteht aus einem **Titel** und einem **Freitext**. Nutzer können neue Notizen erstellen, bestehende Notizen bearbeiten und löschen.

## Anwendung erstellen
Um die Anwendung zu erstellen, müssen `Java 21` und `Maven` auf dem System installiert sein.

Zudem muss eine MySQL-Datenbank mit den folgenden Details erstellt werden:  
- **Datenbankname:** `notesAppDB`  
- **Benutzer:** `newUser`  
- **Passwort:** `password`

Das Backend kann mit folgendem Befehl im Stammverzeichnis des Projekts gestartet werden:

```bash
mvn spring-boot:run
```

Um die Abhängigkeiten im Frontend zu installieren, muss im Frontend-Ordner folgender Befehl ausgeführt werden:  
```bash
npm install  
```  
Anschließend wird das Frontend mit folgendem Befehl gestartet:  
```bash
npm run dev  
```

## Anwendung ausführen

Nach erfolgreichem Build ist die Anwendung unter der folgenden Adresse erreichbar:

    http://localhost:3000



## Technologien:
 * Als **Datenbank** wurde MySQL verwendet.
 * Für das **Backend** wurde Spring Boot mit Java verwendet. Als Build-Tool wurde Maven verwendet.
 * Für das **Frontend** wurden React und Vite verwendet.
 

## Systemarchitektur

Die Anwendung folgt einer klassischen **Client-Server-Architektur**. 

Das **Frontend** wurde mit React und Vite entwickelt und kommuniziert über HTTP-Requests (REST - Representational State Transfer) mittels axios mit dem Backend. Die Daten werden dabei im JSON-Format zwischen Client und Server ausgetauscht.

Das **Backend** wurde mit Spring Boot in Java entwickelt, wobei Maven als Build-Tool verwendet wird. Spring Boot stellt die REST-API bereit und verarbeitet die Anfragen entsprechend.


---

**Erstellt von:** [Hofer Lukas](https://github.com/userRaptor/NotesApp)
