/* eslint-disable no-useless-escape */
export function validEmail(email: string): boolean {
  // eslint-disable-next-line
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validUsername(username: string): boolean {
  // eslint-disable-next-line
  const re = /^(?=[a-zA-Z0-9_]{4,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
  return re.test(String(username));
}

export function validUrl(string: string): boolean {
  try {
    // eslint-disable-next-line no-new
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}
