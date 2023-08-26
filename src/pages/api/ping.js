//https://ginger-tiny-fine.glitch.me
export default async function handler(req, res) {
    const response = await fetch ("https://ginger-tiny-fine.glitch.me/", {
        method: "GET",
        headers: {
            accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
    });
    console.log("[Ping]",response.status)
    if (response.status) {
        return res.status(200);
    };
};