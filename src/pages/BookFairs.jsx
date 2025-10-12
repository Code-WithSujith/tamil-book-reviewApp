import React, { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUser, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export function BookFairs  () {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const bookFairs = [
    {
      id: 1,
      title: "New Delhi Book Fair - 2025",
      startDate: "05/09/2025",
      endDate: "15/09/2025",
      location: "Pragati Maidan, New Delhi",
      organizer: "India Trade Promotion Organisation"
    },
    {
      id: 2,
      title: "Chennai Book Fair - World Book Day 2025",
      startDate: "08/08/2025",
      endDate: "17/08/2025",
      location: "YMCA Ground, Chennai",
      organizer: "Booksellers and Publishers Association"
    },
    {
      id: 3,
      title: "Mumbai International Book Fair - 2025",
      startDate: "01/08/2025",
      endDate: "10/08/2025",
      location: "Nehru Centre, Mumbai",
      organizer: "Maharashtra State Board"
    },
    {
      id: 4,
      title: "4th National Youth Literature Book Fair - 2025",
      startDate: "01/08/2025",
      endDate: "11/07/2025",
      location: "India Habitat Centre, Delhi",
      organizer: "Youth Literature Foundation"
    },
    {
      id: 5,
      title: "2025 - Kolkata Book Fair",
      startDate: "18/07/2025",
      endDate: "27/07/2025",
      location: "Milan Mela, Kolkata",
      organizer: "Publishers & Booksellers Guild"
    },
    {
      id: 6,
      title: "24th Bengaluru Book Fair - 2025",
      startDate: "04/07/2025",
      endDate: "14/07/2025",
      location: "Palace Grounds, Bengaluru",
      organizer: "Karnataka Book Authority"
    },
    {
      id: 7,
      title: "Hyderabad Book Fair 2025",
      startDate: "22/03/2025",
      endDate: "31/03/2025",
      location: "NTR Stadium, Hyderabad",
      organizer: "Telangana Publishers Association"
    },
    {
      id: 8,
      title: "Thiruvananthapuram Book Fair - 2025",
      startDate: "24/02/2025",
      endDate: "14/02/2025",
      location: "Trivandrum Public Library Grounds",
      organizer: "Kerala State Book Authority"
    },
    {
      id: 9,
      title: "Ahmedabad Book Fair",
      startDate: "14/02/2025",
      endDate: "23/02/2025",
      location: "Gujarat University Campus",
      organizer: "Gujarat Book Publishers"
    },
    {
      id: 10,
      title: "Pune Literature Book Fair 2025",
      startDate: "09/02/2025",
      endDate: "31/01/2025",
      location: "Fergusson College Ground, Pune",
      organizer: "Maharashtra Literary Society"
    }
  ];

  const totalPages = Math.ceil(bookFairs.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bookFairs.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`btn ${currentPage === i ? 'btn-danger' : 'btn-outline-danger'} mx-1`}
          style={{ minWidth: '45px' }}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <>
      
      <style>{`
        .hero-banner {
          position: relative;
          height: 400px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          overflow: hidden;
        }
        
        .hero-banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=400&fit=crop') center/cover;
          opacity: 0.3;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          color: white;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          animation: fadeInUp 0.8s ease;
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
          font-weight: 300;
          animation: fadeInUp 1s ease;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .info-header {
          background: linear-gradient(90deg, #bc0808ec 0%, #da5b0dff 100%);
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          padding: 1rem;
          border-radius: 8px 8px 0 0;
        }
        
        .fair-card {
          transition: all 0.3s ease;
          border-left: 4px solid transparent;
          cursor: pointer;
        }
        
        .fair-card:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 20px rgba(0,0,0,0.15);
          border-left-color: #ffc107;
          background: #fffef7;
        }
        
        .fair-title {
          color: #1a5490;
          font-weight: 700;
          font-size: 1.2rem;
          transition: color 0.3s ease;
        }
        
        .fair-card:hover .fair-title {
          color: #ff6b35;
        }
        
        .date-badge {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .end-date-badge {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .meta-info {
          color: #6c757d;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        
        .page-info {
          background: #f8f9fa;
          padding: 1rem;
          border-radius: 8px;
          color: #495057;
          font-weight: 600;
        }
        
        .section-header {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          padding: 1.5rem;
          margin-top: 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .stats-card {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .stats-card:hover {
          transform: translateY(-5px);
        }
        
        .stats-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #667eea;
        }
        
        .stats-label {
          color: #6c757d;
          font-size: 0.9rem;
          font-weight: 600;
          margin-top: 0.5rem;
        }
      `}</style>

      <div className="min-vh-100" style={{ background: 'linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%)' }}>
        {/* Hero Banner */}
        <div className="hero-banner d-flex align-items-center justify-content-center">
          <div className="hero-content text-center px-4">
            <h1 className="hero-title">Book Fair Events</h1>
            <p className="hero-subtitle">Discover Amazing Literary Events Across India</p>
            <div className="mt-4">
              <FaCalendarAlt size={30} className="me-3" />
              <FaMapMarkerAlt size={30} className="me-3" />
              <FaClock size={30} />
            </div>
          </div>
        </div>

        <div className="container py-5">
          {/* Stats Section */}
          <div className="row mb-2">
            <div className="col-md-4 mb-3">
              <div className="stats-card">
                <div className="stats-number">{bookFairs.length}</div>
                <div className="stats-label">TOTAL EVENTS</div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="stats-card">
                <div className="stats-number">10+</div>
                <div className="stats-label">CITIES</div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="stats-card">
                <div className="stats-number">2025</div>
                <div className="stats-label">UPCOMING YEAR</div>
              </div>
            </div>
          </div>

          {/* Section Header */}
          <div className="section-header mb-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div>
                <h2 className="mb-2" style={{ fontSize: '2rem', fontWeight: '700' }}>
                  <FaCalendarAlt className="me-3" />
                  Book Fair Schedule
                </h2>
                <p className="mb-0 opacity-75">
                  <FaUser className="me-2" />
                  Updated: 12 October 2025 | <FaEye className="me-2" />401 Views
                </p>
              </div>
              <div className="page-info mt-3 mt-md-0">
                Page {currentPage} of {totalPages}
              </div>
            </div>
          </div>

          {/* Table Header */}
          <div className="row info-header mb-0">
            <div className="col-md-5">Event Name</div>
            <div className="col-md-3 text-center">Start Date</div>
            <div className="col-md-3 text-center">End Date</div>
          </div>

          {/* Fair List */}
          <div className="bg-white shadow-sm" style={{ borderRadius: '0 0 10px 10px' }}>
            {currentItems.map((fair, index) => (
              <div 
                key={fair.id} 
                className={`fair-card p-4 ${index !== currentItems.length - 1 ? 'border-bottom' : ''}`}
              >
                <div className="row align-items-center">
                  <div className="col-md-5 mb-3 mb-md-0">
                    <h5 className="fair-title mb-2">{fair.title}</h5>
                    <div className="meta-info">
                      <FaMapMarkerAlt className="text-danger" />
                      <span>{fair.location}</span>
                    </div>
                    <div className="meta-info">
                      <FaUser className="text-primary" />
                      <span>{fair.organizer}</span>
                    </div>
                  </div>
                  <div className="col-md-3 text-center mb-3 mb-md-0">
                    <span className="date-badge">
                      <FaCalendarAlt />
                      {fair.startDate}
                    </span>
                  </div>
                  <div className="col-md-3 text-center">
                    <span className="end-date-badge">
                      <FaCalendarAlt />
                      {fair.endDate}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-center align-items-center mt-5 flex-wrap gap-2">
            <button
              onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
              disabled={currentPage === 1}
              className="btn btn-outline-danger"
              style={{ minWidth: '45px' }}
            >
              <FaChevronLeft />
            </button>
            
            {renderPaginationButtons()}
            
            <button
              onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
              disabled={currentPage === totalPages}
              className="btn btn-outline-danger"
              style={{ minWidth: '45px' }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
