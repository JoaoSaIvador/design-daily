import { createContext, ReactNode, useEffect, useState } from 'react';
import moment from 'moment';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type CurrentDate = {
	day: number;
	month: number;
	year: number;
};

type Event = {
	id: number;
	name: string;
	displayDate: string;
	icon: IconDefinition;
	day: number;
	month: number;
	year: number;
};

type State = {
	currentDate: [
		CurrentDate,
		(setValueFunction: (value: CurrentDate) => CurrentDate) => void
	];
	events: [Event[], (setValueFunction: (value: Event[]) => Event[]) => void];
};

type DateContextProps = {
	children: ReactNode;
};

export const DateContext = createContext({} as State);

export function DateProvider({ children }: DateContextProps) {
	const [currentDate, setCurrentDate] = useState<CurrentDate>({
		day: moment().day(),
		month: moment().month(),
		year: moment().year(),
	});
	const [events, setEvents] = useState<Event[]>([]);

	const state: State = {
		currentDate: [currentDate, setCurrentDate],
		events: [events, setEvents],
	};

	return <DateContext.Provider value={state}>{children}</DateContext.Provider>;
}
