import mongoose from "mongoose";

const sampleDataSchema1 = mongoose.Schema({
  Name: String,
  Age: Number
});

// sampleDataSchema1.index({ Name: 'text' });

const SampleData1 = mongoose.model("SampleData1", sampleDataSchema1, "SampleData1");

export default SampleData1;