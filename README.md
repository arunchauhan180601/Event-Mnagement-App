Frontend:
Built with ReactJS for a dynamic and responsive user interface.
Pages for browsing, creating, updating, and deleting events.
User authentication system integrated into the frontend.
Filtering options for searching events based on various criteria (e.g., date, location, type).


Backend:
Developed using NodeJS to handle API requests and manage event data.
Routes to create, read, update, and delete events, with JWT-protected endpoints.


Database:
MongoDB as the primary database for storing event data.
Each event contains details like title, description, date, time, location, and tags (e.g., conference, workshop).

Authentication:
JWT authentication implemented to secure routes.
Logged-in users can create and manage their own events, while admin users may have broader access (e.g., managing all events).

Filtering:
Event filtering by different parameters such as date, location, and type.
Ensures a user-friendly experience for event discovery.

UI Features:
Event details page with all relevant information.
Event editing and deletion available for users with appropriate permissions.
Responsive design to support different devices.

Notifications:
Frontend notifications (possibly with tools like React Toastify) to inform users about successful or failed actions (e.g., event created, login error, etc.).
