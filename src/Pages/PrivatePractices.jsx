import React from 'react';
import HeroStyle5 from '../components/Hero/HeroStyle5';
import FeaturesSectionStyle4 from '../components/Section/FeaturesSection/FeaturesSectionStyle4';
import FeaturesSectionStyle2 from '../components/Section/FeaturesSection/FeaturesSectionStyle2';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import Spacing from '../components/Spacing';
import { PPdata, WhyUsDataPP } from '../Constants/constants';



export default function PrivatePractices() {
    pageTitle('PP');
    return (
        <>
            <HeroStyle5
                title="Private Practices"
                subTitle="Streamlining Emergency Room Operations for Excellence"
                imgUrl="/images/home_5/hero_img.png"
                H="Transforming Private Practice Billing and Management"
                p="Trust Xphyre Health to elevate your private practice's efficiency and cash flow! "
                detail="Private practices often struggle to juggle core business tasks with revenue management, increasing the risk of errors and lost revenue. At Xphyre Health, our expert medical billers and coders optimize your operational efficiency, patient flow, and financial health.
                With our trained technicians to handle administrative operations, your staff can focus on providing top-quality patient care, increasing satisfaction and revenue!"
                funfactList={[
                    { number: '20%', title: 'Accuracy Rate' },
                    { number: '95%', title: 'Reduction in AR Days' },
                    { number: '50%', title: 'Satisfied Clients' },
                    { number: '10%', title: 'Claim Approval' },
                ]}
            />
            <Spacing md="150" lg="7" xl="100" />
            <Section>
                <FeaturesSectionStyle4
                    sectionTitle="Comprehensive Services for Private Practices "
                    data={PPdata}
                />
            </Section>
            <Spacing md="150" lg="7" xl="100" />
            <Section >
                <FeaturesSectionStyle2
                    sectionTitle="Why Choose Xphyre Health for Your Private Practice?"
                    imgUrl="images/about/why_choose_us.jpeg"
                    para="Benefit from our deep understanding of private practice revenue management and healthcare industry trends to unlock operational excellence. Here's how our experts stand out"
                    data={WhyUsDataPP}
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
        </>
    );
}
