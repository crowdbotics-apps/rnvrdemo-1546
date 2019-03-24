'use strict';

import React, { Component } from 'react';

import { ViroScene, ViroText, Viro360Image, ViroMaterials } from 'react-viro';

export default class HelloWorldScene extends Component {
	constructor() {
		super();

		this.state = {}; // Set initial state here
	}

	render() {
		return (
			<ViroScene>
				<Viro360Image source={require('./res/360_space.jpg')} />
				<ViroText
					fontSize={40}
					text="Hi, from Crowdbotics"
					width={2}
					height={2}
					position={[0, 0, -2]}
					textAlign="center"
					textAlignVertical="center"
					color="#ffffff"
					extrusionDepth={8}
					materials={['frontMaterial', 'backMaterial', 'sideMaterial']}
				/>
			</ViroScene>
		);
	}
}

ViroMaterials.createMaterials({
	frontMaterial: {
		diffuseColor: '#FFFFFF'
	},
	backMaterial: {
		diffuseColor: '#FF0000'
	},
	sideMaterial: {
		diffuseColor: '#0000FF'
	}
});

module.exports = HelloWorldScene;
