import { useTranslation } from 'react-i18next';
import { Faq } from './sections/Faq';
import { DetailSection } from './sections/DetailSection';  
import { HorizontalScrollContainer } from './sections/HorizontalScrollContainer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { 
  carolina,
  isin,
  isin1, 
  isin2, 
  isin3, 
  isinChurch, 
  isinEntry, 
  isinPlaza, 
  isinView, 
  isinViews, 
  jacaCathedral, 
  jacaCentro, 
  jacaRegion, 
  outfit1, 
  outfit2, 
  outfit5, 
  sabiSquare, 
  sabiView, 
  us1
}  from '../assets/assets';
import { MapFrame } from './sections/MapFrame';
import { NavBar } from './sections/Nav';
import { Link } from 'react-router-dom';
import { Gifts } from './sections/Gifts';

export const Details = () => {

  const { t } = useTranslation();
  const location = useLocation();
   const faqs = [
    { title: t('faqs.food.title'), description: t('faqs.food.description') },
    { title: t('faqs.honeymoon.title'), description: t('faqs.honeymoon.description')},
    { title: t('faqs.weather.title'), description: t('faqs.weather.description') },
    { title: t('faqs.plus_ones.title'), description: t('faqs.plus_ones.description') },
    { title: t('faqs.parking.title'), description: t('faqs.parking.description') },
    {title: t('faqs.etias.title'), description: t('faqs.etias.description')},
    { title: t('faqs.names.title'), description: t('faqs.names.description') }, 
    { title: t('faqs.pets.title'), description: t('faqs.pets.description') },
    {title: t('faqs.organisation.title'), description: t('faqs.organisation.description') }
    
  ];
  useEffect(() => {
    if (location.hash) {
      const anchor = location.hash.replace('#', ''); // Remove the '#' from the hash
      const element = document.getElementById(anchor); // Find the element with the matching ID
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // Scroll to the element
      }
    }
  }, [location]);
