import React from 'react';
import IconBoxStyle7 from '../../IconBox/IconBoxStyle7';
import { departmentData } from '../../../Constants/constants';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';



export default function OurDepartment() {


  const sectionTitle = "For Your"
  const sectionTitleUp = "OUR DEPARTMENTS"

  return (
    <div className="container cs_mt_minus_110">
      <SectionHeading  title={sectionTitle} titleUp={sectionTitleUp} />
      <Spacing md="72" lg="50" />
      <div className="row justify-content-end">
        {departmentData?.map((item, index) => (
          <div className="col-xl-4 col-md-6" key={index}>
            <IconBoxStyle7 {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
