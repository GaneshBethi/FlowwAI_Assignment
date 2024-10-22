const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("This server is live");
});

app.listen(4016, () => {
    console.log("Server is running on port 4016");
});
