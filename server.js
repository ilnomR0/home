const express = require('express');
const app = express();

const port = parseInt(process.argv[2]);

if(isNaN(port)){
  console.error("ERROR: port argument is not valid. Please supply one or change it to a valid number");
  return 0;
}



app.use(express.static("frontend"));
app.use("/styleGuide", express.static("frontend/assets/styleGuidelines/"))

app.listen(port, (err)=>{
    console.log(`home page listening on port ${port}`);
})
