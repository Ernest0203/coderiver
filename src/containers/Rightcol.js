import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import styled from 'styled-components';

import Icon from '../assets/ui/icon';
import Label from '../assets/ui/label';

const Rightcol = () => {
  const profile = useSelector(state => state.layout.profile);
  const events = useSelector(state => state.layout.events);
  const [currentLimit, changeLimit] = useState(0);

  return (
    <RightcolWrapper>
      <div className="profile">
        <div className="editButton">
          <Icon icon="pen"/>
        </div>
        <div className="profile__avatar"><img src={profile.avatar} alt=""/>
          <p className="profile__name">{profile.name}</p>
          <p className="profile__profession">{profile.profession} | {profile.rights}</p>
        </div>
        <div className="profile__info">
          <div className="profile__item">
            <p className="tag">Email</p>
            {profile.email}
          </div>
          <div className="profile__item">
            <p className="tag">Mobile</p>
            {profile.mobile}
          </div>
          <div className="profile__item">
            <p className="tag">Skill</p>
            {profile.level}
          </div>
          <div className="profile__item">
            <p className="tag">Paid Out Limit</p>
            <label className="paidLimit"><input type="range" min="0" max="450" onChange={(e) => changeLimit(e.target.value)}/><span>${currentLimit}</span>/<span>${profile.limit}</span></label>
          </div>
          <div className="profile__item profile__item--bio">
            <p className="tag">Bio</p>
            {profile.bio}
          </div>
          <div className="profile__item">
            <p className="tag">Skills</p>
            <ul className="labelsWrapper">
              {profile.skills.map((item, index) => {
                return <li key={index}><Label text={item.name} background={item.background}/></li>
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="events">
        <h5>Upcoming Events with Jordan</h5>
        { events.map((item, index) => {
          return <div key={index} className='events__item'>
            <div className="events__itemName">
              <p>{item.name}</p>
              <Label text={item.label} background={item.background}/>
            </div>
            <div className="events__itemDate">{item.date}</div>
          </div>
        }) }
      </div>
    </RightcolWrapper>
  )
};

const RightcolWrapper = styled.div`
  flex-shrink: 2;
  @media screen and (max-width: 1595px) {
    display: flex;
    flex-direction: column;
	}
  .profile {
    color: #354052;
    background-color: #fff;
    padding: 50px 30px 30px;
    position: relative;
    margin-bottom: 20px;
    .editButton {
      background-color: #f2f2f2;
      border-radius: 50%;
      border: 1px solid #E7EAEE;
      display: flex;
      height: 40px;
      width: 40px;
      position: absolute;
      top: -10px;
      right: -10px;
      .icon {
        margin: auto;
      }
    }
    &__avatar {
      border-bottom: 1px solid #e6eaee;
      text-align: center; 
      font-family: 'Proxima Nova Semibold';
      padding-bottom: 25px;
      margin-bottom: 22px;
    }
    &__name {
      font-size: 24px;
    }
    &__profession {
      color: #7F8FA4;
      font-size: 14px;
      text-transform: capitalize;
    }
    &__item {
      font-family: 'Proxima Nova Semibold';
      font-size: 16px;
      margin-bottom: 10px;
      &--bio {
        font-family: 'Proxima Nova Regular';
        font-size: 14px;
      }
      .labelsWrapper {
        display: flex;
        li {
          margin-right: 10px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .tag {
        font-family: 'Proxima Nova Semibold';
        color: #7F8FA4;
        font-size: 12px;
        margin-bottom: 6px;
      }
      .paidLimit {
        input {
          outline: none;
          background: #DFE4EE;
          margin-right: 10px;
          vertical-align: middle;
          width: 156px;
          height: 4px;
          &:focus {
            outline: none;
          }
        }
        span {
          font-size: 14px;
          &:nth-of-type(1) {
            color: #1A91EB;
          }
        }
      }
    }
  }

  .events {
    padding: 30px;
    background-color: #fff;
    &__item {
      margin-bottom: 15px;
      &:nth-of-type(2) {
        margin-bottom: 0;
      }
    }
    h5 {
      font-size: 12px;
      margin-bottom: 15px;
    }
    &__itemDate {
      font-size: 14px;
    }
    h5, &__itemDate {
      color: #7F8FA4;
    }
    &__itemName {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      p {
        font-family: 'Proxima Nova Semibold';
        font-size: 16px;

      }
    }
  }
`;

export default Rightcol;