import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
	integrations: [starlight({
		title: 'Aktuelle Erderhitzung',
		favicon: '/images/earth_flaticon_2072130.png',
		customCss: [
			// Relative path to your custom CSS file
			'./src/css/custom.css',
		],
		social: {
			github: 'https://github.com/withastro/starlight'
		},
		sidebar: [
			{
				label: 'Intro',
				// Each item here is one entry in the navigation menu.
				items: [
					{
						label: 'Kurz-Zusammenfassung',
						link: '/intro/kurz-zusammenfassung/'
					}
				]
			},
			{
				label: 'Themen',
				items: [{
					label: 'Aktuelle Erderhitzung',
					link: '/themen/aktuelle-erderhitzung'
				},
				{
					label: 'Aktueller Pfad',
					link: '/themen/aktueller-pfad'
				},
				{
					label: 'Aktuelle CO2-Menge',
					link: 'themen/aktuelle-co2-menge'
				},
				{
					label: '1,5-Grad wird überschritten',
					link: '/themen/1-5-grad-wird-ueberschritten'
				},
				{
					label: 'Kipppunkte',
					link: '/themen/kipppunkte-und-unumkehrbarkeit'
				},
				{
					label: 'Neue Lebensbedingungen',
					link: '/themen/neue-lebensbedingungen'
				},
				{
					label: 'Gesellschaftliche Herausforderungen',
					link: '/themen/gesellschaftliche-herausforderungen'
				}, {
					label: 'Wirtschaftliche Herausforderungen',
					link: '/themen/wirtschaftliche-herausforderungen'
				}]
			}, {
				label: 'Reference',
				autogenerate: {
					directory: 'reference'
				}
			}]
	}), svelte()]
});