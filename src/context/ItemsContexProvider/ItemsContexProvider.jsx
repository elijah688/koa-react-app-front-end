import React, { createContext, useState, useCallback } from 'react';
import { useEffect } from 'react';
import { postItems as post, getItems, deleteItem, updateItem } from '../../api';

export const ItemsContext = createContext({
  message: null,
  loading: false,
  error: null,
  postItems: () => {},
  loadItems: () => {},
  deleteItem: () => {},
  updateItem: () => {},
});

const ItemsContexProvider = ({ children }) => {
  const [err, setError] = useState();
  const [msg, setMessage] = useState();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const postItems = async (body) => {
    setError(null);
    setMessage(null);
    setLoading(true);
    try {
      const { error } = await post(body);
      if (error) {
        throw error;
      }
      await loadItems();
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  const loadItems = useCallback(async () => {
    setMessage(null);
    setError(null);
    setLoading(true);
    try {
      const { items, error } = await getItems();
      if (error) {
        throw error;
      }
      setItems(items);
      setMessage('Success!');
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, []);

  const del = async (id) => {
    setMessage(null);
    setError(null);
    setLoading(true);
    try {
      const { error } = await deleteItem(id);
      if (error) {
        throw error;
      }
      loadItems();
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const update = async (id, body) => {
    setMessage(null);
    setError(null);
    setLoading(true);
    try {
      const { error } = await updateItem(id, body);
      if (error) {
        throw error;
      }
      loadItems();
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadItems();
    return () => {};
  }, [loadItems]);

  return (
    <ItemsContext.Provider
      value={{
        loadItems,
        postItems,
        deleteItem: del,
        updateItem: update,
        error: err,
        message: msg,
        items,
        loading,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
export default ItemsContexProvider;
