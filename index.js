const express=require('express')
const db=require('./db')
const cors=require("cors")

const app=express()

app.use(express.json())
app.use(cors())

app.get('/get-all-sponsers',(req,res)=>
{
    db.getAllSponsers()
    .then((data)=>
    {
        res.send(data)
        console.log(data)
    })
    .catch((err)=>
    {
        res.send(err)
        console.log(err)
    })
})

app.get('/get-sponser/:id',(req,res)=>
{
    const id=req.params.id
    db.getSponser(id)
    .then((data)=>
    {
        res.send(data)
        console.log(data)
    })
    .catch((err)=>
    {
        res.send(err)
        console.log(err)
    })

})

app.post('/add-sponser',(req,res)=>
{
    console.log("Hi")
    db.addSponser(req.body.Country,req.body.Sponser)
    .then((data)=>
    {
        res.send(data)
        console.log(data)
    })
    .catch((err)=>
    {
        res.send(err)
        console.log(err)
    })
})


app.put('/update-sponser/:id',(req,res)=>
{
    const name=req.params.id
    db.updateSponser(req.body.name,req.body.sponser,name)
    .then((data)=>
    {
        res.send(data)
        console.log(data)
    })
    .catch((err)=>
    {
        res.send(err)
        console.log(err)
    })

})

app.delete('/delete-sponser/:id',(req,res)=>
{
    const name=req.params.id
    db.deleteSponser(name)
    .then((data)=>
    {
        res.send(data)
        console.log(data)
    })
    .catch((err)=>
    {
        res.send(err)
        console.log(err)
    })
})


app.listen('8000',(req,res)=>
{
    console.log("server started")
})