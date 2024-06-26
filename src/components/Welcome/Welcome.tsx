// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { memo } from 'react';

import { useNavigate } from 'react-router-dom';

import Alert from '@cloudscape-design/components/alert';
import Box from '@cloudscape-design/components/box';
import Container from '@cloudscape-design/components/container';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Header from '@cloudscape-design/components/header';
import Link from '@cloudscape-design/components/link';
import TextContent from '@cloudscape-design/components/text-content';

import { useAuthContext } from '@/store/auth';

function Welcome() {
    const navigate = useNavigate();
    const { isUserAuthenticated } = useAuthContext();

    function Content() {
        if (isUserAuthenticated) {
            return (
                <TextContent>
                    <p>Welcome to Insight Care HealthScribe.</p>
                    <p>
                        Insight Care HealthScribe is a HIPAA-eligible service empowering healthcare professionals and instituitions to automatically generate clinical notes by analyzing patient-clinician
                        conversations.
                    </p>
                    <p>Currently this allows you to:</p>
                    <ul>
                        <li>
                            <Link onFollow={() => navigate('/conversations')}>View HealthScribe results</Link>,
                            including:
                        </li>
                        <ul>
                            <li>Summarized clinical notes</li>
                            <li>Rich consultation transcripts</li>
                            <li>Transcript segmentation</li>
                            <li>Evidence mapping</li>
                            <li>Structured medical terms</li>
                        </ul>
                        <li>
                            Integrate HealthScribe output with Insight Care Comprehend Medical
                            {/* <Link external href="https://aws.amazon.com/comprehend/medical/">
                                Amazon Comprehend Medical
                            </Link> */}
                            , allowing you to:
                            <ul>
                                <li>
                                    Infer medical ontologies (RxNorm, ICD-10-CM, and SNOMED CT) from the HealthScribe
                                    trancript
                                </li>
                                <li>
                                    Detect medical terminologies and infer medical ontologies from the HealthScribe
                                    insights output
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link onFollow={() => navigate('/new')}>Submit or record your own audio file</Link> to Insight Care
                            HealthScribe.
                        </li>
                        <li>
                            <Link onFollow={() => navigate('/generate')}>Generate a multi-speaker audio file</Link>{' '}
                            using texts prompts
                            {/* <Link external href="https://aws.amazon.com/polly/">
                                Amazon Polly
                            </Link> */}
                            .
                        </li>
                    </ul>
                </TextContent>
            );
        } else {
            return <Alert>Log in for full functionality.</Alert>;
        }
    }

    function Footer() {
        return (
            <Box textAlign="center" color="text-body-secondary" fontSize="body-s">
                <p>Copyright Insight Care, Inc. All Rights Reserved.</p>
                <p>
                    This software and associated documentation files (the &quot;Software&quot;) are confidential and proprietary to Insight Care, Inc.
                    Unauthorized use, disclosure, or distribution of the Software is strictly prohibited.
                </p>
                <p>
                Permission to use, copy, modify, and distribute this Software is granted solely to authorized individuals and entities, 
                in accordance with the terms and conditions stipulated in their respective agreements with Insight Care, Inc.
                </p>
            </Box>
        );
    }

    return (
        <ContentLayout header={<Header variant="h2">Application Experience powered by Insight Care </Header>}>
            <Container footer={<Footer />}>
                <Content />
            </Container>
        </ContentLayout>
    );
}

export default memo(Welcome);
