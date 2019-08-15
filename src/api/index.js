/**
 * @author ruiliang.li@envisioncn.com on 2019-08-11.
 */
import api_search from './neteaseCloudMusic/search';
import api_top_playlist from './neteaseCloudMusic/top_playlist';

const request = window.electron.remote.require('./src/util/request');

function fetch(api, query) {
  return new Promise((resolve, reject) => {
    api(query, request)
      .then(res => {
        resolve(res.body);
      })
      .catch(res => {
        if (res.body.code === 301) {
          console.log('Need Login');
        }
        reject(res);
      });
  });
}

export function search(query) {
  return fetch(api_search, query);
}

export function topPlayLists(query) {
  return fetch(api_top_playlist, query);
}
