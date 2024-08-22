import React from 'react';
import HeroStyle5 from '../components/Hero/HeroStyle5';
import Spacing from '../components/Spacing';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
import DepartmentSection from '../components/Section/DepartmentSection';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import { MBCSdata1, MBCSdata2, WhoWeServeCommon } from '../Constants/constants';


export default function MedicalBillingAndCodingServices() {
    pageTitle('MB&CS');
    return (
        <>
            <HeroStyle5
                title="Medical Billing and Coding Services"
                detail="An efficient and productive healthcare practice starts with top-notch medical billing and coding services. A tiny mistake can result in week-long delays and unsatisfied clients, affecting your practice's reputation and patient's trust. 
As the keystone of a healthcare provider's financial health, your organization requires a seamless billing and coding system. Our expert clinical billers and coders enter the picture, offering accurate and timely payments and freeing up your facility's resources. 
Thus, with Xphyre Health's trained professionals, healthcare providers can minimize claim denials and billing errors, boosting patient flow and revenue! 
"
                imgUrl="/images/home_5/hero_img.png"
            />
            <Spacing md="150" lg="7" xl="100" />
            <Section >
                <AboutSectionStyle2
                    title="Streamline Your Medical Practice"
                    p1="Medical billing and coding are vital to your healthcare revenue cycle, ensuring seamless patient registration and payment. Healthcare coding involves extracting billable info from healthcare diagnoses, procedures, and documentation."
                    p2="In contrast, medical billing entails utilizing the codes in insurance claims and bills to submit to patients and receive payment. These two complex practices form the backbone of a revenue cycle and can make or break a claim. Thus, accurate billing and coding are vital to creating error-free bills, minimizing denials, and promoting productivity."
                    p3="Xphyre Health's certified medical billing and coding specialists help take the burden of staying up-to-date with ever-changing policies with our cutting-edge solutions. Our experts offer quick and accurate services to medical facilities of all sizes, ensuring financial success! "
                    imgUrl="/images/departments/department_img_1.png"
                />
            </Section>
            <Spacing md="150" lg="7" xl="100" />
            <Section >
                <DepartmentSectionStyle2
                    sectionTitle="Unleash Efficiency"
                    data={MBCSdata1}
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
                    sectionTitle="Simplify Your Medical Billing & Coding"
                    data={MBCSdata2}
                />
            </Section>
            <Spacing md="150" lg="7" xl="100" />
            <Section>
                <DepartmentSection
                    sectionTitle="Tailored Solutions for Every Practice: Who We Serve?"
                    bgUrl="images/home_1/department_bg.svg"
                    data={WhoWeServeCommon}
                />
            </Section>
        </>
    );
}
