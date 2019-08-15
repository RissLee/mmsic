(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  [
    function(t, e, n) {
      'use strict';
      var i = Object.prototype.hasOwnProperty;
      function a(t, e) {
        return Array.isArray(t)
          ? (function(t, e) {
              for (var n, i = '', o = '', r = Array.isArray(e), s = 0; s < t.length; s++)
                (n = a(t[s])) && (r && e[s] && (n = l(n)), (i = i + o + n), (o = ' '));
              return i;
            })(t, e)
          : t && 'object' == typeof t
          ? (function(t) {
              var e = '',
                n = '';
              for (var a in t) a && t[a] && i.call(t, a) && ((e = e + n + a), (n = ' '));
              return e;
            })(t)
          : t || '';
      }
      function o(t) {
        if (!t) return '';
        if ('object' == typeof t) {
          var e = '';
          for (var n in t) i.call(t, n) && (e = e + n + ':' + t[n] + ';');
          return e;
        }
        return t + '';
      }
      function r(t, e, n, i) {
        if (!1 === e || null == e || (!e && ('class' === t || 'style' === t))) return '';
        if (!0 === e) return ' ' + (i ? t : t + '="' + t + '"');
        var a = typeof e;
        return (
          ('object' !== a && 'function' !== a) || 'function' != typeof e.toJSON || (e = e.toJSON()),
          'string' == typeof e || ((e = JSON.stringify(e)), n || -1 === e.indexOf('"'))
            ? (n && (e = l(e)), ' ' + t + '="' + e + '"')
            : ' ' + t + "='" + e.replace(/'/g, '&#39;') + "'"
        );
      }
      (e.merge = function t(e, n) {
        if (1 === arguments.length) {
          for (var i = e[0], a = 1; a < e.length; a++) i = t(i, e[a]);
          return i;
        }
        for (var r in n)
          if ('class' === r) {
            var s = e[r] || [];
            e[r] = (Array.isArray(s) ? s : [s]).concat(n[r] || []);
          } else if ('style' === r) {
            var s = o(e[r]);
            s = s && ';' !== s[s.length - 1] ? s + ';' : s;
            var l = o(n[r]);
            (l = l && ';' !== l[l.length - 1] ? l + ';' : l), (e[r] = s + l);
          } else e[r] = n[r];
        return e;
      }),
        (e.classes = a),
        (e.style = o),
        (e.attr = r),
        (e.attrs = function(t, e) {
          var n = '';
          for (var s in t)
            if (i.call(t, s)) {
              var l = t[s];
              if ('class' === s) {
                (l = a(l)), (n = r(s, l, !1, e) + n);
                continue;
              }
              'style' === s && (l = o(l)), (n += r(s, l, !1, e));
            }
          return n;
        });
      var s = /["&<>]/;
      function l(t) {
        var e = '' + t,
          n = s.exec(e);
        if (!n) return t;
        var i,
          a,
          o,
          r = '';
        for (i = n.index, a = 0; i < e.length; i++) {
          switch (e.charCodeAt(i)) {
            case 34:
              o = '&quot;';
              break;
            case 38:
              o = '&amp;';
              break;
            case 60:
              o = '&lt;';
              break;
            case 62:
              o = '&gt;';
              break;
            default:
              continue;
          }
          a !== i && (r += e.substring(a, i)), (a = i + 1), (r += o);
        }
        return a !== i ? r + e.substring(a, i) : r;
      }
      (e.escape = l),
        (e.rethrow = function t(e, i, a, o) {
          if (!(e instanceof Error)) throw e;
          if (!(('undefined' == typeof window && i) || o))
            throw ((e.message += ' on line ' + a), e);
          try {
            o = o || n(4).readFileSync(i, 'utf8');
          } catch (n) {
            t(e, null, a);
          }
          var r = 3,
            s = o.split('\n'),
            l = Math.max(a - r, 0),
            c = Math.min(s.length, a + r);
          var r = s
            .slice(l, c)
            .map(function(t, e) {
              var n = e + l + 1;
              return (n == a ? '  > ' : '    ') + n + '| ' + t;
            })
            .join('\n');
          e.path = i;
          e.message = (i || 'Pug') + ':' + a + '\n' + r + '\n\n' + e.message;
          throw e;
        });
    },
    function(t, e, n) {
      var i;
      void 0 ===
        (i = function() {
          var a,
            o = {},
            r = $('body'),
            s = {},
            l = n(5),
            c = {
              v: '1.0',
              index: 0,
              Zindex: 200,
              confirm: function(t) {
                var e = $.extend({}, t, {
                  type: 'confirm',
                });
                return c.open(e);
              },
              tip: function(t, e) {
                var n = {
                  type: 'tip',
                  container: t,
                  closeBtn: !1,
                  isOverlay: !1,
                  time: e || 1500,
                };
                return c.open(n);
              },
              loading: function(t) {
                t = $.extend(
                  {
                    closeBtn: !1,
                    isLoding: !0,
                    type: 0,
                    text: '拼命加载中...',
                    showText: !1,
                  },
                  t,
                );
                return c.open(t);
              },
            },
            u = function() {
              this.defaults = {
                container: null,
                isOverlay: !0,
                overlayClose: !1,
                closeBtn: !0,
                success: null,
                end: null,
              };
            };
          u.prototype = {
            getOptions: function(t) {
              return $.extend({}, this.defaults, t);
            },
            removeNode: function(t) {
              t.remove();
            },
          };
          var d = new u(),
            h = function(t) {
              (this.index = ++c.index), (this.Zindex = c.Zindex + this.index), this.creat();
            };
          return (
            ((h.pt = h.prototype).creat = function() {
              var t = this,
                e = t.index,
                n = t.Zindex,
                i = $(
                  '<div id="dialog_box' + e + '" class="dialog_box ' + (o.class || '') + '"></div>',
                );
              if (
                (i.css({
                  margin: 0,
                  padding: 0,
                  width: o.width || 'auto',
                  height: o.height || 'auto',
                  'z-index': n,
                  top: '50%',
                  left: '50%',
                  position: 'fixed',
                  'background-color': o.isLoding ? 'transparent' : '#fff',
                  textAlign: o.isLoding ? 'center' : 'left',
                }),
                o.isLoding && i.html(l(o)),
                o.title)
              )
                i.append(
                  (function(t) {
                    var e;
                    return (function() {
                      e = $('<div class="dialog-header"></div>');
                      var n = $(
                          '<span class="dialog-title" title="' +
                            o.title +
                            '">' +
                            o.title +
                            '</span>',
                        ),
                        i = $(
                          '<i class="dialog-close iconfont cf-guanbi" id="dialog_close' +
                            t +
                            '" title="关闭"></i>',
                        );
                      return e.append(n).append(i), e;
                    })();
                  })(e),
                );
              else if (o.closeBtn) {
                var s = $(
                  '<i class="dialog-close iconfont cf-diff-close cf-guanbi" id="dialog_close' +
                    e +
                    '" title="关闭"></i>',
                );
                i.append(s);
              }
              if (o.isOverlay) {
                var u = (function(t, e) {
                  var n;
                  return (
                    (n = $('<div id="overlay' + t + '" class="overlay"></div>')),
                    n.css({
                      margin: 0,
                      padding: 0,
                      border: 'none',
                      width: '100%',
                      height: '100%',
                      'z-index': e,
                      background: '#000',
                      opacity: '0.5',
                      filter: 'alpha(opacity=50)',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                    }),
                    n
                  );
                })(e, n);
                r.append(u);
              }
              if ((r.append(i), (t.dialogBox = i), 'confirm' === o.type)) {
                (t.yes = o.yes),
                  (t.cancel = o.cancel),
                  (a = $('<div class="confirm-layer"></div>'));
                var d = $(
                    '<span class="btn-sure btn btn-primary">' + (o.yesText || '确定') + '</span>',
                  ),
                  h = $('<span class="btn-cancel btn btn-gray">取消</span>');
                a.html(
                  '<div class="confirm-text">' +
                    o.container +
                    '</div><div class="operate-btn"></div>',
                ),
                  a
                    .find('.operate-btn')
                    .append(d)
                    .append(h),
                  d.click(function() {
                    'function' == typeof t.yes && t.yes();
                  }),
                  h.click(function() {
                    'function' == typeof t.cancel && t.cancel();
                  });
              } else
                'tip' === o.type
                  ? ((a = $('<div class="text-tip"></div>')),
                    $('body').append('<div class="text-tip-overlay"></div>'),
                    a.html(o.container),
                    setTimeout(function() {
                      $('.text-tip-overlay').remove(), c.close(e);
                    }, o.time))
                  : (a = $(o.container));
              return (
                i.append(a),
                'tip' === o.type && a.parent().css('background', 'transparent'),
                c.reset(e),
                i.find('.dialog-close').click(function() {
                  c.close(e);
                }),
                o.overlayClose &&
                  u.click(function() {
                    c.close(e);
                  }),
                'function' == typeof o.success && o.success(t.index, t),
                i
              );
            }),
            (c.close = function(t) {
              if (!t) return $('.overlay').remove(), void $('.dialog_box').remove();
              var e = $('#overlay' + t);
              e && d.removeNode(e),
                d.removeNode($('#dialog_box' + t)),
                'function' == typeof o.end && o.end();
            }),
            (c.reset = function(t) {
              var e = $('#dialog_box' + t),
                n = e.width(),
                i = e.height();
              e.css({
                'margin-top': -i / 2,
                'margin-left': -n / 2,
              });
            }),
            (s.run = function() {
              c.open = function(t) {
                (o = d.getOptions(t)).type;
                return new h().index;
              };
            }),
            void 0 ===
              (i = function() {
                return s.run(), c;
              }.call(e, n, e, t)) || (t.exports = i),
            c
          );
        }.call(e, n, e, t)) || (t.exports = i);
    },
    function(t, e, n) {
      var i;
      void 0 ===
        (i = function() {
          function t(t) {
            return (
              -1 != document.cookie.indexOf('migu_music_status') ||
              (!1 !== t && document.getElementById('J_LoginBtn').click(), !1)
            );
          }
          return (window.MUSIC_GLOBAL.loginCheck = t), t;
        }.call(e, n, e, t)) || (t.exports = i);
    },
    ,
    function(t, e) {},
    function(t, e, n) {
      var i = n(0);
      t.exports = function(t) {
        var e,
          n = '',
          a = t || {};
        return (
          function(t, a, o) {
            switch (o) {
              case 1:
                var r = 'upload';
                break;
              default:
                r = 'loading';
            }
            (n = n + '<div' + i.attr('class', i.classes([r], [!0]), !1, !0) + ' id="loading">'),
              t && (n = n + '<span>' + i.escape(null == (e = a) ? '' : e) + '</span>'),
              (n += '</div>');
          }.call(
            this,
            'showText' in a ? a.showText : 'undefined' != typeof showText ? showText : void 0,
            'text' in a ? a.text : 'undefined' != typeof text ? text : void 0,
            'type' in a ? a.type : 'undefined' != typeof type ? type : void 0,
          ),
          n
        );
      };
    },
    function(t, e, n) {
      var i = n(0);
      t.exports = function(t) {
        var e = '',
          n = t || {};
        return (
          function(n) {
            (t = t || {}),
              (e =
                e +
                '<style>/* vip,数字专辑弹窗样式 */\n\n.digital-vip-tip {\n    width: 400px;\n    height: 280px;\n    text-align: center;\n    padding-top: 8px;\n}\n\n.digital-vip-tip p {\n    line-height: 28px;\n    padding:0 20px;\n}\n\n.digital-vip-tip .btn-content {\n    margin-top: 20px;\n}\n\n.digital-vip-tip .btn-content a {\n    width: 130px;\n    height: 45px;\n    line-height: 45px;\n    border-radius: 25px;\n    color: #666;\n}</style><div class="digital-vip-tip"><img' +
                i.attr(
                  'src',
                  n.APP_CDN_HOST +
                    n.APP_STATIC_PATH +
                    '/img/music/audioPlayer/digital_album_tip.png',
                  !0,
                  !0,
                ) +
                '><p>' +
                i.escape('应版权方要求，需要购买整张数字专辑后才能试听、下载、订购彩铃。') +
                '</p><div class="btn-content"><a class="btn"' +
                i.attr('href', t.url, !0, !0) +
                ' target="_blank">购买数字专辑</a></div></div>');
          }.call(
            this,
            'MUSIC_CONFIG' in n
              ? n.MUSIC_CONFIG
              : 'undefined' != typeof MUSIC_CONFIG
              ? MUSIC_CONFIG
              : void 0,
          ),
          e
        );
      };
    },
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      var i, a, o, r;
      function s(t) {
        return (s =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      (r = function() {
        var t =
          t ||
          (function(t, e) {
            var n =
                Object.create ||
                (function() {
                  function t() {}
                  return function(e) {
                    var n;
                    return (t.prototype = e), (n = new t()), (t.prototype = null), n;
                  };
                })(),
              i = {},
              a = (i.lib = {}),
              o = (a.Base = {
                extend: function(t) {
                  var e = n(this);
                  return (
                    t && e.mixIn(t),
                    (e.hasOwnProperty('init') && this.init !== e.init) ||
                      (e.init = function() {
                        e.$super.init.apply(this, arguments);
                      }),
                    (e.init.prototype = e),
                    (e.$super = this),
                    e
                  );
                },
                create: function() {
                  var t = this.extend();
                  return t.init.apply(t, arguments), t;
                },
                init: function() {},
                mixIn: function(t) {
                  for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                  t.hasOwnProperty('toString') && (this.toString = t.toString);
                },
                clone: function() {
                  return this.init.prototype.extend(this);
                },
              }),
              r = (a.WordArray = o.extend({
                init: function(t, e) {
                  (t = this.words = t || []), (this.sigBytes = null != e ? e : 4 * t.length);
                },
                toString: function(t) {
                  return (t || l).stringify(this);
                },
                concat: function(t) {
                  var e = this.words,
                    n = t.words,
                    i = this.sigBytes,
                    a = t.sigBytes;
                  if ((this.clamp(), i % 4))
                    for (var o = 0; o < a; o++) {
                      var r = (n[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                      e[(i + o) >>> 2] |= r << (24 - ((i + o) % 4) * 8);
                    }
                  else for (o = 0; o < a; o += 4) e[(i + o) >>> 2] = n[o >>> 2];
                  return (this.sigBytes += a), this;
                },
                clamp: function() {
                  var e = this.words,
                    n = this.sigBytes;
                  (e[n >>> 2] &= 4294967295 << (32 - (n % 4) * 8)), (e.length = t.ceil(n / 4));
                },
                clone: function() {
                  var t = o.clone.call(this);
                  return (t.words = this.words.slice(0)), t;
                },
                random: function(e) {
                  for (
                    var n,
                      i = [],
                      a = function(e) {
                        e = e;
                        var n = 987654321,
                          i = 4294967295;
                        return function() {
                          var a =
                            (((n = (36969 * (65535 & n) + (n >> 16)) & i) << 16) +
                              (e = (18e3 * (65535 & e) + (e >> 16)) & i)) &
                            i;
                          return (a /= 4294967296), (a += 0.5) * (t.random() > 0.5 ? 1 : -1);
                        };
                      },
                      o = 0;
                    o < e;
                    o += 4
                  ) {
                    var s = a(4294967296 * (n || t.random()));
                    (n = 987654071 * s()), i.push((4294967296 * s()) | 0);
                  }
                  return new r.init(i, e);
                },
              })),
              s = (i.enc = {}),
              l = (s.Hex = {
                stringify: function(t) {
                  for (var e = t.words, n = t.sigBytes, i = [], a = 0; a < n; a++) {
                    var o = (e[a >>> 2] >>> (24 - (a % 4) * 8)) & 255;
                    i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16));
                  }
                  return i.join('');
                },
                parse: function(t) {
                  for (var e = t.length, n = [], i = 0; i < e; i += 2)
                    n[i >>> 3] |= parseInt(t.substr(i, 2), 16) << (24 - (i % 8) * 4);
                  return new r.init(n, e / 2);
                },
              }),
              c = (s.Latin1 = {
                stringify: function(t) {
                  for (var e = t.words, n = t.sigBytes, i = [], a = 0; a < n; a++) {
                    var o = (e[a >>> 2] >>> (24 - (a % 4) * 8)) & 255;
                    i.push(String.fromCharCode(o));
                  }
                  return i.join('');
                },
                parse: function(t) {
                  for (var e = t.length, n = [], i = 0; i < e; i++)
                    n[i >>> 2] |= (255 & t.charCodeAt(i)) << (24 - (i % 4) * 8);
                  return new r.init(n, e);
                },
              }),
              u = (s.Utf8 = {
                stringify: function(t) {
                  try {
                    return decodeURIComponent(escape(c.stringify(t)));
                  } catch (t) {
                    throw new Error('Malformed UTF-8 data');
                  }
                },
                parse: function(t) {
                  return c.parse(unescape(encodeURIComponent(t)));
                },
              }),
              d = (a.BufferedBlockAlgorithm = o.extend({
                reset: function() {
                  (this._data = new r.init()), (this._nDataBytes = 0);
                },
                _append: function(t) {
                  'string' == typeof t && (t = u.parse(t)),
                    this._data.concat(t),
                    (this._nDataBytes += t.sigBytes);
                },
                _process: function(e) {
                  var n = this._data,
                    i = n.words,
                    a = n.sigBytes,
                    o = this.blockSize,
                    s = a / (4 * o),
                    l = (s = e ? t.ceil(s) : t.max((0 | s) - this._minBufferSize, 0)) * o,
                    c = t.min(4 * l, a);
                  if (l) {
                    for (var u = 0; u < l; u += o) this._doProcessBlock(i, u);
                    var d = i.splice(0, l);
                    n.sigBytes -= c;
                  }
                  return new r.init(d, c);
                },
                clone: function() {
                  var t = o.clone.call(this);
                  return (t._data = this._data.clone()), t;
                },
                _minBufferSize: 0,
              })),
              h = ((a.Hasher = d.extend({
                cfg: o.extend(),
                init: function(t) {
                  (this.cfg = this.cfg.extend(t)), this.reset();
                },
                reset: function() {
                  d.reset.call(this), this._doReset();
                },
                update: function(t) {
                  return this._append(t), this._process(), this;
                },
                finalize: function(t) {
                  return t && this._append(t), this._doFinalize();
                },
                blockSize: 16,
                _createHelper: function(t) {
                  return function(e, n) {
                    return new t.init(n).finalize(e);
                  };
                },
                _createHmacHelper: function(t) {
                  return function(e, n) {
                    return new h.HMAC.init(t, n).finalize(e);
                  };
                },
              })),
              (i.algo = {}));
            return i;
          })(Math);
        return t;
      }),
        'object' === s(e)
          ? (t.exports = e = r())
          : ((a = []),
            void 0 === (o = 'function' == typeof (i = r) ? i.apply(e, a) : i) || (t.exports = o));
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      var i;
      void 0 ===
        (i = function() {
          return {
            setCookie: function(t, e, n) {
              var i;
              return (
                (i = t + '=' + encodeURIComponent(e)),
                (n = n || {}).expires &&
                  (i +=
                    ';expires=' +
                    new Date(new Date().getTime() + 6e4 * n.expires * 60 * 24).toGMTString()),
                n.path && (i += ';path=' + n.path),
                n.domain && (i += ';domain=' + n.domain),
                n.secure && (i += ';secure'),
                (document.cookie = i)
              );
            },
            getCookie: function(t) {
              var e, n, i;
              return (
                (n = document.cookie),
                (e = t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, function(t) {
                  return '\\' + t;
                })),
                (i = n.match(new RegExp('(?:^|; )' + e + '=([^;]*)')))
                  ? decodeURIComponent(i[1])
                  : void 0
              );
            },
            removeCookie: function(t, e, n) {
              var i;
              if (this.getCookie(t))
                return (
                  (i = t + '=;expires=Fri, 02-Jan-1970 00:00:00 GMT'),
                  e && (i += ';path=' + e),
                  n && (i += ';domain' + n),
                  (document.cookie = i)
                );
            },
          };
        }.call(e, n, e, t)) || (t.exports = i);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e) {
      t.exports = $;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e) {
      function n(t) {
        return (n =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      !(function() {
        function t() {
          var t = '{}';
          if ('userDataBehavior' == m) {
            g.load('jStorage');
            try {
              t = g.getAttribute('jStorage');
            } catch (t) {}
            try {
              y = g.getAttribute('jStorage_update');
            } catch (t) {}
            p.jStorage = t;
          }
          o(), l(), c();
        }
        function e() {
          var e;
          clearTimeout(w),
            (w = setTimeout(function() {
              if ('localStorage' == m || 'globalStorage' == m) e = p.jStorage_update;
              else if ('userDataBehavior' == m) {
                g.load('jStorage');
                try {
                  e = g.getAttribute('jStorage_update');
                } catch (t) {}
              }
              if (e && e != y) {
                y = e;
                var n,
                  a = d.parse(d.stringify(f.__jstorage_meta.CRC32));
                t(), (n = d.parse(d.stringify(f.__jstorage_meta.CRC32)));
                var o,
                  r = [],
                  s = [];
                for (o in a)
                  a.hasOwnProperty(o) &&
                    (n[o]
                      ? a[o] != n[o] && '2.' == String(a[o]).substr(0, 2) && r.push(o)
                      : s.push(o));
                for (o in n) n.hasOwnProperty(o) && (a[o] || r.push(o));
                i(r, 'updated'), i(s, 'deleted');
              }
            }, 25));
        }
        function i(t, e) {
          var n, i, a, o;
          if (((t = [].concat(t || [])), 'flushed' == e)) {
            for (n in ((t = []), v)) v.hasOwnProperty(n) && t.push(n);
            e = 'deleted';
          }
          for (n = 0, a = t.length; n < a; n++) {
            if (v[t[n]]) for (i = 0, o = v[t[n]].length; i < o; i++) v[t[n]][i](t[n], e);
            if (v['*']) for (i = 0, o = v['*'].length; i < o; i++) v['*'][i](t[n], e);
          }
        }
        function a() {
          var t = (+new Date()).toString();
          if ('localStorage' == m || 'globalStorage' == m)
            try {
              p.jStorage_update = t;
            } catch (t) {
              m = !1;
            }
          else
            'userDataBehavior' == m && (g.setAttribute('jStorage_update', t), g.save('jStorage'));
          e();
        }
        function o() {
          if (p.jStorage)
            try {
              f = d.parse(String(p.jStorage));
            } catch (t) {
              p.jStorage = '{}';
            }
          else p.jStorage = '{}';
          (_ = p.jStorage ? String(p.jStorage).length : 0),
            f.__jstorage_meta || (f.__jstorage_meta = {}),
            f.__jstorage_meta.CRC32 || (f.__jstorage_meta.CRC32 = {});
        }
        function r() {
          if (f.__jstorage_meta.PubSub) {
            for (var t = +new Date() - 2e3, e = 0, n = f.__jstorage_meta.PubSub.length; e < n; e++)
              if (f.__jstorage_meta.PubSub[e][0] <= t) {
                f.__jstorage_meta.PubSub.splice(e, f.__jstorage_meta.PubSub.length - e);
                break;
              }
            f.__jstorage_meta.PubSub.length || delete f.__jstorage_meta.PubSub;
          }
          try {
            (p.jStorage = d.stringify(f)),
              g && (g.setAttribute('jStorage', p.jStorage), g.save('jStorage')),
              (_ = p.jStorage ? String(p.jStorage).length : 0);
          } catch (t) {}
        }
        function s(t) {
          if ('string' != typeof t && 'number' != typeof t)
            throw new TypeError('Key name must be string or numeric');
          if ('__jstorage_meta' == t) throw new TypeError('Reserved key name');
          return !0;
        }
        function l() {
          var t,
            e,
            o,
            s,
            c = 1 / 0,
            u = !1,
            d = [];
          if ((clearTimeout(h), f.__jstorage_meta && 'object' == n(f.__jstorage_meta.TTL))) {
            for (e in ((t = +new Date()),
            (o = f.__jstorage_meta.TTL),
            (s = f.__jstorage_meta.CRC32),
            o))
              o.hasOwnProperty(e) &&
                (o[e] <= t
                  ? (delete o[e], delete s[e], delete f[e], (u = !0), d.push(e))
                  : o[e] < c && (c = o[e]));
            1 / 0 != c && (h = setTimeout(l, Math.min(c - t, 2147483647))),
              u && (r(), a(), i(d, 'deleted'));
          }
        }
        function c() {
          var t;
          if (f.__jstorage_meta.PubSub) {
            var e,
              n = b,
              i = [];
            for (t = f.__jstorage_meta.PubSub.length - 1; 0 <= t; t--)
              (e = f.__jstorage_meta.PubSub[t])[0] > b && ((n = e[0]), i.unshift(e));
            for (t = i.length - 1; 0 <= t; t--) {
              e = i[t][1];
              var a = i[t][2];
              if (C[e])
                for (var o = 0, r = C[e].length; o < r; o++)
                  try {
                    C[e][o](e, d.parse(d.stringify(a)));
                  } catch (t) {}
            }
            b = n;
          }
        }
        var u = window.jQuery || window.$ || (window.$ = {}),
          d = {
            parse:
              (window.JSON && (window.JSON.parse || window.JSON.decode)) ||
              (String.prototype.evalJSON &&
                function(t) {
                  return String(t).evalJSON();
                }) ||
              u.parseJSON ||
              u.evalJSON,
            stringify:
              Object.toJSON ||
              (window.JSON && (window.JSON.stringify || window.JSON.encode)) ||
              u.toJSON,
          };
        if ('function' != typeof d.parse || 'function' != typeof d.stringify)
          throw Error(
            'No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page',
          );
        var h,
          f = {
            __jstorage_meta: {
              CRC32: {},
            },
          },
          p = {
            jStorage: '{}',
          },
          g = null,
          _ = 0,
          m = !1,
          v = {},
          w = !1,
          y = 0,
          C = {},
          b = +new Date(),
          I = {
            isXML: function(t) {
              return (
                !!(t = (t ? t.ownerDocument || t : 0).documentElement) && 'HTML' !== t.nodeName
              );
            },
            encode: function(t) {
              if (!this.isXML(t)) return !1;
              try {
                return new XMLSerializer().serializeToString(t);
              } catch (e) {
                try {
                  return t.xml;
                } catch (t) {}
              }
              return !1;
            },
            decode: function(t) {
              var e =
                ('DOMParser' in window && new DOMParser().parseFromString) ||
                (window.ActiveXObject &&
                  function(t) {
                    var e = new ActiveXObject('Microsoft.XMLDOM');
                    return (e.async = 'false'), e.loadXML(t), e;
                  });
              return (
                !!e &&
                ((t = e.call(('DOMParser' in window && new DOMParser()) || window, t, 'text/xml')),
                !!this.isXML(t) && t)
              );
            },
          };
        (u.jStorage = {
          version: '0.4.12',
          set: function(t, e, a) {
            if ((s(t), (a = a || {}), void 0 === e)) return this.deleteKey(t), e;
            if (I.isXML(e))
              e = {
                _is_xml: !0,
                xml: I.encode(e),
              };
            else {
              if ('function' == typeof e) return;
              e && 'object' == n(e) && (e = d.parse(d.stringify(e)));
            }
            f[t] = e;
            for (
              var o,
                r = f.__jstorage_meta.CRC32,
                l = d.stringify(e),
                c = l.length,
                u = 2538058380 ^ c,
                h = 0;
              4 <= c;

            )
              (o =
                1540483477 *
                  (65535 &
                    (o =
                      (255 & l.charCodeAt(h)) |
                      ((255 & l.charCodeAt(++h)) << 8) |
                      ((255 & l.charCodeAt(++h)) << 16) |
                      ((255 & l.charCodeAt(++h)) << 24))) +
                (((1540483477 * (o >>> 16)) & 65535) << 16)),
                (u =
                  (1540483477 * (65535 & u) + (((1540483477 * (u >>> 16)) & 65535) << 16)) ^
                  (o =
                    1540483477 * (65535 & (o ^= o >>> 24)) +
                    (((1540483477 * (o >>> 16)) & 65535) << 16))),
                (c -= 4),
                ++h;
            switch (c) {
              case 3:
                u ^= (255 & l.charCodeAt(h + 2)) << 16;
              case 2:
                u ^= (255 & l.charCodeAt(h + 1)) << 8;
              case 1:
                u =
                  1540483477 * (65535 & (u ^= 255 & l.charCodeAt(h))) +
                  (((1540483477 * (u >>> 16)) & 65535) << 16);
            }
            return (
              (u =
                1540483477 * (65535 & (u ^= u >>> 13)) +
                (((1540483477 * (u >>> 16)) & 65535) << 16)),
              (r[t] = '2.' + ((u ^ (u >>> 15)) >>> 0)),
              this.setTTL(t, a.TTL || 0),
              i(t, 'updated'),
              e
            );
          },
          get: function(t, e) {
            return (
              s(t),
              t in f
                ? f[t] && 'object' == n(f[t]) && f[t]._is_xml
                  ? I.decode(f[t].xml)
                  : f[t]
                : void 0 === e
                ? null
                : e
            );
          },
          deleteKey: function(t) {
            return (
              s(t),
              t in f &&
                (delete f[t],
                'object' == n(f.__jstorage_meta.TTL) &&
                  t in f.__jstorage_meta.TTL &&
                  delete f.__jstorage_meta.TTL[t],
                delete f.__jstorage_meta.CRC32[t],
                r(),
                a(),
                i(t, 'deleted'),
                !0)
            );
          },
          setTTL: function(t, e) {
            var n = +new Date();
            return (
              s(t),
              (e = Number(e) || 0),
              t in f &&
                (f.__jstorage_meta.TTL || (f.__jstorage_meta.TTL = {}),
                0 < e ? (f.__jstorage_meta.TTL[t] = n + e) : delete f.__jstorage_meta.TTL[t],
                r(),
                l(),
                a(),
                !0)
            );
          },
          getTTL: function(t) {
            var e = +new Date();
            return (
              s(t),
              (t in f &&
                f.__jstorage_meta.TTL &&
                f.__jstorage_meta.TTL[t] &&
                (t = f.__jstorage_meta.TTL[t] - e)) ||
                0
            );
          },
          flush: function() {
            return (
              (f = {
                __jstorage_meta: {
                  CRC32: {},
                },
              }),
              r(),
              a(),
              i(null, 'flushed'),
              !0
            );
          },
          storageObj: function() {
            function t() {}
            return (t.prototype = f), new t();
          },
          index: function() {
            var t,
              e = [];
            for (t in f) f.hasOwnProperty(t) && '__jstorage_meta' != t && e.push(t);
            return e;
          },
          storageSize: function() {
            return _;
          },
          currentBackend: function() {
            return m;
          },
          storageAvailable: function() {
            return !!m;
          },
          listenKeyChange: function(t, e) {
            s(t), v[t] || (v[t] = []), v[t].push(e);
          },
          stopListening: function(t, e) {
            if ((s(t), v[t]))
              if (e) for (var n = v[t].length - 1; 0 <= n; n--) v[t][n] == e && v[t].splice(n, 1);
              else delete v[t];
          },
          subscribe: function(t, e) {
            if (!(t = (t || '').toString())) throw new TypeError('Channel not defined');
            C[t] || (C[t] = []), C[t].push(e);
          },
          publish: function(t, e) {
            if (!(t = (t || '').toString())) throw new TypeError('Channel not defined');
            f.__jstorage_meta || (f.__jstorage_meta = {}),
              f.__jstorage_meta.PubSub || (f.__jstorage_meta.PubSub = []),
              f.__jstorage_meta.PubSub.unshift([+new Date(), t, e]),
              r(),
              a();
          },
          reInit: function() {
            t();
          },
          noConflict: function(t) {
            return delete window.$.jStorage, t && (window.jStorage = this), this;
          },
        }),
          (function() {
            var t = !1;
            if ('localStorage' in window)
              try {
                window.localStorage.setItem('_tmptest', 'tmpval'),
                  (t = !0),
                  window.localStorage.removeItem('_tmptest');
              } catch (t) {}
            if (t)
              try {
                window.localStorage &&
                  ((p = window.localStorage), (m = 'localStorage'), (y = p.jStorage_update));
              } catch (t) {}
            else if ('globalStorage' in window)
              try {
                window.globalStorage &&
                  ((p =
                    'localhost' == window.location.hostname
                      ? window.globalStorage['localhost.localdomain']
                      : window.globalStorage[window.location.hostname]),
                  (m = 'globalStorage'),
                  (y = p.jStorage_update));
              } catch (t) {}
            else {
              if (!(g = document.createElement('link')).addBehavior) return void (g = null);
              (g.style.behavior = 'url(#default#userData)'),
                document.getElementsByTagName('head')[0].appendChild(g);
              try {
                g.load('jStorage');
              } catch (t) {
                g.setAttribute('jStorage', '{}'), g.save('jStorage'), g.load('jStorage');
              }
              t = '{}';
              try {
                t = g.getAttribute('jStorage');
              } catch (t) {}
              try {
                y = g.getAttribute('jStorage_update');
              } catch (t) {}
              (p.jStorage = t), (m = 'userDataBehavior');
            }
            o(),
              l(),
              'localStorage' == m || 'globalStorage' == m
                ? 'addEventListener' in window
                  ? window.addEventListener('storage', e, !1)
                  : document.attachEvent('onstorage', e)
                : 'userDataBehavior' == m && setInterval(e, 1e3),
              c(),
              'addEventListener' in window &&
                window.addEventListener(
                  'pageshow',
                  function(t) {
                    t.persisted && e();
                  },
                  !1,
                );
          })();
      })();
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      var i, a, o, r;
      function s(t) {
        return (s =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      (r = function(t) {
        return (
          (function(e) {
            var n = t,
              i = n.lib,
              a = i.WordArray,
              o = i.Hasher,
              r = n.algo,
              s = [];
            !(function() {
              for (var t = 0; t < 64; t++) s[t] = (4294967296 * e.abs(e.sin(t + 1))) | 0;
            })();
            var l = (r.MD5 = o.extend({
              _doReset: function() {
                this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878]);
              },
              _doProcessBlock: function(t, e) {
                for (var n = 0; n < 16; n++) {
                  var i = e + n,
                    a = t[i];
                  t[i] =
                    (16711935 & ((a << 8) | (a >>> 24))) | (4278255360 & ((a << 24) | (a >>> 8)));
                }
                var o = this._hash.words,
                  r = t[e + 0],
                  l = t[e + 1],
                  f = t[e + 2],
                  p = t[e + 3],
                  g = t[e + 4],
                  _ = t[e + 5],
                  m = t[e + 6],
                  v = t[e + 7],
                  w = t[e + 8],
                  y = t[e + 9],
                  C = t[e + 10],
                  b = t[e + 11],
                  I = t[e + 12],
                  S = t[e + 13],
                  A = t[e + 14],
                  P = t[e + 15],
                  k = o[0],
                  x = o[1],
                  T = o[2],
                  M = o[3];
                (k = c(k, x, T, M, r, 7, s[0])),
                  (M = c(M, k, x, T, l, 12, s[1])),
                  (T = c(T, M, k, x, f, 17, s[2])),
                  (x = c(x, T, M, k, p, 22, s[3])),
                  (k = c(k, x, T, M, g, 7, s[4])),
                  (M = c(M, k, x, T, _, 12, s[5])),
                  (T = c(T, M, k, x, m, 17, s[6])),
                  (x = c(x, T, M, k, v, 22, s[7])),
                  (k = c(k, x, T, M, w, 7, s[8])),
                  (M = c(M, k, x, T, y, 12, s[9])),
                  (T = c(T, M, k, x, C, 17, s[10])),
                  (x = c(x, T, M, k, b, 22, s[11])),
                  (k = c(k, x, T, M, I, 7, s[12])),
                  (M = c(M, k, x, T, S, 12, s[13])),
                  (T = c(T, M, k, x, A, 17, s[14])),
                  (k = u(k, (x = c(x, T, M, k, P, 22, s[15])), T, M, l, 5, s[16])),
                  (M = u(M, k, x, T, m, 9, s[17])),
                  (T = u(T, M, k, x, b, 14, s[18])),
                  (x = u(x, T, M, k, r, 20, s[19])),
                  (k = u(k, x, T, M, _, 5, s[20])),
                  (M = u(M, k, x, T, C, 9, s[21])),
                  (T = u(T, M, k, x, P, 14, s[22])),
                  (x = u(x, T, M, k, g, 20, s[23])),
                  (k = u(k, x, T, M, y, 5, s[24])),
                  (M = u(M, k, x, T, A, 9, s[25])),
                  (T = u(T, M, k, x, p, 14, s[26])),
                  (x = u(x, T, M, k, w, 20, s[27])),
                  (k = u(k, x, T, M, S, 5, s[28])),
                  (M = u(M, k, x, T, f, 9, s[29])),
                  (T = u(T, M, k, x, v, 14, s[30])),
                  (k = d(k, (x = u(x, T, M, k, I, 20, s[31])), T, M, _, 4, s[32])),
                  (M = d(M, k, x, T, w, 11, s[33])),
                  (T = d(T, M, k, x, b, 16, s[34])),
                  (x = d(x, T, M, k, A, 23, s[35])),
                  (k = d(k, x, T, M, l, 4, s[36])),
                  (M = d(M, k, x, T, g, 11, s[37])),
                  (T = d(T, M, k, x, v, 16, s[38])),
                  (x = d(x, T, M, k, C, 23, s[39])),
                  (k = d(k, x, T, M, S, 4, s[40])),
                  (M = d(M, k, x, T, r, 11, s[41])),
                  (T = d(T, M, k, x, p, 16, s[42])),
                  (x = d(x, T, M, k, m, 23, s[43])),
                  (k = d(k, x, T, M, y, 4, s[44])),
                  (M = d(M, k, x, T, I, 11, s[45])),
                  (T = d(T, M, k, x, P, 16, s[46])),
                  (k = h(k, (x = d(x, T, M, k, f, 23, s[47])), T, M, r, 6, s[48])),
                  (M = h(M, k, x, T, v, 10, s[49])),
                  (T = h(T, M, k, x, A, 15, s[50])),
                  (x = h(x, T, M, k, _, 21, s[51])),
                  (k = h(k, x, T, M, I, 6, s[52])),
                  (M = h(M, k, x, T, p, 10, s[53])),
                  (T = h(T, M, k, x, C, 15, s[54])),
                  (x = h(x, T, M, k, l, 21, s[55])),
                  (k = h(k, x, T, M, w, 6, s[56])),
                  (M = h(M, k, x, T, P, 10, s[57])),
                  (T = h(T, M, k, x, m, 15, s[58])),
                  (x = h(x, T, M, k, S, 21, s[59])),
                  (k = h(k, x, T, M, g, 6, s[60])),
                  (M = h(M, k, x, T, b, 10, s[61])),
                  (T = h(T, M, k, x, f, 15, s[62])),
                  (x = h(x, T, M, k, y, 21, s[63])),
                  (o[0] = (o[0] + k) | 0),
                  (o[1] = (o[1] + x) | 0),
                  (o[2] = (o[2] + T) | 0),
                  (o[3] = (o[3] + M) | 0);
              },
              _doFinalize: function() {
                var t = this._data,
                  n = t.words,
                  i = 8 * this._nDataBytes,
                  a = 8 * t.sigBytes;
                n[a >>> 5] |= 128 << (24 - (a % 32));
                var o = e.floor(i / 4294967296),
                  r = i;
                (n[15 + (((a + 64) >>> 9) << 4)] =
                  (16711935 & ((o << 8) | (o >>> 24))) | (4278255360 & ((o << 24) | (o >>> 8)))),
                  (n[14 + (((a + 64) >>> 9) << 4)] =
                    (16711935 & ((r << 8) | (r >>> 24))) | (4278255360 & ((r << 24) | (r >>> 8)))),
                  (t.sigBytes = 4 * (n.length + 1)),
                  this._process();
                for (var s = this._hash, l = s.words, c = 0; c < 4; c++) {
                  var u = l[c];
                  l[c] =
                    (16711935 & ((u << 8) | (u >>> 24))) | (4278255360 & ((u << 24) | (u >>> 8)));
                }
                return s;
              },
              clone: function() {
                var t = o.clone.call(this);
                return (t._hash = this._hash.clone()), t;
              },
            }));
            function c(t, e, n, i, a, o, r) {
              var s = t + ((e & n) | (~e & i)) + a + r;
              return ((s << o) | (s >>> (32 - o))) + e;
            }
            function u(t, e, n, i, a, o, r) {
              var s = t + ((e & i) | (n & ~i)) + a + r;
              return ((s << o) | (s >>> (32 - o))) + e;
            }
            function d(t, e, n, i, a, o, r) {
              var s = t + (e ^ n ^ i) + a + r;
              return ((s << o) | (s >>> (32 - o))) + e;
            }
            function h(t, e, n, i, a, o, r) {
              var s = t + (n ^ (e | ~i)) + a + r;
              return ((s << o) | (s >>> (32 - o))) + e;
            }
            (n.MD5 = o._createHelper(l)), (n.HmacMD5 = o._createHmacHelper(l));
          })(Math),
          t.MD5
        );
      }),
        'object' === s(e)
          ? (t.exports = e = r(n(12)))
          : ((a = [n(12)]),
            void 0 === (o = 'function' == typeof (i = r) ? i.apply(e, a) : i) || (t.exports = o));
    },
    ,
    ,
    function(t, e, n) {
      var i;
      void 0 ===
        (i = function() {
          var t = n(33),
            e = n(1),
            i = n(75),
            a = document.domain.indexOf('migu.cn') > -1 ? 'migu.cn' : document.domain;
          return (
            n(62),
            {
              id: 'cafePlayer_migu_music',
              target: location.hostname.replace(/\./g, '') + '_migu_player',
              timer: null,
              playerExists: function() {
                return 1 === parseInt(t.getCookie('audioplayer_open'));
              },
              openAWindow: function(n) {
                if (
                  (t.setCookie('audioplayer_new', '1', {
                    domain: a,
                    path: '/',
                  }),
                  t.setCookie('player_stop_open', '0', {
                    domain: a,
                    path: '/',
                  }),
                  !window.open(n, this.target))
                ) {
                  var o = this.checkBrower();
                  t.setCookie('player_stop_open', '1', {
                    domain: a,
                    path: '/',
                  });
                  var r = e.open({
                    container: i({
                      tip: o,
                    }),
                    closeBtn: !1,
                    success: function() {
                      $('#sure_tip').click(function() {
                        e.close(r);
                      });
                    },
                  });
                }
              },
              checkBrower: function() {
                var t = navigator.userAgent;
                return t.indexOf('Firefox') > -1
                  ? '选项->隐私与安全->权限->允许本网站的弹出式窗口'
                  : t.indexOf('Safari') > -1 && -1 == t.indexOf('Chrome')
                  ? 'safari浏览器->偏好设置->安全性->取消勾选“阻止弹出式窗口”'
                  : (t.indexOf('Chrome') > -1 && t.indexOf('Safari'),
                    '设置->高级->隐私设置和安全性->内容设置->弹出窗口->允许本网站的弹出式窗口');
              },
              openAudioPlayer: function(e) {
                var n = this;
                n.playerExists()
                  ? (t.setCookie('audioplayer_exist', '0', {
                      domain: a,
                      path: '/',
                    }),
                    e &&
                      $.jStorage.publish('focusAudio', {
                        status: !0,
                      }),
                    n.timer && clearTimeout(n.timer),
                    (n.timer = setTimeout(function() {
                      parseInt(t.getCookie('audioplayer_exist')) ||
                        (MUSIC_CONFIG.IS_FROM_MIGU
                          ? n.openAWindow(MUSIC_CONFIG.APP_MUSIC_PATH + '/player/audio?from=migu')
                          : n.openAWindow(MUSIC_CONFIG.APP_MUSIC_PATH + '/player/audio'));
                    }, 2e3)))
                  : MUSIC_CONFIG.IS_FROM_MIGU
                  ? n.openAWindow(MUSIC_CONFIG.APP_MUSIC_PATH + '/player/audio?from=migu')
                  : n.openAWindow(MUSIC_CONFIG.APP_MUSIC_PATH + '/player/audio');
              },
              addSong: function(e, n) {
                localStorage.setItem('store_add_list', JSON.stringify(e)),
                  t.setCookie('playlist_change', '1', {
                    domain: a,
                    path: '/',
                  }),
                  n
                    ? t.setCookie('add_play_now', '1', {
                        domain: a,
                        path: '/',
                      })
                    : t.setCookie('add_play_now', '0', {
                        domain: a,
                        path: '/',
                      });
              },
            }
          );
        }.call(e, n, e, t)) || (t.exports = i);
    },
    function(t, e, n) {
      var i = n(0);
      t.exports = function(t) {
        var e,
          n = '',
          a = t || {};
        return (
          function(t) {
            n =
              n +
              '<style>.open-tip-content{\n    box-sizing: border-box;\n    width: 470px;\n    margin: auto;\n    padding: 30px 25px;\n    background-color: #fff;\n    z-index: 1000000;\n}\n.open-tip-content .open-tip-header{\n    margin: 0 0 15px;\n    font-size: 16px;\n}\n.open-tip-content .open-tip-header i{\n    display: inline-block;\n    width: 22px;\n    height: 22px;\n    border-radius: 50%;\n    margin-right: 10px;\n    background-color: #999;\n    line-height: 22px;\n    color: #fff;\n    text-align: center;\n    font-style: normal;\n}\n.open-tip-content .open-tip-body{    \n    margin-bottom: 20px;\n    line-height: 1.8;\n    color: #666;\n}\n.open-tip-content .open-tip-footer{\n    text-align: right;\n}\n.open-tip-content .open-tip-footer button{    \n    display: inline-block;\n    width: 124px;\n    height: 40px;\n    margin-right: 10px;\n    background-color: #e40077;\n    color: #fff;\n    line-height: 40px;\n    text-align: center;\n}</style><div class="open-tip-content"><div class="open-tip-header"><i>' +
              i.escape(null == (e = '!') ? '' : e) +
              '</i>播放器页面被浏览器拦截！</div><div class="open-tip-body">' +
              i.escape(null == (e = t) ? '' : e) +
              '</div><div class="open-tip-footer"><button id="sure_tip">' +
              i.escape(null == (e = '确定') ? '' : e) +
              '</button></div></div>';
          }.call(this, 'tip' in a ? a.tip : 'undefined' != typeof tip ? tip : void 0),
          n
        );
      };
    },
    ,
    function(t, e, n) {
      var i, a, o;
      /*!
       * An jQuery | zepto plugin for lazy loading images.
       * author -> jieyou
       * see https://github.com/jieyou/lazyload
       * use some tuupola's code https://github.com/tuupola/jquery_lazyload (BSD)
       * use component's throttle https://github.com/component/throttle (MIT)
       */
      (a = [n(54)]),
        void 0 ===
          (o =
            'function' ==
            typeof (i = function(t, e) {
              var n,
                i,
                a = window,
                o = t(a),
                r = {
                  threshold: 0,
                  failure_limit: 0,
                  event: 'scroll',
                  effect: 'show',
                  effect_params: null,
                  container: a,
                  data_attribute: 'original',
                  data_srcset_attribute: 'original-srcset',
                  skip_invisible: !0,
                  appear: s,
                  load: s,
                  vertical_only: !1,
                  check_appear_throttle_time: 300,
                  url_rewriter_fn: s,
                  no_fake_img_loader: !1,
                  placeholder_data_img:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC',
                  placeholder_real_img:
                    'http://ditu.baidu.cn/yyfm/lazyload/0.0.1/img/placeholder.png',
                };
              function s() {}
              function l(t, e) {
                return (
                  (e._$container == o
                    ? ('innerHeight' in a ? a.innerHeight : o.height()) + o.scrollTop()
                    : e._$container.offset().top + e._$container.height()) <=
                  t.offset().top - e.threshold
                );
              }
              function c(t, e) {
                return (
                  (e._$container == o ? o.scrollTop() : e._$container.offset().top) >=
                  t.offset().top + e.threshold + t.height()
                );
              }
              function u(e, n) {
                var i = 0;
                e.each(function(r, s) {
                  var u = e.eq(r);
                  if (!((u.width() <= 0 && u.height() <= 0) || 'none' === u.css('display')))
                    if (n.vertical_only)
                      if (c(u, n));
                      else if (l(u, n)) {
                        if (++i > n.failure_limit) return !1;
                      } else d();
                    else if (
                      c(u, n) ||
                      (function(e, n) {
                        return (
                          (n._$container == o
                            ? t.fn.scrollLeft
                              ? o.scrollLeft()
                              : a.pageXOffset
                            : n._$container.offset().left) >=
                          e.offset().left + n.threshold + e.width()
                        );
                      })(u, n)
                    );
                    else if (
                      l(u, n) ||
                      (function(e, n) {
                        return (
                          (n._$container == o
                            ? o.width() + (t.fn.scrollLeft ? o.scrollLeft() : a.pageXOffset)
                            : n._$container.offset().left + n._$container.width()) <=
                          e.offset().left - n.threshold
                        );
                      })(u, n)
                    ) {
                      if (++i > n.failure_limit) return !1;
                    } else d();
                  function d() {
                    u.trigger('_lazyload_appear'), (i = 0);
                  }
                });
              }
              function d(t) {
                return t.filter(function(e, n) {
                  return !t.eq(e)._lazyload_loadStarted;
                });
              }
              (i = Object.prototype.toString),
                (n = function(t) {
                  return i
                    .call(t)
                    .replace('[object ', '')
                    .replace(']', '');
                }),
                t.fn.hasOwnProperty('lazyload') ||
                  (t.fn.lazyload = function(e) {
                    var i,
                      l,
                      c,
                      h = this;
                    return (
                      t.isPlainObject(e) || (e = {}),
                      t.each(r, function(i, s) {
                        -1 !=
                        t.inArray(i, ['threshold', 'failure_limit', 'check_appear_throttle_time'])
                          ? 'String' == n(e[i])
                            ? (e[i] = parseInt(e[i], 10))
                            : (e[i] = s)
                          : 'container' == i
                          ? (e.hasOwnProperty(i)
                              ? e[i] == a || e[i] == document
                                ? (e._$container = o)
                                : (e._$container = t(e[i]))
                              : (e._$container = o),
                            delete e.container)
                          : !r.hasOwnProperty(i) ||
                            (e.hasOwnProperty(i) && n(e[i]) == n(r[i])) ||
                            (e[i] = s);
                      }),
                      (i = 'scroll' == e.event),
                      (c =
                        0 == e.check_appear_throttle_time
                          ? u
                          : (function(t, e) {
                              var n,
                                i,
                                a,
                                o,
                                r = 0;
                              return function() {
                                (n = this), (i = arguments);
                                var t = new Date() - r;
                                return o || (t >= e ? s() : (o = setTimeout(s, e - t))), a;
                              };
                              function s() {
                                (o = 0),
                                  (r = +new Date()),
                                  (a = t.apply(n, i)),
                                  (n = null),
                                  (i = null);
                              }
                            })(u, e.check_appear_throttle_time)),
                      (l = i || 'scrollstart' == e.event || 'scrollstop' == e.event),
                      h.each(function(n, i) {
                        var a = this,
                          o = h.eq(n),
                          r = o.attr('src'),
                          c = o.attr('data-' + e.data_attribute),
                          u = e.url_rewriter_fn == s ? c : e.url_rewriter_fn.call(a, o, c),
                          f = o.attr('data-' + e.data_srcset_attribute),
                          p = o.is('img');
                        if (1 == o._lazyload_loadStarted || r == u)
                          return (o._lazyload_loadStarted = !0), void (h = d(h));
                        (o._lazyload_loadStarted = !1),
                          p &&
                            !r &&
                            (o.off('error'),
                            o
                              .one('error', function() {
                                o.attr('src', e.placeholder_real_img);
                              })
                              .attr('src', e.placeholder_data_img)),
                          o.off('_lazyload_appear'),
                          o.one('_lazyload_appear', function() {
                            var n,
                              i = t.isArray(e.effect_params);
                            function r() {
                              n && o.hide(),
                                p
                                  ? (f && o.attr('srcset', f), u && o.attr('src', u))
                                  : o.css('background-image', 'url("' + u + '")'),
                                n && o[e.effect].apply(o, i ? e.effect_params : []),
                                (h = d(h));
                            }
                            o._lazyload_loadStarted ||
                              ((n =
                                'show' != e.effect &&
                                t.fn[e.effect] &&
                                (!e.effect_params || (i && 0 == e.effect_params.length))),
                              e.appear != s && e.appear.call(a, o, h.length, e),
                              (o._lazyload_loadStarted = !0),
                              e.no_fake_img_loader || f
                                ? (e.load != s &&
                                    (o.off('load'),
                                    o.one('load', function() {
                                      e.load.call(a, o, h.length, e);
                                    })),
                                  r())
                                : (t('<img />').off('load'),
                                  t('<img />')
                                    .one('load', function() {
                                      r(), e.load != s && e.load.call(a, o, h.length, e);
                                    })
                                    .attr('src', u)));
                          }),
                          l ||
                            o.on(e.event, function() {
                              o._lazyload_loadStarted || o.trigger('_lazyload_appear');
                            });
                      }),
                      l &&
                        e._$container.on(e.event, function() {
                          c(h, e);
                        }),
                      o.on('resize load', function() {
                        c(h, e);
                      }),
                      t(function() {
                        c(h, e);
                      }),
                      this
                    );
                  });
            })
              ? i.apply(e, a)
              : i) || (t.exports = o);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      n(99), n(103), n(104)(), n(77), n(105), n(106), n(111);
    },
    function(t, e, n) {
      var i;
      void 0 ===
        (i = function() {
          var t = n(2),
            e = n(33),
            i = n(1),
            a = n(100),
            o = n(101),
            r = n(102),
            s = !1,
            l = null,
            c = null,
            u = null,
            d = $('#J-user-info'),
            h = function() {
              if (e.getCookie('migu_music_status')) {
                var t = e.getCookie('migu_music_avatar'),
                  n = {
                    headSmallPic: (t = t
                      ? decodeURIComponent(t)
                      : MUSIC_CONFIG.APP_CDN_HOST +
                        MUSIC_CONFIG.APP_STATIC_PATH +
                        '/img/common/header/default-avatar.png'),
                  };
                d.html(o(n));
              }
            },
            f = function() {
              var e = {};
              if (t(!1)) {
                l = !0;
                var n = r();
                d.append(n),
                  (u = $.ajax({
                    url: MUSIC_CONFIG.APP_API_PATH + '/user/getUserInfo',
                    type: 'GET',
                    cache: !1,
                  }).done(function(t) {
                    if (t.success) {
                      $('.login-loading').addClass('off'), ((t = t).isLogin = !0);
                      var e = a(t);
                      $('#J-info-container').append(e);
                    }
                  }));
              } else {
                e.isLogin = !1;
                var i = a(e);
                d.append(i);
              }
            },
            p = function() {
              ($('#J_LoginBtn') && $('#J_LoginBtn').length) ||
                $('body').append(
                  '<a href="javascript:;" id="J_LoginBtn" style="display: none;"></a>',
                );
              var t = document.createElement('script');
              (t.type = 'text/javascript'),
                (t.src =
                  MUSIC_CONFIG.MIGU_LOGIN_URL +
                  MUSIC_CONFIG.SOURCE_ID +
                  '&callbackURL=' +
                  window.location.href),
                $('body').append(t);
            },
            g = function(t) {
              $.ajax({
                url: MUSIC_CONFIG.APP_API_PATH + '/user/recharge',
                type: 'POST',
                cache: !1,
                async: !0,
              }).done(function(e) {
                e.success
                  ? (window.open().location.href = e.data)
                  : i.tip('您的登录信息已过期，请重新登录！');
                t.removeClass('isClick');
              });
            };
          $(document).on('mouseover', '.nav-main .nav-item', function() {
            var t = $(this).index();
            if (2 != t) {
              var e = $('#header .sub-nav ul');
              setTimeout(function() {
                e.eq(t)
                  .show()
                  .siblings()
                  .hide();
              }, 50);
            }
          }),
            $(document).on('mouseleave', '#header', function() {
              setTimeout(function() {
                $('#header .sub-nav ul').hide(), $('.active-menu').show();
              }, 50);
            }),
            $(document).on('click', '.J_login', function() {
              t(!0);
            }),
            $(document).on('click', '#J-popup-login', function() {
              t(!0);
            }),
            $(document).on('click', '.J_recharge', function() {
              var t = $(this);
              t.hasClass('isClick') || (t.addClass('isClick'), g(t));
            }),
            $(document)
              .on('mouseenter', '#J-user-info', function() {
                $('#J-info-container').remove(),
                  s ||
                    ((s = !0),
                    clearTimeout(c),
                    (c = setTimeout(function() {
                      f();
                    }, 200)));
              })
              .on('mouseleave', '#J-user-info', function() {
                l && u.abort(), $('#J-info-container').remove(), (s = !1), clearTimeout(c);
              }),
            $(document).on('click', '#J-my', function() {
              t(!0) && (window.open().location.href = MUSIC_CONFIG.APP_MY_PATH);
            }),
            $(function() {
              window.transferAudio || (p(), h());
            });
        }.call(e, n, e, t)) || (t.exports = i);
    },
    function(t, e, n) {
      var i = n(0);
      t.exports = function(t) {
        var e,
          n = '',
          a = t || {};
        return (
          function(t, a, o, r, s) {
            var l = t.APP_CDN_HOST + t.APP_STATIC_PATH + '/img/common/header/default-avatar.png',
              c = t.APP_MUSIC_PATH + '/service/platinum';
            if (o) {
              var u = s.avatar,
                d = s.growthInfo,
                h = s.platinum;
              (n =
                n +
                '<div' +
                i.attr(
                  'class',
                  i.classes(['login-user-info', h.platinumStatus ? 'platinum' : ''], [!1, !0]),
                  !1,
                  !0,
                ) +
                '><div class="user-info-inner"><div class="icon-arrow-box"><span class="icon-arrow-out"></span></div><div class="user-info-desc"><div class="user-info-box"><div class="avatar"><img class="img-block img-full"' +
                i.attr('src', u.smallAvatar, !0, !0) +
                i.attr('onerror', "javascript:this.src='" + l + "'", !0, !0) +
                '><span class="level">LV' +
                i.escape(null == (e = d.level) ? '' : e) +
                '&nbsp;' +
                i.escape(null == (e = d.medalName) ? '' : e) +
                '</span></div><div class="user-info-content"><p class="nickname">' +
                i.escape(null == (e = s.nickname || '咪咕用户') ? '' : e) +
                '<a' +
                (i.attr(
                  'class',
                  i.classes(
                    ['login-icons', 'icon-platinum', h.platinumStatus ? 'on' : 'off'],
                    [!1, !1, !0],
                  ),
                  !1,
                  !0,
                ) +
                  i.attr('href', c, !0, !0)) +
                ' title="白金会员" target="_blank"></a><a' +
                (i.attr(
                  'class',
                  i.classes(
                    ['login-icons', 'icon-crbtmonthly', s.crbtmonthly ? 'on' : 'off'],
                    [!1, !1, !0],
                  ),
                  !1,
                  !0,
                ) +
                  i.attr('href', t.APP_MUSIC_PATH + '/service/crbtmonthly', !0, !0)) +
                ' title="彩铃包月" target="_blank"></a></p>'),
                (n =
                  (n = h.platinumStatus
                    ? n +
                      '<p class="platinum-intro">白金会员&nbsp;&nbsp;&nbsp;' +
                      i.escape(null == (e = h.platinumValidityTime) ? '' : e) +
                      '到期<a class="popup-btn"' +
                      i.attr('href', c, !0, !0) +
                      '>续费</a></p>'
                    : n +
                      '<p class="platinum-intro">开通白金会员尽享咪咕尊贵权益<a class="popup-btn" target="_blank"' +
                      i.attr('href', c, !0, !0) +
                      '>开通</a></p>') +
                  '<p class="account-info"><span>积分: ' +
                  i.escape(null == (e = d.credit) ? '' : e) +
                  '</span><label class="miguCoin">咪咕币：<span id="J_miguCoin">' +
                  i.escape(null == (e = s.miguCoin) ? '' : e) +
                  '</span></label><a class="popup-btn J_recharge" href="javascript:;">充值</a></p></div></div></div><div class="user-info-link"><a class="item" target="_blank"' +
                  i.attr('href', t.APP_MY_PATH + '/collect', !0, !0) +
                  '><i class="iconfont cf-login-shoucang"></i><span>我的收藏</span></a><a class="item" target="_blank"' +
                  i.attr('href', t.APP_MY_PATH + '/crbt_set', !0, !0) +
                  '><i class="iconfont cf-login-cailingshezhi"></i><span>铃音设置</span></a><a class="item" target="_blank"' +
                  i.attr('href', t.APP_MY_PATH + '/digital_album', !0, !0) +
                  '><i class="iconfont cf-login-zhuanji"></i><span>数字专辑</span></a><a class="item" target="_blank"' +
                  i.attr('href', t.APP_MY_PATH + '/playlist', !0, !0) +
                  '><i class="iconfont cf-login-gedan"></i><span>我的歌单</span></a></div><div class="account-action"><a class="account-set" target="_blank"' +
                  i.attr('href', t.MIGU_ACCOUNT_SET + t.SOURCE_ID, !0, !0) +
                  '><i class="iconfont cf-login-shezhi"></i>账号设置</a><a class="logout"' +
                  i.attr(
                    'href',
                    t.MIGU_LOGOUT_URL + t.SOURCE_ID + '&callbackURL=' + a(r.href),
                    !0,
                    !0,
                  ) +
                  '><i class="iconfont cf-login-tuichu"></i>退出登录</a></div></div></div>');
            } else
              n =
                n +
                '<div class="user-info-container" id="J-info-container"><div class="no-login"><div class="user-info-inner"><div class="icon-arrow-box"><span class="icon-arrow-out"></span></div><div class="user-info-title"><span>登录后可专享</span></div><div class="user-info-intro"><div class="item"><i class="iconfont cf-login-jilu"></i><span>试听记录同步</span></div><div class="item"><i class="iconfont cf-login-cailing"></i><span>订购酷炫铃音</span></div><div class="item"><i class="iconfont cf-login-sq"></i><span>下载无损音乐</span></div></div><div class="user-info-action"><a class="btn-user-action action-login" id="J-popup-login" href="javascript:;">登录</a><a class="btn-user-action"' +
                i.attr(
                  'href',
                  t.MIGU_ACCOUNT_REGISTER +
                    '?sourceid=' +
                    t.SOURCE_ID +
                    '&callbackURL=' +
                    a(r.href),
                  !0,
                  !0,
                ) +
                ' target="_blank">注册</a></div></div></div></div>';
          }.call(
            this,
            'MUSIC_CONFIG' in a
              ? a.MUSIC_CONFIG
              : 'undefined' != typeof MUSIC_CONFIG
              ? MUSIC_CONFIG
              : void 0,
            'encodeURIComponent' in a
              ? a.encodeURIComponent
              : 'undefined' != typeof encodeURIComponent
              ? encodeURIComponent
              : void 0,
            'isLogin' in a ? a.isLogin : 'undefined' != typeof isLogin ? isLogin : void 0,
            'location' in a ? a.location : 'undefined' != typeof location ? location : void 0,
            'user' in a ? a.user : 'undefined' != typeof user ? user : void 0,
          ),
          n
        );
      };
    },
    function(t, e, n) {
      var i = n(0);
      t.exports = function(t) {
        var e = '',
          n = t || {};
        return (
          function(t, n) {
            var a = t.APP_CDN_HOST + t.APP_STATIC_PATH + '/img/common/header/default-avatar.png';
            e =
              e +
              '<a class="avatar J_login" id="avatar" target="_blank"' +
              i.attr('href', t.APP_MY_PATH, !0, !0) +
              '><img class="img-block img-full default-avatar"' +
              i.attr('src', n, !0, !0) +
              i.attr('onerror', "javascript:this.src='" + a + "'", !0, !0) +
              '></a>';
          }.call(
            this,
            'MUSIC_CONFIG' in n
              ? n.MUSIC_CONFIG
              : 'undefined' != typeof MUSIC_CONFIG
              ? MUSIC_CONFIG
              : void 0,
            'headSmallPic' in n
              ? n.headSmallPic
              : 'undefined' != typeof headSmallPic
              ? headSmallPic
              : void 0,
          ),
          e
        );
      };
    },
    function(t, e, n) {
      var i = n(0);
      t.exports = function(t) {
        var e = '',
          n = t || {};
        return (
          function(t) {
            var n = t.APP_CDN_HOST + t.APP_STATIC_PATH + '/img/music/top/loading.gif';
            e =
              e +
              '<div class="user-info-container logined" id="J-info-container"><div class="login-user-info login-loading"><div class="user-info-inner"><div class="icon-arrow-box"><span class="icon-arrow-out"></span></div><div class="user-info-loading"><img' +
              i.attr('src', n, !0, !0) +
              '></div></div></div></div>';
          }.call(
            this,
            'MUSIC_CONFIG' in n
              ? n.MUSIC_CONFIG
              : 'undefined' != typeof MUSIC_CONFIG
              ? MUSIC_CONFIG
              : void 0,
          ),
          e
        );
      };
    },
    function(t, e, n) {
      var i;
      void 0 ===
        (i = function() {
          var t,
            e = !1;
          $('.search').hover(
            function() {
              var t = $(this);
              0 == t.find('input').width() &&
                t.hasClass('smallinp') &&
                (t.removeClass('smallinp'), (e = !0));
            },
            function() {
              e && $('.show_searchList').length < 1 && ($(this).addClass('smallinp'), (e = !1));
            },
          );
          var n = null;
          function i() {
            var t = $('.search .ipt #search_ipt').val();
            '' != t &&
              (MUSIC_CONFIG.IS_FROM_MIGU
                ? window.open(
                    MUSIC_CONFIG.APP_SEARCH_PATH + '?from=migu&keyword=' + encodeURIComponent(t),
                  )
                : window.open(MUSIC_CONFIG.APP_SEARCH_PATH + '?keyword=' + encodeURIComponent(t)));
          }
          function a() {
            t && null != t && t.abort();
            var e = $('.search .ipt #search_ipt').val();
            t = $.ajax({
              url: '/v2/async/search',
              type: 'get',
              dataType: 'json',
              data: {
                keyword: e,
              },
            })
              .done(function(t) {
                o('key', t);
              })
              .fail(function() {});
          }
          function o(t, e) {
            if ('hot' == t) {
              var n = $('.hotList');
              if (e.length) {
                var i = '<p class="searchItem hotlist_title">热门搜索</p>';
                $.each(e, function() {
                  var t = this.ext;
                  '#' === t.linkPath
                    ? (i +=
                        '<div class="searchItem"><a href="' +
                        MUSIC_CONFIG.APP_SEARCH_PATH +
                        '?keyword=' +
                        encodeURIComponent(t.description) +
                        '" target="_blank">' +
                        t.description +
                        '</a></div>')
                    : (i +=
                        '<div class="searchItem"><a href="' +
                        t.linkPath +
                        '" target="_blank">' +
                        t.description +
                        '</a></div>');
                }),
                  n.html(i);
              }
            } else if (e.searchResult && e.searchResult.object) {
              var a = e.searchResult.object,
                o = '';
              if (
                (a.albumList.length &&
                  ((o +=
                    '<div class="searchItem searchList-type"><i class="iconfont cf-zhuanji"></i>专辑</div>'),
                  $.each(a.albumList, function() {
                    o +=
                      '<div class="searchItem"><a href="' +
                      MUSIC_CONFIG.APP_MUSIC_PATH +
                      '/album/' +
                      this.albumId +
                      '" target="_blank">' +
                      this.albumName +
                      ' - ' +
                      this.singerName +
                      '</a></div>';
                  })),
                a.songList.length)
              ) {
                var r = '';
                (o +=
                  '<div class="searchItem searchList-type"><i class="iconfont cf-gequ"></i>歌曲</div>'),
                  $.each(a.songList, function() {
                    (r =
                      this.crbtCopyrightId || this.fullSongCopyrightId || this.walkManCopyrightId),
                      (o +=
                        '<div class="searchItem"><a href="' +
                        MUSIC_CONFIG.APP_MUSIC_PATH +
                        '/song/' +
                        r +
                        '" target="_blank">' +
                        this.musicName +
                        ' - ' +
                        this.artistName +
                        '</a></div>');
                  });
              }
              a.singerList.length &&
                ((o +=
                  '<div class="searchItem searchList-type"><i class="iconfont cf-geshou"></i>歌手</div>'),
                $.each(a.singerList, function() {
                  o +=
                    '<div class="searchItem"><a href="' +
                    MUSIC_CONFIG.APP_MUSIC_PATH +
                    '/artist/' +
                    this.artistId +
                    '" target="_blank">' +
                    this.artistName +
                    '</a></div>';
                })),
                $('.searchtype_container').html(o),
                $('.J_search_list .hotList').removeClass('droplist'),
                $('.J_search_list .searchList').addClass('droplist showsearchs');
            }
          }
          $('.search .ipt #search_ipt').focus(function() {
            '' == $(this).val() &&
              $.ajax({
                url: '/v2/async/search/hotKey',
                type: 'get',
                dataType: 'json',
              })
                .done(function(t) {
                  o('hot', t.searchHot.items);
                })
                .fail(function() {}),
              $('.J_search_list').hasClass('show_searchList') ||
                $('.J_search_list').addClass('show_searchList'),
              $(this).keyup(function() {
                var e = $(this).val();
                window.clearTimeout(n),
                  '' != e
                    ? (n = setTimeout(a, 30))
                    : (t && null != t && t.abort(),
                      $('.J_search_list .searchList')
                        .removeClass('droplist')
                        .removeClass('showsearchs'),
                      $('.J_search_list .hotList').addClass('droplist'));
              });
          }),
            $('.search .ipt #search_ipt').keydown(function(t) {
              13 == t.keyCode && i();
            }),
            $('.btn-search').on('click', function() {
              i();
            }),
            $(document).bind('click', function(t) {
              0 == $(t.target).closest('#search_ipt').length &&
                (e && $('.search').addClass('smallinp'),
                $('.J_search_list').removeClass('show_searchList')),
                t.stopPropagation();
            });
        }.call(e, n, e, t)) || (t.exports = i);
    },
    function(t, e, n) {
      var i;
      void 0 ===
        (i = function() {
          return function() {
            var t = n(12),
              e = n(74),
              i = n(2),
              a = n(33),
              o = document.domain.indexOf('migu.cn') > -1 ? 'migu.cn' : document.domain;
            n(71);
            var r = $('#offset-action'),
              s = $('#scroll-top');
            function l() {
              var t = $(window).width();
              t > 1580
                ? r.css({
                    right: (t - 1580) / 2,
                  })
                : r.css({
                    right: 0,
                  });
            }
            function c(t) {
              return t < 10 ? '0' + t : '' + t;
            }
            l(),
              $(window).resize(l),
              setTimeout(function() {
                r.css('opacity', 1);
              }, 1e3),
              (window.scrollChange = function() {
                var t = $(window).scrollTop(),
                  e = $(window).height();
                t > e ? s.show() : s.hide();
                var n = $('#footer').offset().top;
                if (t + e >= n) {
                  var i = t + e - n + 55;
                  r.css({
                    bottom: i,
                  });
                } else
                  r.css({
                    bottom: 55,
                  });
              }),
              document.getElementById('footer') &&
                ((window.onload = scrollChange), $(window).scroll(scrollChange)),
              s.click(function() {
                $('html,body').animate(
                  {
                    scrollTop: 0,
                  },
                  500,
                );
              }),
              $('.open-player').click(function() {
                e.openAudioPlayer(1), (document.cookie = 'no_data=1;path=/;domain=' + o);
              }),
              $('.J-go-kf').on('click', function() {
                window.open().location.href = (function() {
                  var e = new Date(),
                    n = {
                      seq:
                        c(e.getMonth() + 1) +
                        c(e.getDate()) +
                        c(e.getHours()) +
                        c(e.getMinutes()) +
                        c(e.getSeconds()) +
                        e.getMilliseconds(),
                      appid: '1101000001',
                      channelId: '1101',
                      servicetype: '1',
                      userId: a.getCookie('migu_music_uid') || '',
                      usertype: i(!1) ? '11' : '99',
                      email: a.getCookie('migu_music_email') || '',
                      msisdn: a.getCookie('migu_music_msisdn') || '',
                      nickname: a.getCookie('migu_music_nickname') || '',
                      account: '',
                      detail: '',
                    },
                    o = [],
                    r = [];
                  for (var s in n) '' != n[s] && (o.push(s + n[s]), r.push(s + '=' + n[s]));
                  var l = o.sort().join('') + 'A847A2F1536A6C453D58767F8080F5DD',
                    u = t.MD5(l).toString();
                  return r.push('hash=' + u), 'https://kf.migu.cn/api/onlineWeb?' + r.join('&');
                })();
              });
          };
        }.call(e, n, e, t)) || (t.exports = i);
    },
    function(t, e, n) {
      var i;
      void 0 ===
        (i = function() {
          var t = n(33),
            e = {
              uuid: function() {
                for (var t = [], e = 0; e < 36; e++)
                  t[e] = '0123456789abcdef'.substr(Math.floor(16 * Math.random()), 1);
                (t[14] = '4'),
                  (t[19] = '0123456789abcdef'.substr((3 & t[19]) | 8, 1)),
                  (t[8] = t[13] = t[18] = t[23] = '-');
                var n = t.join('');
                return n;
              },
              setMiguCookie: function(t) {
                var n = new Date();
                n.setTime(n.getTime() + 6048e5),
                  (null == t || t.length < 38) && (t = e.uuid() + '-n4' + new Date().getTime()),
                  (document.cookie =
                    'migu_cookie_id=' +
                    t +
                    ';expires=' +
                    n.toGMTString() +
                    ';path=/;domain=' +
                    location.hostname);
              },
              checkMiguCookieId: function() {
                var n = t.getCookie('migu_cookie_id');
                e.setMiguCookie(n);
              },
            };
          e.checkMiguCookieId();
        }.call(e, n, e, t)) || (t.exports = i);
    },
    function(t, e, n) {
      var i;
      void 0 ===
        (i = function() {
          var t = n(107),
            e = n(108),
            i = {
              channelId: {
                wechat: 'weixin',
                qqWin: '0010062',
                qzone: '0010060',
                txweibo: '0010061',
                sina: '001002H',
              },
              ruleId: {
                song: '41',
                mv: '42',
                album: '43',
                songlist: '43',
                topic: '43',
              },
              shareType: {
                song: '0',
                concert: '4',
                album: '2',
                mv: '3',
                songlist: '5',
                topic: '6',
              },
              shareChannel: {
                qqWin: '0',
                qzone: '1',
                sina: '2',
                wechat: '3',
              },
              shareKeyList: {
                wechat: '',
                qqWin: '100396384',
                qzone: '',
                txweibo: '',
                sina: '2432910183',
              },
              shareUrlList: {
                wechat: '',
                qqWin: 'http://connect.qq.com/widget/shareqq/index.html?',
                qzone: 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?',
                txweibo: 'http://share.v.t.qq.com/recommend.php?c=share&a=recommend&',
                sina: 'http://service.weibo.com/share/share.php?',
              },
              mergeUrl: function(t) {
                t.url.indexOf('?') > -1
                  ? 'wechat' == t.channel
                    ? (t.url = t.url + '&channelId=' + this.channelId.wechat)
                    : 'qqWin' == t.channel
                    ? (t.url = t.url + '&channelId=' + this.channelId.qqWin)
                    : 'qzone' == t.channel
                    ? (t.url = t.url + '&channelId=' + this.channelId.qzone)
                    : 'txweibo' == t.channel
                    ? (t.url = t.url + '&channelId=' + this.channelId.txweibo)
                    : 'sina' == t.channel && (t.url = t.url + '&channelId=' + this.channelId.sina)
                  : 'wechat' == t.channel
                  ? (t.url = t.url + '?channelId=' + this.channelId.wechat)
                  : 'qqWin' == t.channel
                  ? (t.url = t.url + '?channelId=' + this.channelId.qqWin)
                  : 'qzone' == t.channel
                  ? (t.url = t.url + '?channelId=' + this.channelId.qzone)
                  : 'txweibo' == t.channel
                  ? (t.url = t.url + '?channelId=' + this.channelId.txweibo)
                  : 'sina' == t.channel && (t.url = t.url + '?channelId=' + this.channelId.sina);
                var e = [];
                for (var n in t) e.push(n + '=' + encodeURIComponent(t[n] || ''));
                return e.join('&');
              },
              mergeSummary: function(t, e, n, i, a, o) {
                if ('wechat' == t || 'qqWin' == t)
                  switch (e) {
                    case 'song':
                      i = o
                        ? '来自' + a + '的专辑《' + o + '》，咪咕音乐提供'
                        : '来自' + a + '的歌曲，咪咕音乐提供';
                      break;
                    case 'songlist':
                      i = '来自' + (a || '咪咕音乐') + '的歌单，咪咕音乐提供';
                      break;
                    case 'mv':
                      i = '来自' + a + '的MV，咪咕音乐提供';
                      break;
                    case 'concert':
                      i += '，想看就来咪咕吧！，咪咕音乐提供';
                      break;
                    case 'album':
                      i = '来自' + a + '的专辑，咪咕音乐提供';
                      break;
                    case 'digital_album':
                      i = '来自' + a + '的数字专辑，咪咕音乐提供';
                      break;
                    case 'activity':
                      i = '听好听的歌，轻松获得流量，咪咕音乐提供';
                      break;
                    case 'topic':
                      i = i && i.length ? i + '，咪咕音乐提供' : '咪咕音乐提供';
                      break;
                    default:
                      i = '咪咕音乐网_和你在一起，咪咕音乐提供';
                  }
                else if ('txweibo' == t || 'qzone' == t || 'sina' == t)
                  switch (e) {
                    case 'song':
                      i = '我正在收听来自' + a + '的歌曲《' + n + '》（来自@咪咕音乐）';
                      break;
                    case 'songlist':
                      i =
                        '我正在收听来自' +
                        (a || '咪咕音乐') +
                        '的歌单《' +
                        n +
                        '》（来自@咪咕音乐）';
                      break;
                    case 'mv':
                      i = a
                        ? '分享了' + a + '的MV《' + n + '》（来自@咪咕音乐）'
                        : '分享了MV《' + n + '》（来自@咪咕音乐）';
                      break;
                    case 'concert':
                      i = '分享了《' + n + '》（@咪咕音乐）';
                      break;
                    case 'album':
                      i = '分享了' + a + '的专辑《' + n + '》（@咪咕音乐）';
                      break;
                    case 'digital_album':
                      i = '分享了' + a + '的数字专辑《' + n + '》（@咪咕音乐）';
                      break;
                    case 'activity':
                    case 'topic':
                      i = '分享了《' + n + '》（@咪咕音乐）';
                      break;
                    default:
                      i = '咪咕音乐网_和你在一起，咪咕音乐提供';
                  }
                return i;
              },
            },
            a = n(109),
            o = n(1);
          (window.MUSIC_GLOBAL.share = function(t) {
            var e = '',
              n = t.channel,
              r = t.type,
              s = t.title,
              l = t.linkUrl,
              c = t.imgUrl,
              u = t.summary,
              d = t.singer,
              h = t.album;
            i.channelId[n], i.ruleId[r], i.shareType[r], i.shareChannel[n];
            if (
              ('wechat' == n &&
                ((e =
                  l.indexOf('?') > -1
                    ? l + '&channelId=' + i.channelId.wechat
                    : l + '?channelId=' + i.channelId.wechat),
                o.open({
                  container:
                    '<div class="share-dialog">分享到微信<div id="wechat_qrcode"></div>精彩内容分享给好友或者微信朋友圈</div>',
                  width: 300,
                  height: 400,
                  success: function() {
                    $('#wechat_qrcode').attr('data-qr', e),
                      a('wechat_qrcode', {
                        width: 200,
                        height: 200,
                      });
                  },
                })),
              'qqWin' == n)
            ) {
              var f = {
                title: s,
                summary: i.mergeSummary(n, r, s, u, d, h),
                url: l,
                pics: c,
                channel: n,
              };
              (e = i.shareUrlList.qqWin + i.mergeUrl(f)), window.open(e);
            }
            if ('qzone' == n) {
              f = {
                title: s,
                desc: i.mergeSummary(n, r, s, u, d, h),
                url: l,
                pics: c,
                channel: n,
              };
              (e = i.shareUrlList.qzone + i.mergeUrl(f)), window.open(e);
            }
            if ('txweibo' == n) {
              f = {
                title: s,
                url: l,
                pic: c,
                appkey: i.shareKeyList.txweibo,
                channel: n,
              };
              (e = i.shareUrlList.txweibo + i.mergeUrl(f)), window.open(e);
            }
            if ('sina' == n) {
              f = {
                appkey: i.shareKeyList.sina,
                title: i.mergeSummary(n, r, s, u, d, h),
                url: l,
                pic: c,
                channel: n,
                ralateUid: '@咪咕音乐',
              };
              (e = i.shareUrlList.sina + i.mergeUrl(f)), window.open(e);
            }
          }),
            (MUSIC_GLOBAL.openShareStyle = function(n) {
              var i = n.attr('data-shareType'),
                a = n.attr('data-sharePlace'),
                o = n.attr('data-share').replace(/[\f\n\r]/g, ''),
                r = JSON.parse(o);
              if (
                (-1 == r.linkUrl.indexOf('http') && (r.linkUrl = MUSIC_CONFIG.APP_HOST + r.linkUrl),
                (-1 != r.imgUrl.indexOf('http://') && -1 != r.imgUrl.indexOf('https://')) ||
                  (r.imgUrl = location.protocol + r.imgUrl),
                '1' == i)
              ) {
                var s = n.offset().left,
                  l = n.offset().top,
                  c = n.height(),
                  u = 'top' === a ? l - c - 5 : l + c + 5,
                  d = $(t());
                $('body').append(d),
                  d.css({
                    left: s - 30,
                    top: u,
                    position: 'absolute',
                  }),
                  d.find('span').click(function() {
                    var t = $(this).data('channel');
                    (r.channel = t), MUSIC_GLOBAL.share(r);
                  });
              } else {
                var h = $(window).width(),
                  f = ((s = n.offset().left), (l = n.offset().top), n.width()),
                  p = ((u = l + (c = n.height()) + 10), s + f - 75 - 12);
                s + 75 > h && (p = s - 75 - 10);
                d = $(e());
                $('body').append(d),
                  d.css({
                    left: p,
                    top: u,
                    position: 'absolute',
                    width: '0' === n.attr('showWidth') ? n.outerWidth() : 150,
                  }),
                  d.find('.share-item').click(function() {
                    var t = $(this).data('channel');
                    (r.channel = t), MUSIC_GLOBAL.share(r);
                  });
              }
            }),
            $(document).on('click', '.J-btn-share', function() {
              var t = $(this);
              t.data('share') &&
                ($('.thumb').removeClass('active'),
                t.parents('.thumb').addClass('active'),
                $('#song-list-box .song-item').removeClass('active'),
                t.parents('.song-item').addClass('active'),
                $('.songlist-item').removeClass('active'),
                t.parents('.songlist-item').addClass('active'),
                $('.share-container').remove(),
                t.parents('#J_PageSonglist').length &&
                  t
                    .parents('.row')
                    .eq(0)
                    .addClass('active'),
                MUSIC_GLOBAL.openShareStyle(t));
            }),
            $(document).click(function(t) {
              $(t.target).hasClass('J-btn-share') ||
                $(t.target)
                  .parents()
                  .hasClass('J-btn-share') ||
                ($('.share-container').remove(),
                $('.thumb').removeClass('active'),
                $('.songlist-item').removeClass('active'));
            });
        }.call(e, n, e, t)) || (t.exports = i);
    },
    function(t, e, n) {
      var i = n(0);
      t.exports = function(t) {
        var e = '',
          n = t || {};
        return (
          function(t) {
            var n = t.APP_CDN_HOST + t.APP_STATIC_PATH;
            e =
              e +
              '<div class="share-container"><span data-channel="qqWin" title="分享给QQ好友"><img' +
              i.attr('src', n + '/img/common/share/share_qq.png', !0, !0) +
              ' alt="qq好友"></span><span data-channel="qzone" title="分享到QQ空间和朋友网"><img' +
              i.attr('src', n + '/img/common/share/share_zone.png', !0, !0) +
              ' alt="qq空间"></span><span data-channel="sina" title="分享到新浪微博"><img' +
              i.attr('src', n + '/img/common/share/share_sina.png', !0, !0) +
              ' alt="新浪微博"></span><span data-channel="wechat" title="分享到微信"><img' +
              i.attr('src', n + '/img/common/share/share_wechat.png', !0, !0) +
              ' alt="微信"></span></div>';
          }.call(
            this,
            'MUSIC_CONFIG' in n
              ? n.MUSIC_CONFIG
              : 'undefined' != typeof MUSIC_CONFIG
              ? MUSIC_CONFIG
              : void 0,
          ),
          e
        );
      };
    },
    function(t, e, n) {
      n(0);
      t.exports = function(t) {
        var e = '';
        return (e +=
          '<div class="share-container"><div class="share-inner"><div class="share-item" data-channel="qqWin">QQ好友</div><div class="share-item" data-channel="qzone">QQ空间</div><div class="share-item" data-channel="sina">新浪微博</div><div class="share-item" data-channel="wechat">微信</div></div></div>');
      };
    },
    function(t, e, n) {
      var i, a;
      (i = [n(110)]),
        void 0 ===
          (a = function(t) {
            return function(e, n) {
              n = n || {};
              var i = '[data-qr]';
              if ('string' == typeof e) {
                var a = $('#' + e);
                a.length && (i = a.attr('data-qr') ? '#' + e : '#' + e + ' [data-qr]');
              }
              $(i).each(function(e, i) {
                new t(this, {
                  text: this.getAttribute('data-qr'),
                  watermark: this.getAttribute('data-wm'),
                  width: n.width || 120,
                  height: n.height || 120,
                  correctLevel: t.CorrectLevel.H,
                });
              });
            };
          }.apply(e, i)) || (t.exports = a);
    },
    function(t, e) {
      var n;
      !(function() {
        function t(t) {
          (this.mode = i.MODE_8BIT_BYTE), (this.data = t), (this.parsedData = []);
          for (var e = 0, n = this.data.length; e < n; e++) {
            var a = [],
              o = this.data.charCodeAt(e);
            o > 65536
              ? ((a[0] = 240 | ((1835008 & o) >>> 18)),
                (a[1] = 128 | ((258048 & o) >>> 12)),
                (a[2] = 128 | ((4032 & o) >>> 6)),
                (a[3] = 128 | (63 & o)))
              : o > 2048
              ? ((a[0] = 224 | ((61440 & o) >>> 12)),
                (a[1] = 128 | ((4032 & o) >>> 6)),
                (a[2] = 128 | (63 & o)))
              : o > 128
              ? ((a[0] = 192 | ((1984 & o) >>> 6)), (a[1] = 128 | (63 & o)))
              : (a[0] = o),
              this.parsedData.push(a);
          }
          (this.parsedData = Array.prototype.concat.apply([], this.parsedData)),
            this.parsedData.length != this.data.length &&
              (this.parsedData.unshift(191),
              this.parsedData.unshift(187),
              this.parsedData.unshift(239));
        }
        function e(t, e) {
          (this.typeNumber = t),
            (this.errorCorrectLevel = e),
            (this.modules = null),
            (this.moduleCount = 0),
            (this.dataCache = null),
            (this.dataList = []);
        }
        (t.prototype = {
          getLength: function(t) {
            return this.parsedData.length;
          },
          write: function(t) {
            for (var e = 0, n = this.parsedData.length; e < n; e++) t.put(this.parsedData[e], 8);
          },
        }),
          (e.prototype = {
            addData: function(e) {
              var n = new t(e);
              this.dataList.push(n), (this.dataCache = null);
            },
            isDark: function(t, e) {
              if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
                throw new Error(t + ',' + e);
              return this.modules[t][e];
            },
            getModuleCount: function() {
              return this.moduleCount;
            },
            make: function() {
              this.makeImpl(!1, this.getBestMaskPattern());
            },
            makeImpl: function(t, n) {
              (this.moduleCount = 4 * this.typeNumber + 17),
                (this.modules = new Array(this.moduleCount));
              for (var i = 0; i < this.moduleCount; i++) {
                this.modules[i] = new Array(this.moduleCount);
                for (var a = 0; a < this.moduleCount; a++) this.modules[i][a] = null;
              }
              this.setupPositionProbePattern(0, 0),
                this.setupPositionProbePattern(this.moduleCount - 7, 0),
                this.setupPositionProbePattern(0, this.moduleCount - 7),
                this.setupPositionAdjustPattern(),
                this.setupTimingPattern(),
                this.setupTypeInfo(t, n),
                this.typeNumber >= 7 && this.setupTypeNumber(t),
                null == this.dataCache &&
                  (this.dataCache = e.createData(
                    this.typeNumber,
                    this.errorCorrectLevel,
                    this.dataList,
                  )),
                this.mapData(this.dataCache, n);
            },
            setupPositionProbePattern: function(t, e) {
              for (var n = -1; n <= 7; n++)
                if (!(t + n <= -1 || this.moduleCount <= t + n))
                  for (var i = -1; i <= 7; i++)
                    e + i <= -1 ||
                      this.moduleCount <= e + i ||
                      (this.modules[t + n][e + i] =
                        (0 <= n && n <= 6 && (0 == i || 6 == i)) ||
                        (0 <= i && i <= 6 && (0 == n || 6 == n)) ||
                        (2 <= n && n <= 4 && 2 <= i && i <= 4));
            },
            getBestMaskPattern: function() {
              for (var t = 0, e = 0, n = 0; n < 8; n++) {
                this.makeImpl(!0, n);
                var i = f.getLostPoint(this);
                (0 == n || t > i) && ((t = i), (e = n));
              }
              return e;
            },
            createMovieClip: function(t, e, n) {
              var i = t.createEmptyMovieClip(e, n);
              this.make();
              for (var a = 0; a < this.modules.length; a++)
                for (var o = 1 * a, r = 0; r < this.modules[a].length; r++) {
                  var s = 1 * r;
                  this.modules[a][r] &&
                    (i.beginFill(0, 100),
                    i.moveTo(s, o),
                    i.lineTo(s + 1, o),
                    i.lineTo(s + 1, o + 1),
                    i.lineTo(s, o + 1),
                    i.endFill());
                }
              return i;
            },
            setupTimingPattern: function() {
              for (var t = 8; t < this.moduleCount - 8; t++)
                null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
              for (var e = 8; e < this.moduleCount - 8; e++)
                null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0);
            },
            setupPositionAdjustPattern: function() {
              for (var t = f.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
                for (var n = 0; n < t.length; n++) {
                  var i = t[e],
                    a = t[n];
                  if (null == this.modules[i][a])
                    for (var o = -2; o <= 2; o++)
                      for (var r = -2; r <= 2; r++)
                        this.modules[i + o][a + r] =
                          -2 == o || 2 == o || -2 == r || 2 == r || (0 == o && 0 == r);
                }
            },
            setupTypeNumber: function(t) {
              for (var e = f.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
                var i = !t && 1 == ((e >> n) & 1);
                this.modules[Math.floor(n / 3)][(n % 3) + this.moduleCount - 8 - 3] = i;
              }
              for (n = 0; n < 18; n++) {
                i = !t && 1 == ((e >> n) & 1);
                this.modules[(n % 3) + this.moduleCount - 8 - 3][Math.floor(n / 3)] = i;
              }
            },
            setupTypeInfo: function(t, e) {
              for (
                var n = (this.errorCorrectLevel << 3) | e, i = f.getBCHTypeInfo(n), a = 0;
                a < 15;
                a++
              ) {
                var o = !t && 1 == ((i >> a) & 1);
                a < 6
                  ? (this.modules[a][8] = o)
                  : a < 8
                  ? (this.modules[a + 1][8] = o)
                  : (this.modules[this.moduleCount - 15 + a][8] = o);
              }
              for (a = 0; a < 15; a++) {
                o = !t && 1 == ((i >> a) & 1);
                a < 8
                  ? (this.modules[8][this.moduleCount - a - 1] = o)
                  : a < 9
                  ? (this.modules[8][15 - a - 1 + 1] = o)
                  : (this.modules[8][15 - a - 1] = o);
              }
              this.modules[this.moduleCount - 8][8] = !t;
            },
            mapData: function(t, e) {
              for (
                var n = -1, i = this.moduleCount - 1, a = 7, o = 0, r = this.moduleCount - 1;
                r > 0;
                r -= 2
              )
                for (6 == r && r--; ; ) {
                  for (var s = 0; s < 2; s++)
                    if (null == this.modules[i][r - s]) {
                      var l = !1;
                      o < t.length && (l = 1 == ((t[o] >>> a) & 1)),
                        f.getMask(e, i, r - s) && (l = !l),
                        (this.modules[i][r - s] = l),
                        -1 == --a && (o++, (a = 7));
                    }
                  if ((i += n) < 0 || this.moduleCount <= i) {
                    (i -= n), (n = -n);
                    break;
                  }
                }
            },
          }),
          (e.PAD0 = 236),
          (e.PAD1 = 17),
          (e.createData = function(t, n, i) {
            for (var a = m.getRSBlocks(t, n), o = new v(), r = 0; r < i.length; r++) {
              var s = i[r];
              o.put(s.mode, 4), o.put(s.getLength(), f.getLengthInBits(s.mode, t)), s.write(o);
            }
            var l = 0;
            for (r = 0; r < a.length; r++) l += a[r].dataCount;
            if (o.getLengthInBits() > 8 * l)
              throw new Error('code length overflow. (' + o.getLengthInBits() + '>' + 8 * l + ')');
            for (o.getLengthInBits() + 4 <= 8 * l && o.put(0, 4); o.getLengthInBits() % 8 != 0; )
              o.putBit(!1);
            for (
              ;
              !(o.getLengthInBits() >= 8 * l || (o.put(e.PAD0, 8), o.getLengthInBits() >= 8 * l));

            )
              o.put(e.PAD1, 8);
            return e.createBytes(o, a);
          }),
          (e.createBytes = function(t, e) {
            for (
              var n = 0, i = 0, a = 0, o = new Array(e.length), r = new Array(e.length), s = 0;
              s < e.length;
              s++
            ) {
              var l = e[s].dataCount,
                c = e[s].totalCount - l;
              (i = Math.max(i, l)), (a = Math.max(a, c)), (o[s] = new Array(l));
              for (var u = 0; u < o[s].length; u++) o[s][u] = 255 & t.buffer[u + n];
              n += l;
              var d = f.getErrorCorrectPolynomial(c),
                h = new _(o[s], d.getLength() - 1).mod(d);
              r[s] = new Array(d.getLength() - 1);
              for (u = 0; u < r[s].length; u++) {
                var p = u + h.getLength() - r[s].length;
                r[s][u] = p >= 0 ? h.get(p) : 0;
              }
            }
            var g = 0;
            for (u = 0; u < e.length; u++) g += e[u].totalCount;
            var m = new Array(g),
              v = 0;
            for (u = 0; u < i; u++)
              for (s = 0; s < e.length; s++) u < o[s].length && (m[v++] = o[s][u]);
            for (u = 0; u < a; u++)
              for (s = 0; s < e.length; s++) u < r[s].length && (m[v++] = r[s][u]);
            return m;
          });
        for (
          var i = {
              MODE_NUMBER: 1,
              MODE_ALPHA_NUM: 2,
              MODE_8BIT_BYTE: 4,
              MODE_KANJI: 8,
            },
            a = {
              L: 1,
              M: 0,
              Q: 3,
              H: 2,
            },
            o = 0,
            r = 1,
            s = 2,
            l = 3,
            c = 4,
            u = 5,
            d = 6,
            h = 7,
            f = {
              PATTERN_POSITION_TABLE: [
                [],
                [6, 18],
                [6, 22],
                [6, 26],
                [6, 30],
                [6, 34],
                [6, 22, 38],
                [6, 24, 42],
                [6, 26, 46],
                [6, 28, 50],
                [6, 30, 54],
                [6, 32, 58],
                [6, 34, 62],
                [6, 26, 46, 66],
                [6, 26, 48, 70],
                [6, 26, 50, 74],
                [6, 30, 54, 78],
                [6, 30, 56, 82],
                [6, 30, 58, 86],
                [6, 34, 62, 90],
                [6, 28, 50, 72, 94],
                [6, 26, 50, 74, 98],
                [6, 30, 54, 78, 102],
                [6, 28, 54, 80, 106],
                [6, 32, 58, 84, 110],
                [6, 30, 58, 86, 114],
                [6, 34, 62, 90, 118],
                [6, 26, 50, 74, 98, 122],
                [6, 30, 54, 78, 102, 126],
                [6, 26, 52, 78, 104, 130],
                [6, 30, 56, 82, 108, 134],
                [6, 34, 60, 86, 112, 138],
                [6, 30, 58, 86, 114, 142],
                [6, 34, 62, 90, 118, 146],
                [6, 30, 54, 78, 102, 126, 150],
                [6, 24, 50, 76, 102, 128, 154],
                [6, 28, 54, 80, 106, 132, 158],
                [6, 32, 58, 84, 110, 136, 162],
                [6, 26, 54, 82, 110, 138, 166],
                [6, 30, 58, 86, 114, 142, 170],
              ],
              G15: 1335,
              G18: 7973,
              G15_MASK: 21522,
              getBCHTypeInfo: function(t) {
                for (var e = t << 10; f.getBCHDigit(e) - f.getBCHDigit(f.G15) >= 0; )
                  e ^= f.G15 << (f.getBCHDigit(e) - f.getBCHDigit(f.G15));
                return ((t << 10) | e) ^ f.G15_MASK;
              },
              getBCHTypeNumber: function(t) {
                for (var e = t << 12; f.getBCHDigit(e) - f.getBCHDigit(f.G18) >= 0; )
                  e ^= f.G18 << (f.getBCHDigit(e) - f.getBCHDigit(f.G18));
                return (t << 12) | e;
              },
              getBCHDigit: function(t) {
                for (var e = 0; 0 != t; ) e++, (t >>>= 1);
                return e;
              },
              getPatternPosition: function(t) {
                return f.PATTERN_POSITION_TABLE[t - 1];
              },
              getMask: function(t, e, n) {
                switch (t) {
                  case o:
                    return (e + n) % 2 == 0;
                  case r:
                    return e % 2 == 0;
                  case s:
                    return n % 3 == 0;
                  case l:
                    return (e + n) % 3 == 0;
                  case c:
                    return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
                  case u:
                    return ((e * n) % 2) + ((e * n) % 3) == 0;
                  case d:
                    return (((e * n) % 2) + ((e * n) % 3)) % 2 == 0;
                  case h:
                    return (((e * n) % 3) + ((e + n) % 2)) % 2 == 0;
                  default:
                    throw new Error('bad maskPattern:' + t);
                }
              },
              getErrorCorrectPolynomial: function(t) {
                for (var e = new _([1], 0), n = 0; n < t; n++)
                  e = e.multiply(new _([1, p.gexp(n)], 0));
                return e;
              },
              getLengthInBits: function(t, e) {
                if (1 <= e && e < 10)
                  switch (t) {
                    case i.MODE_NUMBER:
                      return 10;
                    case i.MODE_ALPHA_NUM:
                      return 9;
                    case i.MODE_8BIT_BYTE:
                    case i.MODE_KANJI:
                      return 8;
                    default:
                      throw new Error('mode:' + t);
                  }
                else if (e < 27)
                  switch (t) {
                    case i.MODE_NUMBER:
                      return 12;
                    case i.MODE_ALPHA_NUM:
                      return 11;
                    case i.MODE_8BIT_BYTE:
                      return 16;
                    case i.MODE_KANJI:
                      return 10;
                    default:
                      throw new Error('mode:' + t);
                  }
                else {
                  if (!(e < 41)) throw new Error('type:' + e);
                  switch (t) {
                    case i.MODE_NUMBER:
                      return 14;
                    case i.MODE_ALPHA_NUM:
                      return 13;
                    case i.MODE_8BIT_BYTE:
                      return 16;
                    case i.MODE_KANJI:
                      return 12;
                    default:
                      throw new Error('mode:' + t);
                  }
                }
              },
              getLostPoint: function(t) {
                for (var e = t.getModuleCount(), n = 0, i = 0; i < e; i++)
                  for (var a = 0; a < e; a++) {
                    for (var o = 0, r = t.isDark(i, a), s = -1; s <= 1; s++)
                      if (!(i + s < 0 || e <= i + s))
                        for (var l = -1; l <= 1; l++)
                          a + l < 0 ||
                            e <= a + l ||
                            (0 == s && 0 == l) ||
                            (r == t.isDark(i + s, a + l) && o++);
                    o > 5 && (n += 3 + o - 5);
                  }
                for (i = 0; i < e - 1; i++)
                  for (a = 0; a < e - 1; a++) {
                    var c = 0;
                    t.isDark(i, a) && c++,
                      t.isDark(i + 1, a) && c++,
                      t.isDark(i, a + 1) && c++,
                      t.isDark(i + 1, a + 1) && c++,
                      (0 != c && 4 != c) || (n += 3);
                  }
                for (i = 0; i < e; i++)
                  for (a = 0; a < e - 6; a++)
                    t.isDark(i, a) &&
                      !t.isDark(i, a + 1) &&
                      t.isDark(i, a + 2) &&
                      t.isDark(i, a + 3) &&
                      t.isDark(i, a + 4) &&
                      !t.isDark(i, a + 5) &&
                      t.isDark(i, a + 6) &&
                      (n += 40);
                for (a = 0; a < e; a++)
                  for (i = 0; i < e - 6; i++)
                    t.isDark(i, a) &&
                      !t.isDark(i + 1, a) &&
                      t.isDark(i + 2, a) &&
                      t.isDark(i + 3, a) &&
                      t.isDark(i + 4, a) &&
                      !t.isDark(i + 5, a) &&
                      t.isDark(i + 6, a) &&
                      (n += 40);
                var u = 0;
                for (a = 0; a < e; a++) for (i = 0; i < e; i++) t.isDark(i, a) && u++;
                return (n += 10 * (Math.abs((100 * u) / e / e - 50) / 5));
              },
            },
            p = {
              glog: function(t) {
                if (t < 1) throw new Error('glog(' + t + ')');
                return p.LOG_TABLE[t];
              },
              gexp: function(t) {
                for (; t < 0; ) t += 255;
                for (; t >= 256; ) t -= 255;
                return p.EXP_TABLE[t];
              },
              EXP_TABLE: new Array(256),
              LOG_TABLE: new Array(256),
            },
            g = 0;
          g < 8;
          g++
        )
          p.EXP_TABLE[g] = 1 << g;
        for (g = 8; g < 256; g++)
          p.EXP_TABLE[g] =
            p.EXP_TABLE[g - 4] ^ p.EXP_TABLE[g - 5] ^ p.EXP_TABLE[g - 6] ^ p.EXP_TABLE[g - 8];
        for (g = 0; g < 255; g++) p.LOG_TABLE[p.EXP_TABLE[g]] = g;
        function _(t, e) {
          if (null == t.length) throw new Error(t.length + '/' + e);
          for (var n = 0; n < t.length && 0 == t[n]; ) n++;
          this.num = new Array(t.length - n + e);
          for (var i = 0; i < t.length - n; i++) this.num[i] = t[i + n];
        }
        function m(t, e) {
          (this.totalCount = t), (this.dataCount = e);
        }
        function v() {
          (this.buffer = []), (this.length = 0);
        }
        (_.prototype = {
          get: function(t) {
            return this.num[t];
          },
          getLength: function() {
            return this.num.length;
          },
          multiply: function(t) {
            for (
              var e = new Array(this.getLength() + t.getLength() - 1), n = 0;
              n < this.getLength();
              n++
            )
              for (var i = 0; i < t.getLength(); i++)
                e[n + i] ^= p.gexp(p.glog(this.get(n)) + p.glog(t.get(i)));
            return new _(e, 0);
          },
          mod: function(t) {
            if (this.getLength() - t.getLength() < 0) return this;
            for (
              var e = p.glog(this.get(0)) - p.glog(t.get(0)),
                n = new Array(this.getLength()),
                i = 0;
              i < this.getLength();
              i++
            )
              n[i] = this.get(i);
            for (i = 0; i < t.getLength(); i++) n[i] ^= p.gexp(p.glog(t.get(i)) + e);
            return new _(n, 0).mod(t);
          },
        }),
          (m.RS_BLOCK_TABLE = [
            [1, 26, 19],
            [1, 26, 16],
            [1, 26, 13],
            [1, 26, 9],
            [1, 44, 34],
            [1, 44, 28],
            [1, 44, 22],
            [1, 44, 16],
            [1, 70, 55],
            [1, 70, 44],
            [2, 35, 17],
            [2, 35, 13],
            [1, 100, 80],
            [2, 50, 32],
            [2, 50, 24],
            [4, 25, 9],
            [1, 134, 108],
            [2, 67, 43],
            [2, 33, 15, 2, 34, 16],
            [2, 33, 11, 2, 34, 12],
            [2, 86, 68],
            [4, 43, 27],
            [4, 43, 19],
            [4, 43, 15],
            [2, 98, 78],
            [4, 49, 31],
            [2, 32, 14, 4, 33, 15],
            [4, 39, 13, 1, 40, 14],
            [2, 121, 97],
            [2, 60, 38, 2, 61, 39],
            [4, 40, 18, 2, 41, 19],
            [4, 40, 14, 2, 41, 15],
            [2, 146, 116],
            [3, 58, 36, 2, 59, 37],
            [4, 36, 16, 4, 37, 17],
            [4, 36, 12, 4, 37, 13],
            [2, 86, 68, 2, 87, 69],
            [4, 69, 43, 1, 70, 44],
            [6, 43, 19, 2, 44, 20],
            [6, 43, 15, 2, 44, 16],
            [4, 101, 81],
            [1, 80, 50, 4, 81, 51],
            [4, 50, 22, 4, 51, 23],
            [3, 36, 12, 8, 37, 13],
            [2, 116, 92, 2, 117, 93],
            [6, 58, 36, 2, 59, 37],
            [4, 46, 20, 6, 47, 21],
            [7, 42, 14, 4, 43, 15],
            [4, 133, 107],
            [8, 59, 37, 1, 60, 38],
            [8, 44, 20, 4, 45, 21],
            [12, 33, 11, 4, 34, 12],
            [3, 145, 115, 1, 146, 116],
            [4, 64, 40, 5, 65, 41],
            [11, 36, 16, 5, 37, 17],
            [11, 36, 12, 5, 37, 13],
            [5, 109, 87, 1, 110, 88],
            [5, 65, 41, 5, 66, 42],
            [5, 54, 24, 7, 55, 25],
            [11, 36, 12],
            [5, 122, 98, 1, 123, 99],
            [7, 73, 45, 3, 74, 46],
            [15, 43, 19, 2, 44, 20],
            [3, 45, 15, 13, 46, 16],
            [1, 135, 107, 5, 136, 108],
            [10, 74, 46, 1, 75, 47],
            [1, 50, 22, 15, 51, 23],
            [2, 42, 14, 17, 43, 15],
            [5, 150, 120, 1, 151, 121],
            [9, 69, 43, 4, 70, 44],
            [17, 50, 22, 1, 51, 23],
            [2, 42, 14, 19, 43, 15],
            [3, 141, 113, 4, 142, 114],
            [3, 70, 44, 11, 71, 45],
            [17, 47, 21, 4, 48, 22],
            [9, 39, 13, 16, 40, 14],
            [3, 135, 107, 5, 136, 108],
            [3, 67, 41, 13, 68, 42],
            [15, 54, 24, 5, 55, 25],
            [15, 43, 15, 10, 44, 16],
            [4, 144, 116, 4, 145, 117],
            [17, 68, 42],
            [17, 50, 22, 6, 51, 23],
            [19, 46, 16, 6, 47, 17],
            [2, 139, 111, 7, 140, 112],
            [17, 74, 46],
            [7, 54, 24, 16, 55, 25],
            [34, 37, 13],
            [4, 151, 121, 5, 152, 122],
            [4, 75, 47, 14, 76, 48],
            [11, 54, 24, 14, 55, 25],
            [16, 45, 15, 14, 46, 16],
            [6, 147, 117, 4, 148, 118],
            [6, 73, 45, 14, 74, 46],
            [11, 54, 24, 16, 55, 25],
            [30, 46, 16, 2, 47, 17],
            [8, 132, 106, 4, 133, 107],
            [8, 75, 47, 13, 76, 48],
            [7, 54, 24, 22, 55, 25],
            [22, 45, 15, 13, 46, 16],
            [10, 142, 114, 2, 143, 115],
            [19, 74, 46, 4, 75, 47],
            [28, 50, 22, 6, 51, 23],
            [33, 46, 16, 4, 47, 17],
            [8, 152, 122, 4, 153, 123],
            [22, 73, 45, 3, 74, 46],
            [8, 53, 23, 26, 54, 24],
            [12, 45, 15, 28, 46, 16],
            [3, 147, 117, 10, 148, 118],
            [3, 73, 45, 23, 74, 46],
            [4, 54, 24, 31, 55, 25],
            [11, 45, 15, 31, 46, 16],
            [7, 146, 116, 7, 147, 117],
            [21, 73, 45, 7, 74, 46],
            [1, 53, 23, 37, 54, 24],
            [19, 45, 15, 26, 46, 16],
            [5, 145, 115, 10, 146, 116],
            [19, 75, 47, 10, 76, 48],
            [15, 54, 24, 25, 55, 25],
            [23, 45, 15, 25, 46, 16],
            [13, 145, 115, 3, 146, 116],
            [2, 74, 46, 29, 75, 47],
            [42, 54, 24, 1, 55, 25],
            [23, 45, 15, 28, 46, 16],
            [17, 145, 115],
            [10, 74, 46, 23, 75, 47],
            [10, 54, 24, 35, 55, 25],
            [19, 45, 15, 35, 46, 16],
            [17, 145, 115, 1, 146, 116],
            [14, 74, 46, 21, 75, 47],
            [29, 54, 24, 19, 55, 25],
            [11, 45, 15, 46, 46, 16],
            [13, 145, 115, 6, 146, 116],
            [14, 74, 46, 23, 75, 47],
            [44, 54, 24, 7, 55, 25],
            [59, 46, 16, 1, 47, 17],
            [12, 151, 121, 7, 152, 122],
            [12, 75, 47, 26, 76, 48],
            [39, 54, 24, 14, 55, 25],
            [22, 45, 15, 41, 46, 16],
            [6, 151, 121, 14, 152, 122],
            [6, 75, 47, 34, 76, 48],
            [46, 54, 24, 10, 55, 25],
            [2, 45, 15, 64, 46, 16],
            [17, 152, 122, 4, 153, 123],
            [29, 74, 46, 14, 75, 47],
            [49, 54, 24, 10, 55, 25],
            [24, 45, 15, 46, 46, 16],
            [4, 152, 122, 18, 153, 123],
            [13, 74, 46, 32, 75, 47],
            [48, 54, 24, 14, 55, 25],
            [42, 45, 15, 32, 46, 16],
            [20, 147, 117, 4, 148, 118],
            [40, 75, 47, 7, 76, 48],
            [43, 54, 24, 22, 55, 25],
            [10, 45, 15, 67, 46, 16],
            [19, 148, 118, 6, 149, 119],
            [18, 75, 47, 31, 76, 48],
            [34, 54, 24, 34, 55, 25],
            [20, 45, 15, 61, 46, 16],
          ]),
          (m.getRSBlocks = function(t, e) {
            var n = m.getRsBlockTable(t, e);
            if (null == n)
              throw new Error('bad rs block @ typeNumber:' + t + '/errorCorrectLevel:' + e);
            for (var i = n.length / 3, a = [], o = 0; o < i; o++)
              for (var r = n[3 * o + 0], s = n[3 * o + 1], l = n[3 * o + 2], c = 0; c < r; c++)
                a.push(new m(s, l));
            return a;
          }),
          (m.getRsBlockTable = function(t, e) {
            switch (e) {
              case a.L:
                return m.RS_BLOCK_TABLE[4 * (t - 1) + 0];
              case a.M:
                return m.RS_BLOCK_TABLE[4 * (t - 1) + 1];
              case a.Q:
                return m.RS_BLOCK_TABLE[4 * (t - 1) + 2];
              case a.H:
                return m.RS_BLOCK_TABLE[4 * (t - 1) + 3];
              default:
                return;
            }
          }),
          (v.prototype = {
            get: function(t) {
              var e = Math.floor(t / 8);
              return 1 == ((this.buffer[e] >>> (7 - (t % 8))) & 1);
            },
            put: function(t, e) {
              for (var n = 0; n < e; n++) this.putBit(1 == ((t >>> (e - n - 1)) & 1));
            },
            getLengthInBits: function() {
              return this.length;
            },
            putBit: function(t) {
              var e = Math.floor(this.length / 8);
              this.buffer.length <= e && this.buffer.push(0),
                t && (this.buffer[e] |= 128 >>> this.length % 8),
                this.length++;
            },
          });
        var w = [
          [17, 14, 11, 7],
          [32, 26, 20, 14],
          [53, 42, 32, 24],
          [78, 62, 46, 34],
          [106, 84, 60, 44],
          [134, 106, 74, 58],
          [154, 122, 86, 64],
          [192, 152, 108, 84],
          [230, 180, 130, 98],
          [271, 213, 151, 119],
          [321, 251, 177, 137],
          [367, 287, 203, 155],
          [425, 331, 241, 177],
          [458, 362, 258, 194],
          [520, 412, 292, 220],
          [586, 450, 322, 250],
          [644, 504, 364, 280],
          [718, 560, 394, 310],
          [792, 624, 442, 338],
          [858, 666, 482, 382],
          [929, 711, 509, 403],
          [1003, 779, 565, 439],
          [1091, 857, 611, 461],
          [1171, 911, 661, 511],
          [1273, 997, 715, 535],
          [1367, 1059, 751, 593],
          [1465, 1125, 805, 625],
          [1528, 1190, 868, 658],
          [1628, 1264, 908, 698],
          [1732, 1370, 982, 742],
          [1840, 1452, 1030, 790],
          [1952, 1538, 1112, 842],
          [2068, 1628, 1168, 898],
          [2188, 1722, 1228, 958],
          [2303, 1809, 1283, 983],
          [2431, 1911, 1351, 1051],
          [2563, 1989, 1423, 1093],
          [2699, 2099, 1499, 1139],
          [2809, 2213, 1579, 1219],
          [2953, 2331, 1663, 1273],
        ];
        function y() {
          var t = !1,
            e = navigator.userAgent;
          if (/android/i.test(e)) {
            t = !0;
            var n = e.toString().match(/android ([0-9]\.[0-9])/i);
            n && n[1] && (t = parseFloat(n[1]));
          }
          return t;
        }
        var C = (function() {
            var t = function(t, e) {
              (this._el = t), (this._htOption = e);
            };
            return (
              (t.prototype.draw = function(t) {
                var e = this._htOption,
                  n = this._el,
                  i = t.getModuleCount();
                Math.floor(e.width / i), Math.floor(e.height / i);
                function a(t, e) {
                  var n = document.createElementNS('http://www.w3.org/2000/svg', t);
                  for (var i in e) e.hasOwnProperty(i) && n.setAttribute(i, e[i]);
                  return n;
                }
                this.clear();
                var o = a('svg', {
                  viewBox: '0 0 ' + String(i) + ' ' + String(i),
                  width: e.width + 'px',
                  height: e.height + 'px',
                  fill: e.colorLight,
                });
                o.setAttributeNS(
                  'http://www.w3.org/2000/xmlns/',
                  'xmlns:xlink',
                  'http://www.w3.org/1999/xlink',
                ),
                  n.appendChild(o),
                  o.appendChild(
                    a('rect', {
                      fill: e.colorLight,
                      width: '100%',
                      height: '100%',
                    }),
                  ),
                  o.appendChild(
                    a('rect', {
                      fill: e.colorDark,
                      width: '1',
                      height: '1',
                      id: 'template',
                    }),
                  );
                for (var r = 0; r < i; r++)
                  for (var s = 0; s < i; s++)
                    if (t.isDark(r, s)) {
                      var l = a('use', {
                        x: String(r),
                        y: String(s),
                      });
                      l.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#template'),
                        o.appendChild(l);
                    }
              }),
              (t.prototype.clear = function() {
                for (; this._el.hasChildNodes(); ) this._el.removeChild(this._el.lastChild);
              }),
              t
            );
          })(),
          b =
            'svg' === document.documentElement.tagName.toLowerCase()
              ? C
              : 'undefined' == typeof CanvasRenderingContext2D
              ? (function() {
                  var t = function(t, e) {
                    (this._el = t), (this._htOption = e);
                  };
                  return (
                    (t.prototype.draw = function(t) {
                      for (
                        var e = this._htOption,
                          n = this._el,
                          i = t.getModuleCount(),
                          a = e.width / i,
                          o = e.height / i,
                          r = [
                            '<table style="border:0;border-collapse:collapse;width:' +
                              e.width +
                              'px">',
                          ],
                          s = 0;
                        s < i;
                        s++
                      ) {
                        r.push('<tr>');
                        for (var l = 0; l < i; l++)
                          r.push(
                            '<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' +
                              a +
                              'px;height:' +
                              o +
                              'px;background-color:' +
                              (t.isDark(s, l) ? e.colorDark : e.colorLight) +
                              ';"></td>',
                          );
                        r.push('</tr>');
                      }
                      r.push('</table>'), (n.innerHTML = r.join(''));
                      var c = n.childNodes[0];
                      e.width, c.offsetWidth, e.height, c.offsetHeight;
                    }),
                    (t.prototype.clear = function() {
                      this._el.innerHTML = '';
                    }),
                    t
                  );
                })()
              : (function() {
                  function t() {
                    (this._elImage.src = this._elCanvas.toDataURL('image/png')),
                      (this._elImage.style.display = 'block'),
                      (this._elCanvas.style.display = 'none');
                  }
                  if (this._android && this._android <= 2.1) {
                    var e = 1 / window.devicePixelRatio,
                      n = CanvasRenderingContext2D.prototype.drawImage;
                    CanvasRenderingContext2D.prototype.drawImage = function(
                      t,
                      i,
                      a,
                      o,
                      r,
                      s,
                      l,
                      c,
                      u,
                    ) {
                      if ('nodeName' in t && /img/i.test(t.nodeName))
                        for (var d = arguments.length - 1; d >= 1; d--)
                          arguments[d] = arguments[d] * e;
                      else
                        void 0 === c &&
                          ((arguments[1] *= e),
                          (arguments[2] *= e),
                          (arguments[3] *= e),
                          (arguments[4] *= e));
                      n.apply(this, arguments);
                    };
                  }
                  var i = function(t, e) {
                    (this._bIsPainted = !1),
                      (this._android = y()),
                      (this._htOption = e),
                      (this._elCanvas = document.createElement('canvas')),
                      (this._elCanvas.width = e.width),
                      (this._elCanvas.height = e.height),
                      t.appendChild(this._elCanvas),
                      (this._el = t),
                      (this._oContext = this._elCanvas.getContext('2d')),
                      (this._bIsPainted = !1),
                      (this._elImage = document.createElement('img')),
                      (this._elImage.alt = 'Scan me!'),
                      (this._elImage.style.display = 'none'),
                      this._el.appendChild(this._elImage),
                      (this._bSupportDataURI = null);
                  };
                  return (
                    (i.prototype.draw = function(t) {
                      var e = this._elImage,
                        n = this._oContext,
                        i = this._htOption,
                        a = t.getModuleCount(),
                        o = i.width / a,
                        r = i.height / a,
                        s = Math.round(o),
                        l = Math.round(r);
                      (e.style.display = 'none'), this.clear();
                      for (var c = 0; c < a; c++)
                        for (var u = 0; u < a; u++) {
                          var d = t.isDark(c, u),
                            h = u * o,
                            f = c * r;
                          (n.strokeStyle = d ? i.colorDark : i.colorLight),
                            (n.lineWidth = 1),
                            (n.fillStyle = d ? i.colorDark : i.colorLight),
                            n.fillRect(h, f, o, r),
                            n.strokeRect(Math.floor(h) + 0.5, Math.floor(f) + 0.5, s, l),
                            n.strokeRect(Math.ceil(h) - 0.5, Math.ceil(f) - 0.5, s, l);
                        }
                      this._bIsPainted = !0;
                    }),
                    (i.prototype.makeImage = function() {
                      this._bIsPainted &&
                        function(t, e) {
                          var n = this;
                          if (((n._fFail = e), (n._fSuccess = t), null === n._bSupportDataURI)) {
                            var i = document.createElement('img'),
                              a = function() {
                                (n._bSupportDataURI = !1), n._fFail && n._fFail.call(n);
                              };
                            return (
                              (i.onabort = a),
                              (i.onerror = a),
                              (i.onload = function() {
                                (n._bSupportDataURI = !0), n._fSuccess && n._fSuccess.call(n);
                              }),
                              void (i.src =
                                'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==')
                            );
                          }
                          !0 === n._bSupportDataURI && n._fSuccess
                            ? n._fSuccess.call(n)
                            : !1 === n._bSupportDataURI && n._fFail && n._fFail.call(n);
                        }.call(this, t);
                    }),
                    (i.prototype.isPainted = function() {
                      return this._bIsPainted;
                    }),
                    (i.prototype.clear = function() {
                      this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height),
                        (this._bIsPainted = !1);
                    }),
                    (i.prototype.round = function(t) {
                      return t ? Math.floor(1e3 * t) / 1e3 : t;
                    }),
                    i
                  );
                })();
        function I(t, e) {
          for (
            var n = 1,
              i = (function(t) {
                var e = encodeURI(t)
                  .toString()
                  .replace(/\%[0-9a-fA-F]{2}/g, 'a');
                return e.length + (e.length != t ? 3 : 0);
              })(t),
              o = 0,
              r = w.length;
            o <= r;
            o++
          ) {
            var s = 0;
            switch (e) {
              case a.L:
                s = w[o][0];
                break;
              case a.M:
                s = w[o][1];
                break;
              case a.Q:
                s = w[o][2];
                break;
              case a.H:
                s = w[o][3];
            }
            if (i <= s) break;
            n++;
          }
          if (n > w.length) throw new Error('Too long data');
          return n;
        }
        ((n = function(t, e) {
          if (
            ((this._htOption = {
              width: 256,
              height: 256,
              typeNumber: 4,
              colorDark: '#000000',
              colorLight: '#ffffff',
              correctLevel: a.H,
            }),
            'string' == typeof e &&
              (e = {
                text: e,
              }),
            e)
          )
            for (var n in e) this._htOption[n] = e[n];
          'string' == typeof t && (t = document.getElementById(t)),
            this._htOption.useSVG && (b = C),
            (this._android = y()),
            (this._el = t),
            (this._oQRCode = null),
            (this._oDrawing = new b(this._el, this._htOption)),
            this._htOption.text && this.makeCode(this._htOption.text);
        }).prototype.makeCode = function(t) {
          (this._oQRCode = new e(I(t, this._htOption.correctLevel), this._htOption.correctLevel)),
            this._oQRCode.addData(t),
            this._oQRCode.make(),
            this._oDrawing.draw(this._oQRCode),
            (function(t, e) {
              var n = e.watermark,
                i = e.width,
                a = e.height;
              if (n) {
                var o = new Image();
                (o.src = n),
                  (o.className = 'watermark'),
                  (o.width = i / 3),
                  (o.height = a / 3),
                  (o.style.position = 'absolute'),
                  (o.style.top = (a - o.height) / 2 + 'px'),
                  (o.style.left = (i - o.width) / 2 + 'px'),
                  (t.style.position = 'relative'),
                  t.appendChild(o);
              }
            })(this._el, this._htOption),
            this.makeImage();
        }),
          (n.prototype.makeImage = function() {
            'function' == typeof this._oDrawing.makeImage &&
              (!this._android || this._android >= 3) &&
              this._oDrawing.makeImage();
          }),
          (n.prototype.clear = function() {
            this._oDrawing.clear();
          }),
          (n.CorrectLevel = a);
      })(),
        (t.exports = n);
    },
    function(t, e, n) {
      var i;
      void 0 ===
        (i = function() {
          var t = n(2),
            e = n(6),
            i = n(1);
          $(document).on('click', '.J_OrderLink', function(n) {
            n.preventDefault();
            var a,
              o = $(this);
            if (!o.hasClass('ajax_pending') && t()) {
              var r = o.data('type'),
                s = o.data('id');
              if (r && s) {
                switch (r) {
                  case 'crbt':
                    a = MUSIC_CONFIG.APP_MUSIC_PATH + '/order/crbt/' + s;
                    break;
                  case 'ring':
                    a = MUSIC_CONFIG.APP_MUSIC_PATH + '/order/ring/' + s;
                    break;
                  case 'send':
                    a = MUSIC_CONFIG.APP_MUSIC_PATH + '/order/send/' + s;
                    break;
                  case 'vrbt':
                    a = MUSIC_CONFIG.APP_MUSIC_PATH + '/order/vrbt/' + s;
                    break;
                  case 'download':
                    a = MUSIC_CONFIG.APP_MUSIC_PATH + '/order/download/' + s;
                    break;
                  case 'digital_album':
                    return (
                      (a = MUSIC_CONFIG.APP_MUSIC_PATH + '/order/digital_album/' + s),
                      void window.open(a, '_blank')
                    );
                }
                var l = o.data('songInfo');
                l && l.length
                  ? !l[0] || l[1] || l[2]
                    ? window.open(a, '_blank')
                    : i.open({
                        container: e({
                          url: MUSIC_CONFIG.APP_MUSIC_PATH + '/order/digital_album/' + l[0],
                        }),
                      })
                  : (o.addClass('ajax_pending'),
                    $.ajax({
                      method: 'GET',
                      url: MUSIC_CONFIG.APP_API_PATH + '/music/digital_album/checkIsDigitalAlbum',
                      data: {
                        copyrightId: s,
                      },
                    })
                      .then(
                        function(t) {
                          var n = t.data.period;
                          if (!t || '000000' != t.returnCode || (4 !== n && 3 !== n)) {
                            var r = t.data.albumId,
                              s = t.data.fullSongIsOrder,
                              l = t.data.albumIsOrder;
                            o.data('songInfo', [r, s, l]),
                              !r || s || l || 2 !== n
                                ? window.open(a, '_blank')
                                : i.open({
                                    container: e({
                                      url:
                                        MUSIC_CONFIG.APP_MUSIC_PATH + '/order/digital_album/' + r,
                                    }),
                                  });
                          } else window.open(a, '_blank');
                        },
                        function() {
                          i.tip('系统忙，请稍后再试');
                        },
                      )
                      .always(function() {
                        o.removeClass('ajax_pending');
                      }));
              }
            }
          }),
            $(document).on('click', '.J_Allow_play', function(n) {
              n.preventDefault();
              var a = $(this);
              if (!a.hasClass('ajax_pending')) {
                var o = a.data('cid');
                if (o) {
                  var r = a.data('allowPlay');
                  r && r.length
                    ? r[0] && r[1]
                      ? i.open({
                          container: e({
                            url: MUSIC_CONFIG.APP_MUSIC_PATH + '/order/digital_album/' + r[1],
                          }),
                        })
                      : window.MUSIC_GLOBAL.musicPlay.getAudioSongs(
                          {
                            copyrightIds: o,
                          },
                          !0,
                        )
                    : (a.addClass('ajax_pending'),
                      $.ajax({
                        method: 'GET',
                        url: MUSIC_CONFIG.APP_API_PATH + '/music/digital_album/checkIsDigitalAlbum',
                        data: {
                          copyrightId: o,
                        },
                      })
                        .then(
                          function(n) {
                            var r = n.data.period;
                            if (!n || '000000' == n.returnCode || 1 !== r)
                              if (4 != r && 3 != r) {
                                if (2 != r || t()) {
                                  var s = n.data.albumId,
                                    l = n.data.songIsListen,
                                    c = n.data.albumIsOrder,
                                    u = s && (1 == r || 2 == r) && !l && !c;
                                  a.data('allowPlay', [u, s]),
                                    u
                                      ? i.open({
                                          container: e({
                                            url:
                                              MUSIC_CONFIG.APP_MUSIC_PATH +
                                              '/order/digital_album/' +
                                              s,
                                          }),
                                        })
                                      : window.MUSIC_GLOBAL.musicPlay.getAudioSongs(
                                          {
                                            copyrightIds: o,
                                          },
                                          !0,
                                        );
                                }
                              } else
                                window.MUSIC_GLOBAL.musicPlay.getAudioSongs(
                                  {
                                    copyrightIds: o,
                                  },
                                  !0,
                                );
                          },
                          function() {
                            i.tip('系统忙，请稍后再试');
                          },
                        )
                        .always(function() {
                          a.removeClass('ajax_pending');
                        }));
                }
              }
            });
        }.call(e, n, e, t)) || (t.exports = i);
    },
  ],
  [[98, 0]],
]);
