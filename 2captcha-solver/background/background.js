const a1_0x3c8162 = a1_0x3be4
;(function (_0xb70287, _0x52adfd) {
  const _0x2b5a1a = a1_0x3be4,
    _0x1e4b58 = _0xb70287()
  while (!![]) {
    try {
      const _0x5075ad =
        parseInt(_0x2b5a1a(0x1b8)) / 0x1 +
        (-parseInt(_0x2b5a1a(0x1c5)) / 0x2) * (parseInt(_0x2b5a1a(0x1e0)) / 0x3) +
        (-parseInt(_0x2b5a1a(0x1d1)) / 0x4) * (-parseInt(_0x2b5a1a(0x1cc)) / 0x5) +
        -parseInt(_0x2b5a1a(0x1de)) / 0x6 +
        parseInt(_0x2b5a1a(0x1be)) / 0x7 +
        parseInt(_0x2b5a1a(0x1dd)) / 0x8 +
        (parseInt(_0x2b5a1a(0x1c0)) / 0x9) * (parseInt(_0x2b5a1a(0x1ca)) / 0xa)
      if (_0x5075ad === _0x52adfd) break
      else _0x1e4b58['push'](_0x1e4b58['shift']())
    } catch (_0x40f48e) {
      _0x1e4b58['push'](_0x1e4b58['shift']())
    }
  }
})(a1_0x2e55, 0xbd628),
  chrome[a1_0x3c8162(0x1d9)]['onInstalled'][a1_0x3c8162(0x1cf)](function (_0x5ccb32) {
    const _0x2fa646 = a1_0x3c8162
    _0x5ccb32['reason'] == _0x2fa646(0x1b3) &&
      (chrome[_0x2fa646(0x1d9)][_0x2fa646(0x1b9)]
        ? chrome[_0x2fa646(0x1d9)]['openOptionsPage']()
        : self[_0x2fa646(0x1df)](chrome[_0x2fa646(0x1d9)][_0x2fa646(0x1cb)](_0x2fa646(0x1d7))))
  })
var API
Config[a1_0x3c8162(0x1e2)]()[a1_0x3c8162(0x1d0)]((_0x1a10d4) => {
  const _0x574eae = a1_0x3c8162
  _0x1a10d4[_0x574eae(0x1c2)] &&
    (initApiClient(_0x1a10d4[_0x574eae(0x1c2)]),
    _0x1a10d4[_0x574eae(0x1c4)] === _0x574eae(0x1db) && (API[_0x574eae(0x1d4)] = _0x574eae(0x1b5)))
})
function initApiClient(_0x97883b) {
  API = new TwoCaptcha({
    apiKey: _0x97883b,
    service: '2captcha.com',
    defaultTimeout: 0x12c,
    pollingInterval: 0x5,
    softId: 0xb12,
  })
}
var devtoolsConnections = {}
chrome[a1_0x3c8162(0x1d9)][a1_0x3c8162(0x1e1)]['addListener'](function (_0xccffcb) {
  const _0x380703 = a1_0x3c8162
  _0xccffcb[_0x380703(0x1b4)][_0x380703(0x1cf)](function (_0x4b9b1f) {
    const _0x20ae1f = _0x380703
    switch (_0x4b9b1f[_0x20ae1f(0x1bf)]) {
      case _0x20ae1f(0x1cd):
        ;(devtoolsConnections[_0x4b9b1f[_0x20ae1f(0x1e5)]] = _0xccffcb),
          _0xccffcb[_0x20ae1f(0x1c7)][_0x20ae1f(0x1cf)](function () {
            delete devtoolsConnections[_0x4b9b1f['tabId']]
          })
        break
      case _0x20ae1f(0x1c9):
        for (tabId in devtoolsConnections) {
          devtoolsConnections[tabId][_0x20ae1f(0x1e3)](_0x4b9b1f)
        }
        break
      case _0x20ae1f(0x1b6):
        API[_0x20ae1f(0x1bc)](_0x4b9b1f[_0x20ae1f(0x1ce)])
          [_0x20ae1f(0x1d0)]((_0xe0d223) => {
            const _0x31c809 = _0x20ae1f
            _0xccffcb[_0x31c809(0x1e3)]({ command: _0x31c809(0x1b6), request: _0x4b9b1f, response: _0xe0d223 })
          })
          [_0x20ae1f(0x1d5)]((_0x438725) => {
            const _0x4628b2 = _0x20ae1f
            _0xccffcb[_0x4628b2(0x1e3)]({
              command: _0x4628b2(0x1b6),
              request: _0x4b9b1f,
              error: _0x438725[_0x4628b2(0x1bd)],
            })
          })
        break
      case _0x20ae1f(0x1c6):
        console[_0x20ae1f(0x1dc)](_0x20ae1f(0x1bb))
        break
      default:
        let _0x3fed65 = _0xccffcb['name'] + '_' + _0x4b9b1f[_0x20ae1f(0x1e4)]
        if (self[_0x3fed65] === undefined) return
        self[_0x3fed65](_0x4b9b1f)
          [_0x20ae1f(0x1d0)]((_0x2dd0cb) => {
            const _0x47c205 = _0x20ae1f
            _0xccffcb[_0x47c205(0x1e3)]({
              action: _0x4b9b1f[_0x47c205(0x1e4)],
              request: _0x4b9b1f,
              response: _0x2dd0cb,
            })
          })
          [_0x20ae1f(0x1d5)]((_0x296649) => {
            const _0xa1a4b1 = _0x20ae1f
            _0xccffcb[_0xa1a4b1(0x1e3)]({
              action: _0x4b9b1f['action'],
              request: _0x4b9b1f,
              error: _0x296649[_0xa1a4b1(0x1bd)],
            })
          })
    }
  })
}),
  chrome[a1_0x3c8162(0x1d9)]['onMessage']['addListener'](function (_0x1b56bf, _0xc78424) {
    const _0x2ed87d = a1_0x3c8162
    if (_0xc78424 && _0xc78424['tab']) {
      var _0x27528e = _0xc78424[_0x2ed87d(0x1e6)]['id']
      _0x27528e in devtoolsConnections
        ? devtoolsConnections[_0x27528e][_0x2ed87d(0x1e3)](_0x1b56bf)
        : console[_0x2ed87d(0x1da)](_0x2ed87d(0x1d2))
    } else console[_0x2ed87d(0x1da)]('sender.tab\x20not\x20defined.')
    return !![]
  }),
  chrome['tabs']['onUpdated'][a1_0x3c8162(0x1cf)](function (_0x523ef6, _0x18a465, _0xf12ea5) {
    const _0x38405e = a1_0x3c8162
    _0x523ef6 in devtoolsConnections &&
      _0x18a465[_0x38405e(0x1ba)] === _0x38405e(0x1d8) &&
      devtoolsConnections[_0x523ef6][_0x38405e(0x1e3)]({ name: _0x38405e(0x1c3) })
  })
