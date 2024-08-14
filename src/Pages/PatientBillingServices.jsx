import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../components/Section/BannerSection/BannerSectionStyle4';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import { PBSdata1 } from '../Constants/constants';
import { PBSdata2 } from '../Constants/constants';



export default function PatientBillingServices() {
  pageTitle('PBS');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/doctors/banner_bg.svg"
        imgUrl="/images/doctors/banner_img.png"
        title="Patient Billing Services"
        subTitle="Unlock Healthcare Excellence with Expert Credentialing and Contracting "
      />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Enhance Your Billing Efficiency with Reliable Patient Billers"
          p1="Efficient and reliable patient billing services are crucial to your healthcare facility's success. A tiny error in your statement or outdated customer records can result in lost revenue or late claims."
          p2="But with top-notch patient billing solutions, healthcare facilities can reduce the stress of claims, collections, and everything in between! With trained, certified, and experienced billing specialists to check submissions, follow up, collect patient data, and create invoices, medical practices can take their productivity to the next level."
          p3=" At Xphyre Health, we hire expert medical billers and coders to provide healthcare facilities like yours with access to comprehensive, reliable revenue cycle management solutions. From claim submission to follow-up, we handle every aspect of the patient billing process with precision and care."
          imgUrl="/images/departments/department_img_1.png"
        />
      </Section>
      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Boost Your Revenue"
          data={PBSdata1}
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
          sectionTitle="Streamline Your Practice "
          data={PBSdata2}
        />
      </Section>
    </>
  );
}
