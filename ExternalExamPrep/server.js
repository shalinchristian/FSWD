const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('src'))

mongoose.connect('mongodb://127.0.0.1:27017/StudentData') //mongodb://localhost:27017/

mongoose.connection.once('open', () => {
    console.log("MongoDB Connected")
})

const studentSchema = new mongoose.Schema({
    id:Number,
    name:String,
    course:String,
    marks:Number
})

const Student = mongoose.model('Student', studentSchema, 'students')

//Read
app.get('/api/students', async (req, res) => {
    const data = await Student.find()
    res.json(data)
})

//Insert
app.post('/api/students', async (req, res) => {
    await Student.create(req.body)
    res.json({message:'Student Added'})
})

// update
app.put('/api/students/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        await Student.updateOne(
            { id: id },
            req.body
        )

        res.json({ message: 'Student Updated' })
    } catch (err) {
        res.json({ message: err })
    }
})

// delete
app.delete('/api/students/:id', async (req, res) => {
    const id = parseInt(req.params.id)

    await Student.deleteOne({ id: id })

    res.json({ message: "Student Deleted" })
})

app.listen(4000, ()=>{
    console.log("Server running on port 4000")
})
