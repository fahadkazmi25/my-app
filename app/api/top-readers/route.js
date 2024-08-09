// app/api/users/route.js

export async function GET(request) {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();
    
    // Limit the users array to the first 10 entries
    const limitedUsers = data.users.slice(0, 10);
    console.log(limitedUsers)

    return new Response(JSON.stringify(limitedUsers), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
