import Head from 'next/head';

const SEO = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="favicon-32x32.png" type="image/x-icon" />
    </Head>
  );
};

export default SEO;
