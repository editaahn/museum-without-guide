import React from 'react';

const PageHeader = ({ title, history }) => {
  const goBackEvt = () => {
    history.goBack();
  }
  return (
    <header>
      <button onClick = {goBackEvt}>
        <img src="/img/btn/header__goBackBtn.png" alt="뒤로가기" />
      </button>
      <h1>
        <strong>{title}</strong>
      </h1>
      <span></span>
    </header>
  );
};

export default PageHeader;
