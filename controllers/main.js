import { validationResult } from "express-validator";
import { nanoid } from "nanoid";
let notes = [];
export const updateNote = (req, res) => {
  const { id } = req.params;
  const { title, content, isDraft } = req.body;

  const updateNoteIndex = notes.findIndex((n) => n.id === Number(id));

  if (updateNoteIndex === -1) {
    res.status(404).send("Note not found");
    return;
  }

  if (title) {
    notes[updateNoteIndex].title = title;
  }

  if (content) {
    notes[updateNoteIndex].content = content;
  }

  if (isDraft !== undefined) {
    notes[updateNoteIndex].isDraft = isDraft;
  }

  res.send(`Updated note`);
};

export const deleteNote = (req, res) => {
  const { id } = req.params;
  notes = notes.filter((n) => n.id !== id);
  res.send(`Deleted note`);
};

export const createNewNote = (req, res) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const note = req.body;
  notes.push({ ...note, id: nanoid() });
  res.send(`Created note ${note}`);
};

export const getNoteById = (req, res) => {
  const { id } = req.params;
  const note = notes.find((n) => n.id === id);
  res.send(note);
};

export const getAllNotes = (req, res) => res.send(notes);
