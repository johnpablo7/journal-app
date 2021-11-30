import React from 'react';
import { NoteScreen } from '../notes/NoteScreen';
// import { NothingSelectd } from './NothingSelectd';
import { Sidebar } from './Sidebar';

export const JournalScreen = () => {
	return (
		<div className="journal__main-content">
			<Sidebar />

			<main>
				{/* <NothingSelectd /> */}
				<NoteScreen />
			</main>
		</div>
	);
};
