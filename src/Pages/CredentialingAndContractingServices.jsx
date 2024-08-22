import React from 'react';
import Spacing from '../components/Spacing';
import HeroStyle5 from '../components/Hero/HeroStyle5';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
import Section from '../components/Section';
import DepartmentSection from '../components/Section/DepartmentSection';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import { pageTitle } from '../helpers/PageTitle';
import { C_and_C_Data1, C_and_C_Data2, WhoWeServeCandC } from '../Constants/constants';


export default function CredentialingAndContractingServices() {
  pageTitle('C&C');
  return (
    <>
      <HeroStyle5
        title="Credentialing and Contracting Services"
        detail="Credentialing and contracting are complex yet vital processes, requiring extensive documentation and verification for a simple insurance enrolment. A tiny error, a missing form, or incorrect information can have a profound impact, potentially delaying enrollment or even leading to contract cancellation, which could result in significant trust and revenue loss.  
        Our medical credentialing and contracting services empower your staff to foster long-lasting relations with insurance companies and patients. With our proficient,    error-free, and reliable credentialing services to diverse hospitals and healthcare systems, your clinic can enjoy improved relationships with insurance payors and   carriers. 
         Let our experts simplify these complex processes, enhance operational efficiency, and cultivate robust client relations to help you serve more patients!"
        imgUrl="/images/home_5/hero_img.png"
      />
      <Spacing md="150" lg="7" xl="100" />
      <Section>
        <AboutSectionStyle2
          title="Unlock Healthcare Excellence with Expert"
          p1="Expert credentialing and contracting services are crucial for healthcare providers to build long-lasting relationships with patients and healthcare systems. Credentialing involves verifying an insurance company or provider's qualifications, including education, training, work history, and licensure."
          p2="Conversely, contracting involves negotiating insurance contracts and agreements to define the terms and conditions of services and reimbursement rates. These services lay the foundation for professional and organic relationships between your clinic, patients, or insurance companies. Thus, reliable and efficient credentialing and contracting solutions are critical to eliminating errors, potential denials, and lost customers."
          p3="Xphyre Health's expert medical credentialing staff offers customized solutions to streamline contract negotiation and patient care, maximizing your quality of care and cash flow!"
          imgUrl="/images/departments/department_img_1.png"
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section>
        <DepartmentSectionStyle2
          sectionTitle="Elevate Medical Practice"
          data={C_and_C_Data1}
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
      <Section>
        <DepartmentSectionStyle2
          sectionTitle="Discover the Difference"
          data={C_and_C_Data2}
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section>
        <DepartmentSection
          sectionTitle="Seamless Credentialing and Contracting for Healthcare Professionals: Who We Serve?"
          bgUrl="images/home_1/department_bg.svg"
          data={WhoWeServeCandC}
        />
      </Section>
    </>
  );
}
