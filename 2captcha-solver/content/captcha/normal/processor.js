function a29_0xc093(_0x12443a, _0x2c9343) {
  const _0x1bf3a2 = a29_0x1bf3()
  return (
    (a29_0xc093 = function (_0xc09301, _0xe7c5d1) {
      _0xc09301 = _0xc09301 - 0x103
      let _0x1025c5 = _0x1bf3a2[_0xc09301]
      return _0x1025c5
    }),
    a29_0xc093(_0x12443a, _0x2c9343)
  )
}
;(function (_0x379b98, _0x27e5f4) {
  const _0x16227a = a29_0xc093,
    _0xf3da99 = _0x379b98()
  while (!![]) {
    try {
      const _0x151684 =
        parseInt(_0x16227a(0x111)) / 0x1 +
        (-parseInt(_0x16227a(0x106)) / 0x2) * (parseInt(_0x16227a(0x10f)) / 0x3) +
        (-parseInt(_0x16227a(0x114)) / 0x4) * (-parseInt(_0x16227a(0x110)) / 0x5) +
        (-parseInt(_0x16227a(0x113)) / 0x6) * (-parseInt(_0x16227a(0x107)) / 0x7) +
        parseInt(_0x16227a(0x10a)) / 0x8 +
        -parseInt(_0x16227a(0x108)) / 0x9 +
        -parseInt(_0x16227a(0x10d)) / 0xa
      if (_0x151684 === _0x27e5f4) break
      else _0xf3da99['push'](_0xf3da99['shift']())
    } catch (_0xe07fa7) {
      _0xf3da99['push'](_0xf3da99['shift']())
    }
  }
})(a29_0x1bf3, 0x3428b),
  CaptchaProcessors['register']({
    captchaType: 'normal',
    canBeProcessed: function (_0x3ff633, _0x31f78f) {
      const _0x2063f1 = a29_0xc093
      if (!_0x31f78f[_0x2063f1(0x10c)]) return ![]
      return !![]
    },
    attachButton: function (_0x4c77d0, _0xd89b2f, _0x5864f9) {
      const _0x587874 = a29_0xc093
      $('#' + _0x4c77d0['inputId'])[_0x587874(0x112)](_0x5864f9)
    },
    clickButton: function (_0x16d687, _0x53e80c, _0x225dfb) {
      const _0x4c39b3 = a29_0xc093
      if (_0x53e80c[_0x4c39b3(0x115)]) _0x225dfb[_0x4c39b3(0x105)]()
    },
    getName: function (_0x407553, _0x2fbb5b) {
      return 'Normal\x20CAPTCHA\x20(Image)'
    },
    getParams: function (_0x2ddfb9, _0x3d2ded) {
      const _0xc63752 = a29_0xc093
      return { method: _0xc63752(0x10e), body: _0x2ddfb9[_0xc63752(0x10e)] }
    },
    getParamsV2: function (_0x2ba7af, _0x34c390) {
      return { type: 'ImageToTextTask', body: _0x2ba7af['base64'] }
    },
    onSolved: function (_0x54cfc2, _0x42b83d) {
      const _0x22b443 = a29_0xc093
      let _0x5a13c7 = document['getElementById'](_0x54cfc2[_0x22b443(0x109)])
      ;(_0x5a13c7['value'] = _0x42b83d),
        _0x5a13c7[_0x22b443(0x10b)](new Event(_0x22b443(0x104), { bubbles: !![], data: _0x42b83d }))
    },
    getForm: function (_0x4c858a) {
      const _0x2e9205 = a29_0xc093
      return $('#' + _0x4c858a[_0x2e9205(0x109)])['closest'](_0x2e9205(0x103))
    },
    getCallback: function (_0x1548ef) {
      return null
    },
  })
function a29_0x1bf3() {
  const _0xf7719b = [
    'after',
    '12dEMJTZ',
    '4TDVzYk',
    'autoSolveNormal',
    'form',
    'input',
    'click',
    '4CrWHyG',
    '64694aRfBjP',
    '2273373KiQcxf',
    'inputId',
    '3360856gslyOf',
    'dispatchEvent',
    'enabledForNormal',
    '5047980JLZfpM',
    'base64',
    '37266PTxebQ',
    '1660315PeGaPa',
    '225228qtAUYi',
  ]
  a29_0x1bf3 = function () {
    return _0xf7719b
  }
  return a29_0x1bf3()
}
