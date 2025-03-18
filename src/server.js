const express = require('express');
const { exec } = require('child_process');
const app = express();
const PORT = 3001;

app.post('/start-streamlit', (req, res) => {
    exec('streamlit run vulnerability.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return res.status(500).send(`Error starting Streamlit: ${error.message}`);
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        res.send('Streamlit server started successfully.');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
