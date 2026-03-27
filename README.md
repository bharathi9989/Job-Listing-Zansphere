Job Board Application

This is a full-stack Job Board application that allows users to browse, search, and filter job listings efficiently. 
The focus of this project is on clean architecture, performance optimization, and usability.

⚙️ Setup Instructions

🔹 Frontend
    npm install
    npm run dev

🔹 Backend
    cd job-board-server
    npm install
    npm run dev

Frontend runs on: http://localhost:5173
Backend runs on: http://localhost:2021


🚀 Features

🔍 Search (Debounced)
	•	Implemented search by job title
	•	Used a custom useDebounce hook (500ms delay)
	•	Prevents unnecessary API calls during typing

⸻

🎯 Filtering

Users can filter jobs based on:
	•	Role (Frontend, Backend, Fullstack)
	•	Job Type (Remote / Onsite)
	•	Salary range

Filtering is handled on the backend for scalability.

⸻

📄 Pagination
	•	Implemented client-side pagination
	•	Displays 5 jobs per page
	•	Includes Previous / Next navigation

⸻

⚡ Performance Optimization
	•	Debouncing reduces API calls while typing
	•	Backend filtering improves scalability
	•	Avoided storing derived state to prevent inconsistencies
	•	Efficient state updates using React hooks

⸻

🎨 UI & Styling
	•	Built using custom CSS (no UI libraries used)
	•	Clean, centered layout with card-based design
	•	Focused on readability and usability

⸻

🧠 Technical Decisions
	•	Used React functional components with hooks
	•	Separated logic into reusable components
	•	Maintained clean folder structure
	•	Used REST API for data handling

⸻

🔮 Future Improvements

If given more time, I would:
	•	Add loading skeleton UI for better UX
	•	Implement server-side pagination
	•	Add sorting options in UI (more advanced controls)
	•	Introduce error handling UI for API failures
	•	Add authentication and saved jobs feature

⸻

📦 Tech Stack
	•	Frontend: React (Vite)
	•	Backend: Node.js, Express
	•	Styling: Custom CSS
	•	API: REST

⸻

✅ Conclusion

This project demonstrates strong fundamentals in frontend development, API integration, performance optimization, and clean architecture.
:::


    
