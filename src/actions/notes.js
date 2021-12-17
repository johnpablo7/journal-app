import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { types } from '../types/types';
import { loadNotes } from "../helpers/loadNotes";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }
    const doc = await addDoc(collection(db, `${uid}`, "journal/notes"), newNote);

    dispatch(activeNote(doc.id, newNote))
    // console.log("Document written with ID: ", doc);
  }
}

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note
  }
})

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes))
  }
}

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes
});

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!note.url) {
      delete note.url;
    }

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    const noteRef = doc(db, `${uid}/journal/notes/${note.id}`)
    await updateDoc(noteRef, noteToFirestore);

    dispatch(refreshNote(note.id, note));
    Swal.fire('Saved', note.title, 'success');
  }
}

export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note
    }
  }
})