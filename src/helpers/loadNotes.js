import { collection, query, getDocs } from "@firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const loadNotes = async (uid) => {

  const notesSnap = await getDocs(query(collection(db, `${uid}/journal/notes`)));
  const notes = [];

  notesSnap.forEach(snapHijo => {
    notes.push({
      id: snapHijo.id,
      ...snapHijo.data()
    })
  });

  // console.log(notes)

  return notes;
};