import React, { useState } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
    display: flex;
    min-height: 100vh;
    width: 100vw;
    background: linear-gradient(135deg, #667eea, #764ba2);
    padding: 20px;
    box-sizing: border-box;
    margin-top: 40px; /* Adjusted to move the entire content down */
    position: relative; /* Make sure the ProfileSection is positioned relative to this container */
`;

const Sidebar = styled.div`
    width: 25%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin-right: 20px;
    box-sizing: border-box;
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
    margin-bottom: 40px; /* Increased to create more space between sections */
`;

const Title = styled.h2`
    color: #333;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 15px;
    font-size: 22px;
    text-align: left;
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
    top: 30px;
    left: 30px;
    background: #000; /* Black background */
    color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 10;
    width: auto; /* Adjust width to fit content */
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

const DropdownContainer = styled.div`
    margin-top: 20px;
`;

const DropdownTitle = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #333;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
    &:hover {
        color: #667eea; /* Highlight text when hovered */
    }
`;

const DropdownArrow = styled.span`
    margin-right: 10px;
    transform: ${props => (props.isOpen ? "rotate(90deg)" : "rotate(0deg)")};
    transition: transform 0.3s ease;
`;

const DropdownContent = styled.div`
    display: ${props => (props.isOpen ? "block" : "none")};
    padding-left: 20px;
    font-size: 16px;
    background-color: #000; /* Change the background color to black */
    color: #fff; /* Change the text color to white */
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
`;

function UploadPage() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <PageContainer>
            <Sidebar>
                <Section>
                    <Title>Previous Reports</Title>
                    {/* Add previous reports elements here */}
                </Section>
                <Section>
                    <DropdownContainer>
                        <DropdownTitle onClick={toggleDropdown}>
                            <DropdownArrow isOpen={isDropdownOpen}>▶</DropdownArrow>
                            Previous Submissions
                        </DropdownTitle>
                        <DropdownContent isOpen={isDropdownOpen}>
                            <p>Chrome.apk</p>
                            <p>Uber.apk</p>
                            <p>ClashOfClans.apk</p>
                        </DropdownContent>
                    </DropdownContainer>
                </Section>
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
