import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../components/Section/BannerSection/BannerSectionStyle4';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import { MBCSdata1, MBCSdata2 } from '../Constants/constants';


export default function MedicalBillingAndCodingServices() {
    pageTitle('MB&CS');
    return (
        <>
            <BannerSectionStyle5
                bgUrl="/images/doctors/banner_bg.svg"
                imgUrl="/images/doctors/banner_img.png"
                title="Medical Billing and Coding Services"
                subTitle=""
            />

            <Section topMd={135} topLg={100} topXl={100}>
                <AboutSectionStyle2
                    title="Streamline Your Medical Practice"
                    p1="Medical billing and coding are vital to your healthcare revenue cycle, ensuring seamless patient registration and payment. Healthcare coding involves extracting billable info from healthcare diagnoses, procedures, and documentation."
                    p2="In contrast, medical billing entails utilizing the codes in insurance claims and bills to submit to patients and receive payment. These two complex practices form the backbone of a revenue cycle and can make or break a claim. Thus, accurate billing and coding are vital to creating error-free bills, minimizing denials, and promoting productivity."
                    p3="Xphyre Health's certified medical billing and coding specialists help take the burden of staying up-to-date with ever-changing policies with our cutting-edge solutions. Our experts offer quick and accurate services to medical facilities of all sizes, ensuring financial success! "
                    imgUrl="/images/departments/department_img_1.png"
                />
            </Section>
            <Section topMd={200} topLg={150} topXl={110}>
                <DepartmentSectionStyle2
                    sectionTitle="Unleash Efficiency"
                    data={MBCSdata1}
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
                    sectionTitle="Simplify Your Medical Billing & Coding"
                    data={MBCSdata2}
                />
            </Section>
        </>
    );
}
