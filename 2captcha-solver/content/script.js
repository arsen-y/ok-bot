const a45_0x5a7995 = a45_0x4301
;(function (_0x366da6, _0x4007b6) {
  const _0x400b32 = a45_0x4301,
    _0x4def51 = _0x366da6()
  while (!![]) {
    try {
      const _0x564f65 =
        parseInt(_0x400b32(0x120)) / 0x1 +
        -parseInt(_0x400b32(0xd1)) / 0x2 +
        (parseInt(_0x400b32(0x14d)) / 0x3) * (-parseInt(_0x400b32(0xff)) / 0x4) +
        parseInt(_0x400b32(0xee)) / 0x5 +
        -parseInt(_0x400b32(0xea)) / 0x6 +
        -parseInt(_0x400b32(0x110)) / 0x7 +
        parseInt(_0x400b32(0xce)) / 0x8
      if (_0x564f65 === _0x4007b6) break
      else _0x4def51['push'](_0x4def51['shift']())
    } catch (_0x55fb56) {
      _0x4def51['push'](_0x4def51['shift']())
    }
  }
})(a45_0xc666, 0x332e4),
  Config[a45_0x5a7995(0xf6)]()[a45_0x5a7995(0xe5)](function (_0x1fe2ff) {
    const _0x3a0f5d = a45_0x5a7995,
      _0x531b45 = isBlockDomain(_0x1fe2ff[_0x3a0f5d(0x135)])
    let _0x340a8e = [[_0x3a0f5d(0xc6)], ['content/communication_helpers.js']]
    _0x1fe2ff['isPluginEnabled'] &&
      (_0x340a8e = [
        ..._0x340a8e,
        ['content/captcha/geetest/interceptor.js', _0x1fe2ff['enabledForGeetest'] && !_0x531b45],
        [_0x3a0f5d(0x10d), _0x1fe2ff[_0x3a0f5d(0x154)] && !_0x531b45],
        [_0x3a0f5d(0x138), _0x1fe2ff[_0x3a0f5d(0xc0)] && !_0x531b45],
        [_0x3a0f5d(0xfd), !_0x531b45],
        [_0x3a0f5d(0x13b), !_0x531b45],
        [
          _0x3a0f5d(0x10e),
          _0x1fe2ff['enabledForRecaptchaV2'] && _0x1fe2ff[_0x3a0f5d(0x10f)] === _0x3a0f5d(0xf3) && !_0x531b45,
        ],
        [
          _0x3a0f5d(0x13a),
          (_0x1fe2ff['enabledForRecaptchaV2'] || _0x1fe2ff[_0x3a0f5d(0x12f)] || _0x1fe2ff[_0x3a0f5d(0x111)]) &&
            !_0x531b45,
        ],
        [_0x3a0f5d(0xde), _0x1fe2ff['isPluginEnabled'] && _0x1fe2ff[_0x3a0f5d(0x14c)] && !_0x531b45],
        [_0x3a0f5d(0x130), _0x1fe2ff[_0x3a0f5d(0x152)] && !_0x531b45],
        [_0x3a0f5d(0x108), !_0x531b45],
        ['content/captcha/lemin/interceptor.js', _0x1fe2ff['enabledForLemin'] && !_0x531b45],
        [_0x3a0f5d(0x11e), _0x1fe2ff['enabledForYandex'] && !_0x531b45],
        [_0x3a0f5d(0xb8), _0x1fe2ff[_0x3a0f5d(0xf8)] && !_0x531b45],
        [_0x3a0f5d(0xc1), !_0x531b45],
        [_0x3a0f5d(0xe3), _0x1fe2ff['enabledForTurnstile'] && !_0x531b45],
        [
          'content/captcha/mt_captcha/interceptor.js',
          _0x1fe2ff[_0x3a0f5d(0xc5)] && _0x1fe2ff[_0x3a0f5d(0xd9)] && !_0x531b45,
        ],
      ]),
      _0x340a8e[_0x3a0f5d(0x148)]((_0x4e0e53) => {
        const _0x538eef = _0x3a0f5d
        if (_0x4e0e53[_0x538eef(0xda)] > 0x1 && !_0x4e0e53[0x1]) return
        let _0x595563 = document[_0x538eef(0xeb)](_0x538eef(0xcd))
        ;(_0x595563[_0x538eef(0x144)] = chrome[_0x538eef(0x140)]['getURL'](_0x4e0e53[0x0])),
          (document[_0x538eef(0x147)] || document['documentElement'])[_0x538eef(0x136)](_0x595563)
      })
  })
