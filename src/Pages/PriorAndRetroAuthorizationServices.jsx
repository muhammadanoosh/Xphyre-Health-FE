import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../components/Section/BannerSection/BannerSectionStyle4';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import { PARASdata1 } from '../Constants/constants';
import { PARASdata2 } from '../Constants/constants';



export default function PriorAndRetroAuthorizationServices() {
  pageTitle('PBS');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/doctors/banner_bg.svg"
        imgUrl="/images/doctors/banner_img.png"
        title="Prior and Retro Authorization Services"
        subTitle=""
      />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Streamline Your Practice"
          p1="Prior and retro authorization are critical medical billing and healthcare management processes that affect a clinic's productivity and reimbursements. Pre-authorization involves obtaining approval from insurance companies before delivering patient care, ensuring the insurer will cover the costs."
          p2="In contrast, retro authorization entails securing approval from insurance providers after providing immediate patient care. These authorizations are vital for mitigating claim denial risks and ensuring healthcare providers receive fair compensation."
          p3="At Xphyre Health, our trained experts help you save time and money by alleviating administrative headaches and extensive authorization processes. As a result, your healthcare clinic can focus on core responsibilities and providing exceptional patient care."
          imgUrl="/images/departments/department_img_1.png"
        />
      </Section>
      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Boost Efficiency"
          data={PARASdata1}
        />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="images/doctors/banner_bg_2.jpeg"
          title="Why Us?"
          subTitle="Cultivate deep, long-lasting relationships with insurance companies and patients with Xphyre Health's expert staff"
        />
      </Section>
      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Transform Your Operations"
          data={PARASdata2}
        />
      </Section>
    </>
  );
}
