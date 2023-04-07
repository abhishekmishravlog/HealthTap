const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors())

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, {
    dbName: "HealthTap",
}).then(() => {
    console.log("DB Connected");
}).catch((err) => {
    console.log(err);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening to port ${process.env.PORT}`);
});