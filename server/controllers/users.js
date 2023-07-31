
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const Data = require("../clients.json");
import fs from "fs";

// Calling the fs.readFile() method for reading file "clients.json"
const jsonString = fs.readFileSync("clients.json", "utf-8");
// JSON object is converted to text format to a Javascript object 
//so that it can be used inside a program.
const data = JSON.parse(jsonString);

//Get names by query.
export const getUser = (req, res) => {
  const { q } = req.query;

  const search = (results) => {
    return results.filter((item) =>
      //It can searched by name,last name and origin.
      `${item.first_name} ${item.last_name} ${item.origin}`.toLowerCase().includes(q.toLowerCase())
    );
  };
  //Top 10 names will be displayed
  q ? res.send(search(data).slice(0, 10)) : res.send(data.slice(0, 10));
};

//Get a specific a name by id.
export const getUserId = (req, res) => {
  const { id } = req.params;
  const findUser = data.find(user => id == user.id.$oid);
  res.send(findUser);
};