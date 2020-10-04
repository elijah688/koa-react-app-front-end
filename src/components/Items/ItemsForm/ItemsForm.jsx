import React, { useContext, useState } from 'react';
import { Form, Button, Card, Image } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import createBEM from '../../../utils/crateBEM';
import './ItemsForm.scss';
import { ItemsContext } from '../../../context/ItemsContexProvider/ItemsContexProvider';

const BEM = createBEM('ItemsForm');
const ItemsForm = ({ item }) => {
  const { id, title, content, src } = item ? item : '';
  const [srcVal, setSrcVal] = useState(src);
  const { handleSubmit, register, getValues } = useForm();
  const { postItems, updateItem } = useContext(ItemsContext);

  const submit = (values) => {
    if (item) {
      updateItem(id, values);
    } else {
      postItems(values);
    }
  };

  return (
    <Card className={BEM('card')}>
      {srcVal && <Image className={BEM('card-image')} roundedCircle src={srcVal}></Image>}
      <Card.Body>
        <Form onSubmit={handleSubmit(submit)}>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              defaultValue={title}
              name="title"
              ref={register}
              type="text"
              placeholder="Title..."
            />
          </Form.Group>

          <Form.Group controlId="formBasicContent">
            <Form.Label>Content:</Form.Label>
            <Form.Control
              defaultValue={content}
              name="content"
              ref={register}
              type="text"
              placeholder="Content..."
            />
          </Form.Group>

          <Form.Group controlId="formBasicImage">
            <Form.Label>Image:</Form.Label>
            <Form.Control
              defaultValue={src}
              onChange={() => {
                setSrcVal(getValues().src);
              }}
              name="src"
              ref={register}
              type="text"
              placeholder="Image URL..."
            />
          </Form.Group>

          <div className={BEM('button-controls')}>
            <Button variant="primary" className="mt-2" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ItemsForm;
