/* eslint-disable */
import './index.less';
import React from 'react';
import PropTypes from 'prop-types';
import ListSort from '../../../lib/ListSort';
import { inject, observer } from 'mobx-react';
import Stores from '../../../stores/storeIdentifier';
import KHierarchyStore from '../../../stores/kHierarchyStore';
import AppComponentBase from '../../../components/AppComponentBase';

const dataArray = [
  {
    icon: 'question-circle-o',
    color: '#FF5500',
    title: 'Senior Product Designer',
    text: 'Senior Product Designer',
  },
  {
    icon: 'plus-circle-o',
    color: '#5FC296',
    title: 'Senior Animator',
    text: 'Senior Animator',
  },
  {
    icon: 'check-circle-o',
    color: '#2DB7F5',
    title: 'Visual Designer',
    text: 'Visual Designer',
  },
  {
    icon: 'cross-circle-o',
    color: '#FFAA00',
    title: 'Computer Engineer',
    text: 'Computer Engineer',
  },
];

export interface IState {}

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

  getNodes = async () => {
    await this.props.kHierarchyStore.getNodes({
      keys: this.props.keys,
      maxResultCount: 1000000,
      skipCount: 0,
    });

    console.log('getNodes Keys -> ', this.props.kHierarchyStore.nodes);
  };

  componentDidMount = () => {
    this.getNodes();
  };

  render() {
    const childrenToRender = dataArray.map((item, i) => {
      const { title, text } = item;
      return (
        <div key={i} className={`list-sort-demo-text`}>
          <div className={`list-sort-demo-icon`}>
            {/* <Icon type={'check-circle-o'} style={{ color }} /> */}
          </div>
          <div className={`list-sort-demo-text`}>
            <h1>{title}</h1>
            <p>{text}</p>
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
