function a35_0x595d() {
  const _0x5ab8df = [
    'form',
    'closest',
    'reCAPTCHA\x20Audio',
    '3574sNYTpD',
    '#audio-response',
    '64575JUhYGF',
    'audio',
    '510528OkQWRZ',
    'register',
    '5109097nHktHE',
    'dispatchEvent',
    'setTimeout',
    'getElementById',
    '4btaaeo',
    '3329750BurWra',
    'body',
    '#recaptcha-verify-button',
    'inputAnswer',
    '765486xfMGBM',
    '6965453beVDkx',
    '46vCZNCo',
    'querySelector',
    'delay',
    'callback',
    'click',
    'lang',
    'enabledForRecaptchaAudio',
    'after',
    'input',
    'AudioTask',
    'containerId',
    '20XXSNvt',
    'value',
    '8qJcZqM',
  ]
  a35_0x595d = function () {
    return _0x5ab8df
  }
  return a35_0x595d()
}
const a35_0x1911e5 = a35_0x7cbe
function a35_0x7cbe(_0x35eccd, _0x24154f) {
  const _0x595d18 = a35_0x595d()
  return (
    (a35_0x7cbe = function (_0x7cbe09, _0x1cfe60) {
      _0x7cbe09 = _0x7cbe09 - 0x17e
      let _0x806afb = _0x595d18[_0x7cbe09]
      return _0x806afb
    }),
    a35_0x7cbe(_0x35eccd, _0x24154f)
  )
}
;(function (_0x3b368c, _0x15e585) {
  const _0x132874 = a35_0x7cbe,
    _0x148688 = _0x3b368c()
  while (!![]) {
    try {
      const _0x145b0c =
        (-parseInt(_0x132874(0x192)) / 0x1) * (parseInt(_0x132874(0x181)) / 0x2) +
        -parseInt(_0x132874(0x196)) / 0x3 +
        (parseInt(_0x132874(0x19c)) / 0x4) * (parseInt(_0x132874(0x19d)) / 0x5) +
        -parseInt(_0x132874(0x17f)) / 0x6 +
        (-parseInt(_0x132874(0x198)) / 0x7) * (-parseInt(_0x132874(0x18e)) / 0x8) +
        (parseInt(_0x132874(0x194)) / 0x9) * (parseInt(_0x132874(0x18c)) / 0xa) +
        -parseInt(_0x132874(0x180)) / 0xb
      if (_0x145b0c === _0x15e585) break
      else _0x148688['push'](_0x148688['shift']())
    } catch (_0x1722ba) {
      _0x148688['push'](_0x148688['shift']())
    }
  }
})(a35_0x595d, 0x60ebd),
  CaptchaProcessors[a35_0x1911e5(0x197)]({
    captchaType: 'recaptcha_audio',
    canBeProcessed: function (_0x38f080, _0x11f168) {
      const _0x37a85a = a35_0x1911e5
      if (!_0x11f168[_0x37a85a(0x187)]) return ![]
      if (!_0x38f080[_0x37a85a(0x19e)]) return ![]
      return !![]
    },
    attachButton: function (_0x883045, _0x23c3f9, _0x34e7dd) {
      const _0x40abec = a35_0x1911e5
      let _0x3719c4 = $('#' + _0x883045[_0x40abec(0x18b)])[_0x40abec(0x190)](_0x40abec(0x19e))
      _0x3719c4[_0x40abec(0x188)](_0x34e7dd)
    },
    clickButton: function (_0x4dc05f, _0x4a5136, _0x497a6d) {
      const _0x534fcf = a35_0x1911e5
      _0x497a6d[_0x534fcf(0x185)]()
    },
    onSolved: function (_0x4cb28a, _0xe694) {
      const _0x395c06 = a35_0x1911e5
      this[_0x395c06(0x17e)](_0xe694)['then']()
    },
    inputAnswer: async function (_0x16ba92) {
      const _0x1a0660 = a35_0x1911e5,
        _0x265142 = document[_0x1a0660(0x182)](_0x1a0660(0x193))
      ;(_0x265142[_0x1a0660(0x18d)] = _0x16ba92),
        _0x265142[_0x1a0660(0x199)](new Event(_0x1a0660(0x189), { bubbles: !![], data: _0x16ba92 })),
        await this[_0x1a0660(0x183)](0x64)
      const _0x43d251 = document[_0x1a0660(0x182)](_0x1a0660(0x19f))
      _0x43d251[_0x1a0660(0x185)]()
    },
    getForm: function (_0x2d74d9) {
      const _0x168b7f = a35_0x1911e5,
        _0x46857a = document[_0x168b7f(0x19b)](_0x2d74d9['containerId'])
      return _0x46857a[_0x168b7f(0x190)](_0x168b7f(0x18f))
    },
    getCallback: function (_0x35b584) {
      const _0x5a2189 = a35_0x1911e5
      return _0x35b584[_0x5a2189(0x184)]
    },
    getName: function (_0x4d02d7, _0xe76433) {
      const _0x223b02 = a35_0x1911e5
      return _0x223b02(0x191)
    },
    getParams: function (_0x597046, _0x5c884e) {
      const _0x5a8923 = a35_0x1911e5
      return { type: _0x5a8923(0x195), body: _0x597046[_0x5a8923(0x19e)], lang: _0x597046[_0x5a8923(0x186)] }
    },
    getParamsV2: function (_0x2a7e40, _0x4158d6) {
      const _0x52917b = a35_0x1911e5
      return { method: _0x52917b(0x18a), body: _0x2a7e40[_0x52917b(0x19e)], lang: _0x2a7e40[_0x52917b(0x186)] }
    },
    delay: function (_0x5e616b) {
      const _0x2744fb = a35_0x1911e5
      return new Promise((_0x2239e4) => window[_0x2744fb(0x19a)](_0x2239e4, _0x5e616b))
    },
  })
