const siteMenuLinks = [
  'Услуги',
  'Рассчитать кредит',
  'Конвертер валют',
  'Контакты',
  'Задать вопрос',
];

const footerMenuLinks = [
  'Услуги',
  'Рассчитать кредит',
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
  LIVE: '/latest.json',
  HISTORICAL: '/historical/',
};

const ACCES_KEY = '?app_id=6d5013e3b7a0433d939bddb62737e6b6';

const HISTORY_LENGTH = 9;

export {
  siteMenuLinks,
  footerMenuLinks,
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
