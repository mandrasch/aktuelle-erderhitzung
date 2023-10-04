import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
	// this will enable a sitemap
	site: 'https://aktuelle-erderhitzung.de',

	integrations: [starlight({
		title: 'Aktuelle Erderhitzung',
		defaultLocale: 'root', // optional
		locales: {
			root: {
				label: 'Deutsch',
				lang: 'de', // lang is required for root locales
			},
		},
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
						label: 'Der aktuelle Stand',
						link: '/intro/aktueller-stand/'
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
					label: 'Kipppunkte und Unumkehrbarkeit',
					link: '/themen/kipppunkte-und-unumkehrbarkeit'
				},
				{
					label: 'Neue Lebensbedingungen',
					link: '/themen/neue-lebensbedingungen'
				},
				{
					label: 'Wirtschaftliche Herausforderungen',
					link: '/themen/wirtschaftliche-herausforderungen'
				},
				{
					label: 'Planetare Grenzen und Zwillingskrise',
					link: '/themen/planetare-grenzen-und-zwillingskrise-biodiversitaet'
				},
				{
					label: 'Fortschritte, Solidarität und Anpassung',
					link: '/themen/fortschritte-solidaritaet-und-anpassung'
				}
				]
			}, {
				label: 'Sonstige Ressourcen',
				autogenerate: {
					directory: 'sonstige-ressourcen'
				}
			}, {
				label: 'Über',
				autogenerate: {
					directory: 'about'
				}
			}]
	}), svelte()]
});