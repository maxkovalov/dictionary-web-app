export async function GET(request) {
  const responseObj = { text: 'hello' };
  const responseJSON = JSON.stringify(responseObj);

  return new Response(responseJSON, {
    headers: {
      'content-type': 'application/json'
    }
  });
}
