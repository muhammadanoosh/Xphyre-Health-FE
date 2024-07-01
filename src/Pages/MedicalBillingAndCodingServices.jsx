import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../components/Section/BannerSection/BannerSectionStyle4';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
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
            />

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
