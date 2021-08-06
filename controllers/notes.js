const client = require("../configs/db");

exports.addNote =(req,res)=>{
    const {heading , content} = req.body;
    //console.log(req);
    client.query(`INSERT INTO notes (email , heading , content) VALUES('${req.email}', '${heading}', '${content}');`)
    .then((data)=>{
        res.status(200).json({message:"Note added successfully"});
    })
    .catch(err=>{
        res.status(500).json({message:"DB error occured"});
    });
};

exports.getAllNotes = (req,res)=>{
    client.query(`SELECT * FROM notes where email ='${req.email}'`)
    .then((data)=>{
        //console.log(data);
        const noteData = data.rows;
        const filteredData = noteData.map((note)=>{
            return {
                noteId: note.noteid,
                heading: note.heading,
                content: note.content,
            };
        });
        //console.log(filteredData);
        res.status(200).json({
            message:"Success",
            data: filteredData,
        });
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({message:"DB error occured"});
    });
};

exports.updateNote =(req, res)=>{
    const noteId = req.noteId;
    const {heading, content} = req.body;
    client.query(`UPDATE notes SET heading='${heading}',content='${content}' WHERE noteid='${noteId}';`)
    .then((data)=>{
        //console.log(filteredData);
        res.status(200).json({
            message:"Success",
        });
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({message:"DB error occured"});
    });
};

exports.deleteNote= (req, res)=>{
    const noteId = req.noteId;
    client.query(`DELETE FROM notes WHERE noteid='${noteId}';`)
    .then((data)=>{
        //console.log(filteredData);
        res.status(200).json({
            message:"Success",
        });
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({message:"DB error occured"});
    });
};