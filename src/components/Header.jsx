import { useTranslation } from 'react-i18next';
import { lngs } from '../utils/langs';

export const Header = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <header className="bg-opacity-0"> {/* Tailwind classes for padding, background color, and border */}
      <div className="flex justify-end"> {/* Tailwind classes for flexbox layout */}
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
            type="button"
            onClick={() => i18n.changeLanguage(lng)}
            className="ml-2 px-4 py-2 cursor-pointer hover:bg-white hover:font-extrabold transition duration-300 focus:outline-none"
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <h1 id="top" className="text-3xl mb-4 font-bold text-center">{t('header.title')}</h1>
      <p className="text-lg text-center">{t('header.subtitle')}</p>
    </header>
  );
}
