import React from 'react';
import pkg from 'react-google-reviews';
const { GoogleReviews } = pkg;
import 'react-google-reviews/dist/index.css';

export default function Reviews() {
  return (
    <div className="reviews-wrapper" style={{ margin: '2rem 0' }}>
      {/* 
        You need to provide your actual featurableId. 
        Replace 'YOUR_FEATURABLE_ID' with the one from your account. 
      */}
      <GoogleReviews featurableId="YOUR_FEATURABLE_ID" />
    </div>
  );
}
