import headphone1 from '@/assets/headphones/headphones_b_1.webp';
import headphone2 from '@/assets/headphones/headphones_b_3.webp';
import speaker1 from '@/assets/headphones/speaker3.webp';
import speaker2 from '@/assets/headphones/speaker4.webp';
import earphone1 from '@/assets/headphones/earphones_a_1.webp';
import earphone2 from '@/assets/headphones/earphones_b_2.webp';
import earphone3 from '@/assets/headphones/earphones_c_4.webp';
import earphone4 from '@/assets/headphones/headphones_a_3.webp';


const exchangeRate = 1400;

export const marketItems = [
    {
      title: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation and long battery life.",
      price: 129.99 * exchangeRate,
      reviews: 4.5,
      reviewers: 320,
      image: headphone1
    },
    {
      title: "Wireless Speaker",
      description: "A sleek wireless speaker with clear sound and long-lasting battery and notifications.",
      price: 199.99 * exchangeRate,
      reviews: 4.7,
      reviewers: 210,
      image: speaker1
    },
    {
      title: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with clear sound and long-lasting battery.",
      price: 59.99 * exchangeRate,
      reviews: 3.3,
      reviewers: 150,
      image: speaker2
    },
    {
      title: "Gaming Mouse",
      description: "Ergonomic gaming mouse with customizable buttons and RGB lighting.",
      price: 49.99 * exchangeRate,
      reviews: 2.6,
      reviewers: 180,
      image: earphone1
    },
    {
      title: "Laptop Stand",
      description: "Adjustable laptop stand for better ergonomics and cooling.",
      price: 29.99 * exchangeRate,
      reviews: 1.4,
      reviewers: 95,
      image: headphone2
    },
    {
      title: "Smart Light Bulb",
      description: "LED smart bulb that you can control remotely with your phone or voice.",
      price: 19.99 * exchangeRate,
      reviews: 4.2,
      reviewers: 110,
      image: earphone2
    },
    {
      title: "Portable Charger",
      description: "Compact and fast-charging portable power bank with 10,000mAh capacity.",
      price: 24.99 * exchangeRate,
      reviews: 4.8,
      reviewers: 270,
      image: earphone3
    },
    {
      title: "Digital Camera",
      description: "High-resolution digital camera with 4K video recording and optical zoom.",
      price: 349.99 * exchangeRate,
      reviews: 4.6,
      reviewers: 140,
      image: earphone4
    }
  ];
  