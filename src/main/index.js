import React from 'react';
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
              <li key={item.fN} style={fstCardList.li}>
                {item.fN}
              </li>
              <li key={item.fN} style={fstCardList.li}>
                {item.lN}
              </li>
              <li key={item.fN} style={fstCardList.li}>
                {item.company}
              </li>
              <li key={item.fN} style={fstCardList.li}>
                {item.JTitle}
              </li>
              <li key={item.fN} style={fstCardList.li}>
                {item.email}
              </li>
              <li key={item.fN} style={fstCardList.li}>
                {item.phone}
              </li>
            </li>
          </CardList>
        );
      })}
    </>
  );
};
