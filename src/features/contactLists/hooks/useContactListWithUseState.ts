import { useState } from "react";
import type { Contact } from "../types";

export const useContactListWithUseState = () => {
  const initialContact: Contact[] = [
    {
      email: "hogehoge@example.com",
      mode: "view",
    },
    {
      email: "fugafuga@example.com",
      mode: "view",
    },
    {
      email: "piyopiyo@example.com",
      mode: "view",
    },
  ];

  const [contactList, setContactList] = useState<Contact[]>(initialContact);

  const canAddContact = contactList.length < 5;

  const [input, setInput] = useState<string>("");

  const handleChangeEmail = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const input = event.target.value;
    const newContactList = contactList.map((contact, mIndex) => {
      return index === mIndex ? { ...contact, email: input } : contact;
    });
    setContactList(newContactList);
  };

  const handleEditMode = (index: number) => {
    const newContactList: Contact[] = contactList.map((contact, mIndex) => {
      return index === mIndex ? { ...contact, mode: "edit" } : contact;
    });
    setContactList(newContactList);
  };

  const handleViewMode = (index: number) => {
    const newContactList: Contact[] = contactList.map((contact, mIndex) => {
      return index === mIndex ? { ...contact, mode: "view" } : contact;
    });

    setContactList(newContactList);
  };

  const handleDelete = (index: number) => {
    setContactList(contactList.filter((contact, fIndex) => index !== fIndex));
  };

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const input = event.target.value;
    setInput(input);
  };

  const handleAdd = () => {
    setContactList([...contactList, { email: input, mode: "view" }]);
    setInput("");
  };

  return {
    contactList,
    canAddContact,
    input,
    handleChangeEmail,
    handleEditMode,
    handleViewMode,
    handleDelete,
    handleChangeInput,
    handleAdd,
  };
};
