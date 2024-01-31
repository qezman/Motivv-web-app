import React from 'react';
import Helmet from '../components/Helmet';

import ApplyPage from '../components/Apply/Apply';
export default function Apply() {
    return (
        <>
            <Helmet page="apply" 
                    title="Customize your Card" 
                    description="Customize your card, Input your name and Job Headline, Upload your avatar, Include your portfolio link,  Add your preferred software, Gain approval, Create a striking profile and get vetted for your design cause, Motivv | Apply page"
            />

            <ApplyPage />
        </>
    )
}