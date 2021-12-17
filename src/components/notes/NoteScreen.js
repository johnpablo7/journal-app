import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

	const dispatch = useDispatch()

	const { active: note } = useSelector(state => state.notes)
	const [formValues, handleInputChange, reset] = useForm(note)
	// console.log(formValues);
	const { body, title } = formValues;

	const activeId = useRef(note.id)

	useEffect(() => {

		if (note.id !== activeId.current) {
			reset(note);
			activeId.current = note.id
		}

	}, [note, reset])

	useEffect(() => {
		// console.log(formValues)
		dispatch(activeNote(formValues.id, { ...formValues }));
	}, [formValues, dispatch]);

	return (
		<div className="notes__main-content">
			<NotesAppBar />

			<div className="notes__content">
				<input
					type="text"
					placeholder="Some awesome title"
					className="notes__title-input"
					autoComplete="off"
					name='title'
					value={title}
					onChange={handleInputChange}
				/>

				<textarea
					placeholder="What happened today"
					className="notes__textarea"
					name='body'
					value={body}
					onChange={handleInputChange}
				/>

				{
					(note.url)
					&& (
						<div className="notes__image">
							<img
								src="https://images3.alphacoders.com/963/thumb-1920-96395.jpg"
								alt="sharingan"
							/>
						</div>
					)
				}
			</div>
		</div>
	);
};
