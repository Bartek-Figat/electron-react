import React, { useState, useEffect } from 'react';
import { CardList } from '../componets/FST_Detales/CardList/CradList';
import { fakeData } from '../fakeData/data';
import { fstCardList } from '../componets/FST_Detales/CardList/CradList';

export const ListFromDb = () => {
  return (
    <>
      {fakeData.map((item) => {
        return (
          <CardList>
            <li style={fstCardList.wrapperList}>
              <li style={fstCardList.li}>
                <input type="checkbox" />
              </li>
              <li style={fstCardList.li}>{item.fN}</li>
              <li style={fstCardList.li}>{item.lN}</li>
              <li style={fstCardList.li}>{item.company}</li>
              <li style={fstCardList.li}>{item.JTitle}</li>
              <li style={fstCardList.li}>{item.email}</li>
              <li style={fstCardList.li}>{item.phone}</li>
            </li>
          </CardList>
        );
      })}
    </>
  );
};
