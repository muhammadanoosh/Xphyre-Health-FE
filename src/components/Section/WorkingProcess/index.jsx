import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import IconBoxStyle3 from '../../IconBox/IconBoxStyle3';
import {workingProcessData} from "../../../Constants/constants"


export default function WorkingProcess({
  sectionTitle,
  sectionTitleUp,
  sectionTitleDown,
  sectionSubTitle,
}) {
  return (
    <div className="cs_shape_wrap">
      <div className="cs_shape_1 cs_position_2" />
      <div className="container">
        <SectionHeading
          title={sectionTitle}
          titleUp={sectionTitleUp}
          titleDown={sectionTitleDown}
          subTitle={sectionSubTitle}
          center
        />
        <Spacing md="105" lg="50" />
        <div className="cs_iconbox_3_wrap">
          {workingProcessData?.map((item, index) => (
            <IconBoxStyle3 key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
