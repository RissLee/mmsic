/**
 * @author ruiliang.li@envisioncn.com on 2019-08-11.
 */

import React from 'react';
import { connect } from 'dva';
import { Row, Col, Button } from 'antd';
import { search, topPlayLists } from '@/api';
import styles from './index.less';
import jsencrypt from 'jsencrypt';
import { getPlayInfo } from '@/services/miguMusic';

@connect(({ discover }) => ({ discover }))
class Discover extends React.PureComponent {
  state = {
    playlists: [],
    total: 0,
    cat: '全部',
  };

  componentDidMount() {
    this.props.dispatch({ type: 'discover/getTopPlaylist' });
    topPlayLists({ limit: 12, order: 'hot' }).then(res => {
      this.setState(res);
      console.log(res);
    });
  }

  testClick = () => {
    getPlayInfo({ copyrightId: 122 })
      .then(console.log)
      .catch(console.log);
  };

  render() {
    const { playlists } = this.state;

    return (
      <div className={styles.root}>
        <div className={styles.leftContainer}>
          <div className={styles.leftTop}>Discover</div>
          <Row gutter={24} className={styles.songLists}>
            {playlists.map(play => (
              <Col key={play.id} span={6}>
                <img alt={'img'} src={play.coverImgUrl} className={styles.playImg} />
                <div className={styles.playTitle}>{play.name}</div>
              </Col>
            ))}
          </Row>
        </div>
        <div className={styles.rightContainer}>
          <Button onClick={this.testClick}>测试</Button>
        </div>
      </div>
    );
  }
}

export default Discover;

const publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8asrfSaoOb4je+DSmKdriQJKW
VJ2oDZrs3wi5W67m3LwTB9QVR+cE3XWU21Nx+YBxS0yun8wDcjgQvYt625ZCcgin
2ro/eOkNyUOTBIbuj9CvMnhUYiR61lC1f1IGbrSYYimqBVSjpifVufxtx/I3exRe
ZosTByYp4Xwpb1+WAQIDAQAB
-----END PUBLIC KEY-----`;

const e = new jsencrypt();
e.setPublicKey(publicKey);

const secKey = e.encrypt('4ea5c508a6566e76240543f8feb06fd457777be39549c4016436afda65d2330e');

console.log(secKey);
