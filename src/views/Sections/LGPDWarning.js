import React from 'react';
import CookieBanner from 'react-cookie-banner';

export default function LGPD() {
  return (
  <div>
    <CookieBanner
      message="Sim, usamos cookies. Se você não gostar mudar de site, não sentiremos sua falta!"
      onAccept={() => {}}
      cookie="user-has-accepted-cookies" />
  </div>
  )
}
