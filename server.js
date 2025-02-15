import http from "node:http";
import fs, {readFileSync} from "node:fs";
import path from "node:path";
import {fileURLToPath, URL} from "node:url";

const PORT = 3000;
const HOST = "localhost";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
	const dbPath = path.join(__dirname, "db.json");
	const rawData = fs.readFileSync(dbPath, "utf8");
	const data = JSON.parse(rawData);

	res.writeHead(200, {"content-type": "text/plain"});
	if (req.method === "GET") {
		console.log(req.url);

		res.end(JSON.stringify(data, null, 4));
	}
});

server.listen(PORT, HOST, () => {
	console.log(`server ishga tushdi`);
});
