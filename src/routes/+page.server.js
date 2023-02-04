/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const buildDateTime = new Date().toLocaleString("de-AT", { timeZone: "Europe/Berlin" });

    return { buildDateTime }; // gets passed in as `data` to page
}

