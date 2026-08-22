import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  ArrowRight,
  Sparkles,
  Calendar,
  X,
  UserCheck,
  Tag,
  Share2
} from 'lucide-react';
import { BLOG_POSTS } from '../data/clinicData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onOpenBooking: (treatment?: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenBooking }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Oral Health & Dental Guides
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 mt-3">
            Latest Dental Insights & Hygiene Advice
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            Written and reviewed by our clinical dental team to empower you and your family with healthy oral wellness knowledge.
          </p>
        </div>

        {/* Blog Cards Grid (6 Guides) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:border-sky-300 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div>
                {/* Article Featured Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-sky-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                    {post.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded flex items-center gap-1">
                    <Clock className="w-3 h-3 text-sky-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="text-[11px] text-slate-400 font-medium">
                    {post.date}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 leading-snug group-hover:text-sky-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="p-6 pt-0 mt-2 flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-slate-200"
                  />
                  <span className="text-xs font-semibold text-slate-700">
                    {post.author.name}
                  </span>
                </div>

                <span className="text-xs font-bold text-sky-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
            {/* Modal Header Image */}
            <div className="relative h-56 w-full bg-slate-100">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent" />
              
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                  {selectedPost.category} • {selectedPost.readTime}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1 leading-tight">
                  {selectedPost.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Author byline */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedPost.author.avatar}
                    alt={selectedPost.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      {selectedPost.author.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {selectedPost.author.role} • {selectedPost.date}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {selectedPost.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Post Paragraphs */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedPost.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Consultation Callout Box */}
              <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-sky-950">
                    Concerned about these symptoms?
                  </div>
                  <p className="text-[11px] text-sky-800 mt-0.5">
                    Schedule a gentle checkup with our specialist dentist today.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const cat = selectedPost.category;
                    setSelectedPost(null);
                    onOpenBooking(cat);
                  }}
                  className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold shrink-0 shadow-xs flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-100"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
