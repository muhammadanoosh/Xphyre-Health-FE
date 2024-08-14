import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../components/Section/BannerSection/BannerSectionStyle4';
import FeaturesSectionStyle4 from '../components/Section/FeaturesSection/FeaturesSectionStyle4';
import FeaturesSectionStyle2 from '../components/Section/FeaturesSection/FeaturesSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import Spacing from '../components/Spacing';
import { UCdata,WhyUsDataUC} from '../Constants/constants';



export default function UrgentCare() {
    pageTitle('UC');
    return (
        <>
            <BannerSectionStyle5
                bgUrl="/images/doctors/banner_bg.svg"
                imgUrl="/images/doctors/banner_img.png"
                title="Urgent Care"
                subTitle=""
            />
            <Section topMd={200} topLg={150} topXl={110}>
                <FeaturesSectionStyle4
                    sectionTitle="Comprehensive Services for Urgent Care"
                    data={UCdata}
                />
            </Section>

            <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
                <FeaturesSectionStyle2
                    sectionTitle="Why Choose Xphyre Health for Urgent Care Success?"
                    imgUrl="images/about/why_choose_us.jpeg"
                    data={WhyUsDataUC}
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
