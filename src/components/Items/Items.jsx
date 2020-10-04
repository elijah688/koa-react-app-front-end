import React, { useContext, useEffect, useState } from 'react';
import ItemsForm from './ItemsForm/ItemsForm';
import ItemsList from './ItemsList/ItemsList';
import { ItemsContext } from '../../context/ItemsContexProvider/ItemsContexProvider';
import { Container } from 'react-bootstrap';
import createBEM from '../../utils/crateBEM';
import './Items.scss';
import Toast from '../Toast/Toast';
const BEM = createBEM('Items');

const Items = ({ children }) => {
  const { message, error } = useContext(ItemsContext);
  return (
    <div className="d-flex justify-content-center">
      <Container className={BEM('container')}>
        <ItemsForm />
        <ItemsList />
        <Toast className={BEM('toast')} message={message} error={error} />
      </Container>
    </div>
  );
};

export default Items;
