require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const chalk = require("chalk");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
<<<<<<< HEAD
=======
const routes = require("./routes");
const fileUpload = require("express-fileupload");
>>>>>>> c70c6c41bc9efc0c23b24978ef6d15878d51f5fd

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
<<<<<<< HEAD
=======
app.use(express.json({ limit: "50mb" }));
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));
>>>>>>> c70c6c41bc9efc0c23b24978ef6d15878d51f5fd

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

<<<<<<< HEAD
app.get("/", (req, res, next) => {
    res.send("<h1>Welcome to Geek ConnecKt API!</h1>");
});
=======
app.use(routes);
>>>>>>> c70c6c41bc9efc0c23b24978ef6d15878d51f5fd

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rqk4t.mongodb.net/geekConnekt?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then((result) => {
        console.log(chalk.green("Connected to MongoDB"));
        const port = process.env.PORT || 8000;
        app.listen(port, (e) => {
            if (e) {
                console.log(e);
            } else {
                console.log(
                    chalk.green(
                        `CONNECTION TO EXPRESS ESTABLISHED at port: ${port}`
                    )
                );
            }
        });
    })
    .catch((err) => console.log(err));
