import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


export default function MenuWidget({ data }) {
  return (
    <ul className="cs_menu_widget cs_mp0">
      {data?.map((item, index) => (
        <li  key={index}>
          <Link className='footer_link' smooth to={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
