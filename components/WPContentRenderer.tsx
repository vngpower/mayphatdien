
import React from 'react';

interface WPContentRendererProps {
  content: string;
  className?: string;
}

const WPContentRenderer: React.FC<WPContentRendererProps> = ({ content, className = '' }) => {
  if (!content) return null;

  return (
    <div className={`wp-content ${className}`}>
      <style>{`
        .wp-content {
          font-family: 'Roboto', sans-serif;
          color: #374151; /* gray-700 */
          line-height: 1.6;
          font-size: 1rem;
        }
        
        /* Headings */
        .wp-content h1, .wp-content h2, .wp-content h3, .wp-content h4, .wp-content h5, .wp-content h6 {
          color: #0a192f; /* navy-900 */
          font-weight: 700;
          margin-top: 1.5em;
          margin-bottom: 0.75em;
          line-height: 1.3;
        }
        .wp-content h2 { font-size: 1.75rem; border-bottom: 2px solid #f3f4f6; padding-bottom: 0.5rem; }
        .wp-content h3 { font-size: 1.5rem; }
        .wp-content h4 { font-size: 1.25rem; }

        /* Paragraphs & Formatting */
        .wp-content p { margin-bottom: 1em; text-align: justify; }
        .wp-content strong, .wp-content b { font-weight: 700; color: #111827; }
        .wp-content em, .wp-content i { font-style: italic; }
        .wp-content u { text-decoration: underline; }

        /* Lists */
        .wp-content ul, .wp-content ol {
          margin-bottom: 1.5em;
          padding-left: 1.5em;
        }
        .wp-content ul { list-style-type: disc; }
        .wp-content ol { list-style-type: decimal; }
        .wp-content li { margin-bottom: 0.5em; }
        .wp-content li > ul, .wp-content li > ol { margin-top: 0.5em; }

        /* Links */
        .wp-content a {
          color: #dc2626; /* safety-600 */
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .wp-content a:hover {
          color: #b91c1c; /* safety-700 */
          text-decoration: underline;
        }

        /* Images & Captions */
        .wp-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1.5em auto;
          display: block;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .wp-content figure { margin: 1.5em 0; }
        .wp-content figcaption {
          text-align: center;
          font-size: 0.875rem;
          color: #6b7280;
          margin-top: 0.5em;
          font-style: italic;
        }
        
        /* WordPress Alignments */
        .wp-content .aligncenter { text-align: center; margin-left: auto; margin-right: auto; }
        .wp-content .alignleft { float: left; margin-right: 1.5em; margin-bottom: 1em; }
        .wp-content .alignright { float: right; margin-left: 1.5em; margin-bottom: 1em; }

        /* Tables */
        .wp-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5em 0;
          font-size: 0.95rem;
          overflow-x: auto;
          display: block; /* For responsive tables on mobile */
        }
        .wp-content table tbody { display: table; width: 100%; }
        .wp-content th {
          background-color: #0a192f;
          color: white;
          font-weight: bold;
          text-align: left;
          padding: 12px;
          border: 1px solid #e5e7eb;
        }
        .wp-content td {
          padding: 10px;
          border: 1px solid #e5e7eb;
          vertical-align: top;
        }
        .wp-content tr:nth-child(even) { background-color: #f9fafb; }
        .wp-content tr:hover { background-color: #f3f4f6; }

        /* Blockquotes */
        .wp-content blockquote {
          border-left: 4px solid #dc2626; /* safety-500 */
          background-color: #fef2f2;
          padding: 1em 1.5em;
          margin: 1.5em 0;
          font-style: italic;
          color: #4b5563;
          border-radius: 0 0.5rem 0.5rem 0;
        }

        /* Video Embeds (YouTube) */
        .wp-content iframe {
          max-width: 100%;
          margin: 1.5em auto;
          display: block;
          border-radius: 0.5rem;
        }

        /* Clearfix */
        .wp-content::after {
          content: "";
          display: table;
          clear: both;
        }
      `}</style>
      
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default WPContentRenderer;
