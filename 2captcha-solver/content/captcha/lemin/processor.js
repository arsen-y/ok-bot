const a24_0x41c1f7 = a24_0xf0a1
function a24_0x34be() {
  const _0x2cadbd = [
    'closest',
    'href',
    '18kGNrgj',
    'autoSolveLemin',
    '42JdFHhE',
    '6151050LQojdX',
    '9041590vvlceV',
    '69668eAhIbR',
    'input[name=lemin_challenge_id]',
    'leminApiServerSubdomain',
    'lemin',
    '131642wxBCOF',
    'LeminTaskProxyless',
    '11358540AEvkrG',
    'getHelper',
    'dataset',
    'parent',
    'apiServer',
    'captchaId',
    '50DUaIVh',
    'enabledForLemin',
    'form',
    'divId',
    'val',
    'find',
    '121496NtjsHR',
    'input[name=lemin_answer]',
    'length',
    'disposable',
    '923245bdKfuH',
    'Lemin\x20CAPTCHA',
  ]
  a24_0x34be = function () {
    return _0x2cadbd
  }
  return a24_0x34be()
}
function a24_0xf0a1(_0x27f847, _0x1e1e60) {
  const _0x34bee2 = a24_0x34be()
  return (
    (a24_0xf0a1 = function (_0xf0a1ee, _0x34789a) {
      _0xf0a1ee = _0xf0a1ee - 0xcb
      let _0x2980a9 = _0x34bee2[_0xf0a1ee]
      return _0x2980a9
    }),
    a24_0xf0a1(_0x27f847, _0x1e1e60)
  )
}
;(function (_0x3d4181, _0x5452c3) {
  const _0x2ec974 = a24_0xf0a1,
    _0x137a8e = _0x3d4181()
  while (!![]) {
    try {
      const _0x54f34f =
        -parseInt(_0x2ec974(0xcf)) / 0x1 +
        (-parseInt(_0x2ec974(0xdc)) / 0x2) * (-parseInt(_0x2ec974(0xd3)) / 0x3) +
        (-parseInt(_0x2ec974(0xd8)) / 0x4) * (-parseInt(_0x2ec974(0xe4)) / 0x5) +
        -parseInt(_0x2ec974(0xd6)) / 0x6 +
        (parseInt(_0x2ec974(0xd5)) / 0x7) * (-parseInt(_0x2ec974(0xcb)) / 0x8) +
        parseInt(_0x2ec974(0xde)) / 0x9 +
        parseInt(_0x2ec974(0xd7)) / 0xa
      if (_0x54f34f === _0x5452c3) break
      else _0x137a8e['push'](_0x137a8e['shift']())
    } catch (_0x287965) {
      _0x137a8e['push'](_0x137a8e['shift']())
    }
  }
})(a24_0x34be, 0xa9ddd),
  CaptchaProcessors['register']({
    captchaType: a24_0x41c1f7(0xdb),
    canBeProcessed: function (_0x246305, _0x1b82bd) {
      const _0x539819 = a24_0x41c1f7
      if (!_0x1b82bd[_0x539819(0xe5)]) return ![]
      return !![]
    },
    attachButton: function (_0x4431ae, _0x985416, _0x5df003) {
      const _0x41301f = a24_0x41c1f7
      let _0x2e45ce = this['getHelper'](_0x4431ae)
      if (_0x2e45ce[_0x41301f(0xe9)]('.captcha-solver')[_0x41301f(0xcd)] !== 0x0) return
      _0x5df003['css']({ width: _0x2e45ce['outerWidth']() + 'px' }),
        (_0x5df003[0x0][_0x41301f(0xe0)][_0x41301f(0xce)] = !![]),
        _0x2e45ce['append'](_0x5df003)
    },
    clickButton: function (_0x4f0133, _0x51c96c, _0x12ae1a) {
      const _0x1a2397 = a24_0x41c1f7
      if (_0x51c96c[_0x1a2397(0xd4)]) _0x12ae1a['click']()
    },
    getName: function (_0xa790ba, _0x116c82) {
      const _0x31a33e = a24_0x41c1f7
      return _0x31a33e(0xd0)
    },
    getParams: function (_0x2b122b, _0x168f28) {
      const _0x54cee8 = a24_0x41c1f7
      let _0x5a69d0 = {
        method: _0x54cee8(0xdb),
        url: location[_0x54cee8(0xd2)],
        captchaId: _0x2b122b[_0x54cee8(0xe3)],
        divId: _0x2b122b[_0x54cee8(0xe7)],
      }
      return _0x2b122b['apiServer'] && (_0x5a69d0[_0x54cee8(0xe2)] = _0x2b122b[_0x54cee8(0xe2)]), _0x5a69d0
    },
    getParamsV2: function (_0x2793ab, _0xe759eb) {
      const _0x57fdca = a24_0x41c1f7
      let _0x1d0d26 = {
        type: _0x57fdca(0xdd),
        websiteURL: location[_0x57fdca(0xd2)],
        captchaId: _0x2793ab[_0x57fdca(0xe3)],
        divId: _0x2793ab['divId'],
      }
      return _0x2793ab['apiServer'] && (_0x1d0d26[_0x57fdca(0xda)] = _0x2793ab[_0x57fdca(0xe2)]), _0x1d0d26
    },
    onSolved: function (_0x22be68, { challenge_id: _0x4b45e9, answer: _0x5b6168 }) {
      const _0x7dc6e = a24_0x41c1f7
      let _0x28b37d = this['getHelper'](_0x22be68)
      _0x28b37d[_0x7dc6e(0xe9)](_0x7dc6e(0xd9))['val'](_0x4b45e9),
        _0x28b37d['find'](_0x7dc6e(0xcc))[_0x7dc6e(0xe8)](_0x5b6168)
    },
    getForm: function (_0x5d3c4a) {
      const _0xcf6554 = a24_0x41c1f7
      return this[_0xcf6554(0xdf)](_0x5d3c4a)[_0xcf6554(0xd1)](_0xcf6554(0xe6))
    },
    getCallback: function (_0x229bb7) {
      return null
    },
    getHelper: function (_0x58eac2) {
      const _0x528c94 = a24_0x41c1f7
      let _0x282668 = $('#' + _0x58eac2[_0x528c94(0xe7)])
      return _0x282668[_0x528c94(0xe1)]()
    },
  })
