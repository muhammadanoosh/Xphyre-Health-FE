import React from 'react';
import Spacing from '../../Spacing';
import IconBoxStyle3 from '../../IconBox/IconBoxStyle3';
import { ourApproach } from '../../../Constants/constants';

export default function WorkingProcess() {
  return (
    <div className="cs_shape_wrap">
      <div className="cs_shape_1 cs_position_2" />
      <div className="container">
        <Spacing md="105" lg="50" />
        <div className="cs_iconbox_3_wrap">
          {ourApproach?.map((item, index) => (
            <IconBoxStyle3 key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
