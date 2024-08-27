import { Schema, model } from "mongoose";
const QuoteSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    // unique: true
  },
  phone: {
    type: String,
    //unique: true
  },
  message: {
    type: String
  },
  date: {
    type: Date
  },
  userData: {
    type: Object
  },
}, { 
  versionKey: false 
})

export const Quote = model("Quote", QuoteSchema);