// SWR is a strategy to first return the data from the cache (stale), then send the fetch request (revalidate), and finally, come up with up-to-date data.

export default async function fetcher(url) {
    return fetch(url).then((r) => r.json());
}