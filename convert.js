const fs = require("fs");
const csv = require("csv-parser");

const results = [];

fs.createReadStream("./data/crime_data.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    fs.writeFileSync(
      "./data/crime_data.json",
      JSON.stringify(results, null, 2)
    );
    console.log("✅ Converted to JSON");
  });