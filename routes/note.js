const express = require("express");
const {verifyToken} = require("../middlewares/authMiddlewares")
const {addNote,getAllNotes,updateNote,deleteNote} = require("../controllers/notes");
const {handleNoteIdParam}= require("../middlewares/noteMiddleware");
const router= express.Router();

router.param("noteId", handleNoteIdParam);

router.get("/getallnotes",verifyToken,getAllNotes );
router.post("/add",verifyToken ,addNote);
router.delete("/delete/:noteId",verifyToken,deleteNote);
router.put("/update/:noteId",verifyToken,updateNote);


//Middleware
module.exports=router;

// localhost:8000/note/add
// localhost:8000/note/delete/:noteId
// localhost:8000/note/update/:noteId
// localhost:8000/note/getallnotes
