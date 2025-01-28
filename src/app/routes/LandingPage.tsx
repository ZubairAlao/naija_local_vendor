import Counter from '@/features/counter/Counter';
import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <div className="font-sans antialiased text-gray-800 max-lg:py-16 lg:min-h-screen flex justify-center items-center">
            <div className="container mx-auto px-4">
                <section className="hero text-center my-12">
                    <Counter />
                </section>

            </div>
        </div>
    );
};

export default LandingPage;
