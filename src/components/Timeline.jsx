import React from 'react'
import './Timeline.css'

const Timeline = () => {
  const timelineEvents = [
    {
      date: "December 15, 2025",
      time: "10:00 AM",
      title: "Registration Opens",
      description: "Team registration and problem statement release"
    },
    {
      date: "December 20, 2025",
      time: "6:00 PM",
      title: "Registration Closes",
      description: "Last chance to register your team"
    },
    {
      date: "December 22, 2025",
      time: "9:00 AM",
      title: "Hackathon Begins",
      description: "Opening ceremony and coding starts"
    },
    {
      date: "December 22, 2025",
      time: "12:00 PM",
      title: "Lunch Break",
      description: "Networking and refreshments"
    },
    {
      date: "December 22, 2025",
      time: "6:00 PM",
      title: "Mid-Point Check",
      description: "Progress review and mentor sessions"
    },
    {
      date: "December 23, 2025",
      time: "2:00 AM",
      title: "Midnight Snacks",
      description: "Fuel up for the final stretch"
    },
    {
      date: "December 23, 2025",
      time: "9:00 AM",
      title: "Final Submissions",
      description: "Code freeze and project submissions"
    },
    {
      date: "December 23, 2025",
      time: "11:00 AM",
      title: "Presentations",
      description: "Team presentations and judging"
    },
    {
      date: "December 23, 2025",
      time: "4:00 PM",
      title: "Awards Ceremony",
      description: "Winner announcements and closing"
    }
  ]

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h2>Praytna 3.0 Timeline</h2>
        <p>Your journey to innovation starts here</p>
      </div>
      
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <div className="timeline-date">
                <span className="date">{event.date}</span>
                <span className="time">{event.time}</span>
              </div>
              <div className="timeline-info">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline