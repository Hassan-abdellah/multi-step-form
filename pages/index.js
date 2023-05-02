import FormContainer from '../components/FormContainer';
import SEO from '../components/SEO';

const HomePage = () => {
  return (
    <div>
      <SEO title="Multisteps Form" />
      <main className="bg-Magnolia h-screen w-full grid md:place-content-center place-content-stretch relative overflow-hidden ">
        <FormContainer />
      </main>
    </div>
  );
};

export default HomePage;
