import React, {useEffect, useState} from 'react';
import Profile from '../component/Profile';

const MyPage = ({handleChangeAuth}) => {

  return (
    <div className='section'>
      <Profile 
        handleChangeAuth={handleChangeAuth}
      ></Profile>
    </div>
  );
};

export default MyPage;