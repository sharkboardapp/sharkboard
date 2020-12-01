import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Form, Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import BannerSVGAnim from './component/BannerSVGAnim';

function Banner(props) {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  };
  const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
  };

  const BANNER_URL = '/assets/app-demo-1.png';

  return (
    <div className="banner-wrapper">
      {props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <div className="home-banner-image">
            {/* <img
              alt="banner"
              src="https://gw.alipayobjects.com/zos/rmsportal/rqKQOpnMxeJKngVvulsF.svg"
              width="100%"
            /> */}
            <img src={BANNER_URL} alt="antcode demo" width="600" />

          </div>
        </TweenOne>
      )}
      <QueueAnim className="banner-title-wrapper" type={props.isMobile ? 'bottom' : 'right'}>
        <div key="line" className="title-line-wrapper">
          <div
            className="title-line"
            style={{ transform: 'translateX(-64px)' }}
          />
        </div>
        <h1 key="h1">THE SNIPPET COMUNITY</h1>
        <p key="content">
          Save, organize, share and search code snippets.
        </p>
        <div
          key="button"
          className="button-wrapper"
        >
          <Form {...formItemLayout}>
            <h2> <strong>SignUp</strong> to BETA </h2>
            <Form.Item>
              <Input size="large" placeholder="Your best email" theme="twoTone" id="mail" prefix={<MailOutlined />} />
            </Form.Item>
            <Form.Item {...formTailLayout}>
              <a href="http://preview.pro.ant.design" target="_blank" rel="noopener noreferrer">
                <Button type="primary">
                  SignUp
                </Button>
              </a>
            </Form.Item>
          </Form>
        </div>
      </QueueAnim>
      {!props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          {/* <BannerSVGAnim /> */}
          <img src={BANNER_URL} alt="antcode demo" width="600" />
        </TweenOne>
      )}
    </div>
  );
}

Banner.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Banner;
