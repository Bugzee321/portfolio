import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const SEO = ({ title, description, keywords }) => {
  useEffect(() => {
    // Update document title
    const baseTitle = 'Hossam Ahmed | Senior Software Engineer & Freelancer';
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;
    
    // Update meta description if provided
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
    
    // Update meta keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }
    
    return () => {
      // Cleanup (reset to default values if needed)
    };
  }, [title, description, keywords]);
  
  return null; // This component doesn't render anything
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string
};

export default SEO; 