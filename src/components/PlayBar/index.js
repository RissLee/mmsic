/**
 * @author ruiliang.li@envisioncn.com on 2019-08-11.
 * 底部播放条
 */

import React from 'react';
import styles from './index.less';
import avatar from '../../assets/yay.jpg';
import IconFont from '@/components/IconFont';

class PlayBar extends React.PureComponent {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.songProfile}>
          <img src={avatar} className={styles.avatar} />
          <div className={styles.songInfo}>
            <span className={styles.songName}>Love the Way You Lie</span>
            <span className={styles.songAuthor}>Love the Way You Lie</span>
          </div>
        </div>
        <div className={styles.controlPane}>
          <IconFont type={'icon-prevSong'}/>
          <IconFont type={'icon-playSong'}/>
          <IconFont type={'icon-nextSong'}/>
        </div>
        <div className={styles.playProgress}>
          <div className={styles.beginTime}>4:15</div>
          <div className={styles.bar}>
            <div className={styles.progressCenter}>
              <div />
            </div>
            <div className={styles.position} />
          </div>
          <div className={styles.endTime}>4:15</div>
        </div>
        <div className={styles.volume}>
          <IconFont type={'icon-yinliang'}/>
        </div>
      </div>
    );
  }
}

export default PlayBar;
