import React from 'react';
import Spacing from '../components/Spacing';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import DepartmentSection from '../components/Section/DepartmentSection';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import { IEVSData1, IEVSdata2, WhoWeServeIEVS } from '../Constants/constants';
import HeroStyle5 from '../components/Hero/HeroStyle5';



export default function InsuranceEligibilityVerificationServices() {
  pageTitle('IEVS');
  return (
    <>
      <HeroStyle5
        title="Insurance Eligibility Verification Services"
        detail="Eligibility and insurance verification are vital in medical billing and authorization to ensure accurate and timely submissions and reimbursements. A healthcare practice without the appropriate checks and balances can lose money when critical information or payment details are missing.
Medical clinics can minimize financial losses and claim rejections with expert insurance eligibility verification solutions. It means no reimbursement delays and better cash flow! At Xphyre Health, our experts obtain prior authorization and validate eligibility to save you time and unnecessary authorization headaches. 
Our trained and experienced medical billing and authorization specialists deliver swift and efficient eligibility verification, maximizing claim acceptance and minimizing denials. That's how we help take your practice's financial health to the next level!
"
        imgUrl="/images/home_5/hero_img.png"
      />
      <Spacing md="150" lg="7" xl="100" />
      <Section>
        <AboutSectionStyle2
          title="Enhance Your Practice with Professionals"
          p1="Insurance verification and eligibility are critical in your revenue cycle management, optimizing your cash flow and reducing denials. The process involves gathering and verifying a patient's details and insurance coverage before providing care."
          p2="During insurance verification, expert authorization specialists confirm the patient's coverage details, insurance plans, deductibles, and restrictions. Ensuring accurate eligibility is crucial for avoiding missing information and denials, ultimately protecting your clinic's revenue."
          p3="Outsourcing insurance eligibility services to our certified experts helps you minimize errors and inefficiencies associated with manual verification. With in-depth experience and state-of-the-art technology, Xphyre Health delivers accurate eligibility and verification information."
          imgUrl="/images/departments/department_img_1.png"
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section>
        <DepartmentSectionStyle2
          sectionTitle="Enhance Your Practice"
          data={IEVSData1}
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
          sectionTitle="Optimize Cash Flow"
          data={IEVSdata2}
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section>
        <DepartmentSection
          sectionTitle="Discover Seamless Eligibility Verification with Xphyre Health: Who We Serve?"
          bgUrl="images/home_1/department_bg.svg"
          data={WhoWeServeIEVS}
        />
      </Section>
    </>
  );
}
