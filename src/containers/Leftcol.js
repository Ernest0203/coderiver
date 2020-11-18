import React from 'react';
import { useSelector} from 'react-redux';
import styled from 'styled-components';

import Chart from './Chart'; 
import Icon from '../assets/ui/icon';

const Leftcol = () => {
	const statisticsData = useSelector(state => state.layout.statistics);
  const tableData = useSelector(state => state.layout.table);

  const statistics = statisticsData.map((item, index) => {
		return <li key={index} className="statistics__item">
			<div className="statistics__quantity">{item.quantity}</div>
			<div className="statistics__type">{item.type}</div>
			{
				item.diff > 0
					? <div className="statistics__diff statistics__diff--increase"><Icon icon="up" />{item.diff}% increase</div>
					: <div className="statistics__diff statistics__diff--increase"><Icon icon="down" /> {item.diff}% decrease</div>
			}
		</li>
	});

	const table = tableData.map((item, index) => {
		return <li key={index} className="table__row">
			<div className="table__cell">{item.type}</div>
			<div className="table__cell">{item.views}</div>
			<div className="table__cell">{item.sales}</div>
			<div className="table__cell">{item.conversion}%</div>
			<div className="table__cell">${item.total}</div>
		</li>
	})
  
  return (
    <LeftcolWrapper>
      <Chart />
      <ul className="statistics">{statistics}</ul>
			<ul className="table">
				<div className="table__headerRow">
					<div className="table__headerCell">Refferrer</div>
					<div className="table__headerCell">Views</div>
					<div className="table__headerCell">Sales</div>
					<div className="table__headerCell">Conversion</div>
					<div className="table__headerCell">Total </div>
				</div>
				{table}
			</ul>
    </LeftcolWrapper>
  )
}

const LeftcolWrapper = styled.div`
  max-width: 770px;
  flex-basis: 100%;
  margin-right: 30px;
  @media screen and (max-width: 1595px) {
    max-width: 100%;
    margin-bottom: 20px;
    margin-right: 0;
	}
  .statistics {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    @media screen and (max-width: 1198px) {
        flex-wrap: wrap;
        margin-bottom: 0;
		}
	  &__item {
			border-radius: 3px;
			border: 1px solid #e6eaee;
			background-color: #fff;
			padding-top: 25px;
			margin-right: 22px;
			width: 176px;
      text-align: center;
      @media screen and (max-width: 1198px) {
        width: 40%;
        margin-right: 0;
        margin-bottom: 20px;
		  }
			&:last-child {
				margin-right: 0;
			}
			&:nth-of-type(1) .statistics__type {
				color: #4695D9;
			}
			&:nth-of-type(2) .statistics__type {
				color: #1BB934;
			}
			&:nth-of-type(3) .statistics__type {
				color: #DA932C;
			}
			&:nth-of-type(4) .statistics__type {
				color: #D35847;
				margin-right: 0;
			}
		}
		&__quantity {
			color: 354052;
			font-size: 30px;
		}
		&__type {
			font-family: 'Proxima Nova Semibold';
			font-size: 12px;
			text-transform: uppercase;
			margin: 15px 0 20px;
		}
		&__diff {
			display: flex;
			justify-content: center;
			border-top: 1px solid #e6eaee;
			background-color: #f5f8fa;
			color: #354052;
			font-size: 12px;
			height: 48px;
      line-height: 48px;
      text-transform: uppercase;
			.icon {
				margin-right: 10px;
				padding-top: 2px;
			}
		}
	}

	.table {
		color: #354052;
		background-color: #fff;
		border: 1px solid #e6eaee;
		border-radius: 3px;
		font-family: 'Proxima Nova Semibold';
		font-size: 14px;
    padding-top: 25px; 
		&__headerRow {
			display: flex;
			align-items: baseline;
			padding: 0 29px;
		}
		&__headerCell {
			color: #7F8FA4;
			&:first-child {
				color: #354052;
				font-family: 'Proxima Nova Regular';
				font-size: 24px;
			}
		}
		&__row {
			display: flex;
			height: 34px;
			line-height: 34px;
			padding: 0 29px;
			&:nth-of-type(2n) {
				background-color: #fafcfd;
				border-top: 1px solid #e6eaee;
				border-bottom: 1px solid #e6eaee;
			}
		}
		&__cell, &__headerCell {
			&:nth-of-type(1) {
				width: 30%;
			}
			&:nth-of-type(2) {
				width: 15.5%;
			}
			&:nth-of-type(3) {
				width: 15.3%;
			}
			&:nth-of-type(4) {
				width: 20%;
			}
		}
	}
`;

  export default Leftcol;