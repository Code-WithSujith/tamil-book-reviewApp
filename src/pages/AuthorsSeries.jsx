import React, { useState } from 'react';
import { FaBook, FaGlobeAsia, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export function AuthorsSeries() {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 7;
  const itemsPerPage = 10;

  const seriesData = [
    {
      series: "Brush of Time",
      writer: "Maruthan",
      magazine: "Hindu Tamil direction",
      beginning: "15/09/2025",
      conclusion: "---",
      week: "Monday"
    },
    {
      series: "History is important, people.",
      writer: "Cloud",
      magazine: "Hindu Tamil direction",
      beginning: "04/06/2025",
      conclusion: "---",
      week: "Wednesday"
    },
    {
      series: "Novel Readers",
      writer: "Ramakrishnan",
      magazine: "Hindu Tamil direction",
      beginning: "06/04/2025",
      conclusion: "---",
      week: "Sunday"
    },
    {
      series: "Sandstone",
      writer: "Brinda Sarathi",
      magazine: "Kumutam",
      beginning: "26/03/2025",
      conclusion: "---",
      week: ""
    },
    {
      series: "Milky Way",
      writer: "Calabria",
      magazine: "Hindu Tamil direction",
      beginning: "21/11/2024",
      conclusion: "---",
      week: ""
    },
    {
      series: "Adi Vasam",
      writer: "Vasanthakumaran",
      magazine: "Kumutam",
      beginning: "23/10/2024",
      conclusion: "---",
      week: ""
    },
    {
      series: "Talking Raindrop",
      writer: "Damayanti",
      magazine: "Hindu Tamil direction",
      beginning: "22/09/2024",
      conclusion: "---",
      week: "Sunday"
    },
    {
      series: "Daily and Social Life",
      writer: "Rajan's fault",
      magazine: "Hindu Tamil direction",
      beginning: "16/09/2024",
      conclusion: "12-09-2025",
      week: "Monday"
    },
    {
      series: "All the screens are red",
      writer: "Deepa",
      magazine: "Ananda Vikatan",
      beginning: "17/07/2024",
      conclusion: "---",
      week: ""
    },
    {
      series: "Cow words that spread in milk",
      writer: "Mud horse",
      magazine: "Hindu Tamil direction",
      beginning: "28/04/2024",
      conclusion: "---",
      week: "Sunday"
    }
  ];

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageClick(i)}>
            {i}
          </button>
        </li>
      );
    }
    return pages;
  };

  return (
    <div className="container py-4" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="card shadow-lg border-0 rounded-3">
        <div className="card-header bg-gradient text-white py-4" style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}>
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <h2 className="mb-0 fw-bold text-dark">
              <FaBook className="me-3" />
              Writers' Series
            </h2>
            <div className="d-flex align-items-center gap-3 mt-3 mt-md-0">
              <span className="badge bg-light text-dark px-3 py-2">
                <FaGlobeAsia className="me-2" />
                Serpentsoft
              </span>
              <span className="badge bg-light text-dark px-3 py-2">
                <FaClock className="me-2" />
                08/11/2025 04:03:42
              </span>
            </div>
          </div>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0" style={{ minWidth: '900px' }}>
              <thead style={{ backgroundColor: '#f8f9fa' }}>
                <tr>
                  <th className="py-3 px-4 fw-bold text-uppercase" style={{ color: '#e63946', fontSize: '0.85rem' }}>Series Name</th>
                  <th className="py-3 px-4 fw-bold text-uppercase" style={{ color: '#e63946', fontSize: '0.85rem' }}>Writer</th>
                  <th className="py-3 px-4 fw-bold text-uppercase" style={{ color: '#e63946', fontSize: '0.85rem' }}>Magazine</th>
                  <th className="py-3 px-4 fw-bold text-uppercase" style={{ color: '#e63946', fontSize: '0.85rem' }}>Beginning</th>
                  <th className="py-3 px-4 fw-bold text-uppercase" style={{ color: '#e63946', fontSize: '0.85rem' }}>Conclusion</th>
                  <th className="py-3 px-4 fw-bold text-uppercase" style={{ color: '#e63946', fontSize: '0.85rem' }}>Week</th>
                </tr>
              </thead>
              <tbody>
                {seriesData.map((item, index) => (
                  <tr key={index} style={{ 
                    borderLeft: '4px solid transparent',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderLeftColor = '#e63946';
                    e.currentTarget.style.backgroundColor = '#f8f9ff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderLeftColor = 'transparent';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}>
                    <td className="py-3 px-4">
                      <span className="fw-semibold" style={{ color: '#2d3748' }}>
                        {item.series}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span style={{ color: '#4a5568' }}>{item.writer}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="badge" style={{ 
                        backgroundColor: '#e6f0ff',
                        color: '#667eea',
                        fontWeight: '500'
                      }}>
                        {item.magazine}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span style={{ color: '#4a5568' }}>{item.beginning}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span style={{ color: '#718096' }}>{item.conclusion}</span>
                    </td>
                    <td className="py-3 px-4">
                      {item.week && (
                        <span className="badge bg-success px-3 py-2">
                          {item.week}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card-footer bg-white border-top py-3">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div className="text-muted">
              Page {currentPage} of {totalPages}
            </div>
            <nav>
              <ul className="pagination mb-0">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => handlePageClick(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <FaChevronLeft />
                  </button>
                </li>
                {renderPagination()}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => handlePageClick(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <FaChevronRight />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <style>{`
        .table-hover tbody tr:hover {
          cursor: pointer;
        }
        
        .page-link {
          border-radius: 0.25rem;
          margin: 0 0.125rem;
          color: #e63946;
          border: 1px solid #dee2e6;
        }
        
        .page-link:hover {
          background-color: #e63946;
          color: white;
          border-color: #e63946;
        }
        
        .page-item.active .page-link {
          background-color: #e63946;
          border-color: #e63946;
        }
        
        .badge {
          font-weight: 500;
          letter-spacing: 0.3px;
        }
        
        .card {
          overflow: hidden;
        }
        
        @media (max-width: 768px) {
          .card-header h2 {
            font-size: 1.5rem;
          }
          
          .table {
            font-size: 0.875rem;
          }
        }
      `}</style>
      
    </div>
  );
}