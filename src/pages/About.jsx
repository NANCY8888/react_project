import React from 'react';
import Review from '../components/Review';
import './About.css';
const AboutUs = () => {
  
  
  return (
    <div className='cabout-conts'>
    <div className="about-us-container">
      <h1 className='s'>About Us</h1>
      <div className="about-us-content">
        <p>
          We are a family-owned business that specializes in delivering delicious homemade chocolates to our customers' doorsteps. Our chocolates are made using only the finest ingredients, and each piece is carefully crafted by hand to ensure the highest quality.
          Our passion for chocolate started when our founder, Jane, was just a child. Her grandmother would make homemade chocolates for the family during the holidays, and Jane fell in love with the taste and the process. As she grew older, she continued to experiment with different recipes and techniques until she found the perfect combination of flavors and textures.
          Today, we continue to use Jane's original recipes and techniques to create our chocolates, and we have expanded our selection to include a wide variety of flavors and styles. Whether you're looking for traditional milk chocolates or something more exotic, like lavender-infused dark chocolate, we have something for everyone.
          We take pride in our work and are dedicated to providing our customers with the best possible experience. From the moment you place your order to the moment your chocolates arrive at your doorstep, we will do everything we can to ensure that you are completely satisfied. Thank you for choosing us, and we look forward to serving you!
        </p>
      </div>
      
    </div>
    <div>
      <h1>OUR HAPPY CUSTOMERS!!!!</h1>
    <Review/>
    <br/>
    <br/>

    </div>
 
    </div>
  );
};

export default AboutUs;
