import { useState } from "react";
import type { ContactAddress } from "../types";

export const useContactListWithUseState = () => {
  const initialContactAddress: ContactAddress[] = [
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

  const [contactList, setContactList] = useState<ContactAddress[]>(
    initialContactAddress
  );

  const [input, setInput] = useState<string>("");

  const handleChangeEmail = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const input = event.target.value;
    const newContactList = contactList.map((contactAddress, mIndex) => {
      return index === mIndex
        ? { ...contactAddress, email: input }
        : contactAddress;
    });
    setContactList(newContactList);
  };

  const handleEditMode = (index: number) => {
    const newContactList: ContactAddress[] = contactList.map(
      (contact, mIndex) => {
        return index === mIndex ? { ...contact, mode: "edit" } : contact;
      }
    );
    setContactList(newContactList);
  };

  const handleViewMode = (index: number) => {
    const newContactList: ContactAddress[] = contactList.map(
      (contact, mIndex) => {
        return index === mIndex ? { ...contact, mode: "view" } : contact;
      }
    );

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
    input,
    handleChangeEmail,
    handleEditMode,
    handleViewMode,
    handleDelete,
    handleChangeInput,
    handleAdd,
  };
};