var CaptchaProcessors = {
  list: {},
  register: function (_0x40a2c9) {
    const _0x12aa3f = a45_0x5a7995
    this[_0x12aa3f(0xd0)][_0x40a2c9[_0x12aa3f(0xfe)]] = _0x40a2c9
  },
  get: function (_0x1fcaa4) {
    const _0x1215b2 = a45_0x5a7995
    return this[_0x1215b2(0xd0)][_0x1fcaa4]
  },
}
let CAPTCHA_WIDGETS_LOOP = setInterval(function () {
  const _0x51b4be = a45_0x5a7995
  Config[_0x51b4be(0xf6)]()['then']((_0x6009cf) => {
    const _0x19166d = _0x51b4be
    if (!_0x6009cf[_0x19166d(0xc5)]) return
    if (_0x6009cf['apiKey'] === null) return
    if (isBlockDomain(_0x6009cf[_0x19166d(0x135)])) return
    $(_0x19166d(0x147))
      [_0x19166d(0x127)]('captcha-widget')
      [_0x19166d(0xd3)](function () {
        const _0x1f488d = _0x19166d
        let _0x25e876 = $(this),
          _0x1df17d = prepareWidgetInfo(_0x25e876[0x0][_0x1f488d(0xbe)])
        _0x1df17d[_0x1f488d(0x119)] &&
          (getSolverButton(_0x1df17d[_0x1f488d(0xfe)], _0x1df17d[_0x1f488d(0xf9)])[_0x1f488d(0xd6)](),
          _0x25e876['removeAttr']('data-loaded'),
          _0x25e876['removeAttr']('data-reset'))
        if (_0x1df17d['loaded']) return
        let _0x48be2e = CaptchaProcessors[_0x1f488d(0xca)](_0x1df17d[_0x1f488d(0xfe)])
        if (_0x48be2e[_0x1f488d(0x12b)](_0x1df17d, _0x6009cf)) {
          let _0x26a5d3 = createSolverButton(_0x1df17d[_0x1f488d(0xfe)], _0x1df17d[_0x1f488d(0xf9)], _0x6009cf)
          _0x6009cf[_0x1f488d(0xe8)] === _0x1f488d(0xf7)
            ? $(_0x1f488d(0xc4))[_0x1f488d(0x117)](_0x26a5d3)
            : _0x48be2e[_0x1f488d(0x104)](_0x1df17d, _0x6009cf, _0x26a5d3)
          typeof _0x48be2e[_0x1f488d(0xd2)] === _0x1f488d(0xcb) &&
            _0x48be2e[_0x1f488d(0xd2)](_0x1df17d, _0x6009cf, _0x26a5d3)
          _0x25e876[0x0]['dataset']['loaded'] = !![]
          const _0x557c68 = Config[_0x1f488d(0xc7)](
              _0x48be2e[_0x1f488d(0x141)](_0x1df17d, _0x6009cf),
              _0x1df17d['captchaType'],
            ),
            _0x48424b = _0x48be2e[_0x1f488d(0xdd)](_0x1df17d, _0x6009cf),
            _0xb7b625 = _0x48be2e[_0x1f488d(0x155)](_0x1df17d, _0x6009cf)
          background['postMessage'](
            {
              name: _0x1f488d(0x11c),
              command: _0x1f488d(0x134),
              data: {
                captchaType: _0x1df17d[_0x1f488d(0xfe)],
                captchaName: _0xb7b625,
                params: {
                  key: _0x6009cf[_0x1f488d(0x121)],
                  method: _0x1df17d[_0x1f488d(0xfe)],
                  ..._0x557c68,
                  json: 0x1,
                },
                params_v2: { clientKey: _0x6009cf[_0x1f488d(0x121)], task: _0x48424b },
              },
            },
            '*',
          )
        }
      })
  })
}, 0x7d0)
var background = chrome[a45_0x5a7995(0x140)][a45_0x5a7995(0xbb)]({ name: a45_0x5a7995(0x13d) })
background[a45_0x5a7995(0xf4)][a45_0x5a7995(0x137)](function (_0x5c0982) {
  const _0x49eb4b = a45_0x5a7995
  if (_0x5c0982[_0x49eb4b(0x153)] === _0x49eb4b(0x105)) {
    if (_0x5c0982[_0x49eb4b(0xdf)][_0x49eb4b(0x100)]) return respondToWebPageMessage(_0x5c0982)
    let _0x570de2 = getSolverButton(_0x5c0982['request'][_0x49eb4b(0xfe)], _0x5c0982['request'][_0x49eb4b(0xf9)])
    _0x5c0982[_0x49eb4b(0x13e)] === undefined
      ? (changeSolverButtonState(
          _0x570de2,
          _0x49eb4b(0x132),
          chrome[_0x49eb4b(0xd7)][_0x49eb4b(0xf2)](_0x49eb4b(0x132)),
        ),
        doActionsOnSuccess(_0x5c0982))
      : (changeSolverButtonState(_0x570de2, 'error', _0x5c0982['error']), tryAgain(_0x570de2))
  }
}),
  background[a45_0x5a7995(0x143)][a45_0x5a7995(0x137)](function (_0x88adc8) {
    clearInterval(CAPTCHA_WIDGETS_LOOP)
  })
