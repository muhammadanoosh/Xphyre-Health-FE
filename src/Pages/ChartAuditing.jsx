import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../components/Section/BannerSection/BannerSectionStyle4';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import { CAdata1, CAdata2 } from '../Constants/constants';


export default function ChartAuditing() {
    pageTitle('CA');
    return (
        <>
            <BannerSectionStyle5
                bgUrl="/images/doctors/banner_bg.svg"
                imgUrl="/images/doctors/banner_img.png"
                title="Chart Auditing"
                subTitle=""
            />

            <Section topMd={135} topLg={100} topXl={100}>
                <AboutSectionStyle2
                    title="Unleash Efficiency with Top-Notch Chart Auditing Services"
                    p1="Our chart auditing services aim to boost your company's productivity to new heights. We carefully check medical records to ensure they are comprehensive, accurate, and adhere to industry standards. This lowers the possibility of mistakes and legal problems while raising the standard of care you give your patients."
                    p2=""
                    p3=""
                    imgUrl="/images/departments/department_img_1.png"
                />
            </Section>
            <Section topMd={200} topLg={150} topXl={110}>
                <DepartmentSectionStyle2
                    sectionTitle="Streamline Your Services "
                    data={CAdata1}
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
                    sectionTitle="Simplify Your Service with Our Expert Team"
                    data={CAdata2}
                />
            </Section>
        </>
    );
}
