import React from 'react';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import './Dashboard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


// Register necessary elements for Chart.js
Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const Dashboard = ({ isSidebarOpen }) => {
  // Data for the Doughnut chart
  const doughnutData = {
    labels: ['Critical', 'High', 'Medium', 'Low', 'Info'],
    datasets: [{
      data: [5, 11, 18, 14, 7],  // Updated to include Critical and Info
      backgroundColor: ['#ff0000', '#ff5722', '#ffce56', '#36a2eb', '#009688'], // Added red for Critical, blue for Info
      hoverBackgroundColor: ['#ff0000', '#ff5722', '#ffce56', '#36a2eb', '#009688']
    }]
  };

  // Data for the Line chart
  // Data for the Line chart
const lineData = {
  labels: ['08/2016', '12/2017', '01/2018', '06/2018', '10/2018', '12/2018'],
  datasets: [
    {
      label: 'Critical',
      data: [1, 2, 3, 1, 5, 6],  // New dataset for Critical
      fill: false,
      borderColor: '#ff0000',  // Red for Critical
      tension: 0.1
    },
    {
      label: 'High',
      data: [5, 4, 3, 6, 10, 12],
      fill: false,
      borderColor: '#ff5722',  // Saturated Orange for High
      tension: 0.1
    },
    {
      label: 'Medium',
      data: [6, 5, 4, 3, 6, 9],
      fill: false,
      borderColor: '#ffce56',  // Saturated Yellow for Medium
      tension: 0.1
    },
    {
      label: 'Low',
      data: [2, 3, 1, 2, 5, 7],
      fill: false,
      borderColor: '#36a2eb',  // Saturated Green for Low
      tension: 0.1
    },
    {
      label: 'Info',
      data: [3, 2, 2, 4, 6, 8],  // New dataset for Info
      fill: false,
      borderColor: '#009688',  // Saturated Blue for Info
      tension: 0.1
    }
  ]
};


  // Data for the Bar chart
  const barData = {
    labels: ['Critical', 'High', 'Medium', 'Low', 'Info'],
    datasets: [{
      label: 'Days',
      data: [600, 500, 450, 300, 100],  // Updated data for Critical and Info
      backgroundColor: ['#ff0000', '#ff5722', '#ffce56', '#36a2eb', '#009688'], // Red for Critical, Blue for Info
      hoverBackgroundColor: ['#ff0000', '#ff5722', '#ffce56', '#36a2eb', '#009688']
    }]
  };

  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  };

  return (
<div className='dashboard'>
<div className={`dashboard-container ${isSidebarOpen ? 'dashboard-shrink' : 'dashboard-expand'}`}>
  <div className="top-cards">
    <div className="card doughnut-card">
      <Doughnut data={doughnutData} />
      <h3><i className="fas fa-exclamation-triangle"></i> High Severity Vulnerabilities</h3>
    </div>

    <div className="card-grid">
      <div className="card-item top-left users-card">
        <h3><i className="fas fa-users"></i> 4 Users</h3>
        <p>2 active in the last week</p>
      </div>
      
      <div className="card-item top-right websites-card">
        <h3><i className="fas fa-globe"></i> 20 Websites</h3>
        <p>3 Critical, 7 High</p>
      </div>
      
      <div className="card-item bottom-left scans-card">
        <h3><i className="fas fa-check-circle"></i> 12 Completed Scans</h3>
        <p>Average: 00:20:05</p>
      </div>
      
      <div className="card-item bottom-right vulnerabilities-card">
        <h3><i className="fas fa-bug"></i> 10 Active Vulnerabilities</h3>
        <p>4 High, 6 Medium</p>
      </div>
    </div>
  </div>

  <div className="charts-section">
    <div className="chart-card line-chart-card">
      <Line data={lineData} options={options} />
      <h3 className="open-vul-h3">Open Vulnerabilities</h3>
    </div>
    <div className="chart-card bar-chart-card">
      <Bar data={barData} options={options} />
      <h3 className="open-vul-h3">Average Time to Fix</h3>
    </div>
  </div>

  <div className="bottom-cards">
    <div className="card vulnerabilities-list-card">
      <h3><i className="fas fa-shield-alt"></i> Top Vulnerabilities</h3>
      <ul className="vulnerabilities-list">
        <li><i className="fas fa-code"></i> Cross-site scripting: <span>3</span></li>
        <li><i className="fas fa-exclamation-circle"></i> Source code disclosure: <span>6</span></li>
        <li><i className="fas fa-database"></i> Backup files: <span>4</span></li>
        <li><i className="fas fa-user-secret"></i> Blind SQL Injection: <span>1</span></li>
        <li><i className="fas fa-folder-open"></i> Directory listing: <span>12</span></li>
      </ul>
    </div>

    <div className="card recent-scans-card">
      <h3><i className="fas fa-search"></i> Recent Scans</h3>
      <ul className="recent-scans-list">
        <li><i className="fas fa-link"></i> <a href="http://testhtml5.vulnweb.com">testhtml5.vulnweb.com</a></li>
        <li><i className="fas fa-link"></i> <a href="http://testphp.vulnweb.com">testphp.vulnweb.com</a></li>
        <li><i className="fas fa-link"></i> <a href="http://testasp.vulnweb.com">testasp.vulnweb.com</a></li>
        <li><i className="fas fa-link"></i> <a href="http://testaspnet.vulnweb.com">testaspnet.vulnweb.com</a></li>
        <li><i className="fas fa-link"></i> <a href="http://test.vulnweb.com">test.vulnweb.com</a></li>
      </ul>
    </div>
  </div>
</div>
</div>

  );
};

export default Dashboard;