function a27_0x129f() {
  const _0x46bdc9 = [
    'pageUrl',
    'onClicked',
    'loadTaintedImageInBackgroundFrame',
    '217400WxjtPb',
    'then',
    '2128280QJoakI',
    'src',
    'push',
    'create',
    'addListener',
    '472678mWYuFY',
    '1px',
    'normalSources',
    'Mark\x20As\x20Captcha\x20Source',
    '2031102RaxjFh',
    'runtime',
    'set',
    'frameId',
    '2529576GRBSZz',
    'iframe',
    'imageManualShown',
    'contextMenus',
    'host',
    'tabs',
    '2639445dyPPBn',
    'editable',
    'putCaptchaAnswerHere',
    '645558SeagAy',
    'command',
    'height',
    'undefined',
    'markAsCaptchaSource',
    'forEach',
    'image',
    'local',
    'getContextMenuEl',
    'img_src',
    'body',
    'sendMessage',
    'input',
    'xpath',
  ]
  a27_0x129f = function () {
    return _0x46bdc9
  }
  return a27_0x129f()
}
const a27_0x2fb5aa = a27_0x534e
;(function (_0x2f0f44, _0x45f594) {
  const _0x2540e8 = a27_0x534e,
    _0x203f4a = _0x2f0f44()
  while (!![]) {
    try {
      const _0x510519 =
        parseInt(_0x2540e8(0x120)) / 0x1 +
        parseInt(_0x2540e8(0x131)) / 0x2 +
        -parseInt(_0x2540e8(0x124)) / 0x3 +
        -parseInt(_0x2540e8(0x119)) / 0x4 +
        parseInt(_0x2540e8(0x12e)) / 0x5 +
        -parseInt(_0x2540e8(0x128)) / 0x6 +
        parseInt(_0x2540e8(0x11b)) / 0x7
      if (_0x510519 === _0x45f594) break
      else _0x203f4a['push'](_0x203f4a['shift']())
    } catch (_0x1eaa92) {
      _0x203f4a['push'](_0x203f4a['shift']())
    }
  }
})(a27_0x129f, 0x73d26)
function imageContextMenuAttachSourceHandler(_0x518674, _0x505fab) {
  const _0x22f974 = a27_0x534e
  chrome['storage'][_0x22f974(0x10f)]['get'](_0x22f974(0x12a), function (_0x313039) {
    const _0x3d8535 = _0x22f974
    chrome[_0x3d8535(0x12d)][_0x3d8535(0x113)](
      _0x505fab['id'],
      {
        command: _0x3d8535(0x110),
        showManual: _0x313039[_0x3d8535(0x12a)] ? ![] : !![],
        element: _0x518674[_0x3d8535(0x12f)] ? _0x3d8535(0x114) : _0x3d8535(0x10e),
      },
      { frameId: _0x518674[_0x3d8535(0x127)] },
      (_0xb212f7) => {
        const _0x353094 = _0x3d8535
        saveElementPath(
          new URL(_0x518674[_0x353094(0x116)])[_0x353094(0x12c)],
          _0x518674[_0x353094(0x12f)] ? _0x353094(0x114) : 'image',
          _0xb212f7[_0x353094(0x115)],
        )
      },
    )
  })
}
chrome[a27_0x2fb5aa(0x12b)]['removeAll'](function () {
  const _0x3410de = a27_0x2fb5aa
  chrome[_0x3410de(0x12b)]['create']({ id: _0x3410de(0x135), title: _0x3410de(0x123), contexts: [_0x3410de(0x10e)] }),
    chrome[_0x3410de(0x12b)][_0x3410de(0x11e)]({
      id: _0x3410de(0x130),
      title: 'Put\x20Captcha\x20Answer\x20Here',
      contexts: [_0x3410de(0x12f)],
    })
}),
  chrome['contextMenus'][a27_0x2fb5aa(0x117)]['addListener'](imageContextMenuAttachSourceHandler)
function saveElementPath(_0x26ab6c, _0x27c396, _0x1b8b0f) {
  const _0x2c3f49 = a27_0x2fb5aa
  Config['get'](_0x2c3f49(0x122))[_0x2c3f49(0x11a)]((_0x4e1859) => {
    const _0x4053ac = _0x2c3f49
    let _0x5219b2 = null
    _0x4e1859[_0x4053ac(0x10d)](function (_0x5d51c2) {
      if (_0x5d51c2['host'] == _0x26ab6c) _0x5219b2 = _0x5d51c2
    }),
      !_0x5219b2 && ((_0x5219b2 = { host: _0x26ab6c, image: '', input: '' }), _0x4e1859[_0x4053ac(0x11d)](_0x5219b2)),
      (_0x5219b2[_0x27c396] = _0x1b8b0f),
      Config[_0x4053ac(0x126)]({ normalSources: _0x4e1859 })
  })
}
function a27_0x534e(_0x50deea, _0x24d911) {
  const _0x129f7c = a27_0x129f()
  return (
    (a27_0x534e = function (_0x534e92, _0x51ac17) {
      _0x534e92 = _0x534e92 - 0x10d
      let _0x43ea40 = _0x129f7c[_0x534e92]
      return _0x43ea40
    }),
    a27_0x534e(_0x50deea, _0x24d911)
  )
}
chrome[a27_0x2fb5aa(0x125)]['onMessage'][a27_0x2fb5aa(0x11f)]((_0x1e46ac, _0x38963b, _0x239968) => {
  const _0x186efc = a27_0x2fb5aa
  if (_0x1e46ac[_0x186efc(0x132)] === _0x186efc(0x118)) {
    if (typeof document !== _0x186efc(0x134)) {
      let _0x3a5dd2 = document['createElement'](_0x186efc(0x129))
      ;(_0x3a5dd2[_0x186efc(0x11c)] = _0x1e46ac[_0x186efc(0x111)]),
        (_0x3a5dd2['width'] = '1px'),
        (_0x3a5dd2[_0x186efc(0x133)] = _0x186efc(0x121)),
        (_0x3a5dd2['name'] = _0x1e46ac[_0x186efc(0x111)]),
        document[_0x186efc(0x112)]['appendChild'](_0x3a5dd2),
        _0x239968({})
    }
  } else _0x239968(undefined)
})
