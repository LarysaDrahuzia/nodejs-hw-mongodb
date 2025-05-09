import { ContactsCollection } from '../models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactId = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};
