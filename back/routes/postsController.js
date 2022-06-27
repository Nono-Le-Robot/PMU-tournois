const express = require("express")
const router = express.Router()
const ObjectID = require("mongoose").Types.ObjectId
const { PostsModel } = require ('../models/postsModel')
const fs = require("fs")
const { clear } = require("console")

router.get("/", (req,res) =>{
    PostsModel.find((err, usersData) => {
        res.send(usersData)
    })
})

fs.readFile("../back/final_data.txt",'utf-8', (err, datatxt) => {
    if(datatxt === undefined){
    }
    else{
            PostsModel.collection.deleteMany({})
            let data = []
            let  newdata = JSON.parse(datatxt)
        for(let j = 0; j<newdata.length;j++){ 
            newpnlparse = parseInt(newdata[j].pnl) 
            console.log( newpnlparse);
            newdata[j].pnl = newpnlparse
            data.push(newdata[j])
        }
        for (let y = 0; y< data.length;y++){
            const newRecord = new PostsModel(data[y])
            newRecord.save() 
        }
        }
})
PostsModel.find((err, usersData) => {
        if(usersData === undefined){
        }
        else{
            fs.writeFile("../back/data_users.txt", JSON.stringify(usersData), (err) => {
            });
        }
})

router.post("/", (req,res) =>{
    const newRecord = new PostsModel({
        user :req.body.user,
        userid : req.body.userid,
        pnl : 0
    })
    newRecord.save() 
    res.send(res)
})

router.put("/:id", (req,res) =>{
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknow' + req.params.id)
    const updateRecord = {
        pnl : 4
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

module.exports = router 