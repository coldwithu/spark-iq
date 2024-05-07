export const TOKEN = '7018390195:AAEFcb5E-7NSF6MG-4tZYPyv5FfZQL5yOJw';
export const CHAT_ID = '471292483';
export const URL_API = `https://api.telegram.org/bot${TOKEN}/`

export const sendMessage = async (text) => {
    const response = await fetch(URL_API + 'sendMessage', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
            parse_mode: 'html'
        })
    })
    return response.json()
}