function doActionsOnSuccess(_0x490fac) {
  const _0x4c2315 = a45_0x5a7995
  let _0xd2e3c3 = getWidgetInfo(_0x490fac[_0x4c2315(0xdf)][_0x4c2315(0xfe)], _0x490fac[_0x4c2315(0xdf)]['widgetId']),
    _0x28b67f = CaptchaProcessors[_0x4c2315(0xca)](_0x490fac[_0x4c2315(0xdf)]['captchaType'])
  Config[_0x4c2315(0xf6)]()['then']((_0x113921) => {
    const _0x39373b = _0x4c2315
    _0x28b67f[_0x39373b(0x102)](_0xd2e3c3, _0x490fac[_0x39373b(0xdc)][_0x39373b(0x10c)], _0x113921)
    let _0x1b46be = _0x28b67f[_0x39373b(0x107)](_0xd2e3c3)
    if (_0x1b46be) {
      let _0x34c514 = document[_0x39373b(0xeb)]('textarea')
      ;(_0x34c514['id'] = _0x39373b(0x12e)),
        _0x34c514[_0x39373b(0xb7)]('data-function', _0x1b46be),
        (_0x34c514[_0x39373b(0x11f)] = _0x490fac[_0x39373b(0xdc)][_0x39373b(0x10c)]),
        document[_0x39373b(0xc4)][_0x39373b(0xb9)](_0x34c514)
    }
    if (_0x113921[_0x39373b(0x145)] === !![]) {
      let _0x11f4f1 = parseInt(_0x113921[_0x39373b(0x14a)]) * 0x3e8
      setTimeout(function () {
        const _0x1b0aa9 = _0x39373b
        !executeAutoSubmitRule(_0x113921[_0x1b0aa9(0xfb)]) && _0x28b67f[_0x1b0aa9(0x112)](_0xd2e3c3)[_0x1b0aa9(0xb0)]()
      }, _0x11f4f1)
    }
  })
}
function isBlockDomain(_0x784f19) {
  const _0x143120 = a45_0x5a7995,
    _0x1c879c = _0x784f19[_0x143120(0xd5)]('\x0a') || []
  for (let _0x268ac2 = 0x0; _0x268ac2 < _0x1c879c['length']; _0x268ac2++) {
    if (_0x1c879c[_0x268ac2]) {
      const _0x14eb15 = new RegExp(_0x1c879c[_0x268ac2], 'i')
      if (_0x14eb15[_0x143120(0xe4)](location[_0x143120(0xb1)])) return !![]
    }
  }
  return ![]
}
function a45_0x4301(_0x325558, _0x3f1337) {
  const _0xc666a = a45_0xc666()
  return (
    (a45_0x4301 = function (_0x430101, _0x1d9e49) {
      _0x430101 = _0x430101 - 0xb0
      let _0x4c22ee = _0xc666a[_0x430101]
      return _0x4c22ee
    }),
    a45_0x4301(_0x325558, _0x3f1337)
  )
}
function executeAutoSubmitRule(_0x207334) {
  const _0xdfd299 = a45_0x5a7995
  for (let _0xfdd1ef = 0x0; _0xfdd1ef < _0x207334[_0xdfd299(0xda)]; _0xfdd1ef++) {
    let _0x5bb7d9 = new RegExp(_0x207334[_0xfdd1ef][_0xdfd299(0xb6)])
    if (_0x5bb7d9['test'](location['href'])) {
      let _0x3396e3 = document[_0xdfd299(0xeb)]('textarea')
      return (
        (_0x3396e3['id'] = 'twocaptcha-autosubmit-code'),
        (_0x3396e3[_0xdfd299(0x11f)] = _0x207334[_0xfdd1ef]['code']),
        document['body']['appendChild'](_0x3396e3),
        !![]
      )
    }
  }
  return ![]
}
function executeAutoSubmitRuleCode(_0x13a382) {}
function tryAgain(_0x245cdf) {
  const _0x388060 = a45_0x5a7995
  Config[_0x388060(0xf6)]()['then']((_0x1ad7ca) => {
    const _0xa5d5b6 = _0x388060
    let _0x42ef01 = parseInt(_0x245cdf[0x0]['dataset'][_0xa5d5b6(0x115)] || 0x0)
    _0x1ad7ca[_0xa5d5b6(0xc3)] >= _0x42ef01 &&
      setTimeout(
        function () {
          _0x245cdf['click']()
        },
        _0x1ad7ca[_0xa5d5b6(0xb3)] * 0x3e8,
      )
  })
}
function attachProxyParams(_0xe9145c, _0x56b28b) {
  const _0x26b63c = a45_0x5a7995
  if (!_0x56b28b['useProxy']) return
  let _0x600937 = _0x56b28b[_0x26b63c(0x131)][_0x26b63c(0x129)]()
  if (!_0x600937[_0x26b63c(0xda)]) return
  _0xe9145c[_0x26b63c(0x131)] = { type: _0x56b28b[_0x26b63c(0xe6)], uri: _0x600937 }
}
function createSolverButton(_0x30eade, _0x5dce30, _0x3aae1e) {
  const _0x3404df = a45_0x5a7995
  let _0x2bb234 = $(
    _0x3404df(0x133) +
      _0x3aae1e[_0x3404df(0xe8)] +
      '\x22\x20data-state=\x22ready\x22\x20data-captcha-type=\x22' +
      _0x30eade +
      _0x3404df(0xe9) +
      _0x5dce30 +
      _0x3404df(0xb2) +
      chrome[_0x3404df(0x140)][_0x3404df(0x13f)](_0x3404df(0x122)) +
      _0x3404df(0x12a) +
      chrome[_0x3404df(0xd7)][_0x3404df(0xf2)]('solveWith2Captcha') +
      '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
  )
  return (
    _0x2bb234[_0x3404df(0xd4)](function () {
      const _0xda0921 = _0x3404df
      if (![_0xda0921(0xf1), 'error'][_0xda0921(0xbd)](_0x2bb234[_0xda0921(0xc8)](_0xda0921(0x10b)))) return
      if (_0x2bb234[0x0][_0xda0921(0xbe)][_0xda0921(0x115)] && _0x2bb234[0x0][_0xda0921(0xbe)][_0xda0921(0x124)])
        return changeSolverButtonState(_0x2bb234, _0xda0921(0x13e), _0xda0921(0x149))
      changeSolverButtonState(_0x2bb234, 'solving', chrome['i18n'][_0xda0921(0xf2)](_0xda0921(0xed)))
      let _0x76a45b = getWidgetInfo(_0x30eade, _0x5dce30)
      Config[_0xda0921(0xf6)]()[_0xda0921(0xe5)](function (_0x55d98d) {
        const _0x5e0246 = _0xda0921
        let _0x5df4d9 = CaptchaProcessors[_0x5e0246(0xca)](_0x30eade)['getParams'](_0x76a45b, _0x55d98d)
        attachProxyParams(_0x5df4d9, _0x55d98d),
          background[_0x5e0246(0xec)]({
            action: _0x5e0246(0x105),
            captchaType: _0x30eade,
            widgetId: _0x5dce30,
            params: _0x5df4d9,
          })
      })
    }),
    _0x2bb234
  )
}
function changeSolverButtonState(_0x127b30, _0x37cbd4, _0x12bbde) {
  const _0x57f122 = a45_0x5a7995
  _0x127b30[_0x57f122(0xc8)](_0x57f122(0x10b), _0x37cbd4),
    _0x127b30[_0x57f122(0x127)](_0x57f122(0xfc))[_0x57f122(0x128)](_0x12bbde),
    _0x37cbd4 === _0x57f122(0x13e) &&
      (_0x127b30[0x0]['dataset'][_0x57f122(0x115)] =
        parseInt(_0x127b30[0x0][_0x57f122(0xbe)]['countErrors'] || 0x0) + 0x1)
}
function getSolverButton(_0x96d256, _0x31489c) {
  const _0x411ab7 = a45_0x5a7995
  return $('.captcha-solver[data-captcha-type=' + _0x96d256 + _0x411ab7(0x106) + _0x31489c + ']')
}
function getWidgetInfo(_0x2ac729, _0x42215e) {
  const _0x5d2246 = a45_0x5a7995
  let _0x47795e = $(_0x5d2246(0x147))[_0x5d2246(0x127)](
    'captcha-widget[data-captcha-type=' + _0x2ac729 + '][data-widget-id=' + _0x42215e + ']',
  )
  if (!_0x47795e['length']) return null
  return prepareWidgetInfo(_0x47795e[0x0]['dataset'])
}
function a45_0xc666() {
  const _0x48009f = [
    'content/captcha/recaptcha/hunter.js',
    'recaptchaV2Type',
    '848435tPkDfW',
    'enabledForRecaptchaV3',
    'getForm',
    'assets/images/logo.svg',
    'children',
    'countErrors',
    'previousSibling',
    'append',
    'parse',
    'reset',
    'normalManual',
    'appendTo',
    'update',
    'button.close',
    'content/captcha/yandex/interceptor.js',
    'value',
    '7535bEOmxb',
    'apiKey',
    'assets/images/icon_32.png',
    'removeClass',
    'disposable',
    'received',
    'contextmenu',
    'find',
    'text',
    'trim',
    '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22captcha-solver-info\x22>',
    'canBeProcessed',
    'false',
    'catch',
    'twocaptcha-callback-trigger',
    'enabledForInvisibleRecaptchaV2',
    'content/captcha/arkoselabs/interceptor.js',
    'proxy',
    'solved',
    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22captcha-solver\x20captcha-solver_',
    '2captcha-devtools',
    'blackListDomain',
    'prepend',
    'addListener',
    'content/captcha/hcaptcha/interceptor.js',
    'nodeType',
    'content/captcha/recaptcha/interceptor.js',
    'content/captcha/keycaptcha/hunter.js',
    'true',
    'content',
    'error',
    'getURL',
    'runtime',
    'getParams',
    'addEventListener',
    'onDisconnect',
    'src',
    'autoSubmitForms',
    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22twocaptcha-toast\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22',
    'head',
    'forEach',
    'EXPIRED',
    'submitFormsDelay',
    '<div\x20class=\x22twocaptcha-toast-container\x22></div>',
    'enabledForRecaptchaAudio',
    '6zHMSlI',
    'unknown_action',
    'input',
    '.twocaptcha-toast\x20.close',
    'body\x20>\x20solver-ext-messages\x20>\x20solver-ext-message[data-message-id=',
    'enabledForArkoselabs',
    'action',
    'enabledForGeetest_v4',
    'getName',
    'submit',
    'href',
    '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22captcha-solver-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22',
    'repeatOnErrorDelay',
    'visible',
    'showManual',
    'url_pattern',
    'setAttribute',
    'content/captcha/amazon_waf/interceptor.js',
    'appendChild',
    'body\x20>\x20solver-ext-messages',
    'connect',
    'TEXT_NODE',
    'includes',
    'dataset',
    'element',
    'enabledForHCaptcha',
    'content/captcha/turnstile/hunter.js',
    'ownerElement',
    'repeatOnErrorTimes',
    'body',
    'isPluginEnabled',
    'content/core_helpers.js',
    'mapParams',
    'attr',
    '\x22\x20class=\x22twocaptcha-toast-logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22close\x22>&times;</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22twocaptcha-toast-message\x22>',
    'get',
    'function',
    'command',
    'script',
    '6300048nXLuQR',
    'body\x20>\x20.twocaptcha-toast-container',
    'list',
    '305304PmZPZL',
    'clickButton',
    'each',
    'click',
    'split',
    'remove',
    'i18n',
    'nodeName',
    'enabledForMTCaptcha',
    'length',
    'target',
    'response',
    'getParamsV2',
    'content/captcha/recaptcha_audio/hunter.js',
    'request',
    'comment()',
    'text()',
    'message',
    'content/captcha/turnstile/interceptor.js',
    'test',
    'then',
    'proxytype',
    'position',
    'buttonPosition',
    '\x22\x20data-widget-id=\x22',
    '1324368dHNegl',
    'createElement',
    'postMessage',
    'solving',
    '1247990zKyEfx',
    'processing-instruction()',
    'ATTRIBUTE_NODE',
    'ready',
    'getMessage',
    'token',
    'onMessage',
    'name',
    'getAll',
    'fixed',
    'enabledForAmazonWaf',
    'widgetId',
    'null',
    'autoSubmitRules',
    '.captcha-solver-info',
    'content/captcha/hcaptcha/hunter.js',
    'captchaType',
    '680836bAHDoq',
    'messageId',
    '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
    'onSolved',
    'PROCESSING_INSTRUCTION_NODE',
    'attachButton',
    'solve',
    '][data-widget-id=',
    'getCallback',
    'content/captcha/arkoselabs/hunter.js',
    'params',
    'parentNode',
    'data-state',
    'code',
    'content/captcha/geetest_v4/interceptor.js',
  ]
  a45_0xc666 = function () {
    return _0x48009f
  }
  return a45_0xc666()
}
function prepareWidgetInfo(_0xae4639) {
  const _0x477d5b = a45_0x5a7995
  let _0x2671a1 = {}
  for (let _0x368ad1 in _0xae4639) {
    _0x2671a1[_0x368ad1] = _0xae4639[_0x368ad1]
    if (_0x2671a1[_0x368ad1] === _0x477d5b(0xfa)) _0x2671a1[_0x368ad1] = null
    if (_0x2671a1[_0x368ad1] === _0x477d5b(0x12c)) _0x2671a1[_0x368ad1] = ![]
    if (_0x2671a1[_0x368ad1] === _0x477d5b(0x13c)) _0x2671a1[_0x368ad1] = !![]
  }
  return _0x2671a1
}
let webPageMsgInterval = setInterval(function () {
  const _0x324794 = a45_0x5a7995
  $(_0x324794(0xba))
    [_0x324794(0x114)]()
    [_0x324794(0xd3)](function () {
      const _0xd7d358 = _0x324794
      let _0x4f2573 = $(this)[0x0]
      if (!_0x4f2573[_0xd7d358(0xbe)][_0xd7d358(0x125)]) {
        _0x4f2573[_0xd7d358(0xbe)][_0xd7d358(0x125)] = !![]
        if (_0x4f2573[_0xd7d358(0xbe)][_0xd7d358(0x153)] === 'getConfig')
          Config[_0xd7d358(0xf6)]()
            ['then']((_0x467ecb) => {
              setWebPageMessageResponse(_0x4f2573, _0x467ecb)
            })
            [_0xd7d358(0x12d)]((_0x2e432a) => {
              const _0x3d3de3 = _0xd7d358
              setWebPageMessageResponse(_0x4f2573, { error: _0x2e432a[_0x3d3de3(0xe2)] })
            })
        else {
          if (_0x4f2573[_0xd7d358(0xbe)]['action'] === _0xd7d358(0x105)) {
            let _0x33e88b = JSON[_0xd7d358(0x118)](decodeURIComponent(_0x4f2573[_0xd7d358(0xbe)]['data']))
            background[_0xd7d358(0xec)]({
              action: _0xd7d358(0x105),
              captchaType: _0x33e88b['captchaType'],
              widgetId: _0x33e88b[_0xd7d358(0xf9)],
              params: _0x33e88b[_0xd7d358(0x109)],
              messageId: _0x4f2573[_0xd7d358(0xbe)][_0xd7d358(0x100)],
            })
          } else
            _0x4f2573[_0xd7d358(0xbe)]['action'] === 'getRecaptchaV3InterceptorInfo'
              ? setWebPageMessageResponse(_0x4f2573, {
                  extId: chrome[_0xd7d358(0x140)]['id'],
                  i18n: {
                    solving: chrome[_0xd7d358(0xd7)][_0xd7d358(0xf2)]('solving'),
                    solved: chrome[_0xd7d358(0xd7)]['getMessage'](_0xd7d358(0x132)),
                  },
                })
              : setWebPageMessageResponse(_0x4f2573, { error: _0xd7d358(0x14e) })
        }
      }
    })
}, 0xc8)
function respondToWebPageMessage(_0x5a5910) {
  const _0x4a926a = a45_0x5a7995
  let _0x233af1 = $(_0x4a926a(0x151) + _0x5a5910[_0x4a926a(0xdf)]['messageId'] + ']')
  if (!_0x233af1[_0x4a926a(0xda)]) return
  _0x5a5910[_0x4a926a(0x13e)]
    ? setWebPageMessageResponse(_0x233af1[0x0], { error: _0x5a5910[_0x4a926a(0x13e)] })
    : setWebPageMessageResponse(_0x233af1[0x0], { response: _0x5a5910[_0x4a926a(0xdc)]['code'] })
}
function setWebPageMessageResponse(_0x4eb6f0, _0x35507e) {
  const _0x5ce7ca = a45_0x5a7995
  _0x4eb6f0[_0x5ce7ca(0xbe)][_0x5ce7ca(0xdc)] = encodeURIComponent(JSON['stringify'](_0x35507e))
}
let contextMenuEl = null
document[a45_0x5a7995(0x142)](
  a45_0x5a7995(0x126),
  function (_0x347299) {
    const _0x5e02d1 = a45_0x5a7995
    contextMenuEl = _0x347299[_0x5e02d1(0xdb)]
  },
  !![],
),
  chrome[a45_0x5a7995(0x140)]['onMessage']['addListener'](function (_0x2f4754, _0x1ea99c, _0x3982ab) {
    const _0x2b5acd = a45_0x5a7995
    if (_0x2f4754[_0x2b5acd(0xcc)] == 'getContextMenuEl') {
      _0x3982ab({ xpath: getXPath(contextMenuEl) })
      if (_0x2f4754[_0x2b5acd(0xbf)] == _0x2b5acd(0x14f)) $(_0x2b5acd(0x150))[_0x2b5acd(0xd4)]()
      else _0x2f4754[_0x2b5acd(0xb5)] && showToast(chrome[_0x2b5acd(0xd7)][_0x2b5acd(0xf2)](_0x2b5acd(0x11a)))
    }
  })
