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
    //     .updateOne(
    //         { _id: new ObjectID('5d84a14add761a382c4c5c07') },
    //         {
    //             $inc: {
    //                 age: 1
    //             }
    //         }
    //     )
    //     .then((result) => {
    //         console.log(result)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })

    db
        .collection('tasks')
        .updateMany(
            {
                completed: false
            },
            {
                $set: {
                    completed: true
                }
            }
        )
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })

})