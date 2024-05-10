import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/home_2/department_icon_1.svg';
// ../assets/home_2/department_icon_1.svg

export default function IconBoxStyle2({ title, href, iconUrl }) {
  return (
    <Link to={href} className="cs_iconbox cs_style_2">
      <div className="cs_iconbox_icon">
        <img src={icon} alt="Icon" />
      </div>
      <h2 className="cs_iconbox_title cs_fs_32 cs_semibold m-0">{title}</h2>
    </Link>
  );
}
