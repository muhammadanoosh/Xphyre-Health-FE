import React from 'react';
import HeroStyle5 from '../components/Hero/HeroStyle5';
import FeaturesSectionStyle4 from '../components/Section/FeaturesSection/FeaturesSectionStyle4';
import FeaturesSectionStyle2 from '../components/Section/FeaturesSection/FeaturesSectionStyle2';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import Spacing from '../components/Spacing';
import { UCdata, WhyUsDataUC } from '../Constants/constants';



export default function UrgentCare() {
    pageTitle('UC');
    return (
        <>
            <HeroStyle5
                title="Urgent Care"
                subTitle="Streamlining Emergency Room Operations for Excellence"
                imgUrl="/images/home_5/hero_img.png"
                H="Driving Success in Urgent Care Billing and Coding "
                p="Discover our proven track record of success and how we've helped clients nationwide increase revenue, reduce billing errors, and improve efficiency:"
                detail="Seeking cost-effective and error-free billing and coding services for your urgent care? Xpyhre Health enters the frame, offering extensive expertise and over a decade of experience! 
                Our trained specialists boast an in-depth knowledge of medical billing and authorization processes, optimizing reimbursements and revenue. So, with certified billers and coders, we streamline your operations and empower you to deliver quality patient care."
                funfactList={[
                    { number: '98%', title: 'Accuracy Rate' },
                    { number: '30%', title: 'Reduction in AR Days' },
                    { number: '98%', title: 'Satisfied Clients' },
                    { number: '98%', title: 'Claim Approval' },
                ]}
            />
            <Spacing md="150" lg="7" xl="100" />
            <Section >
                <FeaturesSectionStyle4
                    sectionTitle="Comprehensive Services for Urgent Care"
                    data={UCdata}
                />
            </Section>
            <Spacing md="150" lg="7" xl="100" />
            <Section>
                <FeaturesSectionStyle2
                    sectionTitle="Why Choose Xphyre Health for Urgent Care Success?"
                    imgUrl="images/about/why_choose_us.jpeg"
                    para="Enhance your urgent care productivity and satisfaction rate with Xphyre Health! Our revolutionary medical billing and coding services empower your urgent care to streamline patient and cash flow, maximizing profits and minimizing out-of-pocket expenses."
                    data={WhyUsDataUC}
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
