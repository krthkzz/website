import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Car Showroom',
  description: 'Unveiling Excellence, Driving Dreams – Your Journey Begins Here',
  keywords: 'Cars, Accesories',
};

export default Meta;
