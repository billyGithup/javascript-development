const fs = require("fs");
const fsPromise = require("fs").promises;

// const buf = new Buffer.allocUnsafe(1024);

// This is a manual way to open a file.
// fd is a file descriptor which is reference to an opened file.
// fs.open("workingWithFiles/sample.txt", "r+", (error, fd) => {
//   if (error) return console.error(error);

//   console.log("File opened successfully!");

//   // Read the file contents
//   fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
//     if (err) console.log(err);

//     if (bytes > 0) {
//       console.log(buf.slice(0, bytes).toString());
//     }

//     // Very important to close the file when done.
//     fs.close(fd, (err) => {
//       if (err) console.log(err);
//       console.log("File closed successfully!");
//     });
//   });
// });

// async function readFile() {
//   try {
//     const fileHandle = await fsPromise.open("workingWithFiles/sample.txt", "r");
//     const fileContents = await fileHandle.readFile({ encoding: "utf8" });
//     console.log(fileContents);
//   } catch (error) {
//     console.log(error);
//   }
// }

// readFile();

// Use readFile() to read file contents.
// fs.readFile("workingWithFiles/sample.txt", "utf8", (err, fileContent) => {
//   if (err) throw err;
//   console.log(fileContent);
// });

// async/await style
// const readFileWithPromise = async () => {
//   try {
//     const data = await fsPromise.readFile("workingWithFiles/sample.txt", {
//       encoding: "utf8"
//     });
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// readFileWithPromise();

// This function reads the file contents synchronously
// try {
//   const data = fs.readFileSync("workingWithFiles/sample.txt", "utf8");
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

// The operations below are about creating files.
// fs.open("workingWithFiles/sample2.txt", "w", (err, file) => {
//   if (err) throw err;
//   console.log(file);
//   console.log("File created!");
// });

// const data =
//   "This is the content that was written into the sample3.txt";
// fs.writeFile("workingWithFiles/sample3.txt", data, (err) => {
//   if (err) console.log("Error writing data to file!");
//   console.log("Saved!");
// });

// fs.appendFile(
//   "workingWithFiles/sample4.txt",
//   "We are learning JavaScript.",
//   (err) => {
//     if (err) throw err;
//     console.log("Done!");
//   }
// );

// This method/function renames an existing file
// fs.rename(
//   "workingWithFiles/sample.txt",
//   "workingWithFiles/sample1.txt",
//   (err) => {
//     if (err) console.log(err);
//     console.log("File renamed!");
//   }
// );

// This method/function will delete a file.
fs.unlink("workingWithFiles/sample4.txt", (err) => {
  if (err) {
    console.log("There is no file to delete!");
    return;
  }
  console.log("File is deleted!");
});
