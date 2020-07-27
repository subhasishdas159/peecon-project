import axios from 'axios'

const getRates = async () => {
	const res = await axios.get('https://spreadsheets.google.com/feeds/list/125yvgO9awdkiNNmuoyHAq_n6Wf2ap5Kpf0vX7Wc0Tkk/od6/public/values?alt=json')
	return await res.data.feed.entry
}

export {getRates}