
import LandingpageBanner from '@/components/LandingpageBanner';
import ProductList from '@/features/products/ProductList';

const LandingPage = () => {
    return (
        <section className="antialiased text-gray-800 py-16  flex justify-center items-center">
            <div className='container space-y-16'>
                <LandingpageBanner />
                <ProductList />
            </div>
        </section>
    );
};

export default LandingPage;
