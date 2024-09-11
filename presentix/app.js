const express = require("express")
const collection = require ("./mongo")
const cors = require('cors')
const multer = require('multer');

const app = express()
const path = require('path');
const { spawn } = require('child_process');
const fs = require('fs');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use (cors())

app.get("/",cors(),(req,res)=>{

})

const upload = multer({ dest: 'uploads/' });
let uploadedFilePath = ''; // Store the path of the uploaded file

// Endpoint to handle file upload
app.post('/uploadVideo', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  uploadedFilePath = path.join(__dirname, req.file.path);
  res.json({ message: 'File uploaded successfully', filePath: uploadedFilePath });
});

// Endpoint to check the result by running the Python script
app.post('/checkResult', (req, res) => {
  if (!uploadedFilePath) {
    return res.status(400).json({ error: 'No file uploaded to process' });
  }

  // Spawn a child process to run the Python script
  const pythonProcess = spawn('python', ['./DisVoice-master/DisVoice-master/disvoice/main.py', uploadedFilePath]);

  let scriptOutput = '';

  pythonProcess.stdout.on('data', (data) => {
    scriptOutput += data.toString();
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  pythonProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    
    // Send the result back to the client
    res.json({ result: scriptOutput });

    // Delete the file after processing
    fs.unlink(uploadedFilePath, (err) => {
      if (err) console.error(`Error deleting file: ${err}`);
    });

    // Reset the uploaded file path
    uploadedFilePath = '';
  });
});


app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user with the provided email
        const user = await collection.findOne({ email });

        if (user) {
            // Check if the provided password matches the user's password
            if (user.password === password) {
                res.json({ status: "success", user });

            } else {
                res.json({ status: "invalidPassword" });
            }
        } else {
            res.json({ status: "userNotExist" });
        }
    } catch (error) {
        res.json({ status: "fail" });
    }
});



app.post("/signup",async(req,res)=>{
    const{username,email,password}=req.body

    const data={
        username:username,
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})
app.get("/user", async (req, res) => {
    try {
      const email = req.query.email; // Get email from query parameters
  
      if (!email) {
        return res.status(400).json({ error: "Email parameter is missing" });
      }
  
      // Find the user based on the provided email
      const userData = await collection.findOne({ email });
  
      if (userData) {
        // If user data is found, send it as a response
        res.json(userData);
      } else {
        // If user data is not found, send an error response
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      // Handle errors
      console.error("Failed to fetch user data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
app.listen(8000,()=>{
    console.log("port connected")
})