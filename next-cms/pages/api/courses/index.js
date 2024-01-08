import coursesModel from "@/models/course";
import connectToDB from "@/utils/db";

const handler = async (req, res) => {
  connectToDB();
  switch (req.method) {
    case "GET":
      try {
        const courses = await coursesModel.find();
        return res.status(200).json(courses);
      } catch (err) {
        return res
          .status(500)
          .json({ message: "UnKnown internal server error !!", err });
      }
      break;
    case "POST":
      try {
        const { title } = req.body;
        if (!title.trim() || title.length < 8) {
          return res.status(422).json({ message: "Title is not valid !!" });
        }
        await coursesModel.create({ title });
        return res
          .status(201)
          .json({ message: "Course created successfully :))" });
      } catch (err) {
        return res
          .status(500)
          .json({ message: "UnKnown internal server error !!" });
      }
      break;

    // ? Default Case
    default:
      return res.status(405).end("Method Not Allowed");
      break;
  }
};

export default handler;
