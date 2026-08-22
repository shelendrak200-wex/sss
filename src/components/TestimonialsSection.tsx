import React, { useState } from 'react';
import {
  Star,
  CheckCircle,
  MessageSquarePlus,
  ThumbsUp,
  Quote,
  X,
  Sparkles
} from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [filter, setFilter] = useState<string>('All');
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [helpfulCount, setHelpfulCount] = useState<{ [key: string]: number }>({});

  // Review Form State
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newTreatment, setNewTreatment] = useState('Root Canal Treatment');
  const [newDoctor, setNewDoctor] = useState('Dr. Aarav Sharma');
  const [newComment, setNewComment] = useState('');

  const treatmentFilters = ['All', 'Dental Implant & Crown', 'Invisible Clear Aligners', 'Single Sitting Root Canal', 'Pediatric Dental Care for 6yo', 'Laser Teeth Whitening & Cleaning'];

  const filteredReviews = filter === 'All'
    ? reviewsList
    : reviewsList.filter((r) => r.treatment.toLowerCase().includes(filter.toLowerCase()) || filter.toLowerCase().includes(r.treatment.toLowerCase()));

  const handleHelpful = (id: string) => {
    setHelpfulCount((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const newReview: Testimonial = {
      id: `t-${Date.now()}`,
      author: newAuthor.trim(),
      location: newLocation.trim() || 'Bengaluru',
      rating: newRating,
      date: 'Just now',
      treatment: newTreatment,
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80`,
      comment: newComment.trim(),
      doctorName: newDoctor,
      verified: true,
    };

    setReviewsList([newReview, ...reviewsList]);
    setShowAddModal(false);
    setNewAuthor('');
    setNewComment('');
    setNewLocation('');
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Verified Google Reviews
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 mt-3">
              What Our Happy Patients Say
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
              Read genuine, unfiltered feedback from patients who trusted us with their smiles and experienced truly gentle, pain-free dental care.
            </p>
          </div>

          {/* Rating Summary & Write Review Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm shrink-0">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-extrabold font-display text-slate-900">
                4.9
              </div>
              <div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  Over 1,200+ Google Reviews
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 font-semibold text-xs border border-sky-200 transition-colors flex items-center gap-1.5"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header with Avatar & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-11 h-11 rounded-full object-cover border border-slate-200"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {review.author}
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        {review.location} • {review.date}
                      </p>
                    </div>
                  </div>

                  {review.verified && (
                    <span className="flex items-center gap-1 text-[10px] text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full font-bold border border-teal-200">
                      <CheckCircle className="w-3 h-3 text-teal-600" /> Verified
                    </span>
                  )}
                </div>

                {/* Stars & Treatment Tag */}
                <div>
                  <div className="flex text-amber-400 mb-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                    {review.treatment}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Review Footer with Doctor Tag & Helpful Button */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px]">
                  Treated by: <span className="font-semibold text-slate-800">{review.doctorName}</span>
                </span>

                <button
                  onClick={() => handleHelpful(review.id)}
                  className="flex items-center gap-1 text-slate-400 hover:text-sky-600 text-[11px] font-medium transition-colors"
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>Helpful ({helpfulCount[review.id] || 0})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write a Review Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-100 p-6 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <h3 className="text-lg font-bold font-display text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Share Your Patient Experience
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleReviewSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your City / Area
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Indiranagar"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Rating
                  </label>
                  <select
                    value={newRating}
                    onChange={(e) => setNewRating(Number(e.target.value))}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value={5}>★★★★★ (5 Stars - Outstanding)</option>
                    <option value={4}>★★★★☆ (4 Stars - Very Good)</option>
                    <option value={3}>★★★☆☆ (3 Stars - Good)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Treatment Received
                  </label>
                  <select
                    value={newTreatment}
                    onChange={(e) => setNewTreatment(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="Single Sitting Root Canal">Single Sitting Root Canal</option>
                    <option value="Dental Implant & Crown">Dental Implant & Crown</option>
                    <option value="Invisible Clear Aligners">Invisible Clear Aligners</option>
                    <option value="Teeth Cleaning & Whitening">Teeth Cleaning & Whitening</option>
                    <option value="Pediatric Kids Care">Pediatric Kids Care</option>
                    <option value="General Consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Doctor
                  </label>
                  <select
                    value={newDoctor}
                    onChange={(e) => setNewDoctor(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="Dr. Aarav Sharma">Dr. Aarav Sharma</option>
                    <option value="Dr. Priya Nair">Dr. Priya Nair</option>
                    <option value="Dr. Rohit Mehta">Dr. Rohit Mehta</option>
                    <option value="Dr. Ananya Das">Dr. Ananya Das</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Review / Experience *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us about the clinic cleanliness, staff behavior, and treatment comfort..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold shadow-sm"
                >
                  Post Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
