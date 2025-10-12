import React, { useState } from 'react';
import blur_banner from "../assets/blur_banner.jpg";
import KarkaThamizhaImage from "../assets/KarkaThamizhaImage.png";

import { FaArrowUp, FaChevronDown, FaChevronRight, FaStar, FaStarHalfAlt, FaCalendarAlt, FaEye, FaPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const CategorySection = ({ category, isExpanded, onToggle }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-warning" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-warning" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-muted" />);
    }

    return stars;
  };

  return (
    <div className="mb-4">
      {/* Category Header */}
      <div
        className="d-flex align-items-center justify-content-between p-3 bg-light rounded cursor-pointer border"
        onClick={onToggle}
        style={{ cursor: 'pointer' }}
      >
        <div className="d-flex align-items-center">
          <h5 className="mb-0 fw-bold text-dark">{category.name}</h5>
          <span className="ms-2 badge bg-danger">{category.books.length}</span>
        </div>
        <div className="text-dark">
          {isExpanded ? <FaChevronDown size={18} /> : <FaChevronRight size={18} />}
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-3">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col" className="fw-bold text-dark">Book Cover</th>
                  <th scope="col" className="fw-bold text-dark">Book Name</th>
                  <th scope="col" className="fw-bold text-dark">Upload Date</th>
                  <th scope="col" className="fw-bold text-dark">Global Rating</th>
                  <th scope="col" className="fw-bold text-dark">Rating</th>
                  <th scope="col" className="fw-bold text-dark">Add Review</th>
                  <th scope="col" className="fw-bold text-dark">Show Review</th>
                </tr>
              </thead>
              <tbody>
                {category.books.map((book) => (
                  <tr key={book.id} className="border-bottom">
                    <td>
                      <div className="position-relative">
                        <img
                          src={book.cover}
                          alt={book.title}
                          className="rounded shadow-sm"
                          style={{ width: '60px', height: '80px', objectFit: 'cover' }}
                        />
                        {book.series && (
                          <div
                            className="position-absolute top-0 start-0 px-1 py-0 rounded-end text-white text-uppercase fw-bold"
                            style={{
                              backgroundColor: book.seriesColor || '#6c757d',
                              fontSize: '0.6rem',
                              transform: 'translateY(5px)'
                            }}
                          >
                            {book.series.split(' ')[0]}
                          </div>
                        )}
                      </div>
                    </td>
                    <td>
                      <a
                        href={`/book/${book.id}`}
                        className="text-decoration-none"
                        style={{ color: '#2c3e50' }}
                      >
                        
                        <NavLink to="/CategoryBookDetail" className="fw-bold text-dark nav-title">
                          <h6 className="mb-1 fw-bold">{book.title}</h6>
                        </NavLink>
                        <small className="text-muted">by {book.author}</small>
                      </a>
                    </td>
                    <td>
                      <div className="d-flex align-items-center text-muted">
                        <FaCalendarAlt className="me-2" size={14} />
                        <span>{book.uploadDate}</span>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <FaStar className="text-warning me-1" size={16} />
                        <span className="fw-bold text-dark">{book.rating}</span>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        {renderStars(book.rating)}
                      </div>
                    </td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm d-flex align-items-center">
                        <FaPlus className="me-1" size={12} />
                        Add Review
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-info btn-sm text-white d-flex align-items-center">
                        <FaEye className="me-1" size={12} />
                        View Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

const TabNavigation = ({ activeTab, onTabChange, categories, reviewCount }) => {
  const tabs = [
    { id: 'categories', label: 'Categories', count: categories.length, active: true },
    { id: 'reviews', label: 'Reviews', count: reviewCount },
    { id: 'request', label: 'Request a review', count: null }
  ];

  return (
    <nav className="mb-4">
      <div className="nav nav-tabs border-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-link border-0 fw-medium px-3 py-2 me-3 ${(activeTab === tab.id) || (tab.active && !activeTab)
              ? 'text-dark border-bottom border-danger border-3'
              : 'text-muted'
              }`}
            style={{
              backgroundColor: 'transparent',
              borderRadius: '0'
            }}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
            {tab.count !== null && (
              <span
                className={`ms-2 px-2 py-1 rounded-pill text-white fw-bold ${(activeTab === tab.id) || (tab.active && !activeTab)
                  ? 'bg-danger text-dark'
                  : 'bg-secondary'
                  }`}
                style={{ fontSize: '0.75rem' }}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export function AuthorReview() {
  const [activeTab, setActiveTab] = useState('categories');
  const [expandedCategories, setExpandedCategories] = useState({});
  // Mock author data - in real app this would come from props or API
  const authorData = { name: "SelvaKumar" };

  // Organize books by categories
  const categories = [
    {
      id: 1,
      name: "Live on Discovery",
      books: [
        {
          id: 1,
          title: "Upside Down Independence Day",
          series: "Novel",
          seriesColor: "#8b4513",
          cover: KarkaThamizhaImage,
          description: "Coon Creek, a conservative, industrial, blue-collar town, has seen better days...",
          rating: 4,
          author: "Gregg Sapp",
          uploadDate: "Jan 15, 2024"
        },
        {
          id: 2,
          title: "The Christmas Donut Revolution",
          series: "Story",
          seriesColor: "#228B22",
          cover: KarkaThamizhaImage,
          description: "Vive la Révolution The American Revolution began with the Boston Tea Party...",
          rating: 3.5,
          author: "Gregg Sapp",
          uploadDate: "Dec 20, 2023"
        },
        {
          id: 3,
          title: "Life Lesson",
          series: "Novel",
          seriesColor: "#8b4513",
          cover: KarkaThamizhaImage,
          description: "Vive la Révolution The American Revolution began with the Boston Tea Party...",
          rating: 3.5,
          author: "Gregg Sapp",
          uploadDate: "Dec 20, 2023"
        }
      ]
    },
    {
      id: 2,
      name: "Fiction & Literature",
      books: [
        {
          id: 4,
          title: "The Kimoni Legacy",
          series: "History",
          seriesColor: "#8b4513",
          cover: KarkaThamizhaImage,
          description: "A captivating story of family legacy and tradition...",
          rating: 4.5,
          author: "SelvaKumar",
          uploadDate: "Feb 10, 2024"
        },
        {
          id: 5,
          title: "The Love",
          series: "Love",
          seriesColor: "#228B22",
          cover: KarkaThamizhaImage,
          description: "A captivating story of family legacy and tradition...",
          rating: 4.5,
          author: "SelvaKumar",
          uploadDate: "Feb 10, 2024"
        }
      ]
    },
    {
      id: 3,
      name: "Mystery & Thriller",
      books: [
        {
          id: 6,
          title: "Shadow Detective",
          series: "Sports",
          cover: KarkaThamizhaImage,
          rating: 4.2,
          author: "Mystery Author",
          uploadDate: "Mar 5, 2024"
        }
      ]
    }
  ];

  const reviews = [
    {
      id: 1,
      bookTitle: "Upside Down Independence Day",
      reviewer: "Sarah Johnson",
      rating: 4,
      date: "2024-01-15",
      content: "A fascinating look at small-town politics and the clash between different ideologies. Gregg Sapp has crafted characters that feel real and relatable, even when their views might challenge your own."
    },
    {
      id: 2,
      bookTitle: "The Christmas Donut Revolution",
      reviewer: "Mike Chen",
      rating: 3,
      date: "2024-01-10",
      content: "An entertaining read with some great humor. The premise is quirky and the execution mostly works, though some parts felt a bit over the top. Still worth reading for the unique perspective."
    }
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-warning" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-warning" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-muted" />);
    }

    return stars;
  };

  const ReviewCard = ({ review }) => (
    <div className="card mb-4 border-0 border-bottom border-2">
      <div className="card-body px-0">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h6 className="fw-bold mb-1">{review.bookTitle}</h6>
          <small className="text-muted">{review.date}</small>
        </div>
        <div className="d-flex align-items-center gap-2 mb-2">
          <small className="text-muted">by {review.reviewer}</small>
          <div className="d-flex align-items-center gap-1">
            {renderStars(review.rating)}
          </div>
        </div>
        <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>
          {review.content}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div
        className="position-relative text-white"
        style={{
          backgroundImage: `url(${blur_banner})`,
          // backgroundImage: "url('https://picsum.photos/1200/400?blur')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "350px",
        }}
      >
        <div className="container text-center justify-content-center align-items-center py-5 rounded">
          {/* Book Cover */}
          <img
            src={KarkaThamizhaImage}
            alt="Book cover"
            className="shadow rounded mb-3"
            style={{ height: "150px", width: "120px", objectFit: "cover" }}
          />

          {/* Book Info */}
          <div className="ms-4">
            <h2 className="fw-bold">The Kimoni Legacy {authorData?.name}</h2>
            <p className="mb-1">
              By <strong>SelvaKumar</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="container py-4" style={{ maxWidth: '1200px' }}>
        {/* Tab Navigation */}
        <TabNavigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
          categories={categories}
          reviewCount={reviews.length}
        />

        {/* Author Section */}
        <div className="mb-5">
          <h2 className="fw-bold text-dark mb-4">Author's Collection</h2>
        </div>

        {/* Content based on active tab */}
        {(activeTab === 'categories' || !activeTab) && (
          <div>
            {categories.map((category) => (
              <CategorySection
                key={category.id}
                category={category}
                isExpanded={expandedCategories[category.id]}
                onToggle={() => toggleCategory(category.id)}
              />
            ))}
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <h3 className="fw-bold text-dark mb-4">Recent Reviews</h3>
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}

        {activeTab === 'request' && (
          <div className="text-center py-5">
            <h4 className="text-muted">Request a review form coming soon...</h4>
          </div>
        )}
      </div>
    </>
  );
}