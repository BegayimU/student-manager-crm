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

// ➕ Добавить студента
export const addStudent = async (studentData) => {
  const docRef = await addDoc(studentsCollection, studentData);
  return docRef.id;
};

// 📥 Получить всех студентов
export const getStudents = async () => {
  const snapshot = await getDocs(studentsCollection);
  return snapshot.docs.map((docItem) => ({
    id: docItem.id,
    ...docItem.data()
  }));
};

// ✏️ Обновить студента
export const updateStudent = async (id, updatedData) => {
  const studentDoc = doc(db, "students", id);
  await updateDoc(studentDoc, updatedData);
};

// ❌ Удалить студента
export const deleteStudent = async (id) => {
  const studentDoc = doc(db, "students", id);
  await deleteDoc(studentDoc);
};