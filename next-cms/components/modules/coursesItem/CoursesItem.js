import DeleteModal from "@/components/templates/index/DeleteModal";
import EditModal from "@/components/templates/index/EditModal";
import { useState } from "react";
import styles from "@/styles/Course.module.css";
const CoursesItem = ({ title, image, _id, getCourses }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const hideEditModal = () => setShowEditModal(false);

  const hideDeleteModal = () => setShowDeleteModal(false);

  const removeCourse = async (e) => {
    e.preventDefault();
    setShowDeleteModal(true);
    console.log("id in course item", _id);
    const res = await fetch(`/api/courses/${_id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      setShowDeleteModal(false);
      getCourses();
    }
  };

  const updateCourse = async (e, title) => {
    e.preventDefault();

    const res = await fetch(`/api/courses/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (res.status === 200) {
      setShowEditModal(false);
      getCourses();
    }
  };

  return (
    <>
      <li className={styles.courses_item}>
        <div className={styles.courses_img_title}>
          <img
            src={image}
            alt="course-item-img"
            className={styles.courses_img}
          />
          <h5 className={styles.courses_name}>{title}</h5>
        </div>
        <div className={styles.courses_btns}>
          <a
            href="#"
            className={styles.courses_btn_edit}
            onClick={() => setShowEditModal(true)}
          >
            ویرایش
          </a>
          <a
            href="#"
            className={styles.courses_btn_delete}
            onClick={() => setShowDeleteModal(true)}
          >
            حذف
          </a>
        </div>
      </li>
      {showEditModal && (
        <EditModal updateCourse={updateCourse} hideEditModal={hideEditModal} />
      )}
      {showDeleteModal && (
        <DeleteModal
          removeCourse={removeCourse}
          hideDeleteModal={hideDeleteModal}
        />
      )}
    </>
  );
};

export default CoursesItem;
