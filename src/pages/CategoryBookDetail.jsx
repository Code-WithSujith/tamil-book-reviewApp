import React, { useState } from 'react';
import { FaStar, FaRegStar, FaShareAlt, FaBookmark } from 'react-icons/fa';

export function CategoryBookDetail() {
    const [userRating, setUserRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    const bookData = {
        title: "My Poetry Collection",
        author: "D.S. Prakash",
        publisher: "Self Published",
        price: "80.00",
        currency: "₹",
        pages: 64,
        publishDate: "May 2024",
        format: "Paper Copy",
        coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
        videoUrl: "https://www.youtube.com/embed/XFVByKwJfpo?si=vrid2ho-Monn252z",
        averageRating: 0,
        totalRatings: 0,
        category: "Poetry",
        language: "Tamil",
        awards: [
            "Best Novel of 2024",
            "Best Short Story Collection of 2024",
            "Best Poetry Collection of 2024",
            "Best Essay Collection of 2024",
            "Best Translation – Short Story (2024)",
            "Best Translation – Poetry (2024)",
            "Best Translation – Essay (2024)"
        ]
    };

    const renderStars = (rating, isInteractive = false) => {
        return [...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
                <span
                    key={index}
                    style={{ cursor: isInteractive ? 'pointer' : 'default', color: '#ffc107', fontSize: '1.5rem', marginRight: '4px' }}
                    onClick={() => isInteractive && setUserRating(starValue)}
                    onMouseEnter={() => isInteractive && setHoveredRating(starValue)}
                    onMouseLeave={() => isInteractive && setHoveredRating(0)}
                >
                    {starValue <= (isInteractive ? (hoveredRating || userRating) : rating) ? (
                        <FaStar />
                    ) : (
                        <FaRegStar />
                    )}
                </span>
            );
        });
    };

    return (
        <>
            <div className="container py-4" style={{ maxWidth: '1200px' }}>
                {/* Header Section */}
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
                            <h1 className="mb-2" style={{ fontWeight: '700', fontSize: '2.5rem' }}>
                                {bookData.title}
                            </h1>
                            <div className="d-flex gap-3">
                                <button className="btn btn-outline-primary rounded-circle p-2" style={{ width: '45px', height: '45px' }}>
                                    <FaShareAlt />
                                </button>
                                <button className="btn btn-outline-primary rounded-circle p-2" style={{ width: '45px', height: '45px' }}>
                                    <FaBookmark />
                                </button>
                            </div>
                        </div>
                        <p className="text-muted mb-0" style={{ fontSize: '1.1rem' }}>{bookData.publishDate}</p>
                    </div>
                </div>

                {/* Rating Section */}
                <div className="row mb-4">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body text-center py-4">
                                <h5 className="mb-3">Community Rating</h5>
                                <div className="mb-2">{renderStars(bookData.averageRating)}</div>
                                <p className="mb-0 text-muted">
                                    <strong>{bookData.averageRating > 0 ? bookData.averageRating.toFixed(1) : 'null'}</strong> / 5
                                    {bookData.totalRatings > 0 && ` (${bookData.totalRatings} ratings)`}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body text-center py-4">
                                <h5 className="mb-3">Your Rating</h5>
                                <div className="mb-2">{renderStars(userRating, true)}</div>
                                <p className="mb-0 text-muted">
                                    {userRating > 0 ? `You rated: ${userRating}/5` : 'Click to rate'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="row">
                    {/* Left Side - Book Image + Awards */}
                    <div className="col-lg-4 mb-4">
                        {/* 📘 Book Info Card */}
                        <div className="card border-0 shadow-sm mb-3">
                            <img
                                src={bookData.coverImage}
                                alt={bookData.title}
                                className="card-img-top"
                                style={{ height: '400px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h6 className="text-muted mb-2">Author</h6>
                                <p className="mb-3">
                                    <strong>{bookData.author}</strong>
                                </p>
                                <button className="btn btn-success btn-lg w-100 mb-2">
                                    Purchase - {bookData.currency}{bookData.price}
                                </button>
                            </div>
                        </div>

                        {/* 🏆 Awards Section (Separate Card) */}
                        {bookData.awards && bookData.awards.length > 0 && (
                            <div className="card border-0 shadow-sm mt-4">
                                <div className="card-body">
                                    <h4 className=" mb-2">🏆 Awards Received</h4>
                                    <ul className="list-unstyled mb-0">
                                        {bookData.awards.map((award, index) => (
                                            <li key={index} className="text-muted mb-1">• {award}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>


                    {/* Right Side - Video + Details */}
                    <div className="col-lg-8">
                        {/* Video Section */}
                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-body p-0">
                                <div className="ratio" style={{ aspectRatio: '21/9', height: "400px" }}> {/* 👆 Increased width ratio */}
                                    <iframe
                                        src={bookData.videoUrl}
                                        title="Book Video"
                                        allowFullScreen
                                        style={{ borderRadius: '0.25rem' }}
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        {/* Book Information */}
                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-body">
                                <h4 className="mb-4 pb-2 border-bottom">Description</h4>
                                <p className="text-muted">
                                    A beautiful collection of poetry that explores themes of love, nature, and life.
                                    This anthology brings together powerful verses that touch the heart and soul.
                                    Each piece is carefully crafted to evoke emotion and inspire reflection.
                                </p>
                            </div>
                        </div>

                        {/* Story Details */}
                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-body">
                                <h4 className="mb-4 pb-2 border-bottom">Story Details / Information</h4>
                                <p className="text-muted">
                                    An inspiring journey through words that captures the essence of human emotions
                                    and experiences. Each poem is crafted with care and attention to detail, offering
                                    readers a profound exploration of life's many facets.
                                </p>
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <h4 className="mb-4 pb-2 border-bottom">Additional Details</h4>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="p-3 bg-light rounded">
                                            <small className="text-muted d-block mb-1">Publisher / Organization</small>
                                            <strong>{bookData.publisher}</strong>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="p-3 bg-light rounded">
                                            <small className="text-muted d-block mb-1">Category / Genre</small>
                                            <strong>{bookData.category}</strong>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="p-3 bg-light rounded">
                                            <small className="text-muted d-block mb-1">Price</small>
                                            <strong>{bookData.currency}{bookData.price}</strong>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="p-3 bg-light rounded">
                                            <small className="text-muted d-block mb-1">Pages</small>
                                            <strong>{bookData.pages}</strong>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="p-3 bg-light rounded">
                                            <small className="text-muted d-block mb-1">Published Date</small>
                                            <strong>{bookData.publishDate}</strong>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="p-3 bg-light rounded">
                                            <small className="text-muted d-block mb-1">Language</small>
                                            <strong>{bookData.language}</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
