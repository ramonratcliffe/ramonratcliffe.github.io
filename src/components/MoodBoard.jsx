import { useTranslation } from 'react-i18next';
import { ladies } from '../assets/assets';
import { Link } from 'react-router-dom';

export const MoodBoard = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="p-4 bg-gray-100 shadow-md">
      </div>
      <img src={ladies} alt="Mood Board" className="w-3/4 object-cover shadow-lg" />
      <a href="#top" className="fixed bottom-4 right-4 m-2 p-2 border rounded-md cursor-pointer bg-white">↑ {t('top')}</a>
      <Link 
        to="/details#rsvp">
        <a className='fixed bottom-4 left-4 m-2 p-2 border rounded-md cursor-pointer bg-white'>{t('return')}</a>
      </Link>
    </>
  );}