function a1_0x2e55() {
  const _0x3ece56 = [
    'solved',
    'onDisconnect',
    'You\x20entered\x20worker\x20key!\x20Switch\x20your\x20account\x20into\x20\x22customer\x22\x20mode\x20to\x20get\x20right\x20API-KEY',
    '2captcha-devtools',
    '480ioytHh',
    'getURL',
    '17965dGwrIi',
    'init',
    'params',
    'addListener',
    'then',
    '520PpFKxa',
    'Tab\x20not\x20found\x20in\x20connection\x20list.',
    'customer',
    'service',
    'catch',
    'captchaType',
    'options/options.html',
    'complete',
    'runtime',
    'log',
    'RUB',
    'warn',
    '9479992lyDYzp',
    '8648574sPgEms',
    'open',
    '6ZRMskb',
    'onConnect',
    'getAll',
    'postMessage',
    'action',
    'tabId',
    'tab',
    'email',
    'toUpperCase',
    'install',
    'onMessage',
    'rucaptcha.com',
    'recaptcha',
    'key_type',
    '322848WBiahW',
    'openOptionsPage',
    'status',
    'Captcha\x20already\x20solved',
    'grid',
    'message',
    '3101196Nxetql',
    'command',
    '92052HlZLyr',
    'set',
    'apiKey',
    'reloaded',
    'valute',
    '691760VHiEFZ',
  ]
  a1_0x2e55 = function () {
    return _0x3ece56
  }
  return a1_0x2e55()
}
async function popup_login(_0x2ccf8b) {
  const _0xb30848 = a1_0x3c8162
  initApiClient(_0x2ccf8b['apiKey'])
  let _0x9c8052 = await API['userInfo']()
  if (_0x9c8052[_0xb30848(0x1b7)] !== _0xb30848(0x1d3)) throw new Error(_0xb30848(0x1c8))
  return (
    (_0x9c8052['valute'] = _0x9c8052[_0xb30848(0x1c4)][_0xb30848(0x1b2)]()),
    _0x9c8052[_0xb30848(0x1c4)] === _0xb30848(0x1db) && (API['service'] = 'rucaptcha.com'),
    Config[_0xb30848(0x1c1)]({
      apiKey: _0x2ccf8b['apiKey'],
      email: _0x9c8052[_0xb30848(0x1b1)],
      valute: _0x9c8052['valute'],
    }),
    _0x9c8052
  )
}
async function popup_logout(_0x56fddb) {
  const _0xc60b62 = a1_0x3c8162
  return Config[_0xc60b62(0x1c1)]({ apiKey: null }), {}
}
async function popup_getAccountInfo(_0x4e004c) {
  const _0x2e7cd4 = a1_0x3c8162
  let _0x295b7a = await Config[_0x2e7cd4(0x1e2)]()
  if (!_0x295b7a[_0x2e7cd4(0x1c2)]) throw new Error('No\x20apiKey')
  let _0x4ae415 = await API['userInfo']()
  return (_0x4ae415['valute'] = _0x4ae415['valute'][_0x2e7cd4(0x1b2)]()), _0x4ae415
}
function a1_0x3be4(_0x5ca672, _0x91a654) {
  const _0x2e55a8 = a1_0x2e55()
  return (
    (a1_0x3be4 = function (_0x3be467, _0x1b00c4) {
      _0x3be467 = _0x3be467 - 0x1b1
      let _0x4b3c4b = _0x2e55a8[_0x3be467]
      return _0x4b3c4b
    }),
    a1_0x3be4(_0x5ca672, _0x91a654)
  )
}
async function content_solve(_0x1443f1) {
  const _0x41110d = a1_0x3c8162
  return await API[_0x1443f1[_0x41110d(0x1d6)]](_0x1443f1[_0x41110d(0x1ce)])
}
