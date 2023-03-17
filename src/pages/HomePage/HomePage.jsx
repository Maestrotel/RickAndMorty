import React from 'react';

import banner from '../../assets/banner.png';
import { ReactComponent as Search } from '../../assets/search.svg';
import CharacterList from '../../components/CharacterList/CharacterList';
import css from './HomePage.module.css';

function HomePage() {
  return (
    <div className={css.container}>
      <div>
        <img src={banner} alt="rick-and-morty" className={css.styleBanner} />
      </div>
      <div>
        <form className={css.searchPanel}>
          <Search className={css.searchStyle} />
          <input
            className={css.inputStyle}
            name="search"
            type="text"
            autoComplete="off"
            placeholder="Filter by name..."
          />
        </form>
      </div>

      <CharacterList />
    </div>
  );
}

export default HomePage;

// className={css.posterStyle}
