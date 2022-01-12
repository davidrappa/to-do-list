import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  text-align: center;
`
export const Title = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 25px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  padding: 8px 25px;
  border-radius: 10px;
  border: 1px solid #2f2f2f;
  font-family: 'Fira Code';
  margin-bottom: 10px;

  ::placeholder {
    font-family: 'Fira Code';
    font-size: 12px;
    text-align: center;
    text-transform: lowercase;
  }

  :focus-visible {
    outline-color: teal;
  }
`
export const Button = styled.button`
  max-width: 217px;
  width: 217px;
  padding: 8px 72px;
  border-radius: 10px;
  border: 1px solid teal;
  font-family: 'Fira Code';
  margin-bottom: 10px;
  text-transform: lowercase;
  background: teal;
  color: #FFF;
  transition: 300ms all ease-in-out;

  :hover {
    background: #FFF;
    color: teal;
    transition: 300ms all ease-in-out;
  }
`
export const ButtonDeleted = styled.button`
  max-width: 217px;
  width: 217px;
  padding: 8px 72px;
  border-radius: 10px;
  border: 1px solid red;
  font-family: 'Fira Code';
  margin-bottom: 10px;
  text-transform: lowercase;
  background: red;
  color: #FFF;
  transition: 300ms all ease-in-out;

  :hover {
    background: #FFF;
    color: red;
    transition: 300ms all ease-in-out;
  }
`
export const ListItem = styled.ul`
  width: 250px;
  border-radius: 10px;
  padding: 12px;
  margin-left: auto;
  margin-right: auto;
  min-height: 200px;
  background: #F2F2F2;
`
export const Item = styled.li`
  list-style: none;
  padding-top: 2px;
  padding-bottom: 2px;
  background: #e1e1e1;
  padding: 4px;
  border-radius: 6px;
  margin-bottom: 6px;
`
export const EmptyList = styled.li`
  background: teal;
  list-style: none;
  border-radius: 6px;
  color: #FFF;
  font-size: 14px;
  padding: 4px;
`
export const ErrorMessage = styled.p`
  max-width: 217px;
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 15px;
  display: block;
  border-radius: 10px;
  border: 1px solid red;
  color: red;

`