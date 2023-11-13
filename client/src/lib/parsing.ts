export function parseJwt(jwt: string): any {
  const base64Url = jwt.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
}
