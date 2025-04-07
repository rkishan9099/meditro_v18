const fs = require("fs");
const data = require("./data.json");

const metadata = {};

data?.map((row) => {
  metadata[row["Page URL"]] = {
    title: row["Meta Title"],
    data: [
      {
        key: "title",
        value: row["Meta Title"],
      },
      {
        key: "description",
        value: row["Meta Description"],
      },
      {
        key: "meta-title",
        value: row["Meta Title"],
      },
    ],
  };
});

fs.writeFileSync("./meta-data.josn", JSON.stringify(metadata));
