import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const studentsCollection = collection(db, "students");

export const addStudent = async (student) => {
  try {
    const docRef = await addDoc(studentsCollection, {
      ...student,
      createdAt: new Date()
    });

    console.log("Student added with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding student:", error);
    throw error;
  }
};