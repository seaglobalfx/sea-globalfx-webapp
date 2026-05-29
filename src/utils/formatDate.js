import moment from 'moment';
import 'moment/locale/ar';

/**
 * Format a date using an explicit locale (does not rely on moment's global locale).
 */
export function formatDate(date, locale, format = 'DD MMMM YYYY') {
  if (!date) return '';
  const lang = locale === 'ar' ? 'ar' : 'en';
  return moment(date).locale(lang).format(format);
}
