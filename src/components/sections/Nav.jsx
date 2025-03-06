import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { leaf } from '../../assets/assets';

export const NavBar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="align-middle m-2 bg-gray-200 shadow shadow-gray-300 px-4">
      <div className="container mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <img className="max-h-11 border-4 border-stone-200" src={leaf} alt="Logo" />

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menu */}
        <div
          className={`${
            isOpen ? 'absolute top-16 left-0 w-full bg-gray-200 z-50' : 'hidden'
          } md:relative md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:justify-between text-gray-500">
            <li className="mx-3 my-2 md:my-0"><a href="#/details#details">{t('nav.details')}</a></li>
            <li className="mx-3 my-2 md:my-0"><a href="#/details#plan">{t('nav.plan')}</a></li>
            <li className="mx-3 my-2 md:my-0"><a href="#/details#region">{t('nav.region')}</a></li>
            <li className="mx-3 my-2 md:my-0"><a href="#/details#location">{t('nav.location')}</a></li>
            <li className="mx-3 my-2 md:my-0"><a href="#/details#travel">{t('nav.travel')}</a></li>
            <li className="mx-3 my-2 md:my-0"><a href="#/details#accommodation">{t('nav.accommodation')}</a></li>
            <li className="mx-3 my-2 md:my-0"><a href="#/details#gifts">{t('gifts.title')}</a></li>
            <li className="mx-3 my-2 md:my-0"><a href="#/details#faqs">{t('nav.faqs')}</a></li>
            <li className="mx-3 my-2 md:my-0"><a href="#/details#dressCode">{t('dress_code.title')}</a></li>
            <li className="mx-3 my-2 md:my-0 font-bold"><a href="#/details#rsvp">RSVP</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
