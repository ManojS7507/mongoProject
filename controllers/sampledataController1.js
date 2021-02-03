import asyncHandler from "express-async-handler";
import SampleData1 from "../models/sampleDataModel1.js";
import {  ComparisonParser }from "../utils/parser.js";

const getSampleData1 = asyncHandler(async (req, res) => {

  const newQuery = await ComparisonParser(req)
  const sampleData = await SampleData1.find(newQuery).limit(20);
  // const sampleData = await SampleData1.find({ "$text" : { "$search" : "LEONEL" }}).limit(20);
  // const sampleData = await SampleData.find({ Variable_code: "H04"}).exec()
  if (sampleData) {
    res.json(sampleData);
  } else {
    res.status(404);
    throw new Error("SampleData not found");
  }
});

export { getSampleData1 };
