import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://d39l2hkdp2esp1.cloudfront.net/img/photo/122786/122786_00_2x.jpg?20170602013248"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Get Foriegn Travel plan at very reasonalbe price
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Discover the world with our minimalistic travel agency. We offer curated, hassle-free travel experiences that focus on simplicity,
                         comfort, and authenticity. Let us handle the details so you can fully immerse yourself in your journey.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Special Discount Availale ,for more details check Links
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
