import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import KarkaThamizhaImage from "../assets/KarkaThamizhaImage.png";
import { Share2, Facebook, Twitter, Mail, Printer, FileText, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

const AuthorCard = ({ author, onMoreClick }) => {
  return (
    <div className="card mb-4 shadow-sm">
      {/* Header with Avatar and Info */}
      <div className="card-body border-bottom">
        <div className="d-flex align-items-start">
          <div className="me-4 flex-shrink-0">
            <div
              className="rounded d-flex align-items-center justify-content-center"
              style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #ec4899, #f68d5cff)'
              }}
            >
              <div
                className="bg-white rounded d-flex align-items-center justify-content-center"
                style={{ width: '64px', height: '64px' }}
              >
                <img
                  src={KarkaThamizhaImage}
                  alt="Karka Thamizha"
                  style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          <div className="flex-grow-1">
            <NavLink to="/AuthorReview" state={{ authorData: author }} className="fw-bold text-dark nav-title"><h5 className="card-title fw-bold mb-2">{author.name}</h5></NavLink>
            <p className="text-muted small mb-0" style={{ lineHeight: '1.5' }}>
              {author.description}
            </p>
          </div>

          <NavLink to="/AuthorReview" state={{ authorData: author }} className="btn btn-outline-danger btn-sm ms-3">
            More...
          </NavLink>
        </div>
      </div>

      {/* Social Share Buttons */}
      <div className="card-footer bg-light">
        <div className="d-flex justify-content-center gap-2 flex-wrap">
          <SocialButton icon={<Facebook size={16} />} platform="facebook" />
          <SocialButton icon={<Twitter size={16} />} platform="twitter" />
          <SocialButton icon={<Share2 size={16} />} platform="google" />
          <SocialButton icon={<FileText size={16} />} platform="pinterest" />
          <SocialButton icon={<Printer size={16} />} platform="print" />
          <SocialButton icon={<FileText size={16} />} platform="wordpress" />
          <SocialButton icon={<MoreHorizontal size={16} />} platform="more" />
          <SocialButton icon={<Mail size={16} />} platform="email" />
          <SocialButton icon={<Share2 size={16} />} platform="share" />
        </div>
      </div>
    </div>
  );
};

const SocialButton = ({ icon, platform }) => {
  const getButtonClass = (platform) => {
    const classes = {
      facebook: 'btn-outline-primary',
      twitter: 'btn-outline-info',
      google: 'btn-outline-danger',
      pinterest: 'btn-outline-danger',
      print: 'btn-outline-secondary',
      wordpress: 'btn-outline-primary',
      email: 'btn-outline-success',
      share: 'btn-outline-secondary',
      more: 'btn-outline-dark'
    };
    return classes[platform] || 'btn-outline-secondary';
  };

  const getHoverStyle = (platform) => {
    const colors = {
      facebook: { backgroundColor: '#1877f2', borderColor: '#1877f2' },
      twitter: { backgroundColor: '#1da1f2', borderColor: '#1da1f2' },
      google: { backgroundColor: '#dc3545', borderColor: '#dc3545' },
      pinterest: { backgroundColor: '#bd081c', borderColor: '#bd081c' },
      print: { backgroundColor: '#6c757d', borderColor: '#6c757d' },
      wordpress: { backgroundColor: '#21759b', borderColor: '#21759b' },
      email: { backgroundColor: '#198754', borderColor: '#198754' },
      share: { backgroundColor: '#6f42c1', borderColor: '#6f42c1' },
      more: { backgroundColor: '#212529', borderColor: '#212529' }
    };
    return colors[platform] || { backgroundColor: '#6c757d', borderColor: '#6c757d' };
  };

  return (
    <button
      className={`btn ${getButtonClass(platform)} btn-sm`}
      style={{ transition: 'all 0.2s' }}
      onMouseEnter={(e) => {
        const style = getHoverStyle(platform);
        e.target.style.backgroundColor = style.backgroundColor;
        e.target.style.borderColor = style.borderColor;
        e.target.style.color = 'white';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '';
        e.target.style.borderColor = '';
        e.target.style.color = '';
      }}
    >
      {icon}
    </button>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const showPages = 5;

    if (totalPages <= showPages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="d-flex justify-content-between align-items-center mt-4">
      <small className="text-dark">
        Page {currentPage} of {totalPages}
      </small>

      <nav aria-label="Page navigation text-muted">
        <ul className="pagination pagination-sm mb-0">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
          </li>

          {getPageNumbers().map((page, index) => (
            <li
              key={index}
              className={`page-item ${page === currentPage ? 'active' : ''
                } ${typeof page !== 'number' ? 'disabled' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => typeof page === 'number' && onPageChange(page)}
                disabled={typeof page !== 'number'}
                style={page === currentPage ? { backgroundColor: 'red', borderColor: 'red', color: '#000' } : {}}
              >
                {page}
              </button>
            </li>
          ))}

          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export function Writers() {
  const [currentPage, setCurrentPage] = useState(1);

  const authors = [
    {
      id: 1,
      name: "John Doe",
      description: "Author information will be loaded soon. Stay tuned for updates on this writer's biography and works."
    },
    {
      id: 2,
      name: "Jane Smith",
      description: "Author information will be loaded soon. Stay tuned for updates on this writer's biography and works."
    },
    {
      id: 3,
      name: "Robert Johnson",
      description: "Author information will be loaded soon. Stay tuned for updates on this writer's biography and works."
    },
    {
      id: 4,
      name: "Pat Cummins",
      description: "Author information will be loaded soon. Stay tuned for updates on this writer's biography and works."
    },
    // Add more authors for demonstration
    ...Array.from({ length: 9 }, (_, i) => ({
      id: i + 5,
      name: `Author ${i + 5}`,
      description: "Author information will be loaded soon. Stay tuned for updates on this writer's biography and works."
    }))
  ];

  const totalPages = 102;

  const handleMoreClick = (author) => {
    alert(`More information about ${author.name} coming soon!`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(`Loading page ${page}`);
  };

  return (
    <>

      <div className="container-fluid" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
        <div className="container py-4" style={{ maxWidth: '1200px' }}>
          <div className="mb-4">
            <div className=" text-center py-4">
              <h1 className="card-title h2 fw-bold text-danger mb-2">Featured Authors</h1>
              <p className="text-muted mb-0">Discover information about popular writers and authors</p>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              {authors.slice(0, 3).map((author) => (
                <AuthorCard key={author.id} author={author} onMoreClick={handleMoreClick} />
              ))}
            </div>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}