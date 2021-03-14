const axios = require('axios');
const fs = require('fs');
const path = require("path");


const absolutePath = path.join(__dirname, "..", "global","global-data.json")

async function manifests() {

  const res = await axios.get("https://dcco.com.br/cms/geral");

  fs.writeFile(
    absolutePath,
    JSON.stringify(res.data),
    (err) => {
      if (err) throw err
      console.info("Global data written to file");
    }
  );

  return res.data;
}

function main() {
  if (!fs.existsSync(absolutePath)) {
    manifests();
  }
}

main();

module.exports = {
  manifests
}
