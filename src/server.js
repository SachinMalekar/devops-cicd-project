const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Devops CICD project",
        status: "Application Running successfully"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP"
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Application running on port ${PORT}`);
    });
}

module.exports = app;