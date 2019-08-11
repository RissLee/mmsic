import React from 'react';
import BasicLayout from './BasicLayout';

export default props => {
  if (props.location.pathname.startsWith('/user')) {
    return null;
  }
  return <BasicLayout {...props} />;
};
