import React from 'react';
import { useSelector} from 'react-redux';
import styled from 'styled-components';

import Icon from '../assets/ui/icon';

const menuLinks = ['profit', 'explore', 'profile', 'photos', 'videos', 'invite', 'music', 'candidates', 'calendar', 'feedback', 'help'];

const Sidebar = ({ sidebarIsOpen, sidebarToggle }) => {
  const users = useSelector(state => state.general.users);
  const friends = useSelector(state => state.general.friends);

  const onSidebarToggle = (e) => {
    e.preventDefault();
    sidebarToggle(!sidebarIsOpen);
  }

  const linksList = users.map((item, index) => {
    return <li 
      key={index} 
      className={item.name === 'Jordan Jackson' ? 'primaryNav__item primaryNav__item--active' : 'primaryNav__item'}>
        <a href=''></a><img src={item.avatar} alt=""/>
      </li>
  });
  
  const menuLinksList = menuLinks.map((item, index) => {
    return <li key={index} className={item === 'profit' ? 'secondaryNav__menuItem secondaryNav__menuItem--active' : 'secondaryNav__menuItem'}>
      <a href="">{item}</a>
    </li>
  });
  
  const friendsList = friends.map((item, index) => {
    return <li key={index} className="secondaryNav__friendsListItem">
      <div className="avatar">
        <img src={item.avatar} alt=""/>
        <div className="status-wrapper"><div className={item.status === 'online' ? 'status status--online' : 'status status--idle'}></div></div>
      </div>
      <div className="info">
        <p className="info__name">{item.name}</p>
        <p className="info__profession">{item.profession}</p>
      </div>
      { item.messages ? <div className="messages">{item.messages}</div> : ''}
    </li>
  });

  return (
    <SidebarWrapper>
			<div className="container">
				<ul className="primaryNav">
          <div>{linksList}</div>
          <div className="primaryNav__icons">
            <a href=""><Icon icon="grid" /></a>
            <a href="" onClick={(e) => onSidebarToggle(e)}><Icon icon="settings"/></a>
          </div>
        </ul>
        <div className="secondaryNav">
          <ul className="secondaryNav__menu">
            <h4 className="secondaryNav__menuTitle">Menu</h4>
            {menuLinksList}
            <div className="secondaryNav__searchBox">
              <input type="search" placeholder="Search"/>
              <Icon icon="search"/>
            </div>
          </ul>
          <ul className="secondaryNav__friendsList">
            <h4 className="secondaryNav__friendsListTitle">Friends</h4>
            {friendsList}
          </ul>
        </div>
			</div>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
  .container {
    display: flex;
    position: fixed;
    height: 100vh;
  }
  .primaryNav {
    background: #1D2531;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100px;
    padding: 30px 25px 20px 25px;
    &__item {
      border-radius: 50%;
      margin-bottom: 30px;
      width: 50px;
      height: 50px;
      position: relative;
      a {
        border-radius: 50%;
        background-color: rgba(0,0,0, .3);
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
      }
    }
    &__item--active {
        a {background-color: transparent;}
    }
    &__icons {
      display: flex;
      .icon {
        margin-right: 16px;
        &:nth-of-type(2) {
          margin-right: 0;
        }
      }
    }
  }
  .secondaryNav {
    background: #222C3C;
    font-family: 'Proxima Nova Semibold';
    width: 250px;
    padding: 25px 0;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-track {
      background: #222C3C;
    }
    &::-webkit-scrollbar-thumb {
      background: #1D2531;
    }
    &__menuTitle{
      color: #5B6779;
      font-size: 12px;
      margin-bottom: 15px;
      padding: 0 30px;
      text-transform: uppercase;
    }
    &__menu {
      margin-bottom: 100px;
    }
    &__menuItem {
      cursor: pointer;
      height: 36px;
      line-height: 36px;
      padding: 0 30px;
      &:hover {
        background-color: #313D4F;
      }
      a {
        font-size: 14px;
        color: #fff;
        text-transform: capitalize;
      }
    }
    &__menuItem--active {
        background-color: #313D4F;
      }
    &__searchBox {
      margin-top: 10px;
      padding: 0 30px;
      position: relative;
      input {
        color: #475364;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #313D4F;
        font-family: 'Proxima Nova Semibold';
        font-size: 14px;
        outline: none;
        height: 37px;
        width: 100%;
        &::placeholder {
          color: #475364;
        }
      }
      .icon {
        position: absolute;
        top: 10px;
        right: 30px;
      }
    }

    &__friendsList {
      padding: 0 30px;
    }
    &__friendsListTitle {
      color: #5B6779;
      font-size: 12px;
      margin-bottom: 25px;
      text-transform: uppercase;
    }
    &__friendsListItem {
      display: flex;
      margin-bottom: 20px;
      position: relative;
      &:last-child {
        margin-bottom: 0;
      }
      .avatar {
        margin-right: 12px;
        height: 40px;
        width: 40px;
        position: relative;
        .status-wrapper {
          display: flex;
          background: #222C3C;
          border-radius: 50%;
          height: 18px;
          width: 18px;
          position: absolute;
          bottom: 0;
          right: 0;
        }
        .status {
          display: flex;
          border-radius: 50%;
          background: #1BB934;
          margin: auto;
          height: 12px;
          width: 12px;
          &--online {background: #1BB934;}    
          &--idle {background: #E68A2F;}    
          &::after {
            content: '';
            display: block;
            background: #222C3C;
            border-radius: 50%;
            margin: auto;
            height: 6px;
            width: 6px;
            position: relative;
          }
        }
      }
      .info {
        font-size: 14px;
        &__name {
          color: #fff;
          padding-top: 4px;
        }
        &__profession {
          color: #7F8FA4;
        }
      }
    }

    .messages {
      border-radius: 50%;
      background-color:#1A91EB;
      color: #fff;
      font-family: 'Proxima Nova Semibold';
      font-size: 14px;
      padding: 0 7px;
      height: 24px;
      line-height: 24px;
      position: absolute;
      top: 0;
      right: 0;
    }
  }

`

export default Sidebar;