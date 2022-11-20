import { useReducer } from "react";
import type { ContactList } from "../types";

export const useContactListWithUseReducer = () => {
  // TODO: 練習のためにまとめたけど、contactListとnewContactの状態は別で持った方が良さそう？
  const initialContactList: ContactList = {
    contactList: [
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
    ],
    newContact: { email: "" },
  };

  type Action =
    | {
        type: "changeEmail";
        payload: { event: React.ChangeEvent<HTMLInputElement>; index: number };
      }
    | { type: "editMode"; payload: { index: number } }
    | { type: "viewMode"; payload: { index: number } }
    | { type: "delete"; payload: { index: number } }
    | {
        type: "changeInput";
        payload: { event: React.ChangeEvent<HTMLInputElement> };
      }
    | { type: "add" };

  const reducer = (state: ContactList, action: Action): ContactList => {
    switch (action.type) {
      case "changeEmail":
        return {
          contactList: state.contactList.map((contact, mIndex) => {
            return action.payload.index === mIndex
              ? { ...contact, email: action.payload.event.target.value }
              : contact;
          }),
          newContact: state.newContact,
        };

      case "editMode":
        return {
          contactList: state.contactList.map((contact, mIndex) => {
            return action.payload.index === mIndex
              ? { ...contact, mode: "edit" }
              : contact;
          }),
          newContact: state.newContact,
        };

      case "viewMode":
        return {
          contactList: state.contactList.map((contact, mIndex) => {
            return action.payload.index === mIndex
              ? { ...contact, mode: "view" }
              : contact;
          }),
          newContact: state.newContact,
        };

      case "delete":
        return {
          contactList: state.contactList.filter(
            (contact, fIndex) => fIndex !== action.payload.index
          ),
          newContact: state.newContact,
        };

      case "changeInput":
        return {
          contactList: state.contactList,
          newContact: { email: action.payload.event.target.value },
        };

      case "add":
        return {
          contactList: [
            ...state.contactList,
            { email: state.newContact.email, mode: "view" },
          ],
          newContact: { email: "" },
        };

      default:
        return state;
    }
  };

  const [contactList, dispatch] = useReducer(reducer, initialContactList);

  const canAddContactList = contactList.contactList.length < 5;

  return {
    contactList,
    canAddContactList,
    dispatch,
  };
};
