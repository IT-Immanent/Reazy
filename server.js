const app = require("./app"); 
const dotenv = require('dotenv');
const mongoose = require("mongoose");

dotenv.config({path: "./config.env"});

process.on('uncaughtException', (err) => {
    console.log(err);
    process.exit(1);
})

const http = require("http");

const server = http.createServer(app);
const DB = process.env.DBURI.replace("<PASSWORD>", process.env.DBPASSWORD)

mongoose.connect(DB).then((prop) => {
    console.log("Mongo Connecteddd !")
}).catch((err) => {
    console.log(err)
})
const port = process.env.PORT

server.listen(port, () => {
    console.log(`App is running on port ${port}`)
})

process.on("unhandledRejection", (err) => {
    console.log(err);
    server.close(() => {
        process.exit(1);
    })
})