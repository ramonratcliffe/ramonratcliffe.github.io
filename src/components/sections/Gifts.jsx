import { DetailSection } from './DetailSection'; 
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export const Gifts = () => {
      const { t } = useTranslation();
      return (
        <DetailSection id="gifts" title={t('gifts.title')}>
      <p className='p-2 border shadow-md border-stone-200'>{t('gifts.description')} <Link to="../banks" className='font-semibold py-2 border border-solid p-2 shadow-md' >{t('here')}</Link></p>
    <ul className='text-justify'>
  <li className='text-lg font-bold'>{t('gifts.travel.title')}</li>
    <ul className='list-none underline ml-3'>
      <li><a href="https://paradores.es/es/cajas-regalo" target="_blank">{t('gifts.travel.paradores')}</a></li>
      <li><a href="https://www.flightgift.com/" target="_blank" rel="noopener noreferrer">{t('gifts.travel.flights')}</a></li>
      <li><a href="https://www.airbnb.com/giftcards" target="_blank" rel="noopener noreferrer">{t('gifts.travel.airbnb')}</a></li>
      <li><a href="https://www.activitygift.com/" target="_blank" rel="noopener noreferrer">{t('gifts.travel.activities')}</a></li>
    </ul>
    <li className='text-lg font-bold'>{t('gifts.reading.title')}</li>
    <ul className='list-none underline ml-3'>
      <li><a href="https://uk.bookshop.org/gift_cards" target="_blank" rel="noopener noreferrer">{t('gifts.reading.bookshop')}</a></li>
      <li><a href="https://www.waterstones.com/category/gift-cards" target="_blank" rel="noopener noreferrer">{t('gifts.reading.waterstones')}</a></li>
    </ul>
    <li className='text-lg font-bold'>{t('gifts.learning.title')}</li>
    <ul className='list-none underline ml-3'>
        <li><a href="https://bookings.escuelacantabradesurf.com/en/product/bono-solo-surf" target="_blank" rel="noopener noreferrer">{t('gifts.learning.surf_classes')}</a></li>
        <li><a href="https://valdelinaresqui.com/tarifas-reservas/" target="_blank" rel="noopener noreferrer">{t('gifts.learning.ski_classes')}</a></li>
        <li><a href="https://www.lazarola.com/regala-curso-cocina-zaragoza/" target="_blank" rel="noopener noreferrer">{t('gifts.learning.cooking_classes')}</a></li>
    </ul>
    <li className='text-lg font-bold'>{t('gifts.other.title')}</li>
    <ul className='list-none underline ml-3'>
        <li><a href="https://www.elcorteingles.es/tarjeta-regalo-fisica/A29500657-tarjeta-regalo-general/">{t('gifts.other.corte')}</a></li>
        <li><a href="https://https://liangxin.es/" target="_blank" rel="noopener noreferrer">{t('gifts.other.massage')}</a></li>
        <li><a href="https://clickandplan.es/zaragoza/regalos/tarjetas-regalo" target="_blank" rel="noopener noreferrer">{t('gifts.other.experiences')}</a></li>
    </ul>
  </ul>
</DetailSection>
    )
}
