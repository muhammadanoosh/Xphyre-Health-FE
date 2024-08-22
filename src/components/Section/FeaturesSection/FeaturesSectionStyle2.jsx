import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import IconBoxStyle6 from '../../IconBox/IconBoxStyle6';
import { why_choose_us } from '../../../assets/allAssets';


export default function FeaturesSectionStyle2({ sectionTitle, data, para }) {
  return (
    <div className="cs_shape_wrap">
      <div className="cs_shape_1 cs_position_1" />
      <div className="container">
        <div className="row flex-xl-row flex-column-reverse">
          <div className="col-xl-5">
            <div className="cs_pr_95 text-center cs_img_filed">
              <img src={why_choose_us} alt={sectionTitle} className="cs_radius_30" />
            </div>
          </div>
          <div className="col-xl-7">
            <SectionHeading title={sectionTitle} />
            <Spacing md="85" lg="70" xl="20" />
            <p className='para_color'>{para}</p>
            <Spacing md="85" lg="70" xl="20" />
            <div className="row">
              {data?.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <IconBoxStyle6 {...item} />
                  <Spacing md="85" lg="60" xl="35" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
