function a18_0x2a70(_0x53142a, _0x2ad61e) {
  const _0x3f10c7 = a18_0x3f10()
  return (
    (a18_0x2a70 = function (_0x2a7065, _0x5a31a0) {
      _0x2a7065 = _0x2a7065 - 0xbd
      let _0x4606db = _0x3f10c7[_0x2a7065]
      return _0x4606db
    }),
    a18_0x2a70(_0x53142a, _0x2ad61e)
  )
}
function a18_0x3f10() {
  const _0x1ac841 = [
    'textarea[name=h-captcha-response]',
    '1329944hAIHRY',
    'registerCaptchaWidget',
    'querySelector',
    'sitekey',
    'dataset',
    '12NfhTgw',
    '202989LRlEeO',
    'now',
    '508160PbMbcQ',
    '1069968WDzFRq',
    'hcaptcha',
    'hcaptcha-container-',
    'callback',
    '70839NjJfQF',
    '2967864GCBgis',
    '81734oYaRzp',
  ]
  a18_0x3f10 = function () {
    return _0x1ac841
  }
  return a18_0x3f10()
}
;(function (_0x4819cf, _0x4c1446) {
  const _0x12f71d = a18_0x2a70,
    _0x9b06b7 = _0x4819cf()
  while (!![]) {
    try {
      const _0x542340 =
        parseInt(_0x12f71d(0xbe)) / 0x1 +
        -parseInt(_0x12f71d(0xc7)) / 0x2 +
        (parseInt(_0x12f71d(0xc5)) / 0x3) * (parseInt(_0x12f71d(0xbd)) / 0x4) +
        -parseInt(_0x12f71d(0xc0)) / 0x5 +
        parseInt(_0x12f71d(0xc1)) / 0x6 +
        parseInt(_0x12f71d(0xc9)) / 0x7 +
        -parseInt(_0x12f71d(0xc6)) / 0x8
      if (_0x542340 === _0x4c1446) break
      else _0x9b06b7['push'](_0x9b06b7['shift']())
    } catch (_0x25c554) {
      _0x9b06b7['push'](_0x9b06b7['shift']())
    }
  }
})(a18_0x3f10, 0x1f69a),
  (() => {
    setInterval(function () {
      const _0x59914a = a18_0x2a70
      if (window[_0x59914a(0xca)]) {
        if (isCaptchaWidgetRegistered(_0x59914a(0xc2), 0x0)) return
        let _0x145631 = document[_0x59914a(0xcb)](_0x59914a(0xc8))
        if (!_0x145631) return
        let _0x45f4ac = _0x145631['parentNode']
        !_0x45f4ac['id'] && (_0x45f4ac['id'] = _0x59914a(0xc3) + Date[_0x59914a(0xbf)]()),
          _0x45f4ac[_0x59914a(0xcd)]['sitekey'] != null &&
            registerCaptchaWidget({
              captchaType: 'hcaptcha',
              widgetId: 0x0,
              containerId: _0x45f4ac['id'],
              sitekey: _0x45f4ac['dataset'][_0x59914a(0xcc)] || null,
              callback: _0x45f4ac[_0x59914a(0xcd)][_0x59914a(0xc4)] || null,
            })
      }
    }, 0x7d0)
  })()
