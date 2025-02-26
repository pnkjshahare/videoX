import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloudinary link
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    tittle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, //cloudinary link
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      Boolean: true,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

mongoose.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video", videoSchema);
