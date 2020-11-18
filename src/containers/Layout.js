import React from 'react';
import styled from 'styled-components';

import Leftcol from './Leftcol';
import Rightcol from './Rightcol';
import Icon from '../assets/ui/icon';

import avatar from '../assets//images/avatar2.png';

const Layout = () => {
  return (
    <LayoutWrapper>
			<div className="container">
				<div className="header">
					<h1 className="header__title">
						Your Profit
					</h1>
					<div className="header__user">
						<div className="header__userAvatar">
							<img src={avatar} alt=""/>
							<div className="status-wrapper"><div className="status"></div></div>
						</div>
						<div className="header__userInfo">
							<div className="header__userName">Jordan J.</div>
							<div className="header__userRights">Administrator</div>
						</div>
						<Icon icon="arrow"/>
					</div>
				</div>

				<div className="content">
					<Leftcol />
					<Rightcol />
				</div>
			</div>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
	.container {
		color: #354052;
		.header {
			background: #fff;
			display: flex;
			justify-content: space-between;
			padding: 15px 30px;
			&__title {
				font-size: 24px;
				font-weight: normal;
				margin-top: 9px;
			}
			&__user {
				display: flex;
				align-items: center;
			}
			&__userAvatar {
				margin-right: 15px;
				height: 50px;
				width: 50px;
				position: relative;
				.status-wrapper {
          display: flex;
          background: #fff;
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
          height: 14px;
          width: 14px;
          &--online {background: #1BB934;}    
          &--idle {background: #E68A2F;}    
          &::after {
            content: '';
            display: block;
            background: #fff;
            border-radius: 50%;
            margin: auto;
            height: 8px;
            width: 8px;
            position: relative;
          }
        }
			}
			&__userInfo {
				font-family: 'Proxima Nova Semibold';
				padding-top: 5px;
				margin-right: 32px;
			}
			&__userName {
				color: #1A91EB;
				font-size: 16px;
			}
			&__userRights {
				color: #7F8FA4;
				font-size: 14px;
			}
		}

		.content {
			display: flex;
			padding: 30px 30px 0;
			@media screen and (max-width: 1595px) {
  			flex-direction: column;
			}
		}
	}
`

export default Layout;