import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../components/Section/BannerSection/BannerSectionStyle4';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import { IEVSData1 } from '../Constants/constants';
import { IEVSdata2 } from '../Constants/constants';



export default function InsuranceEligibilityVerificationServices() {
  pageTitle('IEVS');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/doctors/banner_bg.svg"
        imgUrl="/images/doctors/banner_img.png"
        title="Insurance Eligibility Verification Services"
        subTitle="Unlock Healthcare Excellence with Expert Credentialing and Contracting "
      />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Enhance Your Practice with Professional"
          p1="Insurance verification and eligibility are critical in your revenue cycle management, optimizing your cash flow and reducing denials. The process involves gathering and verifying a patient's details and insurance coverage before providing care."
          p2="During insurance verification, expert authorization specialists confirm the patient's coverage details, insurance plans, deductibles, and restrictions. Ensuring accurate eligibility is crucial for avoiding missing information and denials, ultimately protecting your clinic's revenue."
          p3="Outsourcing insurance eligibility services to our certified experts helps you minimize errors and inefficiencies associated with manual verification. With in-depth experience and state-of-the-art technology, Xphyre Health delivers accurate eligibility and verification information."
          imgUrl="/images/departments/department_img_1.png"
        />
      </Section>
      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Enhance Your Practice"
          data={IEVSData1}
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
          sectionTitle="Optimize Cash Flow"
          data={IEVSdata2}
        />
      </Section>
    </>
  );
}
