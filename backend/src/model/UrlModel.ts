import mongoose from "mongoose";
import { nanoid }  from "nanoid";

const shortUrlSchema = new mongoose.Schema(
  {
    fullUrl: {
      type: String,
      require: true,
    },
    shortUrl: {
      type: String,
      require: true,
      default: () => nanoid().substring(0, 8),
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const urlModel = mongoose.model("ShortUrl", shortUrlSchema);
