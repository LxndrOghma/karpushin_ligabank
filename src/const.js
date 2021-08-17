const siteMenuLinks = [
  'Услуги',
  'Рассчитать кредит',
  'Конвертер валют',
  'Контакты',
  'Задать вопрос',
];

const ACTIVE_MENU_LINK = 'Конвертер валют';

const Currencies = [ 'RUB', 'USD', 'EUR', 'GBP', 'CNY'];

const curreciesList = Currencies.join(',');

const TODAY = new Date();

const MAIN_PAGE = '/';

const MAX_CHARS = 8;

const Rates = {
  LIVE: '/live',
  HISTORICAL: '/historical',
};

const ACCES_KEY = '?access_key=b9a19ba0f8edbbb4bf8f4e221826f5c0';

const HISTORY_LENGTH = 9;

export {
  siteMenuLinks,
  ACTIVE_MENU_LINK,
  Currencies,
  TODAY,
  MAIN_PAGE,
  MAX_CHARS,
  Rates,
  ACCES_KEY,
  curreciesList,
  HISTORY_LENGTH
};
