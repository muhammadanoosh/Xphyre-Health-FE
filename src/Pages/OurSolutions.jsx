import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../components/Section/BannerSection/BannerSectionStyle4';
import DepartmentSectionStyle5 from '../components/Section/DepartmentSection/DepartmentSectionStyle5';
import AboutSection from '../components/Section/AboutSection';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import Spacing from '../components/Spacing';
import { TheXypherEdgedata } from '../Constants/constants';



export default function OurSolutions() {
    pageTitle('OurSolutions');
    return (
        <>
            <BannerSectionStyle5
                bgUrl="/images/doctors/banner_bg.svg"
                imgUrl="/images/doctors/banner_img.png"
                title="Our Solutions"
            />
            <Section topMd={180} topLg={130} topXl={100}>
                <AboutSection
                    imgUrl="/images/home_1/about.png"
                    spiningImgUrl="/images/home_1/about_mini.svg"
                    title="Maximize Your Practice’s"
                    subTitle="XPHYRE HEALTH"
                    featureList={[
                        {
                            featureListTitle:
                                'Xphyre Health is a team of experienced medical professionals',
                            featureListSubTitle:
                                `Healthcare practices across Houston turn to Xphyre Health to combat billing and coding challenges. Our highly trained and dedicated staff handles the intricate details of the revenue cycle, empowering you to focus on patient care without stressing financial management.
                                With our top-notch services that streamline medical providers’ operations and enhance cash flow, all-sized healthcare organizations can amplify their revenue. Want to know how our expert medical billing and coding experts transform your clinic?`,
                        },
                    ]}
                />
            </Section>
            <Section
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
            </Section>
            <Spacing md="200" lg="10" xl="150" />
            <Section className="cs_footer_margin_0">
                <BannerSectionStyle4
                    bgUrl="images/doctors/banner_bg_2.jpeg"
                    title="Why Us?"
                    subTitle="Cultivate deep, long-lasting relationships with insurance companies and patients with Xphyre Health's expert staff"
                />
            </Section>
            <Spacing md="200" lg="10" xl="150" />
        </>
    );
}
