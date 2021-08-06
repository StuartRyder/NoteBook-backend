exports.handleNoteIdParam = (req, res, next,id )=>{
   // console.log("this log is from handle noteid param ",id);
    req.noteId =id;
    next();
}