import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPencil,
	faTrash,
	IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

type Event = {
	id: number;
	name: string;
	displayDate: string;
	icon: IconDefinition;
	day: number;
	month: number;
	year: number;
};

type EventProps = {
	event: Event;
	removeEvent: (eventId: number) => void;
};

function Event({ event, removeEvent }: EventProps) {
	return (
		<div className='flex flex-row items-center justify-between py-4'>
			<div className='flex flex-row items-center'>
				<FontAwesomeIcon
					icon={event.icon}
					className='pr-6 text-dark'
					style={{ fontSize: '32px' }}
				/>
				<div className='flex flex-col items-start'>
					<h2 className='uppercase font-medium text-xl text-dark'>
						{event.name}
					</h2>
					<span className='text-sm font-light'>{event.displayDate}</span>
				</div>
			</div>
			<div className='flex flex-row items-center'>
				<FontAwesomeIcon
					icon={faPencil}
					className='p-2 cursor-pointer'
					style={{ fontSize: '18px' }}
				/>
				<FontAwesomeIcon
					icon={faTrash}
					className='p-2 cursor-pointer'
					style={{ fontSize: '18px' }}
					onClick={_ => removeEvent(event.id)}
				/>
			</div>
		</div>
	);
}

export default Event;
