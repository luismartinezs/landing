import React from 'react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small projects',
    price: '79',
    features: ['Next.js boilerplate', 'User oauth', 'Database', 'Emails'],
    isPopular: false,
  },
  {
    name: 'Advanced',
    description: 'You need more power',
    price: '99',
    features: ['Next.js boilerplate', 'User oauth', 'Database', 'Emails', '1 year of updates', '24/7 support'],
    isPopular: true,
  },
];

const Pricing = () => {
  return (
    <div className="py-12 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-6">Save hours of boring code and ship faster!</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 px-4">
        {plans.map((plan, index) => (
          <div key={index} className={`relative md:min-w-[400px] bg-white p-6 rounded-lg shadow-md ${plan.isPopular ? 'border-4 border-purple-500' : ''}`}>
            {plan.isPopular && (
              <span className="bg-purple-500 text-white py-1 px-3 rounded-full text-sm absolute top-0 left-[30%] right-[30%] transform -translate-y-1/2">
                POPULAR
              </span>
            )}
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className="text-gray-600">{plan.description}</p>
            <div className="my-6">
              <p className="text-4xl font-bold">{`$${plan.price}`}</p>
              <p className="text-gray-500 line-through">{plan.isPopular ? '$149' : ''}</p>
            </div>
            <ul className="text-left mb-6">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2 mb-2">
                  <svg className="fill-current text-green-500" width="16" height="16" viewBox="0 0 20 20">
                    <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM8 15l-5-5 1.5-1.5L8 12l7.5-7.5L17 6 8 15z"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-purple-600 text-white w-full py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300">
              Get ShipFast
            </button>
            <p className="text-gray-500 text-sm mt-3">Pay once. Access forever.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
