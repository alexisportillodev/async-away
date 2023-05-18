const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCZuVXrpKTUn_KEzRQgFgMWg&part=snippet%2Cid&order=date&maxResults=10';
const contenido = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4db25eedc4msh42656a29b3e2bc6p1af16fjsncb6290714e2c',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
	const result = await response.json();
    return result;
}

(async () => {
    try {
        const videos = await fetchData(url);
        let view = `
            ${videos.items.map(video => `
                <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    </h3>
                </div>
                </div>
            `).slice(0,4).join('')}
        `;
        contenido.innerHTML = view;
    } catch (error) {
        console.error(error);
    }
})();
