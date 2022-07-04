// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Dropdown, DropdownItemProps, DropdownProps } from 'semantic-ui-react';
import automataLogo from 'src/assets/automata-logo.jpg';
import basiliskLogo from 'src/assets/basilisk-logo.jpg';
import bifrostLogo from 'src/assets/bifrost-logo.png';
import kiltLogo from 'src/assets/kilt-logo.png';
import kusamaLogo from 'src/assets/kusama-logo.gif';
import moonbeamLogo from 'src/assets/moonbeam-logo.png';
import moonriverLogo from 'src/assets/moonriver-logo.png';
import polkadotLogo from 'src/assets/polkadot-logo.jpg';
import { network } from 'src/global/networkConstants';
import getNetwork from 'src/util/getNetwork';

const NETWORK = getNetwork();
const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    text-transform: capitalize;

    img {
			width: 2rem;
			@media only screen and (min-width: 992px) {
      	width: 4rem;
			}
        border-radius: 50%;
        margin-right: 0.5rem;
    }
`;

const getNetworkImage = (showNetwork: string) => {
	switch (showNetwork) {
	case network.KUSAMA:
		return kusamaLogo;
	case network.MOONBEAM:
		return moonbeamLogo;
	case network.MOONRIVER:
		return moonriverLogo;
	case network.KILT:
		return kiltLogo;
	case network.BIFROST:
		return bifrostLogo;
	case network.BASILISK:
		return basiliskLogo;
	case network.AUTOMATA:
		return automataLogo;
	default:
		return polkadotLogo;
	}
};

const StyledNetworkItem = ({ showNetwork }: {showNetwork: string}) => {
	return <StyledDiv>
		<img
			src={getNetworkImage(showNetwork)}
			alt={showNetwork}/>
		{showNetwork}
	</StyledDiv>;
};

const NetworkOptions: DropdownItemProps[] = [
	{
		children: <StyledNetworkItem showNetwork={network.POLKADOT}/>,
		value: network.POLKADOT
	},
	{
		children: <StyledNetworkItem showNetwork={network.KUSAMA}/>,
		value: network.KUSAMA
	},
	{
		children: <StyledNetworkItem showNetwork={network.MOONRIVER}/>,
		value: network.MOONRIVER
	},
	{
		children: <StyledNetworkItem showNetwork={network.MOONBEAM}/>,
		value: network.MOONBEAM
	},
	{
		children: <StyledNetworkItem showNetwork={network.KILT}/>,
		value: network.KILT
	},
	{
		children: <StyledNetworkItem showNetwork={network.BIFROST}/>,
		value: network.BIFROST
	},
	{
		children: <StyledNetworkItem showNetwork={network.AUTOMATA}/>,
		value: network.AUTOMATA
	},
	{
		children: <StyledNetworkItem showNetwork={network.BASILISK}/>,
		value: network.BASILISK
	}
];

interface Props {
    className?: string
		removePointer?: boolean
}

const NetworkDropdown = ({ className, removePointer }: Props) =>  {

	const navigate = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
		if (data.value === NETWORK){
			return null;
		}
		let domain = 'network';
		if (data.value === network.POLKADOT || data.value === network.KUSAMA){
			domain = 'io';
		}
		window.location.href = `https://${data.value}.polkassembly.${domain}`;
		return null;
	};

	return <Dropdown
		className={className}
		pointing={removePointer ? false : 'top'}
		onChange={navigate}
		options={NetworkOptions}
		trigger={<StyledNetworkItem showNetwork={NETWORK}/>}
		value={NETWORK}
	/>;
};

export default styled(NetworkDropdown)`
    color: #fff;
    display: flex !important;
    align-items: center;
		margin: 0 1.2rem;
		
		@media only screen and (max-width: 768px) {
			font-size: 13px;
		}

		i.icon {
			color: #fff !important;
		}

		.menu {
			z-index: 201 !important;
		}
`;
