import React, { Component } from 'react';
import { connect } from 'dva';
import { GlobalModelState } from './model';
import styles from './index.less';

interface IProps {
  global: GlobalModelState;
  dispatch: Function;
}

class IndexPage extends Component<IProps> {
  componentDidMount() {
    this.updateFiles();
  }

  updateFiles = () => {
    this.props.dispatch({
      type: 'global/updateFiles',
    });
  };

  render() {
    const { files, folders } = this.props.global;
    console.log(111, files, folders);
    return (
      <div>
        <h1 className={styles.title}>Page index</h1>
      </div>
    );
  }
}

export default connect(({ global }: { global: GlobalModelState }) => ({
  global,
}))(IndexPage);
