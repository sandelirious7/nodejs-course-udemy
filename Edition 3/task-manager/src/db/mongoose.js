const mongoose = require("mongoose");

const databaseName = "task-manager-api";
const connectionURL = `mongodb+srv://admin:admin@playground.qggnb.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
