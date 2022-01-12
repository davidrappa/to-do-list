import React from 'react';
import {Container, Title, Form, Input, Button, ListItem, ErrorMessage, Item,EmptyList, ButtonDeleted} from './styles'

function App() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null)
  const [itemList, setItemList] = React.useState([]);

  function handleChangeInput(event) {
    const inputValue = event.target.value;
    setValue(inputValue)
  }

  function handleAddItem(event) {
    event.preventDefault();
    if(value) {
      setItemList([...itemList, value]);
      setValue('');
      setError(null);
      return true;
    } else {
      setError('Preencha o campo!')
      return false
    }
  }

  function handleDeletedItems() {
    setItemList([])
  }

  return (
    <Container>
      <Title>to-do list</Title>
      <Form>
        <Input type="text" value={value} id={value} placeholder="Adicione uma tarefa" onChange={handleChangeInput}/>
        <Button type="submit" onClick={handleAddItem}>Adicionar</Button>
        { itemList.length > 0 && 
          <ButtonDeleted type="submit" onClick={handleDeletedItems}>Deletar</ButtonDeleted>
        }
      </Form>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      <Title>items</Title>
      <ListItem>
        { itemList.length > 0 ?
          itemList.map((item) => {
            return(
              <Item key={item}>{item}</Item>
            )
          })
        : <EmptyList>Sua lista está vázia :(</EmptyList>
        }
      </ListItem>
    </Container>
  );
}

export default App;
