import React from 'react';
import rick from '../../assets/Rick.png';
import css from './CharacterList.module.css';

function CharacterList() {
  return (
    <>
      <ul className={css.cardList}>
        {/* {Array.isArray(movieCast) &&
          movieCast?.map(({ id, name, profile_path }) => {
            return ( */}
        <li
          // key={id}
          className={css.cardStyle}
        >
          <img
            // className={css.imageStyle}
            src={
              rick
              // ? { rick }
              // : 'https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png'
            }
            alt="name"
          />
          <p className={css.titleStyle}>Rick Sanchez</p>
          <p className={css.specieStyle}>Human</p>
        </li>
        {/* );
          })} */}
      </ul>
    </>
  );
}

export default CharacterList;
