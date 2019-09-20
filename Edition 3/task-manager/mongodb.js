// CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb+srv://admin:admin@cluster0-qggnb.mongodb.net/test?retryWrites=true&w=majority'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log(error)
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    db
        .collection('tasks')
        .deleteOne({
            description: 'Clean the house'
        })
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })

})