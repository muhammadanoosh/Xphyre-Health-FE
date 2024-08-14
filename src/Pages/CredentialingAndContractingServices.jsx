import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../components/Section/BannerSection/BannerSectionStyle4';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
import Section from '../components/Section';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import { pageTitle } from '../helpers/PageTitle';
import { C_and_C_Data1, C_and_C_Data2 } from '../Constants/constants';


export default function CredentialingAndContractingServices() {
  pageTitle('C&C');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/doctors/banner_bg.svg"
        imgUrl="/images/doctors/banner_img.png"
        title="Credentialing and Contracting Services"
        subTitle="Unlock Healthcare Excellence with Expert Credentialing and Contracting "
      />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Unlock Healthcare Excellence with Expert"
          p1="Expert credentialing and contracting services are crucial for healthcare providers to build long-lasting relationships with patients and healthcare systems. Credentialing involves verifying an insurance company or provider's qualifications, including education, training, work history, and licensure."
          p2="Conversely, contracting involves negotiating insurance contracts and agreements to define the terms and conditions of services and reimbursement rates. These services lay the foundation for professional and organic relationships between your clinic, patients, or insurance companies. Thus, reliable and efficient credentialing and contracting solutions are critical to eliminating errors, potential denials, and lost customers."
          p3="Xphyre Health's expert medical credentialing staff offers customized solutions to streamline contract negotiation and patient care, maximizing your quality of care and cash flow!"
          imgUrl="/images/departments/department_img_1.png"
        />
      </Section>

      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Elevate Medical Practice"
          data={C_and_C_Data1}
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
          sectionTitle="Discover the Difference"
          data={C_and_C_Data2}
        />
      </Section>
    </>
  );
}
