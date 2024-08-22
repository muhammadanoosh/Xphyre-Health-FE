import React from 'react';
import HeroStyle5 from '../components/Hero/HeroStyle5';
import Spacing from '../components/Spacing';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import DepartmentSection from '../components/Section/DepartmentSection';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import { MIEASdata1, MIEASdata2, WhoWeServeMIEAS } from '../Constants/constants';



export default function MedicalITEquipmentAndServices() {
  pageTitle('MIEAS');
  return (
    <>
      <HeroStyle5
        title="Medical IT Equipment and Services"
        detail="In today's fast-paced digital world, staying ahead with cutting-edge technology is crucial for your medical practice's success. However, acquiring and maintaining top-notch IT services and equipment can burn a hole in your pocket.
That's where Xphyre Health comes in! Our top-notch, cost-effective IT equipment and services solutions provide healthcare facilities with the technology, usability, and reliability to thrive. With our state-of-the-art solution and quality IT equipment, we help enhance your workplace's performance and productivity.
Whether it's long-term IT services or reliable medical equipment, Xphyre Health's proficient staff works with you to tailor our solutions to match your in-house capabilities and IT needs!"
        imgUrl="/images/home_5/hero_img.png"
      />
      <Spacing md="150" lg="7" xl="100" />
      <Section>
        <AboutSectionStyle2
          title="Unlock the Power of Technology to Supercharge Your Growth"
          p1="Investing in high-quality, reliable medical IT equipment and services can significantly enhance your practice's efficiency and productivity. With robust IT solutions, healthcare practices can unlock the ideal software, technical assistance, and equipment to maximize efficiency and productivity. "
          p2="Our experts at Xphyre Health offer comprehensive IT services, including installation, maintenance, and support to meet your facility's unique needs. Moreover, our trained and certified team's extensive experience and intimate industry knowledge ensure you receive top-quality products."
          p3="Thus, our proficient IT technicians empower you to maximize efficiency while minimizing costs!"
          imgUrl="/images/departments/department_img_1.png"
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section >
        <DepartmentSectionStyle2
          sectionTitle="Get Expert Medical IT Equipment and Services "
          data={MIEASdata1}
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
          sectionTitle="Revolutionize Your Business "
          data={MIEASdata2}
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section >
        <DepartmentSection
          sectionTitle="Discover Cutting-Edge IT Solutions to Streamline Workflow: Who We Serve?"
          bgUrl="images/home_1/department_bg.svg"
          data={WhoWeServeMIEAS}
        />
      </Section>
    </>
  );
}
