import React from 'react';
import Image from 'next/image';

const Survey = () => {
    return (
      <div className="container pt-40">
        <div className="grid lg:grid-cols-[50%,1fr] pb-4 gap-20">
          <div>
            <Image
              className="w-[100%] h-auto lg:w-auto lg:h-[90vh] rounded-sm"
              src="/survey.jpg"
              width={1000}
              height={600}
              alt="survey image"
            />
          </div>
  
          <div className="self-center">
            <h2 className="text-4xl md:text-6xl font-bold">Share Your</h2>
            <h2 className="text-4xl md:text-6xl font-bold pt-3">
            <span className="text-red">Culinary</span> Experience
            </h2>
            <p className="text-gray-900 pt-16">
            At Epicurean Bliss, every guest’s experience is a story we cherish. We believe that exceptional dining is not just about flavors but also the moments and memories crafted around each meal. Your insights help us elevate these experiences, ensuring that every visit is as special as the last.
          </p>

          <p className="text-gray-900 pt-8">
          We invite you to share your thoughts, whether it’s a dish that delighted you or a suggestion to refine our offerings. Your feedback is the secret ingredient in our pursuit of culinary excellence, guiding us to create unforgettable dining moments for you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Survey;