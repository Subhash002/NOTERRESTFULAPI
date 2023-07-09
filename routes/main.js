import express from "express";
import {
  getAllNotes,
  createNewNote,
  getNoteById,
  deleteNote,
  updateNote,
} from "../controllers/main.js";
const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNewNote);
router.get("/:id", getNoteById);
router.delete("/:id", deleteNote);
router.patch("/:id", updateNote);

export default router;
