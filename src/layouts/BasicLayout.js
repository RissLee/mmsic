/**
 * @author ruiliang.li@envisioncn.com on 2019-08-11.
 */

import React from 'react';
import styles from './BasicLayout.less';
import PlayBar from '../components/PlayBar';

class BasicLayout extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <div className={styles.root}>
        <div className={styles.topWrapper}>
          <div className={styles.leftContainer}>
            <button onClick={this.props.history.goBack}>{'<'}</button>
            <button onClick={this.props.history.goForward}>{'>'}</button>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.rightTopBar}>1122</div>
            <div className={styles.contentContainer}> {this.props.children}</div>
          </div>
        </div>
        <div className={styles.bottomWrapper}>
          <PlayBar />
        </div>
      </div>
    );
  }
}

export default BasicLayout;
