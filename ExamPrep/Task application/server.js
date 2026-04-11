const express = require('express')// function
const app = express()// object

// Middlewares
app.use(express.static('taskApp'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let tasks = [
    { taskID: 'Task1', taskName: 'Submit Assignment', status: 'Started' },
    { taskID: 'Task2', taskName: 'Set Question Paper', status: 'In Progress' }
]

// Load HTML Page   
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/taskApp/view.html')
})

// Get Tasks
app.get('/api/taskData', (req, res) => {
    res.send(tasks)
})

// Add Task
app.post('/api/addTask', (req, res) => {
    const taskData = req.body
    tasks.push(taskData)
    res.json({ message: 'Task Added' })
})

// Delete Task
app.delete('/api/deleteTask/:id', (req, res) => {
    let id = req.params.id
    let index = tasks.findIndex(t => t.taskID == id)

    if (index != -1) {
        tasks.splice(index, 1)
        res.json({ message: 'Task Deleted' })
    } else {
        res.json({ message: 'Task Not Found' })
    }
})

// Update Task
app.put('/api/updateTask/:id', (req, res) => {
    let id = req.params.id
    let updatedTask = req.body
    let index = tasks.findIndex(t => t.taskID == id)

    if (index != -1) {
        tasks[index] = updatedTask
        res.json({ message: 'Task Updated' })
    } else {
        res.json({ message: 'Task Not Found' })
    }
})

app.listen(4000, () => {
    console.log("Server running on PORT 4000")
})