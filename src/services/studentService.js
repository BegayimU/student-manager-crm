import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

const studentsCollection = collection(db, "students");

// ➕ Добавление студента
export const addStudent = async (studentData) => {
  try {
    const docRef = await addDoc(studentsCollection, studentData);
    return docRef.id;
  } catch (error) {
    console.error("Ошибка добавления студента:", error);
    throw error;
  }
};

// 📥 Получение всех студентов
export const getStudents = async () => {
  try {
    const data = await getDocs(studentsCollection);
    return data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Ошибка получения студентов:", error);
    throw error;
  }
};

// ✏️ Редактирование студента
export const updateStudent = async (id, updatedData) => {
  try {
    const studentDoc = doc(db, "students", id);
    await updateDoc(studentDoc, updatedData);
  } catch (error) {
    console.error("Ошибка редактирования студента:", error);
    throw error;
  }
};

// ❌ Удаление студента
export const deleteStudent = async (id) => {
  try {
    const studentDoc = doc(db, "students", id);
    await deleteDoc(studentDoc);
  } catch (error) {
    console.error("Ошибка удаления студента:", error);
    throw error;
  }
};