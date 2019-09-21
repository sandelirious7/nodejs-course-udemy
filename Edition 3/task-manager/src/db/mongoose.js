const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb+srv://admin:admin@cluster0-qggnb.mongodb.net/task-manager-api?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const me = new User({
    name: '   Andrew   ',
    email: 'MYEMAIL@MEAD.IO    '
})

me
    .save()
    .then(() => {
        console.log(me)
    })
    .catch(error => {
        console.log('Error!', error)
    })

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

// const task = new Task({
//     description: 'Learn the Mongoose library',
//     completed: true
// })

// task
//     .save()
//     .then(() => {
//         console.log(task)
//     })
//     .catch((error) => {
//         console.log('Error!', error)
//     })