<script>
	import { Line } from 'svelte-chartjs';
	import { data } from './data/global_temp_changes_ar6_spm01.js';

	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale
	} from 'chart.js';

	ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);
</script>

<Line {data} options={{ responsive: true }} />
