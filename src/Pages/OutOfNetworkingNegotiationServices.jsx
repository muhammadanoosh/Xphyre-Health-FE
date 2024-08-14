import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../components/Section/BannerSection/BannerSectionStyle4';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import { OONNSdata1 } from '../Constants/constants';
import { OONNSdata2 } from '../Constants/constants';



export default function OutOfNetworkingNegotiationServices() {
  pageTitle('OONNS');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/doctors/banner_bg.svg"
        imgUrl="/images/doctors/banner_img.png"
        title="Out of Networking Negotiation Services"
        subTitle="Unlock Healthcare Excellence with Expert Credentialing and Contracting "
      />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Navigate Quality Out of Networking Solutions with Ease"
          p1="Medical out-of-network negotiation is critical to maximizing your reimbursements and savings. Out-of-network claims can result in significant revenue losses and dissatisfied customers without proper negotiation."
          p2="Our expert out-of-networking solutions involve working with insurance companies to settle claims, discover competitive pricing, and enjoy additional discounts. It ensures that patients with an out-of-network insurance plan receive the best possible reimbursement and patient care while you maximize your savings."
          p3="Our proficient specialists at Xphyre Health simplify your out-of-network tasks, allowing you to enjoy peace of mind and enhancing your practice's profitability. What's more? Our expert negotiators leverage industry knowledge to secure optimal reimbursement rates, amplifying your savings."
          imgUrl="/images/departments/department_img_1.png"
        />
      </Section>
      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Transform Your Practice's"
          data={OONNSdata1}
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
          sectionTitle="Elevate Your Clinics"
          data={OONNSdata2}
        />
      </Section>
    </>
  );
}
