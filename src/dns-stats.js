const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domain) {
  const dns = require('dns');
  const rrtype="MX";
  dns.resolve('google.com', rrtype, (err, records)=> console.log('records: %j', records));
}

module.exports = {
  getDNSStats
};

getDNSStats('code.yandex.ru');

domains = [
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
  ]