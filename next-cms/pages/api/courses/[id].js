import coursesModel from "@/models/course";
import connectToDB from "@/utils/db";
import { isValidObjectId } from "mongoose";

const handler = async (req, res) => {
  connectToDB();
  const { id } = req.query;
  console.log("id in APi", id);
  if (isValidObjectId(id)) {
    try {
      await coursesModel.findOneAndDelete({ _id: id });
      return res
        .status(200)
        .json({ message: "Course Removes Successfully :))" });
    } catch (error) {
      res.status(500).json({ message: "Internal server Error !!" });
    }
  } else {
    res.status(422).json({ message: "Course Id is not Valid !!" });
  }
};

export default handler;
