import express from 'express';
import dotenv from 'dotenv';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';



dotenv.config(); // Load environment variables from .env file
const PORT = process.env.PORT || 3000;
const app = express();

//get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
//get the directory name from the file URL
//dirname is a built-in Node.js function that returns the directory name of a path
const __dirname = dirname(__filename);


app.use(express.json()); // Middleware to parse JSON bodies

//server static files from the 'public' directory any request to the server will look for files in the 'public' directory
//this is useful for serving static files like HTML, CSS, and JavaScript files
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});