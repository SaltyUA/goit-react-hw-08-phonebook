import ContactItem from 'components/contactItem';
import ListStyled from './List.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'store/selectors';
import FilterInput from 'components/filterInput';
import { useEffect } from 'react';
import { fetchAllContacts } from 'store/contacts/thunks';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <>
      <FilterInput />
      {contacts.length > 0 ? (
        <ListStyled>
          {contacts.map(({ id, name, number }) => (
            <ContactItem name={name} key={id} number={number} id={id} />
          ))}
        </ListStyled>
      ) : (
        <p>Have no any contacts</p>
      )}
    </>
  );
};

export default ContactList;
