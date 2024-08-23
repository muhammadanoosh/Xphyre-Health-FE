import React from 'react';
import HeroStyle5 from '../components/Hero/HeroStyle5';
import Spacing from '../components/Spacing';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import DepartmentSection from '../components/Section/DepartmentSection';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import { CAdata1, CAdata2, WhoWeServeCA } from '../Constants/constants';


export default function ChartAuditing() {
    pageTitle('CA');
    return (
        <>
        <HeroStyle5
        title="Chart Auditing"
        detail="Are you fed up with the intricacies and time constraints of chart auditing? You're not alone. Many healthcare professionals have the problem of keeping medical records that are accurate and in compliance. Here at Xphyre Health, we simplify and speed up the record auditing process so you can focus on providing top-notch patient care. 
Whether you run a small clinic or a major hospital, our skilled auditing services are tailored to your requirements and help you streamline operations. Find out how our excellent chart auditing services can assist you in achieving accuracy, compliance, and operating excellence.
"
        imgUrl="/images/home_5/hero_img.png"
      />
            <Spacing md="150" lg="7" xl="100" />
            <Section>
                <AboutSectionStyle2
                    title="Unleash Efficiency with Top-Notch Chart Auditing Services"
                    p1="Our chart auditing services aim to boost your company's productivity to new heights. We carefully check medical records to ensure they are comprehensive, accurate, and adhere to industry standards. This lowers the possibility of mistakes and legal problems while raising the standard of care you give your patients."
                    p2=""
                    p3=""
                    imgUrl="/images/departments/department_img_1.png"
                />
            </Section>
            <Spacing md="150" lg="7" xl="100" />
            <Section>
                <DepartmentSectionStyle2
                    sectionTitle="Streamline Your Services "
                    data={CAdata1}
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
                    sectionTitle="Simplify Your Service"
                    data={CAdata2}
                />
            </Section>
            <Spacing md="150" lg="7" xl="100" />
            <Section>
                <DepartmentSection
                    sectionTitle="Tailored Solutions for Every Practice: Who We Serve?"
                    bgUrl="images/home_1/department_bg.svg"
                    data={WhoWeServeCA}
                />
            </Section>
        </>
    );
}
