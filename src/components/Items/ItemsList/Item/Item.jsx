import React, { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import createBEM from '../../../../utils/crateBEM';
import './Item.scss';
import { ItemsContext } from '../../../../context/ItemsContexProvider/ItemsContexProvider';
import ItemsForm from '../../ItemsForm/ItemsForm';

const BEM = createBEM('Item');

const Item = ({ id, title, content, src }) => {
  const [editing, setEditing] = useState(false);
  const { deleteItem } = useContext(ItemsContext);
  const item = { id, title, content, src };
  return editing ? (
    <ItemsForm item={item} />
  ) : (
    <Card className={BEM()}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <div className={BEM('controls')}>
          <Button onClick={() => setEditing(true)} variant="primary">
            Edit
          </Button>
          <Button onClick={() => deleteItem(id)} variant="danger">
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;