function showToast(_0xa9378d) {
  const _0x325c80 = a45_0x5a7995
  !$(_0x325c80(0xcf))['length'] && $(_0x325c80(0xc4))[_0x325c80(0x117)](_0x325c80(0x14b))
  let _0x396ab3 = $(
    _0x325c80(0x146) +
      chrome['runtime'][_0x325c80(0x13f)](_0x325c80(0x113)) +
      _0x325c80(0xc9) +
      _0xa9378d +
      _0x325c80(0x101),
  )[_0x325c80(0x11b)]('.twocaptcha-toast-container')
  setTimeout(function () {
    const _0x2d69fd = _0x325c80
    _0x396ab3['addClass'](_0x2d69fd(0xb4))
  }, 0x32),
    _0x396ab3[_0x325c80(0x127)](_0x325c80(0x11d))[_0x325c80(0xd4)](function (_0x501369) {
      const _0x20e249 = _0x325c80
      _0x396ab3[_0x20e249(0x123)]('visible'),
        setTimeout(function () {
          const _0x320ae8 = _0x20e249
          _0x396ab3[_0x320ae8(0xd6)]()
        }, 0x12c)
    })
}
function getXPath(_0x336929) {
  const _0x1f7212 = a45_0x5a7995
  var _0x502bc2,
    _0x5e25cb = [],
    _0x589584 = '',
    _0x25f38a = function (_0x52fb5f) {
      const _0x37bd00 = a45_0x4301
      var _0x1cc0c8 = 0x1,
        _0x302ea0
      if (_0x52fb5f['nodeType'] == Node[_0x37bd00(0xf0)]) return null
      for (_0x302ea0 = _0x52fb5f[_0x37bd00(0x116)]; _0x302ea0; _0x302ea0 = _0x302ea0['previousSibling']) {
        _0x302ea0[_0x37bd00(0xd8)] == _0x52fb5f[_0x37bd00(0xd8)] && ++_0x1cc0c8
      }
      return _0x1cc0c8
    }
  if (_0x336929 instanceof Document) return '/'
  for (
    ;
    _0x336929 && !(_0x336929 instanceof Document);
    _0x336929 =
      _0x336929[_0x1f7212(0x139)] == Node[_0x1f7212(0xf0)] ? _0x336929[_0x1f7212(0xc2)] : _0x336929[_0x1f7212(0x10a)]
  ) {
    _0x502bc2 = _0x5e25cb[_0x5e25cb[_0x1f7212(0xda)]] = {}
    switch (_0x336929[_0x1f7212(0x139)]) {
      case Node[_0x1f7212(0xbc)]:
        _0x502bc2[_0x1f7212(0xf5)] = _0x1f7212(0xe1)
        break
      case Node['ATTRIBUTE_NODE']:
        _0x502bc2['name'] = '@' + _0x336929[_0x1f7212(0xd8)]
        break
      case Node[_0x1f7212(0x103)]:
        _0x502bc2['name'] = _0x1f7212(0xef)
        break
      case Node['COMMENT_NODE']:
        _0x502bc2['name'] = _0x1f7212(0xe0)
        break
      case Node['ELEMENT_NODE']:
        _0x502bc2[_0x1f7212(0xf5)] = _0x336929[_0x1f7212(0xd8)]
        break
    }
    _0x502bc2[_0x1f7212(0xe7)] = _0x25f38a(_0x336929)
  }
  for (var _0x149c17 = _0x5e25cb[_0x1f7212(0xda)] - 0x1; _0x149c17 >= 0x0; _0x149c17--) {
    ;(_0x502bc2 = _0x5e25cb[_0x149c17]),
      (_0x589584 += '/' + _0x502bc2[_0x1f7212(0xf5)]),
      _0x502bc2[_0x1f7212(0xe7)] != null && (_0x589584 += '[' + _0x502bc2[_0x1f7212(0xe7)] + ']')
  }
  return _0x589584
}
