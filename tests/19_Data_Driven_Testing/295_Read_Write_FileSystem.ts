const fs = require('fs');
import path from 'path';

const filePath = path.join(__dirname, "293_Users.json");

const fileData = fs.readFileSync(filePath, 'utf-8');

const userData = JSON.parse(fileData);
console.log(userData.username);

// Writing Data to JSON file
const user = {
    name: "Girish",
    role: "QA Trainer"
};

const jsonData = JSON.stringify(user);

fs.writeFileSync("output.json", jsonData);
console.log("JSON file created Successfully")

