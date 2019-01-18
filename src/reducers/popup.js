import React from 'react';

const rules = "Welcome to Tower of Hanoi game! The goal is to move disks from" +
  " the first column to the third one. You can only put smaller disk on" +
  " bigger ones.";

export const popup = (state = rules, action) => {
  switch (action.type) {
    case 'CLOSE_POPUP':
      return false;
    case 'SHOW_POPUP_VICTORY':
      return action.text;
    default:
      return state;
  }
};
