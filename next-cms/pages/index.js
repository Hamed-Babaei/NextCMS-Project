import Courses from "@/components/templates/index/Course";
import coursesModel from "@/models/course";
import connectToDB from "@/utils/db";

const index = ({ courses }) => {
  return <Courses courses={courses} />;
};

export async function getStaticProps(context) {
  connectToDB();
  const courses = await coursesModel.find();

  console.log("courses =>", courses);

  return {
    props: {
      courses: JSON.parse(JSON.stringify(courses)),
    },
    revalidate: 60 * 60 * 12,
  };
}

export default index;
