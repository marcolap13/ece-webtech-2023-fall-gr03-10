// GravatarComponent.js
import React from 'react';
import crypto from 'crypto';

const GravatarComponent = ({ email, size = 50 }) => {
  const hash = crypto.createHash('md5').update(email.trim().toLowerCase()).digest('hex');
  const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`;

  return (
    <img
      src={gravatarUrl}
      alt="Gravatar"
      style={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover' }}
    />
  );
};

export default GravatarComponent;
