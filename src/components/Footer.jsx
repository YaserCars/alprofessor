import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = [
    {
        title: 'Company',
        links: [
            { title: 'About Us', url: '/' },
            { title: 'Stats', url: '/' },
            { title: 'Careers', url: '/' },
        ],
    },
    {
        title: 'Support',
        links: [
            { title: 'Help Center', url: '/' },
            { title: 'Contact Us', url: '/' },
            { title: 'Community Guidelines', url: '/' },
        ],
    },
    {
        title: 'Legal',
        links: [
            { title: 'Cookies Policy', url: '/' },
            { title: 'Privacy Policy', url: '/' },
            { title: 'Terms of Service', url: '/' },
        ],
    },
];

const Footer = () => (
    <footer className="flex flex-col border-t border-gray-100 text-black-100 mt-5">
        <div className="flex justify-between max-md:flex-col flex-wrap gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-5">
                <img src="https://hosting.renderforestsites.com/22517494/1084443/media/79c4eb41550828633925798e08c9633a.png" alt="Logo" width={118} height={18} className="object-contain" />
                <p className="text-base text-gray-700">
                    Alprofessor Vehicles Technical Inspection <br />
                    15th Street, Musaffah, Abu Dhabi
                </p>
            </div>
            <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
                {footerLinks.map((link) => (
                    <div key={link.title} className="flex flex-col gap-6 text-base min-w-[170px]">
                        <h3 className="font-bold">{link.title}</h3>
                        <div className="flex flex-col gap-5">
                            {link.links.map((item) => (
                                <Link to={item.url} className="text-gray-500" key={item.title}>
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
            <p>&copy;Alprofessor. All rights reserved</p>
            <div className="flex flex-1 sm:justify-end justify-center max-sm:mt-4 gap-10">
                <Link to="/" className="text-gray-500">Privacy & Policy</Link>
                <Link to="/" className="text-gray-500">Terms & Condition</Link>
            </div>
        </div>
    </footer>
);

export default Footer;