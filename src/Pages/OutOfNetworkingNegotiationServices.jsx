import React from 'react';
import HeroStyle5 from '../components/Hero/HeroStyle5';
import Spacing from '../components/Spacing';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import DepartmentSection from '../components/Section/DepartmentSection';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import { OONNSdata1, OONNSdata2, WhoWeServeCommon } from '../Constants/constants';



export default function OutOfNetworkingNegotiationServices() {
  pageTitle('OONNS');
  return (
    <>
      <HeroStyle5
        title="Out of Networking Negotiation Services"
        detail="Negotiating outside of networking is a vital yet daunting task for hospitals, medical clinics, and emergency rooms. It takes an intimate knowledge of the industry and expert negotiation skills to discover the most cost-effective out-of-network services.
At Xphyre Health, our team of negotiation specialists utilizes proven tactics and state-of-the-art technology to maximize reimbursements for out-of-network services. Our experts negotiate directly with insurance companies to unlock competitive compensations, reduce your financial burden, and offer customers exciting saving opportunities.   
With our extensive experience and dedicated approach, we streamline your out-of-network claims and uncover additional discounts. Our expertise lets you focus on delivering top-notch patient care, knowing that your clinic's financial health is safe."
        imgUrl="/images/home_5/hero_img.png"
      />
      <Spacing md="150" lg="7" xl="100" />
      <Section >
        <AboutSectionStyle2
          title="Navigate Quality Out of Networking Solutions with Ease"
          p1="Medical out-of-network negotiation is critical to maximizing your reimbursements and savings. Out-of-network claims can result in significant revenue losses and dissatisfied customers without proper negotiation."
          p2="Our expert out-of-networking solutions involve working with insurance companies to settle claims, discover competitive pricing, and enjoy additional discounts. It ensures that patients with an out-of-network insurance plan receive the best possible reimbursement and patient care while you maximize your savings."
          p3="Our proficient specialists at Xphyre Health simplify your out-of-network tasks, allowing you to enjoy peace of mind and enhancing your practice's profitability. What's more? Our expert negotiators leverage industry knowledge to secure optimal reimbursement rates, amplifying your savings."
          imgUrl="/images/departments/department_img_1.png"
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section >
        <DepartmentSectionStyle2
          sectionTitle="Transform Your Practice's"
          data={OONNSdata1}
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
          sectionTitle="Elevate Your Clinics"
          data={OONNSdata2}
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section>
        <DepartmentSection
          sectionTitle="Boosting Your Practice's Revenue with Premium Out-of-Network Solutions: Who We Serve?"
          bgUrl="images/home_1/department_bg.svg"
          data={WhoWeServeCommon}
        />
      </Section>
    </>
  );
}
