import React from 'react';
import Userhelpful from './userhelpful.jsx';
import $ from 'jquery';

var count = 0;

var answer = (props) => {
  if (props.answersid.length === 1) {
    return (
      <div>
        <div className='qa-paddingleft qa-paddingbottom qa-paddingtop'>
          <div className='qa-bold qa-float'>A:</div>
          <div>{props.answers[props.answersid[0]].body}</div>
        </div>
        <Userhelpful answer={props.answers[props.answersid[0]]} />
      </div>
    );
  } else if (props.answersid.length === 2) {
    return (
      <div>
        <div>
          <div className='qa-paddingleft qa-paddingbottom qa-paddingtop'>
            <div className='qa-bold qa-float'>A:</div>
            <div>{props.answers[props.answersid[0]].body}</div>
          </div>
          <Userhelpful answer={props.answers[props.answersid[0]]} />
        </div>
        <div>
          <div className='qa-paddingleft qa-paddingbottom qa-paddingtop'>
            <div className='qa-bold qa-float'>A:</div>
            <div>{props.answers[props.answersid[1]].body}</div>
          </div>
          <Userhelpful answer={props.answers[props.answersid[2]]} />
        </div>
      </div>
    );
  } else if (props.answersid.length > 2) {
    return (
      <div>
        <div>
          <div className='qa-paddingleft qa-paddingbottom qa-paddingtop'>
            <div className='qa-bold qa-float'>A:</div>
            <div>{props.answers[props.answersid[0]].body}</div>
          </div>
          <Userhelpful answer={props.answers[props.answersid[0]]} />
        </div>
        <div>
          <div className='qa-paddingleft qa-paddingbottom qa-paddingtop'>
            <div className='qa-bold qa-float'>A:</div>
            <div>{props.answers[props.answersid[1]].body}</div>
          </div>
          <Userhelpful answer={props.answers[props.answersid[2]]} />
        </div>
        <div className='qa-paddingleft'>
          <button >SEE MORE ANSWERS</button>
        </div>
      </div>
    );
  }
};

export default answer;