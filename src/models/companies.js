import mongoose from 'mongoose';
export const Company = mongoose.model("companies", { name: String });