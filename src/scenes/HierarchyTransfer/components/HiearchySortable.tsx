/* eslint-disable */
import './index.less';
import React from 'react';
import PropTypes from 'prop-types';
import ListSort from '../../../lib/ListSort';
import { inject, observer } from 'mobx-react';
import Stores from '../../../stores/storeIdentifier';
import KHierarchyStore from '../../../stores/kHierarchyStore';
import AppComponentBase from '../../../components/AppComponentBase';

export interface IState {
  dataArray: any;
  getNode: any;
}

export interface IProps {
  keys: string[];
  kHierarchyStore: KHierarchyStore;
}

@inject(Stores.KHierarchyStore)
@observer
export default class HiearchySortable extends AppComponentBase<IProps, IState> {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'list-sort-demo',
  };

  state = {
    dataArray: [],
    getNode: [],
  };
  getNodesForKeys = async () => {
    if (
      this.props.kHierarchyStore.units !== undefined &&
      this.props.kHierarchyStore.units.items.length === 0
    ) {
      this.setState({
        dataArray: [],
      });
    }
    let response = await this.props.kHierarchyStore.getNodesForKeys({
      keys: this.props.keys,
      maxResultCount: 1000000,
      skipCount: 0,
    });

    this.setState({
      dataArray: response,
    });
  };

  getNodes = async () => {
    let response = await this.props.kHierarchyStore.getNodes('1');
    this.setState({
      getNode: response,
    });

    console.log("ID 1 False => ",this.state.getNode);
  };

  componentDidMount = () => {
    this.getNodesForKeys();
    this.getNodes();
  };

  render() {
    const childrenToRender = this.state.dataArray.map((item, i) => {
      const { title } = item;
      return (
        <div key={i} className={`list-sort-demo-text`}>
          <div className={`list-sort-demo-icon`}>
            {/* <Icon type={'check-circle-o'} style={{ color }} /> */}
          </div>
          <div className={`list-sort-demo-text`}>
            <h1 style={{ width: '320px' }}>{title}</h1>
          </div>
        </div>
      );
    });

    return (
      <div className={`list-sort-demo-wrapper`}>
        <div className={'list-sort-demo'}>
          <ListSort
            dragClassName="list-drag-selected"
            appearAnim={{ animConfig: { marginTop: [5, 30], opacity: [1, 0] } }}
          >
            {childrenToRender}
          </ListSort>
        </div>
      </div>
    );
  }
}
