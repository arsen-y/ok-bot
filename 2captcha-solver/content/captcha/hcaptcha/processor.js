function a20_0x1c10(_0x585743, _0x2e2ba9) {
  const _0x2325fe = a20_0x2325()
  return (
    (a20_0x1c10 = function (_0x1c100b, _0x19d0db) {
      _0x1c100b = _0x1c100b - 0x1e9
      let _0x16ae10 = _0x2325fe[_0x1c100b]
      return _0x16ae10
    }),
    a20_0x1c10(_0x585743, _0x2e2ba9)
  )
}
const a20_0x4d830a = a20_0x1c10
function a20_0x2325() {
  const _0x2ca845 = [
    '2656LEaarQ',
    'enabledForHCaptcha',
    'callback',
    'autoSolveHCaptcha',
    '9XkVVKF',
    '1910480zAfqMa',
    'outerWidth',
    'length',
    'containerId',
    'register',
    '10qeXARL',
    '10802836EvIbQq',
    'form',
    '27503CldvTZ',
    'find',
    'click',
    '116iQEZAo',
    'textarea',
    '12CyKZZE',
    'hcaptcha',
    'css',
    'val',
    'sitekey',
    'iframe',
    'href',
    'append',
    '900537ajTfqc',
    '6055eqCjXf',
    '2126120pwZqUD',
    'data-hcaptcha-response',
  ]
  a20_0x2325 = function () {
    return _0x2ca845
  }
  return a20_0x2325()
}
;(function (_0x2065a7, _0xb595e6) {
  const _0x314124 = a20_0x1c10,
    _0x462f2c = _0x2065a7()
  while (!![]) {
    try {
      const _0x55c849 =
        (parseInt(_0x314124(0x206)) / 0x1) * (-parseInt(_0x314124(0x1f2)) / 0x2) +
        -parseInt(_0x314124(0x202)) / 0x3 +
        (parseInt(_0x314124(0x1f8)) / 0x4) * (-parseInt(_0x314124(0x203)) / 0x5) +
        (-parseInt(_0x314124(0x1fa)) / 0x6) * (parseInt(_0x314124(0x1f5)) / 0x7) +
        -parseInt(_0x314124(0x1ed)) / 0x8 +
        (parseInt(_0x314124(0x1ec)) / 0x9) * (-parseInt(_0x314124(0x204)) / 0xa) +
        parseInt(_0x314124(0x1f3)) / 0xb
      if (_0x55c849 === _0xb595e6) break
      else _0x462f2c['push'](_0x462f2c['shift']())
    } catch (_0x1822c5) {
      _0x462f2c['push'](_0x462f2c['shift']())
    }
  }
})(a20_0x2325, 0x2a88a),
  CaptchaProcessors[a20_0x4d830a(0x1f1)]({
    captchaType: a20_0x4d830a(0x1fb),
    canBeProcessed: function (_0x31eb66, _0x357beb) {
      const _0x46c328 = a20_0x4d830a
      if (!_0x357beb[_0x46c328(0x1e9)]) return ![]
      if (!$('#' + _0x31eb66['containerId'])[_0x46c328(0x1ef)]) return ![]
      if (!_0x31eb66[_0x46c328(0x1fe)]) return ![]
      return !![]
    },
    attachButton: function (_0x470d32, _0x4e6ca3, _0xa59d02) {
      const _0x5aa92f = a20_0x4d830a
      let _0x1ccc7e = $('#' + _0x470d32[_0x5aa92f(0x1f0)])
      _0xa59d02[_0x5aa92f(0x1fc)]({ width: _0x1ccc7e[_0x5aa92f(0x1f6)](_0x5aa92f(0x1ff))[_0x5aa92f(0x1ee)]() + 'px' }),
        _0x1ccc7e[_0x5aa92f(0x201)](_0xa59d02)
    },
    clickButton: function (_0x4ec1a9, _0x1e8d7b, _0x1e4dd3) {
      const _0x1835ed = a20_0x4d830a
      if (_0x1e8d7b[_0x1835ed(0x1eb)]) _0x1e4dd3[_0x1835ed(0x1f7)]()
    },
    getName: function () {
      return 'hCaptcha'
    },
    getParams: function (_0x3bb772, _0x52f294) {
      const _0x3b0bc8 = a20_0x4d830a
      return { method: 'hcaptcha', url: location[_0x3b0bc8(0x200)], sitekey: _0x3bb772['sitekey'] }
    },
    getParamsV2: function (_0x4da2f5, _0x1c1b3a) {
      const _0x40af1f = a20_0x4d830a
      return {
        type: 'HCaptchaTaskProxyless',
        websiteURL: location[_0x40af1f(0x200)],
        websiteKey: _0x4da2f5[_0x40af1f(0x1fe)],
      }
    },
    onSolved: function (_0x318b01, _0x5d6c3c) {
      const _0x550356 = a20_0x4d830a
      let _0xebba0 = $('#' + _0x318b01['containerId'])
      _0xebba0['find'](_0x550356(0x1f9))[_0x550356(0x1fd)](_0x5d6c3c),
        _0xebba0[_0x550356(0x1f6)]('iframe')['attr'](_0x550356(0x205), _0x5d6c3c)
    },
    getForm: function (_0x1af419) {
      const _0x3d4343 = a20_0x4d830a
      return $('#' + _0x1af419['containerId'])['closest'](_0x3d4343(0x1f4))
    },
    getCallback: function (_0x56caf5) {
      const _0x9714e5 = a20_0x4d830a
      return _0x56caf5[_0x9714e5(0x1ea)]
    },
  })
