// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { readdirSync } from 'fs';
import styles from './Counter.css';
import routes from '../constants/routes.json';

type Props = {
  increment: () => void,
  incrementIfOdd: () => void,
  incrementAsync: () => void,
  decrement: () => void,
  counter: number,
  imageList: any
};

export default class Counter extends Component<Props> {
  props: Props;

  render() {
    const ret = readdirSync('/Users/cayla/Project');
    console.log('ret: ', ret);

    const {
      increment,
      incrementIfOdd,
      incrementAsync,
      decrement,
      counter,
      imageList
    } = this.props;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {counter}
        </div>
        <p>{imageList.join(' ')}</p>
        <div className={styles.btnGroup}>
          <button
            className={styles.btn}
            onClick={increment}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-plus" />
          </button>
          <button
            className={styles.btn}
            onClick={decrement}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-minus" />
          </button>
          <button
            className={styles.btn}
            onClick={incrementIfOdd}
            data-tclass="btn"
            type="button"
          >
            odd
          </button>
          <button
            className={styles.btn}
            onClick={() => incrementAsync()}
            data-tclass="btn"
            type="button"
          >
            async
          </button>
        </div>
      </div>
    );
  }
}
