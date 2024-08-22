import React from 'react';
import HeroStyle5 from '../components/Hero/HeroStyle5';
import Spacing from '../components/Spacing';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import DepartmentSection from '../components/Section/DepartmentSection';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import { PBSdata1, PBSdata2, WhoWeServeCommon } from '../Constants/constants';



export default function PatientBillingServices() {
  pageTitle('PBS');
  return (
    <>
      <HeroStyle5
        title="Patient Billing Services"
        detail="Are you drowning in a sea of patient calls and medical bills? Does your practice lack a dedicated billing and coding team? Handling patient billing can be demanding and frustrating, from translating medical records and collecting dues to gathering patients.
But with Xphyre Health's proficient medical patient billers and comprehensive billing solutions, you can turn these challenges into opportunities to enhance your practice's efficiency and increase customer satisfaction.
The result? Your staff can focus on priority tasks, enhancing your practice's efficiency and increasing customer satisfaction!  
"
        imgUrl="/images/home_5/hero_img.png"
      />
      <Spacing md="150" lg="7" xl="100" />
      <Section>
        <AboutSectionStyle2
          title="Enhance Your Billing Efficiency with Reliable Patient Billers"
          p1="Efficient and reliable patient billing services are crucial to your healthcare facility's success. A tiny error in your statement or outdated customer records can result in lost revenue or late claims."
          p2="But with top-notch patient billing solutions, healthcare facilities can reduce the stress of claims, collections, and everything in between! With trained, certified, and experienced billing specialists to check submissions, follow up, collect patient data, and create invoices, medical practices can take their productivity to the next level."
          p3=" At Xphyre Health, we hire expert medical billers and coders to provide healthcare facilities like yours with access to comprehensive, reliable revenue cycle management solutions. From claim submission to follow-up, we handle every aspect of the patient billing process with precision and care."
          imgUrl="/images/departments/department_img_1.png"
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />

      <Section >
        <DepartmentSectionStyle2
          sectionTitle="Boost Your Revenue"
          data={PBSdata1}
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />

      <Section>
        <BannerSectionStyle2
          bgUrl="/images/home_2/cta_bg.jpeg"
          title="Transform Your Practice with Effortless Billing Solutions from Xphyre Health"
          subTitle=""
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section >
        <DepartmentSectionStyle2
          sectionTitle="Streamline Your Practice "
          data={PBSdata2}
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section >
        <DepartmentSection
          sectionTitle="Discover Our Comprehensive Patient Billing Solutions: Who We Serve?"
          bgUrl="images/home_1/department_bg.svg"
          data={WhoWeServeCommon}
        />
      </Section>
    </>
  );
}
