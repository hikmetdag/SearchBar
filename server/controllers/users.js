
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const Data = require("../clients.json");
import fs from "fs";

const jsonString = fs.readFileSync("clients.json", "utf-8");
const data = JSON.parse(jsonString);

export const getUser = (req, res) => {
  const { q } = req.query;

  const search = (results) => {
    return results.filter((item) =>
   item.first_name.toLowerCase().includes(q.toLowerCase()) 
    );
  };
 
  q ? res.send(search(data).slice(0, 10)) : res.send(data.slice(0, 10));

};