import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../components/Section/BannerSection/BannerSectionStyle4';
import AboutSection from '../components/Section/AboutSection';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import Spacing from '../components/Spacing';


export default function OurProcesses() {
    pageTitle('OurProcesses');
    return (
        <>
            <BannerSectionStyle5
                bgUrl="/images/doctors/banner_bg.svg"
                title="Our Processes"
                subTitle=""
            />
            <Section topMd={180} topLg={130} topXl={100}>
                <AboutSection
                    imgUrl="/images/home_1/about.png"
                    spiningImgUrl="/images/home_1/about_mini.svg"
                    title="Streamline Billing"
                    subTitle="XPHYRE HEALTH"
                    featureList={[
                        {
                            featureListTitle:
                                'Xphyre Health is a team of experienced medical professionals',
                            featureListSubTitle:
                                `We understand how challenging and demanding running a top-quality healthcare practice is. Thus, our expert medical billing and coding specialists streamline operations by taking the stress of administrative, coding, and billing tasks off your shoulders. 
                                With more time to focus on patient care, Xphyre Health empowers healthcare practices to boost workplace efficiency and reinvent revenue cycles. `,
                        },
                    ]}
                />
            </Section>
            {/* <Section
                topMd={200}
                topLg={150}
                topXl={110}
                bottomMd={175}
                bottomLg={125}
                bottomXl={85}
            >
                <DepartmentSectionStyle5
                    sectionTitle="For Your Health"
                    sectionTitleUp="OUR SERVICES"
                    data={TheXypherEdgedata}
                />
            </Section> */}
            <Spacing md="200" lg="10" xl="150" />
            <Section className="cs_footer_margin_0">
                <BannerSectionStyle4
                    bgUrl="images/doctors/banner_bg_2.jpeg"
                    title="Why Us?"
                    subTitle="Cultivate deep, long-lasting relationships with insurance companies and patients with Xphyre Health's expert staff"
                />
            </Section>
            {/* <Spacing md="0" lg="0" xl="0" /> */}
        </>
    );
}
