import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(135deg, #141E30, #243B55), url('video.mp4') no-repeat center center fixed;
    background-size: cover;
    text-align: center;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
`;

const Card = styled.div`
    background: rgba(255, 255, 255, 0.1);
    padding: 40px;
    border-radius: 15px;
    backdrop-filter: blur(15px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    text-align: center;
    width: 350px;
    cursor: pointer;
    transition: 0.3s;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
        transform: scale(1.08);
        background: rgba(255, 255, 255, 0.2);
    }
`;

const Title = styled.h1`
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    margin-bottom: 40px;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

const StyledButton = styled(Link)`
    display: inline-block;
    background: linear-gradient(135deg, #667eea, #5a67d8);
    color: white;
    padding: 12px 20px;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
    font-size: 18px;
    margin-top: 15px;
    transition: background 0.3s ease;

    &:hover {
        background: linear-gradient(135deg, #34d399, #10b981);
    }
`;

const CardImage = styled.img`
    width: 100%;
    border-radius: 10px;
    margin-bottom: 15px;
`;

const CardDescription = styled.p`
    font-size: 16px;
    line-height: 1.5;
    opacity: 0.9;
`;

const HighlightText = styled.span`
    color: #34d399;
    font-weight: bold;
`;

function AnalysisSelectionPage() {
    return (
        <PageContainer>
            <div>
                <Title>Choose Your AI Analysis</Title>
                <CardContainer>
                    <Card onClick={() => window.open('http://localhost:8501', '_blank')}>
                        <CardImage src="/ana1.jpg" alt="Analysis 1" />
                        <h2>Recommendation System-1</h2>
                        <CardDescription>
                           Leverage the power of <HighlightText>Product recommendation analytics</HighlightText>. Gain insights into user behavior, identify purchasing patterns.
                        </CardDescription>
                        <StyledButton to="#">Explore Analysis 1</StyledButton>
                    </Card>
                    <Card onClick={() => window.open('http://localhost:8502', '_blank')}>
                        <CardImage src="/ana2.jpg " alt="Analysis 2" />
                        <h2>Recommendation System-2</h2>
                        <CardDescription>
                          This is the Second System <HighlightText>We</HighlightText> Designed. Optimize recommendations with <HighlightText>real-time trend analysis</HighlightText> and <HighlightText>interactive visual dashboards</HighlightText>.
                        </CardDescription>
                        <StyledButton to="#">Explore Analysis 2</StyledButton>
                    </Card>
                </CardContainer>
            </div>
        </PageContainer>
    );
}

export default AnalysisSelectionPage;
