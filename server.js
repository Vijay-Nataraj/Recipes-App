const mongoose = require("mongoose");
const { MONGODB_URI, PORT } = require("./utils/config");
const app = require("./app");

console.log("Connecting to the MongoDB...");

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to the MongoDB...");

    app.listen(PORT, () => {
      console.log(`Server is running @ http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error connecting to the MongoDB, ${error}`);
  });
