export type Contact = {
  email: string;
  mode: "view" | "edit";
};

export type NewContact = {
  email: string;
};

export type ContactList = {
  contactList: Contact[];
  newContact: { email: string };
};
