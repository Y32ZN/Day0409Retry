import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  border-bottom: 1px solid #eee;
`;

const NavItem = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: ${props => props.active ? '#000' : '#666'};
  
  &:hover {
    color: #000;
  }
`;

const PlayerControls = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0 2rem;
`;

const AlbumContent = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
`;

const AlbumCard = styled.div`
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
`;

const MusicPlayer = () => {
  const [activeTab, setActiveTab] = useState('국내음반');

  return (
    <Container>
      <Navigation>
        <NavItem 
          active={activeTab === '국내음반'} 
          onClick={() => setActiveTab('국내음반')}
        >
          국내음반
        </NavItem>
        <NavItem 
          active={activeTab === '해외음반'} 
          onClick={() => setActiveTab('해외음반')}
        >
          해외음반
        </NavItem>
        <NavItem 
          active={activeTab === 'Jazz'} 
          onClick={() => setActiveTab('Jazz')}
        >
          Jazz
        </NavItem>
        <NavItem 
          active={activeTab === 'DVD/Blu-Ray'} 
          onClick={() => setActiveTab('DVD/Blu-Ray')}
        >
          DVD/Blu-Ray
        </NavItem>
        <NavItem 
          active={activeTab === 'MD'} 
          onClick={() => setActiveTab('MD')}
        >
          MD
        </NavItem>
      </Navigation>

      <AlbumContent>
        <AlbumCard>
          <img src="/cabin.jpg" alt="Album cover" />
        </AlbumCard>
        {/* More album cards can be added here */}
      </AlbumContent>

      <PlayerControls>
        <button>이전</button>
        <button>재생</button>
        <button>다음</button>
        <input type="range" min="0" max="100" />
      </PlayerControls>
    </Container>
  );
};

export default MusicPlayer; 