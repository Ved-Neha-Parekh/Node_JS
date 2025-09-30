//! -------------------------------------------------------------------
// const http = require("http");

// http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.end("Welcome to Home page");
//     } else if (req.url === "/about") {
//         res.end("This is about page");
//     } else if (req.url === "/contact") {
//         res.end("This is contact page");
//     } else {
//         res.end("404 page not found");
//     }
// }).listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// })
//! -------------------------------------------------------------------

//* -------------------------------------------------------------------
const http = require("http");

const server = http.createServer((req, res) => {
    // res.write("Hello world!!");
    // res.end();

    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write("<h1 style='color:blue'>Welcome to Home Page</h1>");
        res.write(`
            <a href='/' target="_blank">Home</a> | 
            <a href='/about' target="_blank">About</a> | 
            <a href='/contact' target="_blank">Contact</a>
        `)
    } else if (req.url === "/about") {
        res.write("This is about page");
    } else if (req.url === "/contact") {
        res.write("This is contact page");
    } else {
        res.write("404 page not found");
    }
    res.end();
})

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})
//* -------------------------------------------------------------------
