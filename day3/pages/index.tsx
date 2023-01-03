import Calendar from '../components/calendar/Calendar';
import EventsSection from '../components/eventsSection/EventsSection';

export default function Home() {
	return (
		<div className="h-screen bg-[url('/sky.jpg')] bg-center bg-no-repeat bg-cover flex flex-row justify-center items-center">
			<Calendar />
			<EventsSection />
		</div>
	);
}
