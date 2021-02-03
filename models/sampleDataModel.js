import mongoose from "mongoose";

const sampleDataSchema = mongoose.Schema({
  Year: {
    type: String,
  },
  Industry_aggregation_NZSIOC: {
    type: String,
  },
  Industry_code_NZSIOC: {
    type: String,
  },
  Industry_name_NZSIOC: {
    type: String,
  },
  Units: {
    type: String,
  },
  Variable_code: {
    type: String,
  },
  Variable_name: {
    type: String,
  },
  Variable_category: {
    type: String,
  },
  Value: {
    type: String,
  },
  Industry_code_ANZSIC06: {
    type: String,
  },
});

sampleDataSchema.index({
  Year: "text",
  Industry_aggregation_NZSIOC: "text",
  Industry_code_NZSIOC: "text",
  Industry_name_NZSIOC: "text",
  Units: "text",
  Variable_code: "text",
  Variable_name: "text",
  Variable_category: "text",
  Value: "text",
  Industry_code_ANZSIC06: "text",
});

const SampleData = mongoose.model("SampleData", sampleDataSchema, "SampleData");

export default SampleData;
