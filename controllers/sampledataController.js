import asyncHandler from "express-async-handler";
import SampleData from "../models/sampleDataModel.js";

// @desc    Create a sampleData
// @route   POST /api/sampleData
// @access  Private/Admin
const createSampleData = asyncHandler(async (req, res) => {
  const {
    Year,
    Industry_aggregation_NZSIOC,
    Industry_code_NZSIOC,
    Industry_name_NZSIOC,
    Units,
    Variable_code,
    Variable_name,
    Variable_category,
    Value,
    Industry_code_ANZSIC06,
  } = req.body;

  if (Year && Year.length === 0) {
    res.status(400);
    throw new Error("No Year in data");
    return;
  } else {
    const newSampleData = new SampleData({
      Year,
      Industry_aggregation_NZSIOC,
      Industry_code_NZSIOC,
      Industry_name_NZSIOC,
      Units,
      Variable_code,
      Variable_name,
      Variable_category,
      Value,
      Industry_code_ANZSIC06,
    });

    const newSampledata = await newSampleData.save();
    res.status(201).json(newSampledata);
  }
});

// @desc    Fetch all sampleData
// @route   GET /api/sampleData
// @access  Public
const getSampleData = asyncHandler(async (req, res) => {
  console.log(req.query);
  // const sampleData = await SampleData.find(req.query).limit(20)
  const sampleData = await SampleData.find({
      $text: {
        path: "Industry_code_NZSIOC",
        query: "RS214",
      },
  }).limit(20);
  // const sampleData = await SampleData.find({ Variable_code: "H04"}).exec()
  if (sampleData) {
    res.json(sampleData);
  } else {
    res.status(404);
    throw new Error("SampleData not found");
  }
});

// @desc    Fetch single sampleData
// @route   GET /api/sampledata/:id
// @access  Public
const getSampleDataById = asyncHandler(async (req, res) => {
  const sampleData = await SampleData.findById(req.params.id);

  if (sampleData) {
    res.json(sampleData);
  } else {
    res.status(404);
    throw new Error("sampleData not found");
  }
});

// @desc    Update sampleData
// @route   POST /api/sampledata/:id
// @access  Public
const updateSampleData = asyncHandler(async (req, res) => {
  const {
    Year,
    Industry_aggregation_NZSIOC,
    Industry_code_NZSIOC,
    Industry_name_NZSIOC,
    Units,
    Variable_code,
    Variable_name,
    Variable_category,
    Value,
    Industry_code_ANZSIC06,
  } = req.body;

  const sampledata = await SampleData.findById(req.params.id);
  if (sampledata) {
    sampledata.Year = Year;
    sampledata.Industry_aggregation_NZSIOC = Industry_aggregation_NZSIOC;
    sampledata.Industry_code_NZSIOC = Industry_code_NZSIOC;
    sampledata.Industry_name_NZSIOC = Industry_name_NZSIOC;
    sampledata.Units = Units;
    sampledata.Variable_code = Variable_code;
    sampledata.Variable_name = Variable_name;
    sampledata.Variable_category = Variable_category;
    sampledata.Value = Value;
    sampledata.Industry_code_ANZSIC06 = Industry_code_ANZSIC06;

    const updatedsampleData = await sampledata.save(sampledata);
    res.json(updatedsampleData);
  } else {
    res.status(404);
    throw new Error("SampleData not found");
  }
});

// @desc    Delete a sampledata
// @route   DELETE /api/sampledata/:id
// @access  Private
const deleteSampledata = asyncHandler(async (req, res) => {
  const sampleData = await SampleData.findById(req.params.id);

  if (sampleData) {
    await sampleData.remove();
    res.json({ message: "sampleData removed" });
  } else {
    res.status(404);
    throw new Error("sampleData not found");
  }
});

export {
  getSampleData,
  getSampleDataById,
  updateSampleData,
  deleteSampledata,
  createSampleData,
};
