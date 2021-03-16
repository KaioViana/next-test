import axios from 'axios'
import fs from 'fs'
import path from 'path'


const absolutePath = path.resolve("./public/global/global-data.json")

export default async function manifests() {

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
