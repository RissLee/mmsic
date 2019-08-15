(window.webpackJsonp = window.webpackJsonp || []).push([
  [36],
  {
    0: function(t, e, i) {
      'use strict';
      var n = Object.prototype.hasOwnProperty;
      function a(t, e) {
        return Array.isArray(t)
          ? (function(t, e) {
              for (var i, n = '', s = '', o = Array.isArray(e), c = 0; c < t.length; c++)
                (i = a(t[c])) && (o && e[c] && (i = l(i)), (n = n + s + i), (s = ' '));
              return n;
            })(t, e)
          : t && 'object' == typeof t
          ? (function(t) {
              var e = '',
                i = '';
              for (var a in t) a && t[a] && n.call(t, a) && ((e = e + i + a), (i = ' '));
              return e;
            })(t)
          : t || '';
      }
      function s(t) {
        if (!t) return '';
        if ('object' == typeof t) {
          var e = '';
          for (var i in t) n.call(t, i) && (e = e + i + ':' + t[i] + ';');
          return e;
        }
        return t + '';
      }
      function o(t, e, i, n) {
        if (!1 === e || null == e || (!e && ('class' === t || 'style' === t))) return '';
        if (!0 === e) return ' ' + (n ? t : t + '="' + t + '"');
        var a = typeof e;
        return (
          ('object' !== a && 'function' !== a) || 'function' != typeof e.toJSON || (e = e.toJSON()),
          'string' == typeof e || ((e = JSON.stringify(e)), i || -1 === e.indexOf('"'))
            ? (i && (e = l(e)), ' ' + t + '="' + e + '"')
            : ' ' + t + "='" + e.replace(/'/g, '&#39;') + "'"
        );
      }
      (e.merge = function t(e, i) {
        if (1 === arguments.length) {
          for (var n = e[0], a = 1; a < e.length; a++) n = t(n, e[a]);
          return n;
        }
        for (var o in i)
          if ('class' === o) {
            var c = e[o] || [];
            e[o] = (Array.isArray(c) ? c : [c]).concat(i[o] || []);
          } else if ('style' === o) {
            var c = s(e[o]);
            c = c && ';' !== c[c.length - 1] ? c + ';' : c;
            var l = s(i[o]);
            (l = l && ';' !== l[l.length - 1] ? l + ';' : l), (e[o] = c + l);
          } else e[o] = i[o];
        return e;
      }),
        (e.classes = a),
        (e.style = s),
        (e.attr = o),
        (e.attrs = function(t, e) {
          var i = '';
          for (var c in t)
            if (n.call(t, c)) {
              var l = t[c];
              if ('class' === c) {
                (l = a(l)), (i = o(c, l, !1, e) + i);
                continue;
              }
              'style' === c && (l = s(l)), (i += o(c, l, !1, e));
            }
          return i;
        });
      var c = /["&<>]/;
      function l(t) {
        var e = '' + t,
          i = c.exec(e);
        if (!i) return t;
        var n,
          a,
          s,
          o = '';
        for (n = i.index, a = 0; n < e.length; n++) {
          switch (e.charCodeAt(n)) {
            case 34:
              s = '&quot;';
              break;
            case 38:
              s = '&amp;';
              break;
            case 60:
              s = '&lt;';
              break;
            case 62:
              s = '&gt;';
              break;
            default:
              continue;
          }
          a !== n && (o += e.substring(a, n)), (a = n + 1), (o += s);
        }
        return a !== n ? o + e.substring(a, n) : o;
      }
      (e.escape = l),
        (e.rethrow = function t(e, n, a, s) {
          if (!(e instanceof Error)) throw e;
          if (!(('undefined' == typeof window && n) || s))
            throw ((e.message += ' on line ' + a), e);
          try {
            s = s || i(4).readFileSync(n, 'utf8');
          } catch (i) {
            t(e, null, a);
          }
          var o = 3,
            c = s.split('\n'),
            l = Math.max(a - o, 0),
            r = Math.min(c.length, a + o);
          var o = c
            .slice(l, r)
            .map(function(t, e) {
              var i = e + l + 1;
              return (i == a ? '  > ' : '    ') + i + '| ' + t;
            })
            .join('\n');
          e.path = n;
          e.message = (n || 'Pug') + ':' + a + '\n' + o + '\n\n' + e.message;
          throw e;
        });
    },
    1: function(t, e, i) {
      var n;
      void 0 ===
        (n = function() {
          var a,
            s = {},
            o = $('body'),
            c = {},
            l = i(5),
            r = {
              v: '1.0',
              index: 0,
              Zindex: 200,
              confirm: function(t) {
                var e = $.extend({}, t, {
                  type: 'confirm',
                });
                return r.open(e);
              },
              tip: function(t, e) {
                var i = {
                  type: 'tip',
                  container: t,
                  closeBtn: !1,
                  isOverlay: !1,
                  time: e || 1500,
                };
                return r.open(i);
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
                return r.open(t);
              },
            },
            d = function() {
              this.defaults = {
                container: null,
                isOverlay: !0,
                overlayClose: !1,
                closeBtn: !0,
                success: null,
                end: null,
              };
            };
          d.prototype = {
            getOptions: function(t) {
              return $.extend({}, this.defaults, t);
            },
            removeNode: function(t) {
              t.remove();
            },
          };
          var u = new d(),
            f = function(t) {
              (this.index = ++r.index), (this.Zindex = r.Zindex + this.index), this.creat();
            };
          return (
            ((f.pt = f.prototype).creat = function() {
              var t = this,
                e = t.index,
                i = t.Zindex,
                n = $(
                  '<div id="dialog_box' + e + '" class="dialog_box ' + (s.class || '') + '"></div>',
                );
              if (
                (n.css({
                  margin: 0,
                  padding: 0,
                  width: s.width || 'auto',
                  height: s.height || 'auto',
                  'z-index': i,
                  top: '50%',
                  left: '50%',
                  position: 'fixed',
                  'background-color': s.isLoding ? 'transparent' : '#fff',
                  textAlign: s.isLoding ? 'center' : 'left',
                }),
                s.isLoding && n.html(l(s)),
                s.title)
              )
                n.append(
                  (function(t) {
                    var e;
                    return (function() {
                      e = $('<div class="dialog-header"></div>');
                      var i = $(
                          '<span class="dialog-title" title="' +
                            s.title +
                            '">' +
                            s.title +
                            '</span>',
                        ),
                        n = $(
                          '<i class="dialog-close iconfont cf-guanbi" id="dialog_close' +
                            t +
                            '" title="关闭"></i>',
                        );
                      return e.append(i).append(n), e;
                    })();
                  })(e),
                );
              else if (s.closeBtn) {
                var c = $(
                  '<i class="dialog-close iconfont cf-diff-close cf-guanbi" id="dialog_close' +
                    e +
                    '" title="关闭"></i>',
                );
                n.append(c);
              }
              if (s.isOverlay) {
                var d = (function(t, e) {
                  var i;
                  return (
                    (i = $('<div id="overlay' + t + '" class="overlay"></div>')),
                    i.css({
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
                    i
                  );
                })(e, i);
                o.append(d);
              }
              if ((o.append(n), (t.dialogBox = n), 'confirm' === s.type)) {
                (t.yes = s.yes),
                  (t.cancel = s.cancel),
                  (a = $('<div class="confirm-layer"></div>'));
                var u = $(
                    '<span class="btn-sure btn btn-primary">' + (s.yesText || '确定') + '</span>',
                  ),
                  f = $('<span class="btn-cancel btn btn-gray">取消</span>');
                a.html(
                  '<div class="confirm-text">' +
                    s.container +
                    '</div><div class="operate-btn"></div>',
                ),
                  a
                    .find('.operate-btn')
                    .append(u)
                    .append(f),
                  u.click(function() {
                    'function' == typeof t.yes && t.yes();
                  }),
                  f.click(function() {
                    'function' == typeof t.cancel && t.cancel();
                  });
              } else
                'tip' === s.type
                  ? ((a = $('<div class="text-tip"></div>')),
                    $('body').append('<div class="text-tip-overlay"></div>'),
                    a.html(s.container),
                    setTimeout(function() {
                      $('.text-tip-overlay').remove(), r.close(e);
                    }, s.time))
                  : (a = $(s.container));
              return (
                n.append(a),
                'tip' === s.type && a.parent().css('background', 'transparent'),
                r.reset(e),
                n.find('.dialog-close').click(function() {
                  r.close(e);
                }),
                s.overlayClose &&
                  d.click(function() {
                    r.close(e);
                  }),
                'function' == typeof s.success && s.success(t.index, t),
                n
              );
            }),
            (r.close = function(t) {
              if (!t) return $('.overlay').remove(), void $('.dialog_box').remove();
              var e = $('#overlay' + t);
              e && u.removeNode(e),
                u.removeNode($('#dialog_box' + t)),
                'function' == typeof s.end && s.end();
            }),
            (r.reset = function(t) {
              var e = $('#dialog_box' + t),
                i = e.width(),
                n = e.height();
              e.css({
                'margin-top': -n / 2,
                'margin-left': -i / 2,
              });
            }),
            (c.run = function() {
              r.open = function(t) {
                (s = u.getOptions(t)).type;
                return new f().index;
              };
            }),
            void 0 ===
              (n = function() {
                return c.run(), r;
              }.call(e, i, e, t)) || (t.exports = n),
            r
          );
        }.call(e, i, e, t)) || (t.exports = n);
    },
    119: function(t, e, i) {
      var n;
      void 0 ===
        (n = function() {
          i(120);
          var t = i(36);
          $('.filter').on('click', '.showMoreTag', function() {
            var t = $(this);
            $('.showMoreTag').removeClass('active'),
              t.addClass('active'),
              $('.pop-tag-mian').css('display', 'none');
            var e = t
              .parents('.tag-list')
              .next()
              .find('.pop-tag-mian');
            e.css('display', 'block');
            var i = t.offset().left,
              n = t.parents('.container').width(),
              a = i > n / 2 ? 40 : 5;
            e.children('.pop-sjx-posi').css(
              'left',
              ((i - t.parents('.container').offset().left + a) / n) * 100 + '%',
            );
          }),
            $('.song-list-cont').delegate('.collect-playlist', 'click', function() {
              var e = $(this).data('playlistid');
              $(this).hasClass('isCollect')
                ? t.cancelCollectPlaylist($(this), '1', e)
                : t.collectPlaylist($(this), '1', e);
            }),
            $('.song-list-cont').delegate('.thumb', 'mouseenter', function() {
              var e = $(this).find('.collect-playlist'),
                i = e.data('playlistid');
              e.hasClass('is-query') || t.isCollectPlaylist(e, '1', i);
            }),
            $(document).on('click', function(t) {
              var e = $(t.target);
              e.parents('.showMoreTag').length ||
                e.parents('.pop-tag-mian').length ||
                ($('.showMoreTag').removeClass('active'),
                $('.pop-tag-mian').css('display', 'none'));
            }),
            $('img.lazy300x300').lazyload({
              effect: 'fadeIn',
              placeholder:
                MUSIC_CONFIG.APP_CDN_HOST +
                MUSIC_CONFIG.APP_STATIC_PATH +
                '/img/common/default/img_default_300x300.jpg',
            });
        }.call(e, i, e, t)) || (t.exports = n);
    },
    120: function(t, e, i) {
      var n;
      void 0 ===
        (n = function() {
          $('.filter').each(function() {
            var t = $(this),
              e = t.hasClass('vertical');
            t.height() > 37 &&
              !e &&
              (t.find('.tag-slide').show(),
              t.find('ul').css('height', 30),
              t.attr('data-hide', !0));
          }),
            $('.tag-slide').on('click', function() {
              var t = $(this),
                e = t.parent('.filter');
              'true' === e.attr('data-hide')
                ? (t.prev().css('height', 'auto'), e.attr('data-hide', !1), e.addClass('active'))
                : (t.prev().css('height', 30), e.attr('data-hide', !0), e.removeClass('active'));
            });
        }.call(e, i, e, t)) || (t.exports = n);
    },
    2: function(t, e, i) {
      var n;
      void 0 ===
        (n = function() {
          function t(t) {
            return (
              -1 != document.cookie.indexOf('migu_music_status') ||
              (!1 !== t && document.getElementById('J_LoginBtn').click(), !1)
            );
          }
          return (window.MUSIC_GLOBAL.loginCheck = t), t;
        }.call(e, i, e, t)) || (t.exports = n);
    },
    36: function(t, e, i) {
      var n;
      void 0 ===
        (n = function() {
          var t = i(2),
            e = i(1),
            n = '系统繁忙，请稍后再试~~~';
          return {
            collectPlaylist: function(i, a, s) {
              t(!0) &&
                $.ajax({
                  type: 'POST',
                  url: MUSIC_CONFIG.APP_API_PATH + '/music/playlist/collect',
                  data: {
                    playlistId: s,
                  },
                }).then(
                  function(t) {
                    '000000' == t.returnCode
                      ? (e.tip('歌单收藏成功'),
                        a &&
                          '1' == a &&
                          i.removeClass('cf-xihuan-big').addClass('cf-xihuan-big-h isCollect'))
                      : e.tip(t.msg);
                  },
                  function(t) {
                    e.tip(n);
                  },
                );
            },
            isCollectPlaylist: function(i, a, s) {
              t(!1) &&
                $.ajax({
                  type: 'GET',
                  url: MUSIC_CONFIG.APP_API_PATH + '/music/playlist/is_collect',
                  data: {
                    playlistId: s,
                  },
                }).then(
                  function(t) {
                    '000000' == t.returnCode &&
                      a &&
                      '1' == a &&
                      (i.addClass('is-query'),
                      t.collectStatus &&
                        i.removeClass('cf-xihuan-big').addClass('cf-xihuan-big-h isCollect'));
                  },
                  function(t) {
                    e.tip(n);
                  },
                );
            },
            cancelCollectPlaylist: function(i, a, s) {
              t(!1) &&
                $.ajax({
                  type: 'POST',
                  url: MUSIC_CONFIG.APP_API_PATH + '/music/playlist/cancel_collect',
                  data: {
                    playlistId: s,
                  },
                }).then(
                  function(t) {
                    '000000' == t.returnCode
                      ? (e.tip('歌单取消收藏成功'),
                        a &&
                          '1' == a &&
                          i.removeClass('cf-xihuan-big-h isCollect').addClass('cf-xihuan-big'))
                      : e.tip(t.msg);
                  },
                  function(t) {
                    e.tip(n);
                  },
                );
            },
            collectSong: function(i, a, s) {
              t(!0) &&
                $.ajax({
                  type: 'POST',
                  url: MUSIC_CONFIG.APP_API_PATH + '/music/song/collect',
                  data: {
                    copyrightId: s,
                  },
                }).then(
                  function(t) {
                    if ('000000' == t.returnCode)
                      switch ((e.tip('歌曲收藏成功'), a)) {
                        case '1':
                          i.removeClass('cf-xihuan').addClass('cf-xihuan-h isCollect');
                          break;
                        case '2':
                          i.addClass('on');
                          break;
                        case '3':
                          i.addClass('isCollect'),
                            i.find('span').html('已收藏'),
                            i
                              .find('i')
                              .removeClass('cf-xihuan')
                              .addClass('cf-xihuan-h');
                      }
                    else e.tip(t.msg);
                  },
                  function(t) {
                    e.tip(n);
                  },
                );
            },
            isCollectSong: function(i, a, s) {
              t(!1) &&
                $.ajax({
                  type: 'GET',
                  url: MUSIC_CONFIG.APP_API_PATH + '/music/song/is_collect',
                  data: {
                    copyrightId: s,
                  },
                }).then(
                  function(t) {
                    if ('000000' == t.returnCode)
                      switch (a) {
                        case '1':
                          i.addClass('is-query'),
                            t.items[0].in &&
                              i.removeClass('cf-xihuan').addClass('cf-xihuan-h isCollect');
                          break;
                        case '2':
                          t.items[0].in && i.addClass('on');
                          break;
                        case '3':
                          i.addClass('on'),
                            t.items[0].in &&
                              (i.addClass('isCollect'),
                              i.find('span').html('已收藏'),
                              i
                                .find('i')
                                .removeClass('cf-xihuan')
                                .addClass('cf-xihuan-h'));
                      }
                  },
                  function(t) {
                    e.tip(n);
                  },
                );
            },
            cancelCollectSong: function(i, a, s) {
              t(!1) &&
                $.ajax({
                  type: 'POST',
                  url: MUSIC_CONFIG.APP_API_PATH + '/music/song/cancel_collect',
                  data: {
                    copyrightId: s,
                  },
                }).then(
                  function(t) {
                    if ('000000' == t.returnCode)
                      switch ((e.tip('歌曲取消收藏成功'), a)) {
                        case '1':
                          i.removeClass('cf-xihuan-h isCollect').addClass('cf-xihuan');
                          break;
                        case '2':
                          i.removeClass('on');
                          break;
                        case '3':
                          i.removeClass('isCollect'),
                            i.find('span').html('收藏'),
                            i
                              .find('i')
                              .removeClass('cf-xihuan-h')
                              .addClass('cf-xihuan');
                      }
                    else e.tip(t.msg);
                  },
                  function(t) {
                    e.tip(n);
                  },
                );
            },
            collectArtist: function(i, a, s) {
              t(!0) &&
                $.ajax({
                  type: 'POST',
                  url: MUSIC_CONFIG.APP_API_PATH + '/music/artist/follow',
                  data: {
                    artistId: s,
                  },
                }).then(
                  function(t) {
                    if ('000000' == t.returnCode)
                      switch ((e.tip('歌手关注成功'), a)) {
                        case '1':
                        default:
                          i.addClass('active').html('<i class="iconfont cf-xihuan-h"></i>已关注');
                      }
                    else e.tip(t.msg);
                  },
                  function(t) {
                    e.tip(n);
                  },
                );
            },
            cancelCollectArtist: function(i, a, s) {
              t(!0) &&
                $.ajax({
                  type: 'POST',
                  url: MUSIC_CONFIG.APP_API_PATH + '/music/artist/cancel_follow',
                  data: {
                    artistId: s,
                  },
                }).then(
                  function(t) {
                    if ('000000' == t.returnCode)
                      switch ((e.tip('歌手取消关注成功'), a)) {
                        case '1':
                        default:
                          i.removeClass('active').html(
                            '<i class="iconfont cf-xihuan"></i>关注歌手',
                          );
                      }
                    else e.tip(t.msg);
                  },
                  function(t) {
                    e.tip(n);
                  },
                );
            },
            isCollectArtist: function(i, a, s) {
              t(!1) &&
                $.ajax({
                  type: 'GET',
                  url: MUSIC_CONFIG.APP_API_PATH + '/music/artist/is_follow',
                  data: {
                    artistId: s,
                  },
                }).then(
                  function(t) {
                    '000000' == t.returnCode &&
                      t.data &&
                      t.data.forEach(function(t, e) {
                        if (t.targetId == s && parseInt(t.relationShip))
                          switch (a) {
                            case '1':
                            default:
                              i.addClass('active').html(
                                '<i class="iconfont cf-xihuan-h"></i>已关注',
                              );
                          }
                      });
                  },
                  function(t) {
                    e.tip(n);
                  },
                );
            },
            searchSub: function(i, a, s) {
              t(s) &&
                $.ajax({
                  type: 'GET',
                  url: MUSIC_CONFIG.APP_API_PATH + '/music/rank/sch_subscribe',
                  data: {
                    rankId: a,
                  },
                }).then(
                  function(t) {
                    if ('000000' == t.returnCode) {
                      i.addClass('searchSub');
                      for (var e = i.find('.subscribe-action'), n = 0, a = e.length; n < a; n++) {
                        var s = e.eq(n),
                          o = s.data('subid');
                        $.each(t.items, function(t, e) {
                          if (e.rankId == o) {
                            var i = 1 == e.subscriptionStatus ? 'isSubscribe' : 'unSubscribe';
                            1 == e.subscriptionStatus && s.html('已订阅'), s.addClass(i);
                          }
                        });
                      }
                    }
                  },
                  function(t) {
                    e.tip(n);
                  },
                );
            },
            isSubscribe: function(i, a) {
              t(!0) &&
                $.ajax({
                  type: 'POST',
                  url: MUSIC_CONFIG.APP_API_PATH + '/music/rank/is_subscribe',
                  data: {
                    rankId: a,
                  },
                }).then(
                  function(t) {
                    e.tip(t.msg),
                      '000000' == t.returnCode &&
                        i
                          .addClass('isSubscribe')
                          .removeClass('unSubscribe')
                          .html('已订阅');
                  },
                  function(t) {
                    e.tip(n);
                  },
                );
            },
          };
        }.call(e, i, e, t)) || (t.exports = n);
    },
    4: function(t, e) {},
    5: function(t, e, i) {
      var n = i(0);
      t.exports = function(t) {
        var e,
          i = '',
          a = t || {};
        return (
          function(t, a, s) {
            switch (s) {
              case 1:
                var o = 'upload';
                break;
              default:
                o = 'loading';
            }
            (i = i + '<div' + n.attr('class', n.classes([o], [!0]), !1, !0) + ' id="loading">'),
              t && (i = i + '<span>' + n.escape(null == (e = a) ? '' : e) + '</span>'),
              (i += '</div>');
          }.call(
            this,
            'showText' in a ? a.showText : 'undefined' != typeof showText ? showText : void 0,
            'text' in a ? a.text : 'undefined' != typeof text ? text : void 0,
            'type' in a ? a.type : 'undefined' != typeof type ? type : void 0,
          ),
          i
        );
      };
    },
  },
  [[119, 0]],
]);
