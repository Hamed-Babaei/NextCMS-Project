import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import { useState } from "react";
import AddCourseModal from "./AddCourseModal";
import styles from "@/styles/Course.module.css";

const Courses = ({ courses }) => {
  console.log("course in courses page", courses);

  const [data, setData] = useState([...courses]);

  return (
    <>
      <section className={styles.courses}>
        <div className={styles.courses_top}>
          <h2 className={styles.courses_title}>نتیجه جستجو :</h2>
        </div>
        <ul className={styles.courses_list}>
          {data.map((course) => (
            <CoursesItem
              key={course._id}
              title={course.title}
              image="/images/courses/PWA.jpg"
              {...course}
              getCourses={getCourses}
            />
          ))}
        </ul>
      </section>

      {showAddCourseModal && (
        <AddCourseModal
          getCourses={getCourses}
          hideAddCourseModal={hideAddCourseModal}
        />
      )}
    </>
  );
};

export default Course;
