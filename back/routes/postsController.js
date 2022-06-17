const express = require("express")
const router = express.Router()
const ObjectID = require("mongoose").Types.ObjectId
const { PostsModel } = require ('../models/postsModel')
const fs = require("fs")
console.log(process.cwd())
fs.readFile('./data.txt','utf-8', (err, datatxt) => {
  if (err) {
    console.error(err);
    return;
  }


router.get("/", (req,res) =>{
    PostsModel.find((err, usersData) => {

        if(!err) res.send(usersData)
        
    })
})

router.post("/", (req,res) =>{
    const newRecord = new PostsModel({
        user : req.body.user,
        userid : req.body.userid,
        pnl : 0
    })

    newRecord.save((err, docs) =>{
        if(!err){
            res.send(docs)

        } 

            
        else console.log("error creating data : " + err);

    })

 })
 console.log();

// ICI IL FAUT FAIRE UNE METHODE .FILTER ET UNE BOUCLE FOR POUR ENVOYER UNE REQUETE AVEC LID ET LES DONNEES DE CHAQUE PERSONNE

 router.put("/:id", (req,res) =>{
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknow' + req.params.id)
    const updateRecord = {
        pnl : JSON.parse(datatxt)[1].pnl
        
    }

    PostsModel.findByIdAndUpdate(
        req.params.id,
        {$set : updateRecord},
        {new  :true},
        (err, docs) => {
            if(!err) res.send(docs);
            else console.log("update error :" + err)
        }

    )
 })
});

module.exports = router