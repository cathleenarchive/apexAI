import React from 'react';

export default function StudentDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold">Upcoming Deadlines</h2>
        <ul className="list-disc pl-6">
          <li>SAT Registration - Aug 10</li>
          <li>Common App Due - Nov 1</li>
        </ul>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold">Profile Snapshot</h2>
        <p>GPA: 3.85</p>
        <p>SAT: 1450</p>
        <p>Extracurriculars: 4 activities</p>
      </div>
    </div>
  );
}