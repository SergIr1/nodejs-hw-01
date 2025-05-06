import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  //   const arrContacts = [];

  //   arrContacts.push(await readContacts());

  //   return arrContacts;
  return await readContacts();
};

console.log(await getAllContacts());
