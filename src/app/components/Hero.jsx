import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            "url('https://www.click.co.uk/wp-content/uploads/2021/09/Digital-Marketing-for-eCommerce-SEO-blog-hero-image-1600x700.png')",
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:px-8 md:py-48">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">
            Discover the Best Products for Your Everyday Life
          </h1>
          <p className="mt-4 text-xl text-gray-200">
            Explore our wide range of high-quality products, from gadgets to
            apparel, designed to make your life easier and more enjoyable.
          </p>
          <div className="mt-8">
            <a
              href="#shop"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
