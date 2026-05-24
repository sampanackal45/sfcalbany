export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export function isExternalUrl(url = "") {
  return /^https?:\/\//i.test(url);
}
