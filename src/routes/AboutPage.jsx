import React from 'react';
import Layout from '../components/Layout';
import '../assets/css/components/AboutPage/style.css';

function AboutPage() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="about-page-section">
          <div className="about-page-header">
            <img src="assets/images/mag-triangle-down.png"/>

            <h1 className="section-header-sub">Who We Are?</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
