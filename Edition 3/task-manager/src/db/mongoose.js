const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0-qggnb.mongodb.net/task-manager-api?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

// const me = new User({
//     name: 'Andrew',
//     age: 'Mike'
// })

// me
//     .save()
//     .then(() => {
//         console.log(me)
//     })
//     .catch(error => {
//         console.log('Error!', error)
//     })

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: 'Learn the Mongoose library',
    completed: true
})

task
    .save()
    .then(() => {
        console.log(task)
    })
    .catch((error) => {
        console.log('Error!', error)
    })