import React from 'react';

const Profile = (props) => {
    const profileObj = props.profileData;

    const getSocialLinks = props.profileData.profiles.map(function(item, index) {
       return (
          <li className="social-list__item" key={index}><a href={item.url} target="_blank">{item.network}</a></li>
       )
    });

    return  (
      <div className="profile-box">
          <div className="profile-box__image">
            <img role="presentation" className="img-circle" src={profileObj.picture}/>
          </div>
          <h1 className="profile-box__title">{profileObj.name}</h1>
          <label className="profile-box__label">{profileObj.label}</label>
          <div  className="profile-box__detail">
            {profileObj.summary}
          </div>
          <ul className="social-list">
            {getSocialLinks}
          </ul>
      </div>
    );
};

export default Profile;
