import React from 'react';

export default function CounselorDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Counselor Dashboard</h1>
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold">Student Roster</h2>
        <ul className="list-disc pl-6">
          <li>Student A - Progress: 70%</li>
          <li>Student B - Progress: 40%</li>
          <li>Student C - Progress: 90%</li>
        </ul>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold">Meeting Scheduler</h2>
        <p className="text-gray-600">(Calendar integration to be added)</p>
      </div>
    </div>
  );
}
