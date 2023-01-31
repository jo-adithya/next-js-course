import { DUMMY_EVENTS } from '@data/events/dummyEvents';

export const getFeaturedEvents = () => {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
};

export const getAllEvents = () => {
  return DUMMY_EVENTS;
};

export const getFilteredEvents = ({ year, month }: {
  year: number;
  month: number;
}) => {
  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};

export const getEventById = (id: string) => {
  return DUMMY_EVENTS.find((event) => event.id === id);
};
