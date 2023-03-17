import React from 'react';
import person from '../../assets/RickSan.png';
import css from './CharacterPage.module.css';

function CharacterPage() {
  return (
    <div>
      <div className={css.styleCharacter}>
        <img src={person} alt="person" className={css.styleCover} />
        <p className={css.styleName}>Rick Sanchez</p>
      </div>
      <div className={css.infoCard}>
        <p className={css.styleInfo}>Information</p>
        <div className={css.styleItem}>
          <p className={css.styleMain}>Gender</p>
          <p className={css.styleSecondary}>Male</p>
        </div>
        <div className={css.styleItem}>
          <p className={css.styleMain}>Status</p>
          <p className={css.styleSecondary}>Alive</p>
        </div>
        <div className={css.styleItem}>
          <p className={css.styleMain}>Specie</p>
          <p className={css.styleSecondary}>Human</p>
        </div>
        <div className={css.styleItem}>
          <p className={css.styleMain}>Origin</p>
          <p className={css.styleSecondary}>Earth</p>
        </div>
        <div className={css.styleItem}>
          <p className={css.styleMain}>Type</p>
          <p className={css.styleSecondary}>Unknown</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterPage;
