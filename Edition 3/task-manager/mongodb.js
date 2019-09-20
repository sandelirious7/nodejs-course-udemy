// CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb+srv://admin:admin@cluster0-qggnb.mongodb.net/test?retryWrites=true&w=majority'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db
    //     .collection('users')
    //     .findOne({ _id: new ObjectID("5d84a8725ae9e024e4d84664") }, (error, user) => {
    //         if (error) {
    //             return console.log('Unable to fetch')
    //         }

    //         console.log(user)
    //     })

    // db
    //     .collection('users')
    //     .find({ age: 27 })
    //     .toArray((error, users) => {
    //         console.log(users)
    //     })

    // db
    //     .collection('users')
    //     .find({ age: 27 })
    //     .count((error, count) => {
    //         console.log(count)
    //     })

    db
        .collection('tasks')
        .findOne({ _id: new ObjectID('5d84a52dd5768222e8ef6398') }, (error, task) => {
            if (error) {
                return console.log('Unable to fetch the task!')
            }
            console.log(task)
        })

    db
        .collection('tasks')
        .find({ completed: false })
        .toArray((error, tasks) => {
            if(error) {
                return console.log('Unable to fetch tasks!')
            }

            console.log(tasks)
        })

})