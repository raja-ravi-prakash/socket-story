const net = require('net');
const fs = require('fs');
const readline = require('readline');
const server = net.createServer();

server.listen(8080);

server.on('connection', async (socket)=>{
    console.log("connected...");

    const data = fs.createReadStream('./story.txt');
    const rl = readline.createInterface({
        input: data,
        crlfDelay: Infinity
    });
    
    socket.write("\33c");
    for await (const line of rl) {
        await new Promise((res, rej)=>setTimeout(res, 2000));
        const string = `${line}\n`; 
        socket.write(string);
        console.log(string)
    }
    socket.destroy();
});