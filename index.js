const express = require("express");
const app = express();
const path = require("path")
const emailValidator = require("./email-validator")


app.use(express.static(path.join(__dirname, "public")))

const PORT = process.env.PORT;


app.get("/:email", (req, res) => {
    const { email } = req.params;

    const emailIsValid = emailValidator(email)

    if (emailIsValid) {
        res.redirect(`mailto:${email}`)
    } else {
        res.status(400).json({ message: "Invalid Email" })
    }

});


app.listen(PORT, () => {
    if (process.env.NODE_ENV !== "production") {
        console.log(`http://localhost:${PORT}`)
    }
});
