/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "../Vulnerabilities/Vulnerabilities.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
const vulnerabilitiesData = [
  {
    id: 1,
    severity: 'High',
    vulnerability: 'Directory listing',
    url: 'http://vulnweb.com/table-images/',
    parameter: '',
    status: 'Open',
  },
  {
    id: 2,
    severity: 'High',
    vulnerability: 'Directory listing',
    url: 'http://vulnweb.com/table-images/',
    parameter: '',
    status: 'Open',
  },
  {
    id: 3,
    severity: 'Medium',
    vulnerability: 'Clickjacking: X-Frame-Options header missing',
    url: 'http://vulnweb.com/',
    parameter: '',
    status: 'Open',
  },
  {
    id: 4,
    severity: 'Low',
    vulnerability: 'Clickjacking: X-Frame-Options header missing',
    url: 'http://vulnweb.com/',
    parameter: '',
    status: 'Open',
  },
  {
    id: 5,
    severity: 'Critical',
    vulnerability: 'SQL Injection',
    url: 'http://vulnweb.com/products.php?id=10',
    parameter: '',
    status: 'Open',
  },
  {
    id: 6,
    severity: 'High',
    vulnerability: 'Cross-Site Scripting (XSS)',
    url: 'http://vulnweb.com/search.php',
    parameter: '',
    status: 'Open',
  },
  {
    id: 7,
    severity: 'Medium',
    vulnerability: 'Insecure Cookie Settings',
    url: 'http://vulnweb.com/',
    parameter: '',
    status: 'Open',
  },
  {
    id: 8,
    severity: 'Low',
    vulnerability: 'Information Disclosure',
    url: 'http://vulnweb.com/info.php',
    parameter: '',
    status: 'Fixed',
  },
  {
    id: 9,
    severity: 'High',
    vulnerability: 'Command Injection',
    url: 'http://vulnweb.com/admin.php',
    parameter: '',
    status: 'Open',
  },
  {
    id: 10,
    severity: 'Medium',
    vulnerability: 'File Upload Vulnerability',
    url: 'http://vulnweb.com/upload.php',
    parameter: '',
    status: 'Open',
  },
  {
    id: 11,
    severity: 'Low',
    vulnerability: 'Unencrypted Passwords',
    url: 'http://vulnweb.com/login.php',
    parameter: '',
    status: 'Open',
  },
  {
    id: 12,
    severity: 'Critical',
    vulnerability: 'Remote Code Execution (RCE)',
    url: 'http://vulnweb.com/api.php',
    parameter: '',
    status: 'Open',
  },
  {
    id: 13,
    severity: 'High',
    vulnerability: 'Cross-Site Request Forgery (CSRF)',
    url: 'http://vulnweb.com/settings.php',
    parameter: '',
    status: 'Open',
  },
  {
    id: 14,
    severity: 'Medium',
    vulnerability: 'Weak Password Policy',
    url: 'http://vulnweb.com/register.php',
    parameter: '',
    status: 'Open',
  }
  
  // Other vulnerabilities can be added here...
];

 // Sort order based on severity level
 const severityOrder = {
  Critical: 1,
  High: 2,
  Medium: 3,
  Low: 4,
};

// Sort vulnerabilitiesData array based on severity order
const sortedVulnerabilities = [...vulnerabilitiesData].sort((a, b) => {
  return severityOrder[a.severity] - severityOrder[b.severity];
});

