import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
	return (
		<div className="notes__main-content">
			<NotesAppBar />

			<div className="notes__content">
				<input
					type="text"
					placeholder="Some awesome title"
					className="notes__title-input"
					autoComplete="off"
				/>

				<textarea
					placeholder="What happened today"
					className="notes__textarea"
				/>

				<div className="notes__image">
					<img
						src="https://images3.alphacoders.com/963/thumb-1920-96395.jpg"
						alt="sharingan"
					/>
				</div>
			</div>
		</div>
	);
};
