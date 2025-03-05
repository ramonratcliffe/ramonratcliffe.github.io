import { useTranslation } from 'react-i18next';
import { leaf } from '../../assets/assets';
export const NavBar = () => {

  const { t } = useTranslation();

    return (
        <nav className="align-middle m-2 bg-gray-200 shadow shadow-gray-300 px-8">
			<div className="h-16 mx-auto md:px-4 container flex items-center">
			<img className='max-h-11 border-4 border-oliver-drab' src={leaf} alt="" />
			<div className= " text-gray-500 order-3 w-full md:w-auto md:order-2">
			<ul className="flex justify-between ">
				<li className='mx-3'><a href="#details">{t('nav.details')}</a></li>
				<li className='mx-3'><a href="#plan">{t('nav.plan')}</a></li>
				<li className='mx-3'><a href="#region">{t('nav.region')}</a></li>
				<li className='mx-3'><a href="#location">{t('nav.location')}</a></li>
				<li className='mx-3'><a href="#travel">{t('nav.travel')}</a></li>
				<li className='mx-3'><a href="#accommodation">{t('nav.accommodation')}</a></li>
				<li className='mx-3'><a href="#gifts">{t('faqs.gifts.title')}</a></li>
				<li className='mx-3'><a href="#faqs">{t('nav.faqs')}</a></li>
        <li className='mx-3'><a href="#dressCode">{t('dress_code.title')}</a></li>
				<li  className="mx-3 font-bold"><a href="#rsvp">RSVP</a></li>
			</ul>
		</div>
	</div>
</nav>
    )
}
