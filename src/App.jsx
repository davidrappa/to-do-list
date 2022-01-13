import React, { useEffect } from "react";
import {
  Container,
  Title,
  Form,
  Input,
  Button,
  ListItem,
  ErrorMessage,
  Item,
  EmptyList,
  ButtonDeleted,
  IconEdit,
  IconDeleted,
} from "./styles";

import { IoIosRemoveCircleOutline } from "react-icons/io";
import { AiOutlineEdit } from "react-icons/ai";

function App() {
  /**
   * Objetos principais
   */
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);
  const [itemList, setItemList] = React.useState([]);

  /**
   * Pega os items que estao no localstorage
   */
  useEffect(() => {
    if (localStorage.getItem('items') !== null) {
      setItemList(JSON.parse(localStorage.getItem('items')));
    } else {
      setItemList(localStorage.setItem('items', JSON.stringify(([...itemList]))));
      return false;
    }
  }, [])

  /**
   * Obtem o valor do input
   */
  function handleChangeInput(event) {
    const inputValue = event.target.value;
    setValue(inputValue);
  }

  /**
   * Add o item na lista
   */
  function handleAddItem(event) {
    event.preventDefault();
    if (value) {
      setValue("");
      setError(null);
      localStorage.setItem('items' , JSON.stringify([...itemList, value]))
      setItemList([...itemList, value]);
      return true;
    } else {
      setError("Preencha o campo!");
      return false;
    }
  }

  /**
   * Limpa a lista total
   */
  function handleDeletedItems() {
    if(itemList.length > 0) {
      setItemList([]);
      localStorage.setItem('items', JSON.stringify([]))
      return true;
    } else {
      return false;
    }
  }

  /**
   * Editar um item da lista
   */
  function handleEditItem(item) {
    console.log(item);
  }

  /**
   * Remover apenas um item da lista
   */
  function handleRemoveOneItem(index) {
    itemList.splice(index, 1);
    setItemList([...itemList]);
    localStorage.setItem('items', JSON.stringify([...itemList]))
  }

  return (
    <Container>
      <Title>to-do list</Title>
      <Form>
        <Input
          type="text"
          value={value}
          id={value}
          placeholder="add items or tasks"
          onChange={handleChangeInput}
        />
        <Button type="submit" onClick={handleAddItem}>
          add item
        </Button>
        {itemList.length > 0 && (
          <ButtonDeleted type="submit" onClick={handleDeletedItems}>
            delete all
          </ButtonDeleted>
        )}
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Title>items</Title>
      <ListItem>
        {itemList.length > 0 ? (
          itemList.map((item, index) => {
            return (
              <Item key={index}>
                {item}
                <IconEdit onClick={() => handleEditItem(item)}>
                  <AiOutlineEdit />
                </IconEdit>
                <IconDeleted onClickCapture={() => handleRemoveOneItem(index)}>
                  <IoIosRemoveCircleOutline />
                </IconDeleted>
              </Item>
            );
          })
        ) : (
          <EmptyList>your list is empty :(</EmptyList>
        )}
      </ListItem>
    </Container>
  );
}

export default App;
