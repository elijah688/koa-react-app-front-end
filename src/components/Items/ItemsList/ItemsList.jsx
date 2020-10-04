import React, { useContext } from 'react';
import { ItemsContext } from '../../../context/ItemsContexProvider/ItemsContexProvider';
import Item from './Item';
import { Spinner } from 'react-bootstrap';
import createBEM from '../../../utils/crateBEM';
import './ItemsList.scss';

const BEM = createBEM('ItemsList');

const ItemsList = () => {
  const { items, loading } = useContext(ItemsContext);
  return (
    <div className={BEM('container')}>
      {loading ? (
        <Spinner variant="primary" animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        items.map(({ id, title, content, src }) => (
          <Item key={id} id={id} title={title} content={content} src={src} />
        ))
      )}
    </div>
  );
};

export default ItemsList;
