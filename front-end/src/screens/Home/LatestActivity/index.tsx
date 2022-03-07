// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Tab } from 'semantic-ui-react';

import LatestAllPostsTable from '../LatestAllPostsTable';
import LatestBountiesTable from '../LatestBountiesTable';
import LatestMotionsTable from '../LatestMotionsTable';
import LatestProposalsTable from '../LatestProposalsTable';
import LatestReferendaTable from '../LatestReferendaTable';
import LatestTipsTable from '../LatestTipsTable';
import LatestTreasuryTable from '../LatestTreasuryTable';

interface Props {
  className?: string
}

const LatestActivity = ({ className }: Props) => {
	const panes = [
		{
			menuItem: 'All',
			render: () => <LatestAllPostsTable className='tab-panel' />
		},
		{
			menuItem: 'Referenda',
			render: () => <LatestReferendaTable className='tab-panel' />
		},
		{
			menuItem: 'Proposals',
			render: () => <LatestProposalsTable className='tab-panel' />
		},
		{
			menuItem: 'Motions',
			render: () => <LatestMotionsTable className='tab-panel' />
		},
		{
			menuItem: 'Treasury Proposals',
			render: () => <LatestTreasuryTable className='tab-panel' />
		},
		{
			menuItem: 'Bounties',
			render: () => <LatestBountiesTable className='tab-panel' />
		},
		{
			menuItem: 'Tips',
			render: () => <LatestTipsTable className='tab-panel' />
		}
	];

	return (
		<div className={className}>
			<h1>Latest activity</h1>
			<Tab className='tab-header' menu={{ className:'tab-menu', pointing: true, secondary: true }} panes={panes} />
		</div>
	);
};

export default styled(LatestActivity)`
	&&& {
			.tab-header {
				background: white;
				border-top-left-radius: 0.5em;
				border-top-right-radius: 0.5em;
				padding-top: 0.5em;
				margin-left: 0.5em;
			}
		
			.tab-menu {
				overflow-x: auto;
				overflow-y: hidden;
		
				a.active {
					border-bottom: 5px solid #E5007A !important;
				}
			}
		
			.item:first-child{
				margin-left: 1em !important;
			}
		
			.item {
				font-size: 1.5em;
			}
		
			.tab-panel{
				background: white;
				border: none !important;
				width: 100% !important;
				margin-left: 0 !important;
				font-size: 1.5rem;
				overflow-x: auto;
				overflow-y: auto;
				max-height: 500px;
			}
		
			.table-header{
				background: #F2F2F2;
		
				th {
					font-weight: 500 !important;
					padding-top: 1.5em;
					padding-bottom: 1.5em;

					:not(:first-child){
						span {
							border-left: 1px solid #ddd;
							padding 0.3em 0 0.3em 1em;
							margin-left: -1em;
						}
					}
				}
			}
	}
`;
