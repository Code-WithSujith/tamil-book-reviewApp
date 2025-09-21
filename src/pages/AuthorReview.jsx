import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { Star, StarHalf } from 'lucide-react';
import book_background from "../assets/book_background.webp";
import blur_banner from "../assets/blur_banner.jpg";
import KarkaThamizhaImage from "../assets/KarkaThamizhaImage.png";

import { FaArrowUp } from "react-icons/fa";

const BookCard = ({ book }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={16} className="text-warning" fill="currentColor" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" size={16} className="text-warning" fill="currentColor" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} className="text-muted" />);
    }

    return stars;
  };

  return (
    <div className="row mb-4 pb-4 border-bottom">
      <div className="col-md-3 col-sm-4">
        <div className="position-relative">
          <img
            src={book.cover}
            alt={book.title}
            className="img-fluid rounded shadow-sm"
            style={{ width: '100%', maxWidth: '200px', height: 'auto' }}
          />
          {book.series && (
            <div
              className="position-absolute top-0 start-0 px-2 py-1 rounded-end text-white text-uppercase fw-bold"
              style={{
                backgroundColor: book.seriesColor || '#6c757d',
                fontSize: '0.7rem',
                transform: 'translateY(10px)'
              }}
            >
              {book.series}
            </div>
          )}
        </div>
      </div>

      <div className="col-md-9 col-sm-8">
        <div className="mb-2">
          <small className="text-muted text-uppercase fw-bold">{book.category}</small>
        </div>

        <h4 className="fw-bold text-dark mb-3">{book.title}</h4>

        <p className="text-muted mb-3" style={{ lineHeight: '1.6' }}>
          {book.description}
        </p>

        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-warning fw-bold px-3 py-2">
            View book
          </button>

          <div className="d-flex align-items-center gap-1">
            {renderStars(book.rating)}
          </div>
        </div>
      </div>
    </div>
  );
};

const TabNavigation = ({ activeTab, onTabChange, bookCount, reviewCount }) => {
  const tabs = [
    // { id: 'activity', label: 'Activity', count: null },
    // { id: 'library', label: 'Library', count: 221 },
    { id: 'books', label: 'Books', count: bookCount, active: true },
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
                ? 'text-dark border-bottom border-warning border-3'
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
                    ? 'bg-warning text-dark'
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
  const [activeTab, setActiveTab] = useState('books');
  const location = useLocation();
  const {authorData} = location.state || {} 

  const books = [
    {
      id: 1,
      title: "Upside Down Independence Day",
      category: "LIVE ON DISCOVERY",
      series: "HOLIDAZED SERIES",
      seriesColor: "#8b4513",
      cover: "data:image/svg+xml,%3Csvg width='200' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='300' fill='%23654321'/%3E%3Crect x='10' y='10' width='180' height='280' fill='%23D2691E'/%3E%3Ctext x='100' y='50' text-anchor='middle' fill='white' font-size='14' font-weight='bold'%3EHOLIDAZED SERIES%3C/text%3E%3Ctext x='100' y='150' text-anchor='middle' fill='white' font-size='16' font-weight='bold'%3EUPSIDE-DOWN%3C/text%3E%3Ctext x='100' y='180' text-anchor='middle' fill='white' font-size='16' font-weight='bold'%3EINDEPENDENCE DAY%3C/text%3E%3Ctext x='100' y='250' text-anchor='middle' fill='white' font-size='12'%3EGregg Sapp%3C/text%3E%3C/svg%3E",
      description: "Coon Creek, a conservative, industrial, blue-collar town, has seen better days. Golden Springs is home to Antaeus College, a private institution with a tradition of liberal politics. No love lost between those two. Mazie Tuttle, a professional dog walker, knows both towns well. Born and raise...",
      rating: 4,
      author: "Gregg Sapp"
    },
    {
      id: 2,
      title: "The Christmas Donut Revolution",
      category: "LIVE ON DISCOVERY",
      series: "HOLIDAZED SERIES",
      seriesColor: "#228B22",
      cover: "data:image/svg+xml,%3Csvg width='200' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='300' fill='%23228B22'/%3E%3Crect x='10' y='10' width='180' height='280' fill='%2332CD32'/%3E%3Ctext x='100' y='50' text-anchor='middle' fill='white' font-size='14' font-weight='bold'%3EHOLIDAZED SERIES%3C/text%3E%3Ctext x='100' y='120' text-anchor='middle' fill='red' font-size='18' font-weight='bold'%3ETHE%3C/text%3E%3Ctext x='100' y='150' text-anchor='middle' fill='red' font-size='18' font-weight='bold'%3ECHRISTMAS%3C/text%3E%3Ctext x='100' y='180' text-anchor='middle' fill='red' font-size='18' font-weight='bold'%3EDONUT%3C/text%3E%3Ctext x='100' y='210' text-anchor='middle' fill='red' font-size='18' font-weight='bold'%3EREVOLUTION%3C/text%3E%3Ctext x='100' y='250' text-anchor='middle' fill='white' font-size='12'%3EGregg Sapp%3C/text%3E%3C/svg%3E",
      description: "Vive la Révolution The American Revolution began with the Boston Tea Party. If Huck Carp had anything to do about it, the next people's revolution would begin in the drive-thru of a sleepy donut shop in a working-class neighborhood of Columbus, Ohio. It started as a simple random act of...",
      rating: 3.5,
      author: "Gregg Sapp"
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

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={16} className="text-warning" fill="currentColor" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" size={16} className="text-warning" fill="currentColor" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} className="text-muted" />);
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
            style={{height:"150px",width:"120px", objectFit: "cover" }}
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

      <div className="container py-4" style={{ maxWidth: '900px' }}>
        {/* Tab Navigation */}
        <TabNavigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
          bookCount={books.length}
          reviewCount={reviews.length}
        />

        {/* Author Section */}
        <div className="mb-5">
          <h2 className="fw-bold text-dark mb-4">Gregg's books</h2>
        </div>

        {/* Content based on active tab */}
        {(activeTab === 'books' || !activeTab) && (
          <div>
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
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

        {activeTab === 'activity' && (
          <div className="text-center py-5">
            <h4 className="text-muted">Activity feed coming soon...</h4>
          </div>
        )}

        {activeTab === 'library' && (
          <div className="text-center py-5">
            <h4 className="text-muted">Library view coming soon...</h4>
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