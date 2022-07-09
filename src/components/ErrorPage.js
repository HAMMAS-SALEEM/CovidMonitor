import React from 'react';
import img from '../images/icons/work-in-progress.png';
import '../stylesheets/errorPage.css';

const ErrorPage = () => (
  <section className="error-page">
    <img className="error-page-img" src={img} alt="work in progress" />
    <h1 className="error-page-heading">CovidMonitor not available</h1>
    <p className="error-page-msg">
      This may because of a technical error that we&apos;re working to fix.
    </p>
    <p className="error-page-msg">
      Sorry for the inconvenience and thanks for visiting the page. 
      Please visit our page sometime else.
    </p>
  </section>
);

export default ErrorPage;
