// members/page.jsx

'use client'; 

import React, { useState, useEffect } from 'react'; 
import MemberCard from '../../components/Membercard'; 
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function MembersPage() {
    // Set initial activeTab to 'teamHeads'
    const [activeTab, setActiveTab] = useState('teamHeads');
    const [membersData, setMembersData] = useState({
        advisoryBoardMembers: [],
        coreTeamMembers: [],
        teamHeadsMembers: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMembersData = async () => {
            try {
                const response = await fetch('/members.json'); 

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setMembersData(data);
            } catch (err) {
                console.error("Failed to fetch members data:", err);
                setError("Failed to load members data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchMembersData();
    }, []); 

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="container py-5 text-center">
                    <h1 className="text-center mb-5" style={{ color: 'var(--swe-purple)' }}>Our Team</h1>
                    <p>Loading members data...</p>
                </div>
                <Footer />
            </>
        );
    }

    if (error) {
        return (
            <>
                <Navbar />
                <div className="container py-5 text-center">
                    <h1 className="text-center mb-5" style={{ color: 'var(--swe-purple)' }}>Our Team</h1>
                    <p className="text-danger">{error}</p>
                </div>
                <Footer />
            </>
        );
    }

    return (
    <>
        <Navbar />
        <div className="container py-5">
            <h1 className="text-center mb-5" style={{ color: 'var(--swe-purple)' }}>Our Team</h1>

            {/* Bootstrap Tabs Navigation */}
            <ul className="nav nav-tabs justify-content-center mb-5" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'advisoryBoard' ? 'active' : ''}`}
                        id="advisory-board-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#advisory-board"
                        type="button"
                        role="tab"
                        aria-controls="advisory-board"
                        aria-selected={activeTab === 'advisoryBoard'}
                        onClick={() => setActiveTab('advisoryBoard')}
                        style={{
                            backgroundColor: activeTab === 'advisoryBoard' ? 'var(--swe-purple)' : 'var(--swe-purple)',
                            color: activeTab === 'advisoryBoard' ? 'white' : 'var(--swe-purple)',
                            borderColor: 'var(--swe-purple)', // Make border color purple as well
                        }}
                    >
                        Advisory Board
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'coreTeam' ? 'active' : ''}`}
                        id="core-team-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#core-team"
                        type="button"
                        role="tab"
                        aria-controls="core-team"
                        aria-selected={activeTab === 'coreTeam'}
                        onClick={() => setActiveTab('coreTeam')}
                        style={{
                            backgroundColor: activeTab === 'coreTeam' ? 'var(--swe-purple)' : 'var(--swe-purple)',
                            color: activeTab === 'coreTeam' ? 'white' : 'var(--swe-purple)',
                            borderColor: 'var(--swe-purple)', // Make border color purple as well
                        }}
                    >
                        Core Team
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'teamHeads' ? 'active' : ''}`}
                        id="team-heads-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#team-heads"
                        type="button"
                        role="tab"
                        aria-controls="team-heads"
                        aria-selected={activeTab === 'teamHeads'}
                        onClick={() => setActiveTab('teamHeads')}
                        style={{
                            backgroundColor: activeTab === 'teamHeads' ? 'var(--swe-purple)' : 'var(--swe-purple)',
                            color: activeTab === 'teamHeads' ? 'white' : 'var(--swe-purple)',
                            borderColor: 'var(--swe-purple)', // Make border color purple as well
                        }}
                    >
                        Team Heads
                    </button>
                </li>
            </ul>

            <div className="tab-content" id="myTabContent">
                {/* Advisory Board Tab Pane */}
                <div
                    className={`tab-pane fade ${activeTab === 'advisoryBoard' ? 'show active' : ''}`}
                    id="advisory-board"
                    role="tabpanel"
                    aria-labelledby="advisory-board-tab"
                >
                    <h2 className="text-center mb-4" style={{ color: 'var(--swe-purple)' }}>Advisory Board</h2>
                    {membersData.advisoryBoardMembers.length > 0 ? (
                        <div className="row justify-content-center">
                            {membersData.advisoryBoardMembers.map((member, index) => (
                                <div className="col-md-4" key={index}>
                                    {member.image && <MemberCard {...member} />}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-muted">Data coming soon!</p>
                    )}
                </div>

                {/* Core Team Tab Pane */}
                <div
                    className={`tab-pane fade ${activeTab === 'coreTeam' ? 'show active' : ''}`}
                    id="core-team"
                    role="tabpanel"
                    aria-labelledby="core-team-tab"
                >
                    <h2 className="text-center mb-4" style={{ color: 'var(--swe-purple)' }}>Core Team</h2>
                    {membersData.coreTeamMembers.length > 0 ? (
                        <div className="row justify-content-center">
                            {membersData.coreTeamMembers.map((member, index) => (
                                <div className="col-md-4" key={index}>
                                    {member.image && <MemberCard {...member} />}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-muted">Data coming soon!</p>
                    )}
                </div>

                {/* Team Heads Tab Pane */}
                <div
                    className={`tab-pane fade ${activeTab === 'teamHeads' ? 'show active' : ''}`}
                    id="team-heads"
                    role="tabpanel"
                    aria-labelledby="team-heads-tab"
                >
                    <h2 className="text-center mb-4" style={{ color: 'var(--swe-purple)' }}>Team Heads</h2>
                    {membersData.teamHeadsMembers.length > 0 ? (
                        <div className="row justify-content-center">
                            {membersData.teamHeadsMembers.map((member, index) => (
                                <div className="col-md-4" key={index}>
                                    {member.image && <MemberCard {...member} />}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-muted">Data coming soon!</p>
                    )}
                </div>
            </div>
        </div>
        <Footer />
    </>
);

}