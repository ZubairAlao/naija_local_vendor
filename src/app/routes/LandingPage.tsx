
import LandingpageBanner from '@/components/LandingpageBanner';
import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <div className="antialiased text-gray-800 max-lg:py-16 lg:min-h-screen flex justify-center items-center">
            <section className='container'>
                <LandingpageBanner />

            </section>
        </div>
    );
};

export default LandingPage;
