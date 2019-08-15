var MUSIC_CONFIG = {
  APP_CDN_HOST: '//cdnmusic.migu.cn',
  APP_HOST: 'http://music.migu.cn',
  APP_BASE_PATH: '/v3',
  APP_MUSIC_PATH: '/v3/music',
  APP_VIDEO_PATH: '/v3/video',
  APP_MY_PATH: '/v3/my',
  APP_SEARCH_PATH: '/v3/search',
  APP_API_PATH: '/v3/api',
  APP_STATIC_PATH: '/v3/static',
  SOURCE_ID: '220001',
  CHANNEL_ID: '001002A',
  MIGU_LOGIN_URL: 'https://passport.migu.cn/popup/login?sourceid=',
  MIGU_LOGOUT_URL: 'https://passport.migu.cn/logout?sourceid=',
  MIGU_ACCOUNT_SET: 'https://passport.migu.cn/portal/home/profile?sourceid=',
  MIGU_ACCOUNT_REGISTER: 'https://passport.migu.cn/portal/user/register/msisdn',
  MIGU_SDK_AUTHID: 'c3adb034f8a8446a822828b795a29349',
  MIGU_SDK_NETID: 'b486900f41fc411187240dcb45fdbc8d',
  IS_FROM_MIGU: '',
};

const s = 'id';


export function search() {

}

export default {
  // 搜索
  search: {
    type: 'GET',
    url: 'v2/async/search',
    data: {
      keywords: '',
    },
  },
  // 获取歌曲信息
  getPlayInfo: {
    type: 'GET',
    url: '/v3/api/music/audioPlayer/getPlayInfo',
    data: {
      dataType: '',
      data: '',
      secKey: '',
    },
  },
  // 收藏歌单
  collectPlaylist: {
    type: 'POST',
    url: MUSIC_CONFIG.APP_API_PATH + '/music/playlist/collect',
    data: {
      playlistId: s,
    },
  },
  // 是否收藏
  isCollectPlaylist: {
    type: 'GET',
    url: MUSIC_CONFIG.APP_API_PATH + '/music/playlist/is_collect',
    data: {
      playlistId: s,
    },
  },
  // 取消收藏歌单
  cancelCollectPlaylist: {
    type: 'POST',
    url: MUSIC_CONFIG.APP_API_PATH + '/music/playlist/cancel_collect',
    data: {
      playlistId: s,
    },
  },
  // 收藏歌曲
  collectSong: {
    type: 'POST',
    url: MUSIC_CONFIG.APP_API_PATH + '/music/song/collect',
    data: {
      copyrightId: s,
    },
  },
  isCollectSong: {
    type: 'GET',
    url: MUSIC_CONFIG.APP_API_PATH + '/music/song/is_collect',
    data: {
      copyrightId: s,
    },
  },
  // 取消收藏歌曲
  cancelCollectSong: {
    type: 'POST',
    url: MUSIC_CONFIG.APP_API_PATH + '/music/song/cancel_collect',
    data: {
      copyrightId: s,
    },
  },
  // 关注歌手
  collectArtist: {
    type: 'POST',
    url: MUSIC_CONFIG.APP_API_PATH + '/music/artist/follow',
    data: {
      artistId: s,
    },
  },
  // 取消关注歌手
  cancelCollectArtist: {
    type: 'POST',
    url: MUSIC_CONFIG.APP_API_PATH + '/music/artist/cancel_follow',
    data: {
      artistId: s,
    },
  },
  isCollectArtist: {
    type: 'GET',
    url: MUSIC_CONFIG.APP_API_PATH + '/music/artist/is_follow',
    data: {
      artistId: s,
    },
  },
  // 订阅
  searchSub: {
    type: 'GET',
    url: MUSIC_CONFIG.APP_API_PATH + '/music/rank/sch_subscribe',
    data: {
      rankId: 'a',
    },
  },
  isSubscribe: {
    type: 'POST',
    url: MUSIC_CONFIG.APP_API_PATH + '/music/rank/is_subscribe',
    data: {
      rankId: 'a',
    },
  },
};
