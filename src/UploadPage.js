import React, { useState } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
    display: flex;
    min-height: 100vh;
    width: 100vw;
    background: linear-gradient(135deg, #667eea, #764ba2);
    padding: 20px;
    box-sizing: border-box;
    margin-top: 40px; /* Increase this value to push the content further down */
    position: relative;
`;

const Sidebar = styled.div`
    width: 25%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin-right: 20px;
    box-sizing: border-box;
    position: relative;
`;

const Content = styled.div`
    flex: 1;
    background: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    box-sizing: border-box;
`;

const Section = styled.div`
    margin-bottom: 20px;
`;

const Title = styled.h2`
    color: ${props => (props.isActive ? "#667eea" : "#333")}; /* Highlight color when active */
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 15px;
    font-size: 22px;
    display: flex;
    align-items: center;
    cursor: pointer; /* Make title clickable */
    position: relative; /* Position relative for arrow positioning */
    padding-left: 30px; /* Space for the arrow */
    
    &:before {
        content: '▲'; /* Arrow pointing up */
        font-size: 14px;
        color: ${props => (props.isActive ? "#667eea" : "#333")}; /* Match arrow color with text */
        position: absolute;
        left: 10px; /* Space from the text */
        transition: transform 0.3s ease;
        transform: ${props => (props.isActive ? 'rotate(180deg)' : 'rotate(0deg)')}; /* Rotate arrow when active */
    }
`;

const Button = styled.button`
    background: #667eea;
    border: none;
    border-radius: 50px;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
    transition: background 0.3s ease;

    &:hover {
        background: #5a67d8;
    }
`;

const Input = styled.input`
    width: 100%;
    padding: 10px 15px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
`;

const ProfileSection = styled.div`
    position: absolute;
    top: 20px; /* Adjust as needed */
    left: 20px; /* Adjust as needed */
    background: #000;
    color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000; /* Ensure it's on top */
`;

const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin-right: 10px;
`;

const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.div`
    font-weight: bold;
`;

const Email = styled.div`
    font-size: 14px;
`;

const Dropdown = styled.div`
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    margin-top: 10px;
    padding: 10px;
    max-height: 200px;
    overflow-y: auto;
    position: absolute;
    top: 120px; /* Adjust as needed */
    left: 0;
    width: 100%;
    z-index: 100;
`;

const DropdownItem = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background: #f0f0f0;
    }
`;

const PreviousSubmissionsSection = styled(Section)`
    margin-top: 40px; /* Adjust this value to move the section further down */
`;

function UploadPage() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [submissions] = useState([
        { title: "Submission 1", details: "Details about submission 1" },
        { title: "Submission 2", details: "Details about submission 2" },
        { title: "Submission 3", details: "Details about submission 3" }
    ]);

    return (
        <PageContainer>
            <Sidebar>
                <Section>
                    <Title>Previous Reports</Title>
                    {/* Add previous reports elements here */}
                </Section>
                <PreviousSubmissionsSection>
                    <Title 
                        onClick={() => setDropdownOpen(!dropdownOpen)} 
                        isActive={dropdownOpen}
                    >
                        Previous Submissions
                    </Title>
                    {dropdownOpen && (
                        <Dropdown>
                            {submissions.map((submission, index) => (
                                <DropdownItem key={index}>
                                    <strong>{submission.title}</strong>
                                    <p>{submission.details}</p>
                                </DropdownItem>
                            ))}
                        </Dropdown>
                    )}
                </PreviousSubmissionsSection>
                <Section>
                    <Title>Submit GitHub Repository</Title>
                    <Input type="text" placeholder="Enter GitHub URL" />
                    <Button>Submit</Button>
                </Section>
            </Sidebar>
            <Content>
                <Section>
                    <Title>Report Resolve</Title>
                    {/* Add report resolution details here */}
                </Section>
                <Section>
                    <Title>Current Projects</Title>
                    {/* Add current projects details here */}
                </Section>
                <Section>
                    <Title>Upload APK File</Title>
                    <Input type="file" />
                    <Button>Upload & Analyze</Button>
                </Section>
                <Section>
                    <Title>Vulnerabilities Analysis</Title>
                    <ul>
                        <li>Static Analysis</li>
                        <li>Configuration Analysis</li>
                        <li>External Dependencies</li>
                    </ul>
                </Section>
            </Content>
            <ProfileSection>
                <ProfileImage 
                    src="https://via.placeholder.com/50" /* Replace with your profile image URL */
                    alt="Profile"
                />
                <ProfileDetails>
                    <Name>Prajwal Weladi</Name> {/* Replace with dynamic name */}
                    <Email>prajwal.weladi22@vit.edu</Email> {/* Replace with dynamic email */}
                </ProfileDetails>
            </ProfileSection>
        </PageContainer>
    );
}

export default UploadPage;
