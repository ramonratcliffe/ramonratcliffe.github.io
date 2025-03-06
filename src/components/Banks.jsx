import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
export const Banks = () => {
    const { t } = useTranslation();


  return (
    <div className="p-4 w-2/3">
      <h2 className="text-2xl font-bold m-4 justify-center">{t('gifts.banks')}</h2>
      <div className="flex flex-wrap justify-evenly">
        <div className="border bg-light-green-50 rounded-lg p-8 shadow-lg w-full md:w-1/4 text-center align-middle">
          <h3 className="text-xl font-bold text-center pb-2 ">Paypal</h3>
          <p className="text-center mt-3">@aliratcliffe</p>
          <p className="bg-white font-semibold py-2 border border-solid shadow-md mt-3"><a href="http://paypal.me/aliratcliffe " target="_blank">{t('send')}</a></p>
        </div>
        <div className="border bg-light-green-50 rounded-lg p-8 shadow-lg w-full md:w-1/4">
          <h3 className="text-xl font-bold text-center pb-2">España</h3>
          <p className="text-center">Bizum :<br/> 722 41 73 50 <br/> IBAN:<br/> ES13 2095 0262 7191 1884 5531</p>
        </div>
        <div className="border bg-light-green-50 rounded-lg p-8 shadow-lg w-full md:w-1/4">
          <h3 className="text-xl font-bold text-center pb-2">UK</h3>
          <p className="text-center">Sort Code:<br/> 40-20-27 <br/> Acount Number: <br/>81589571</p>
        </div>
      </div>
      <div className="p-6 mx-auto">
        <Link 
        to="/details" className="place-items-end p-2 border rounded-md cursor-pointer shadow-lg">
        {t('return')}
      </Link>
      </div>
    </div>
  );
};
