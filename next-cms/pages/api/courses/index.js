import coursesModel from "@/models/course";
import connectToDB from "@/utils/db";

const handler = async (req, res) => {
  connectToDB();

  if (req.method === "POST") {
    try {
      const { title } = req.body;
      if (!title.trim() || title.length < 5) {
        res.status(422).json({ message: "Title is not Valid !!" });
      }
      const course = await coursesModel.create({ title });
      res.status(201).json({ message: "Course create successfully :))" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Unknown internal server error!!" });
    }
  }
};

export default handler;
