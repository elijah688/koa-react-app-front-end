import React, { useState } from 'react';
import { useEffect } from 'react';
import { Toast as BsToast } from 'react-bootstrap';
import './Toast.scss';
import creeateBEM from '../../utils/crateBEM';
const BEM = creeateBEM('Toast');

const Toast = ({ error, message }) => {
  useEffect(() => {
    if (error || message) {
      setShow(true);
    }
    return () => {};
  }, [error, message]);
  const [show, setShow] = useState(false);
  return (
    <BsToast className={BEM()} onClose={() => setShow(false)} show={show} delay={3000} autohide>
      <BsToast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">{message ? 'Message' : 'Error'}</strong>
        <small>11 mins ago</small>
      </BsToast.Header>
      <BsToast.Body>{message || error}</BsToast.Body>
    </BsToast>
  );
};

export default Toast;
