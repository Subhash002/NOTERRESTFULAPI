import express from "express";
import {
  getAllNotes,
  createNewNote,
  getNoteById,
  deleteNote,
  updateNote,
} from "../controllers/main.js";
import { body } from "express-validator";
const router = express.Router();

router.get("/", getAllNotes);
router.post(
  "/",
  body("title").exists(),
  body("content").exists(),
  body("isDraft").exists().isBoolean(),
  createNewNote
);
router.get("/:id", getNoteById);
router.delete("/:id", deleteNote);
router.patch("/:id", updateNote);

export default router;
