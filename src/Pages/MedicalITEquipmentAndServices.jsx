import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../components/Section/BannerSection/BannerSectionStyle4';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import { MIEASdata1 } from '../Constants/constants';
import { MIEASdata2 } from '../Constants/constants';



export default function MedicalITEquipmentAndServices() {
  pageTitle('MIEAS');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/doctors/banner_bg.svg"
        imgUrl="/images/doctors/banner_img.png"
        title="Medical IT Equipment and Services"
        subTitle="Unlock Healthcare Excellence with Expert Credentialing and Contracting "
      />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Unlock the Power of Technology to Supercharge Your Growth"
          p1="Investing in high-quality, reliable medical IT equipment and services can significantly enhance your practice's efficiency and productivity. With robust IT solutions, healthcare practices can unlock the ideal software, technical assistance, and equipment to maximize efficiency and productivity. "
          p2="Our experts at Xphyre Health offer comprehensive IT services, including installation, maintenance, and support to meet your facility's unique needs. Moreover, our trained and certified team's extensive experience and intimate industry knowledge ensure you receive top-quality products."
          p3="Thus, our proficient IT technicians empower you to maximize efficiency while minimizing costs!"
          imgUrl="/images/departments/department_img_1.png"
        />
      </Section>
      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Get Expert Medical IT Equipment and Services "
          data={MIEASdata1}
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
          sectionTitle="Revolutionize Your Business "
          data={MIEASdata2}
        />
      </Section>
    </>
  );
}
