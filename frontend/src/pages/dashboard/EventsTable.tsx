import React, { useState } from 'react';
import ReusableTable from '../../components/TableColumn';
type Event = {
  title: string;
  description: string;
  date: string;
  poster: string;
};

const EventsTable: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState<Event>({
    title: '',
    description: '',
    date: '',
    poster: '',
  });

  const columns = [
    { label: 'Event Title', accessor: 'title' },
    { label: 'Description', accessor: 'description' },
    { label: 'Date', accessor: 'date' },
    { label: 'Poster', accessor: 'poster' },
  ];

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setIsModalOpen(false);
    setNewEvent({ title: '', description: '', date: '', poster: '' });
  };

  const renderActions = () => (
    <div>
      <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
      <button className="ml-4 font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
    </div>
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* Add Event Button */}
      <button
        className="p-2 mb-4 text-white bg-blue-600 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Add Event
      </button>

      {/* Events Table */}
      <ReusableTable
        columns={columns}
        data={events.map((event) => ({
          title: event.title,
          description: event.description,
          date: event.date,
          poster: event.poster,
        }))}
        renderActions={renderActions}
      />

      {/* Modal for Adding Event */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="p-6 bg-white rounded shadow-lg w-96">
            <h2 className="mb-4 text-lg font-bold">Add Event</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Event Title</label>
                <input
                  type="text"
                  name="title"
                  value={newEvent.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={newEvent.description}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Event Date</label>
                <input
                  type="date"
                  name="date"
                  value={newEvent.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Event Poster URL</label>
                <input
                  type="text"
                  name="poster"
                  value={newEvent.poster}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-800 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddEvent}
                  className="px-4 py-2 text-white bg-blue-600 rounded"
                >
                  Add Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsTable;
