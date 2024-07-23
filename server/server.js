// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require('multer');
const bodyParser = require('body-parser')
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/files", express.static("files"))
////// the above line will make our folders accessable from any where

const _dirname = path.dirname("")
const buildPath = path.join(_dirname, "../client/build")
app.use(express.static(buildPath))
app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err)
      }
    }
  );
})
/////////////// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://alexalejandrokh:yW7NJWBJr9H8uUWG@cluster0.he2zowb.mongodb.net/tstfhdb",
  {}
);


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, './files');
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now();
    return cb(null, file.originalname);
  }
})

const upload = multer({ storage })

const inputSchema = new mongoose.Schema({
  customId: String,
  operationNumber: String,
  subscriberNameEN: String,
  applicantNameEN: String,
  subscriberNumber: String,
  subscriberNameAR: String,
  applicantNameAR: String,
  crNumber: String,
  telephone: String,
  date: String,
  idNumber: String,
  qrCodeData: String,
  editorContent: String,
  filename: String,
  unifiedNumber: String,
  employeeNumber: String,

}, { collection: "inputing" });

const InputModel = mongoose.model("Input", inputSchema);

// API endpoint to receive input and save to MongoDB
app.post("/api/send-input", upload.single('filename'), async (req, res) => {
  try {
    const { customId, operationNumber, subscriberNameEN, applicantNameEN, subscriberNumber, subscriberNameAR, applicantNameAR, crNumber, telephone, date, idNumber, qrCodeData, editorContent, unifiedNumber, employeeNumber } = req.body;
    console.log(req.file);
    const filename = req.file.filename;
    const inputModel = new InputModel({
      customId,
      operationNumber,
      subscriberNameEN,
      applicantNameEN,
      subscriberNumber,
      subscriberNameAR,
      applicantNameAR,
      crNumber,
      telephone,
      date,
      idNumber,
      qrCodeData,
      editorContent,
      filename,
      unifiedNumber,
      employeeNumber,
    });
    await inputModel.save();
    res.json(inputModel);
    // res.status(200).json({ message: "File Uploaded successfully" });
    console.log(req.body);
    console.log("it's comming from here" + filename);
    console.log(req.body.file);
    // console.log(idNumber);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
});


app.get("/api/see/:operationNumber", async (req, res) => {
  const { operationNumber } = req.params;
  try {
    const subscriberId = await InputModel.findOne({ operationNumber });
    if (!subscriberId) {
      return res.status(404).json({ error: "Subscriber not found" });
    }
    res.status(200).json(subscriberId);
    console.log(subscriberId);
  } catch (error) {
    res.status(500).json({ error: "error fetching ftom the database" });
  }
});

app.get("/get-files", async (req, res) => {
  try {
    InputModel.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) { }
})

// app.get("/api/test", async (req, res) => {
//   try {
//     const subscribers = await InputModel.find({ operationNumber: "111111" });
//     res.status(200).json(subscribers);
//     console.log("result : ", subscribers);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "Error fetching subscribers from the database" });
//   }
// });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});