const Vulnerabilities = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedVulnerabilities, setSelectedVulnerabilities] = useState([]);
  const [markAs, setMarkAs] = useState('');
  const [wafExport, setWafExport] = useState('');
  const [groupBy, setGroupBy] = useState('');
  const [reportType, setReportType] = useState('');
  const [showReportPopup, setShowReportPopup] = useState(false);

  // Function to determine the icon based on severity level
  const renderSeverityIcon = (severity) => {
    switch (severity) {
      case 'Critical':
        return <i className="fas fa-skull-crossbones" style={{ color: 'darkred' }}></i>; // Skull icon for Critical
      case 'High':  
        return <i className="fas fa-exclamation-triangle" style={{ color: 'red' }}></i>; // Danger icon for High
      case 'Medium':
        return <i className="fas fa-exclamation-circle" style={{ color: 'orange' }}></i>; // Warning icon for Medium
      case 'Low':
        return <i className="fas fa-info-circle" style={{ color: 'blue' }}></i>; // Info icon for Low/Weak
      default:
        return null;
    }
  };

  // Handle checkbox change
  const handleCheckboxChange = (id) => {
    setSelectedVulnerabilities((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((vulnId) => vulnId !== id)
        : [...prevSelected, id]
    );
  };

  const handleGenerateReportClick = () => {
    if (selectedVulnerabilities.length > 0) {
      setShowReportPopup(true);
    }
  };

  // Close the report confirmation popup
  const handleCloseReportPopup = () => {
    setShowReportPopup(false);
    console.log("Generate succussfully");
    
  };

  // Function to handle the retest button click
  const handleRetestClick = () => {
    if (selectedVulnerabilities.length > 0) {
      setShowPopup(true); // Show the popup when Retest is clicked and vulnerabilities are selected
    }
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Handle dropdown changes
  const handleMarkAsChange = (value) => {
    setMarkAs(value);
    // Handle Mark As logic here (e.g., update selected vulnerabilities)
  };

  const handleWAFExportChange = (value) => {
    setWafExport(value);
    // Handle WAF Export logic here
  };

  const handleGroupByChange = (value) => {
    setGroupBy(value);
    // Handle Group By logic here
  };

  return (
    <div className='vulnerabilities'>

      {/* Page Header */}
      <div className='vulnerabilities-header'>
        <div className='vulnerabilities-actions'>
        <button
            className={`btn btn-report ${selectedVulnerabilities.length === 0 ? 'disabled' : ''}`}
            disabled={selectedVulnerabilities.length === 0}
            title={selectedVulnerabilities.length === 0 ? "Please choose a vulnerability" : ""}
          >
            Send To Issue Tracker
          </button>
          

          <select className={`btn btn-add ${selectedVulnerabilities.length === 0 ? 'disabled' : ''}`}
                disabled={selectedVulnerabilities.length === 0}
                title={selectedVulnerabilities.length === 0 ? "Please choose a vulnerability" : ""}
                onChange={(e) => handleWAFExportChange(e.target.value)}
                defaultValue="">
                <option value="" disabled>WAF Export</option>
                <option value="F5 BIG-IP ASM">F5 BIG-IP ASM</option>
                <option value="Fortinet FortiWeb">Fortinet FortiWeb</option>
                <option value="Imperva SecureSphere WAF">Imperva SecureSphere WAF</option>
            </select>

          <select className={`btn btn-delete ${selectedVulnerabilities.length === 0 ? 'disabled' : ''}`}
            disabled={selectedVulnerabilities.length === 0}
            title={selectedVulnerabilities.length === 0 ? "Please choose a vulnerability" : ""}
            onChange={(e) => handleMarkAsChange(e.target.value)}
            defaultValue="">
            <option value="" disabled>Mark As</option>
            <option value="Open">Open</option>
            <option value="Fixed">Fixed</option>
            <option value="Ignored">Ignored</option>
            <option value="False Positive">False Positive</option>
          </select>
          <button
            className={`btn btn-group ${selectedVulnerabilities.length === 0 ? 'disabled' : ''}`}
            onClick={handleRetestClick}
            disabled={selectedVulnerabilities.length === 0}
            title={selectedVulnerabilities.length === 0 ? "Please choose a vulnerability" : ""}
          >
            Retest
          </button>
          <button
            className={`btn btn-scan ${selectedVulnerabilities.length === 0 ? 'disabled' : ''}`}
            disabled={selectedVulnerabilities.length === 0}
            onClick={handleGenerateReportClick}
            title={selectedVulnerabilities.length === 0 ? "Please choose a vulnerability" : ""}
          >
           <i className="fas fa-file-alt"></i> Generate Report
          </button>
          <select className={`btn btn-import`}
            onChange={(e) => handleGroupByChange(e.target.value)}
            defaultValue="">
            <option value="" disabled>Group By</option>
            <option value="None">None</option>
            <option value="Criticality">Criticality</option>
            <option value="Vulnerability Type">Vulnerability Type</option>
          </select>
        </div>
      </div>

      {/* Table */}

      <div className='table-container'>
        <table className='vulnerabilities-table'>
          <thead>
            <tr>
              <th>Select</th>
              <th>Severity</th>
              <th>Vulnerability</th>
              <th>URL</th>
              <th>Parameter</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sortedVulnerabilities.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                   className='checkbox'
                    type="checkbox"
                    checked={selectedVulnerabilities.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
                <td className={`severity ${item.severity.toLowerCase()}`}>
                  {renderSeverityIcon(item.severity)} {item.severity}
                </td>
                <td>{item.vulnerability}</td>
                <td><a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a></td>
                <td className='parameter'>{item.parameter || '-'}</td>
                <td className={`status ${item.status.toLowerCase()}`}>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Popup for Retesting */}
      {showPopup && (
        <div className='popup-overlay'>
          <div className='popup'>
            <h2>Retest Vulnerabilities</h2>
            <p>Do you want to retest the selected vulnerabilities?</p>
            <button className='btn btn-yes' onClick={handleClosePopup}>Yes</button>
            <button className='btn btn-no' onClick={handleClosePopup}>No</button>
          </div>
        </div>
      )}

      {/* Popup for Report Generation */}
      {showReportPopup && (
        <div className='popup-overlay'>
          <div className='generate-report-popup'>
            <h2>Generate Report</h2>
            <p>Select the report type:</p>
            <select
              className='popup-dropdown'
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option value="" disabled>Standard Reports</option>
              <option value="Developer">Developer</option>
              <option value="Executive Summary">Executive Summary</option>
              <option value="Compliance Reports">Compliance Reports</option>
              <option value="Quick">Quick</option>
              <option value="Affected Items" disabled>Compliance Reports</option>
              <option value="CWE 2011">CWE 2011</option>
              <option value="HIPAA">HIPAA</option>
              <option value="ISO 27001">ISO 27001</option>
              <option value="NIST SP800 53">NIST SP800 53</option>
              <option value="OWASP Top 10 2013">OWASP Top 10 2013</option>
              <option value="OWASP Top 10 2017">OWASP Top 10 2017</option>
              <option value="PCI DSS 3.2">PCI DSS 3.2</option>
              <option value="Sarbanes Oxley">Sarbanes Oxley</option>
              <option value="STIG DISA">STIG DISA</option>
              <option value="WASC Threat Classification">WASC Threat Classification</option>

            </select>
            <div className='popup-buttons'>
              <button className='btn-cancel' onClick={handleCloseReportPopup}>Cancel</button>
              <button className='btn-generate' onClick={handleCloseReportPopup}>Generate</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Vulnerabilities;
