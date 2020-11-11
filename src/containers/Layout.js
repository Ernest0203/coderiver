import React from 'react';
import styled from 'styled-components';

const Layout = () => {
  return (
    <LayoutWrapper>
			<div className="mainContent">

			</div>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
	nav {
		padding: 20px;
		border-bottom: 2px solid #ddd;
		a {
    	border: 2px solid #46b156;
    	border-radius: 5px;
    	color: #46b156;
			display: inline-block;
    	font-size: 14px;
    	font-weight: bold;
			margin-right: 20px;
    	padding: 6px 10px;
    	text-transform: uppercase;	
  	}
		.linkActive {
    	background-color: #46b156;
    	color: #fff;
    }
	}
	.mainContent {
		padding: 20px 20px 20px 20px;
	}
`

export default Layout;