const fs = require("fs");
const path = require("path");

const dirPath = "./task_automation";

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
// creating files
const files = ["file1.txt", "file2.txt", "file3.txt"];
files.forEach((file) => {
  fs.writeFileSync(path.join(dirPath, file), `Content for ${file}`);
});

// Concatenate files
let combinedContent = "";
files.forEach((file) => {
  combinedContent += fs.readFileSync(path.join(dirPath, file), "utf8") + "\n";
});
fs.writeFileSync(path.join(dirPath, "concatenated.txt"), combinedContent);

// Print to the console
console.log(combinedContent);

// Delete original files
files.forEach((file) => {
  fs.unlinkSync(path.join(dirPath, file));
});
