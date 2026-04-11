const express = require("express")
const app = express()

app.use(express.static('StudentApp'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

let students = [
    {id: "S1", name: "Mukesh", course:"MCA"},
    {id: "S2", name: "Rakesh", course:"MCA"}
]
//read
app.get('/api/students',(req,res)=>{
    res.json(students)
})

// DELETE
app.delete('/api/students/:id', (req,res)=>{
    let id = req.params.id
    let index = students.findIndex(s => s.id == id)

    if(index != -1){
        students.splice(index,1)
        res.json({message: "Student Deleted"})
    } else {
        res.json({message: "Student not Found"})
    }
})

// UPDATE
app.put('/api/students/:id', (req,res) => {
    let id = req.params.id
    let updatedStudent = req.body
    let index = students.findIndex(s => s.id == id)

    if(index != -1){
        students[index] = updatedStudent
        res.json({message: "Record Updated!"})
    } else {
        res.json({message: "Student not Found"})
    }
})

//INSERT
app.post('/api/students', (req, res) => {
    let newStudent = req.body
    students.push(newStudent)
    res.json({ message: "Student Added" })
})

app.listen(4000, ()=> {
    console.log("server running at localhost:4000")
})