return (
  <div className="flex flex-col items-center mx-auto w-full px-4" id="top">
    <NavBar />
    <main className="w-full max-w-2xl p-4">
    <div className="flex justify-center">
      <img src={us1} alt="" className="max-w-xs h-auto max-h-200 rounded-lg border-4" />
    </div>

      <DetailSection id="details" title={t('details.title')}>
        <div className="py-8 m-3 border bg-blue-gray-50 text-2xl">
        <p>{t('details.date')}</p>
        <p>{t('details.time')}</p>
        <p>{t('details.location')}</p>
        </div>
        <div className="flex justify-center">
    <img src={isinViews} alt="" className="max-w-xs h-auto max-h-200 rounded-lg border-4 border-stone-200" />

  <img src={isinChurch} alt="" className="max-w-xs h-auto max-h-200 rounded-lg border-4 border-stone-200" />


  </div>

      </DetailSection>
      <DetailSection id="plan" title={t('plan.title')}>
        <p>{t('plan.description')}</p>
        <ul className="list-disc list-inside">
          <li className="text-justify">{t('plan.friday')}</li>
          <li className="text-justify">{t('plan.sunday')}</li>
        </ul>
        <img src={isinPlaza} alt="" className="max-w-xs h-auto max-h-200 rounded-lg border-4 border-stone-200 mx-auto" />
        <p>{t('plan.closing')}</p>
      </DetailSection>
      <DetailSection id="region" title={t('region.title')}>
        <p>{t('region.description')}</p>
        <img src={jacaRegion} alt="" className="max-w-xs h-auto max-h-200 rounded-lg border-4 border-stone-200 mx-auto" />
        <ul className="list-disc list-inside">
          <li className="text-justify">{t('region.isin')}</li>
          <li className="text-justify">{t('region.sabinanigo')}</li>
          <li className="text-justify">{t('region.jaca')}</li>
        </ul>
        <div className="flex justify-center">
  
</div>

      </DetailSection>
      <DetailSection id="location" title={t('location.title')}>
        <MapFrame/>
      </DetailSection>
      <DetailSection id="travel" title={t('travel.title')}>
        <p>{t('travel.description')}</p>
        <ul className="list-disc list-inside">
          <li className="text-justify m-2">{t('travel.trains')}: <a href="https://www.renfe.com" className="underline" target='_blank'>Renfe</a></li>
          <li className="text-justify m-2">{t('travel.buses')}: <a href="https://www.alsa.com" target='_blank' className="underline">Alsa</a></li>
          <li className="text-justify m-2">{t('travel.planning')}: <a href="https://www.rome2rio.com" target='_blank' className="underline">Rome to Rio</a></li>
        </ul>
        <img src={isin} alt="" className="max-w-xs h-auto max-h-200 rounded-lg border-4 border-stone-200 mx-auto" />
      </DetailSection>
      <DetailSection id="accommodation" title={t('accommodation.title')}>
        <div className='text-center'>
        <p>{t('accommodation.description')}</p>
        <ul className="list-disc list-inside">
          <li className="text-justify m-3" >{t('accommodation.hostel')}</li>
          <li className="text-justify m-3">{t('accommodation.apartments')}</li>
        </ul>
      
        <HorizontalScrollContainer>
          <img src={isin2} alt="" className="max-w-xs h-auto max-h-200 rounded-lg border-4 border-stone-200" />
          <img src={isin3} alt="" className="max-w-xs h-auto max-h-200 rounded-lg border-4 border-stone-200" />
          <img src={isin1} alt="" className="max-w-xs h-auto max-h-200 rounded-lg border-4 border-stone-200" />
        </HorizontalScrollContainer>

        <p>{t('accommodation.budget_option')}</p>
        <p className='pt-3'>{t('accommodation.other_options')}</p>
        <h3 className="text-xl font-bold mt-4 mb-2 ">{t('accommodation.sabinanigo_hotels')}</h3>
        <div className="flex justify-center">
          <img src={sabiSquare} alt="" className="max-w-xs h-auto max-h-200 rounded-lg border-4 border-stone-200" />
          <img src={sabiView  } alt="" className="max-w-xs h-auto max-h-200 rounded-lg border-4 border-stone-200" />
        </div>
          <ul className="list-disc list-inside">
            <h4 className="text-lg font-semibold text-left">{t('accommodation.hotels.title')}</h4>
            <li className="text-justify m-1"><a href="https://www.booking.com/hotel/es/el-churron.es.html?aid=2276456&label=msn-qH1NzET%2ALhR_YR5fjisSBw-80470652622346%3Atikwd-80470803730626%3Aloc-133582%3Aneo%3Amte%3Alp164420%3Adec%3Aqsel%20churr%C3%B3n%20larr%C3%A9s&sid=3e68b0989a2c7e398af44420ab6e1298&dest_id=-388065&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1734720232&srpvid=53ad83ab13940335&type=total&ucfs=1&" target="_blank" rel="noopener noreferrer" className="underline">El Churrón, Larrés</a></li>
            <li className="text-justify m-1"><a href="https://www.hotelvillavirginia.com/es/index.html" target="_blank" rel="noopener noreferrer" className="underline">Hotel Villa Virginia, Sabiñanigo</a></li>
            <li className="text-justify m-1"><a href="https://www.hotelmicasa.info/es/index.html" target="_blank" rel="noopener noreferrer" className="underline">Hotel Mi Casa, Sabiñanigo</a></li>
            <li className="text-justify m-1"><a href="https://www.hotelvinasdelarrede.es/" target="_blank" rel="noopener noreferrer" className="underline">Hotel Viñas de Larredé, Larredé</a></li>
            <li className="text-justify m-1"><a href="https://hotelcasbas.es/" target="_blank" rel="noopener noreferrer" className="underline">Hotel Casbas, Casbas</a></li>
          </ul>
          <ul className="list-disc list-inside">
            <h4 className="text-lg font-semibold text-left">{t('accommodation.campsites.title')}</h4>
            <li className="text-justify"><a href="https://hotelcampingsabinanigo.com/" target="_blank" rel="noopener noreferrer" className="underline">Sabiñánigo Camp and Hotel</a></li> 
          </ul>
          <h3 className="text-xl font-bold mt-4 mb-2">{t('accommodation.jaca_hotels')}</h3>
          <div className="flex justify-center">
            <img src={jacaCentro} alt="" className="max-w-xs h-auto max-h-200 rounded-lg border-4 border-stone-200" />
            <img src={jacaCathedral} alt="" className="max-w-xs h-auto max-h-200 rounded-lg border-4 border-stone-200" />
          </div>
          <ul className="list-disc list-inside text-left">
            <h4 className="text-lg font-semibold text-left">{t('accommodation.hotels.title')}</h4>
            <li className="text-justify underline">
              <a href="https://www.booking.com/searchresults.es.html?ss=Jaca%2C+Arag%C3%B3n%2C+Espa%C3%B1a&ssne=Valencia&ssne_untouched=Valencia&efdco=1&label=msn-bx_fX5qJburIFDUQc5_cDQ-80539407181149%3Atikwd-80539563212130%3Aloc-170%3Aneo%3Amte%3Alp164420%3Adec%3Aqshotel+sabi%C3%B1%C3%A1nigo&aid=352053&lang=es&sb=1&src_elem=sb&src=searchresults&dest_id=-386061&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=es&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=725b85be7f9e015e&ac_meta=GhA3MjViODViZTdmOWUwMTVlIAAoATICZXM6BGphY2FAAEoAUAA%3D&group_adults=2&no_rooms=1&group_children=0" target="_blank" rel="noopener noreferrer">
                Booking.com Jaca
              </a>
            </li>
          </ul>
          </div>
        </DetailSection>
        <Gifts />
        <DetailSection id="faqs" title={t('faqs.title')}>
          {faqs.map((faq, index) => (
            <Faq key={index} title={faq.title} description={faq.description} />
          ))}
          <div className='flex justify-center'>
          <img className="m-4 w-60 h-60 object-cover object-center rounded-lg border-4 border-stone-200" src={carolina} alt="Carolina Diloy" />
          </div>
               <p>{t('faqs.organisation.link')} <a className="p-2 border shadow-md font-bold border-stone-200" href="https://www.carolinadiloy.com" target="_blank">{t('here')}</a></p>
      
        </DetailSection>
        <DetailSection id="dressCode" title={t('dress_code.title')}>
          <p>{t('dress_code.description')}</p>
          <p className='m-2'>{t('dress_code.inspiration')} <span className='border shadow-md font-bold border-stone-200 px-2'>
          <Link to={"/looks"}>{t('here')}</Link>
          </span>
        </p> 
        
          <div className=' m-4 border-4 border-stone-200 shadow-md p-2'>
          <h3>{t('dress_code.waleska.title')}</h3>
          <p>{t('dress_code.waleska.description')} <a className='p-2 border shadow-md font-bold border-stone-200' href='https://www.waleskamoda.com' target='blank'>{t('here')}</a></p>
          </div>

          <HorizontalScrollContainer>
            <img className="max-w-xs h-auto max-h-200 rounded-lg border-4 mt-2"  src={outfit2} alt="Raul and Alison" />
            <img className="max-w-xs h-auto max-h-200 rounded-lg border-4 mt-2"  src={outfit1} alt="Raul and Alison" />
            <img className="max-w-xs h-auto max-h-200 rounded-lg border-4 mt-2"  src={outfit5} alt="Raul and Alison" />
          </HorizontalScrollContainer>
          </DetailSection>
        <DetailSection id="rsvp" title={t('rsvp.title')}>
          <h3 className='m-2' >{t('rsvp.response')} 
            <a className='p1 ' href={t('rsvp.link')} target="_blank">
              <span className='font-bold m-2 border border-solid shadow-md' >{t('here')}</span>
            </a>
          </h3>
          <p className='m-2'>{t('rsvp.limit')}</p>
          <p>{t('rsvp.contact')}
            <a href="mailto:ramonratcliffe@gmail.com" target='_blank'> ramonratcliffe@gmail.com </a>
          </p>
        </DetailSection>
        <a href="#/details#top" className="fixed bottom-4 right-4 m-2 border rounded-md cursor-pointer bg-grey">↑ {t('top')}</a>
        <div className='flex justify-center'>
          <img src={isinEntry} className="max-w-xs h-auto max-h-200 rounded-lg border-4 border-stone-200" />
          <img src={isinView} className="max-w-xs h-auto max-h-200 rounded-lg border-4 border-stone-200" />
        </div>
      </main>
    </div>  
    );
};
