// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

  let val = await central(id)
  
  //   console.log(val)
  //   console.log(val1)
  return dbs[val](id)
}

console.log(await getUserData(2))