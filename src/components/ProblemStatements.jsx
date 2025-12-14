import React, { useState } from 'react'
import './ProblemStatements.css'

const ProblemStatements = () => {
  const [selectedProblem, setSelectedProblem] = useState(null)

  const problems = [
    {
      id: 1,
      title: "Smart Campus Management System",
      category: "IoT & Automation",
      description: "Design a comprehensive system to manage campus resources, student attendance, and facility booking using IoT sensors and mobile applications.",
      requirements: [
        "Real-time attendance tracking using RFID/NFC",
        "Smart classroom booking system",
        "Energy management for campus buildings",
        "Mobile app for students and faculty",
        "Dashboard for administrators"
      ]
    },
    {
      id: 2,
      title: "AI-Powered Healthcare Assistant",
      category: "AI/ML & Healthcare",
      description: "Create an intelligent healthcare assistant that can analyze symptoms, provide preliminary diagnosis, and connect patients with appropriate medical professionals.",
      requirements: [
        "Symptom analysis using NLP",
        "Medical image analysis (X-rays, MRI)",
        "Doctor-patient matching system",
        "Appointment scheduling",
        "Emergency alert system"
      ]
    },
    {
      id: 3,
      title: "Sustainable Finance Tracker",
      category: "FinTech & Sustainability",
      description: "Build a platform that helps users track their carbon footprint through spending habits and suggests sustainable alternatives.",
      requirements: [
        "Expense categorization and analysis",
        "Carbon footprint calculation",
        "Sustainable product recommendations",
        "Community challenges and rewards",
        "Integration with banking APIs"
      ]
    },
    {
      id: 4,
      title: "Blockchain-Based Supply Chain",
      category: "Blockchain & Logistics",
      description: "Develop a transparent supply chain management system using blockchain technology to track products from manufacturer to consumer.",
      requirements: [
        "Product traceability using blockchain",
        "QR code scanning for verification",
        "Smart contracts for automated payments",
        "Multi-stakeholder dashboard",
        "Anti-counterfeiting measures"
      ]
    },
    {
      id: 5,
      title: "AR/VR Learning Platform",
      category: "EdTech & Immersive Tech",
      description: "Create an immersive learning platform using AR/VR technologies for interactive education in science, history, and technical subjects.",
      requirements: [
        "3D interactive learning modules",
        "AR object recognition and overlay",
        "VR classroom environments",
        "Progress tracking and analytics",
        "Multi-platform compatibility"
      ]
    },
    {
      id: 6,
      title: "Social Impact Crowdfunding",
      category: "Social Good & Web3",
      description: "Build a decentralized crowdfunding platform focused on social impact projects with transparent fund allocation and impact tracking.",
      requirements: [
        "Project proposal and verification system",
        "Cryptocurrency payment integration",
        "Impact measurement dashboard",
        "Community voting mechanism",
        "Milestone-based fund release"
      ]
    }
  ]



  return (
    <div className="problems-container">
      <div className="problems-header">
        <h2>Problem Statements</h2>
        <p>Choose your challenge and build the future</p>
      </div>

      <div className="problems-grid">
        {problems.map((problem) => (
          <div
            key={problem.id}
            className="problem-card"
            onClick={() => setSelectedProblem(problem)}
          >
            <div className="problem-header">
              <h3>{problem.title}</h3>
            </div>
            <div className="problem-category">{problem.category}</div>
            <p className="problem-description">{problem.description}</p>
          </div>
        ))}
      </div>

      {selectedProblem && (
        <div className="modal-overlay" onClick={() => setSelectedProblem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProblem(null)}>×</button>
            <h2>{selectedProblem.title}</h2>
            <div className="modal-header">
              <span className="category">{selectedProblem.category}</span>
            </div>

            <div className="modal-section">
              <h3>Description</h3>
              <p>{selectedProblem.description}</p>
            </div>

            <div className="modal-section">
              <h3>Requirements</h3>
              <ul>
                {selectedProblem.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProblemStatements