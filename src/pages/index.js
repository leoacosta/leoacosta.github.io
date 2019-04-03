import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
// import Header from '../components/header';
import Button from '../components/button';

const IndexPage = () => (
    <Layout>
        <SEO title="Leo Acosta" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Testing Netlify deploy</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <div>
            <Button />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
);

export default IndexPage;
