export default (request: Request) => {
  const { searchParams, href, pathname } = new URL(request.url)

  if (!searchParams.has('a')) {
    return
  }

  const a = searchParams.get('a');

  const redirectUrl = new URL(href.replace(pathname, `/blog/${a}`).replace(/\?.*/, '')).toString()
  console.log(redirectUrl)

  return Response.redirect(redirectUrl, 302);
}