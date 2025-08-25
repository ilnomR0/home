const express = require('express');
const app = express();
const port = 4330;

app.use(express.static("frontend"));

app.set("styleGuide", "frontend/assets/styleGuide");

app.listen(port, (err)=>{
    console.log(`home page listening on port ${port}`);
})
