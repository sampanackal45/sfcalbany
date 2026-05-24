function upsertMeta(name, content) {
  if (!content) return;

  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function upsertProperty(property, content) {
  if (!content) return;

  let tag = document.querySelector(`meta[property="${property}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

export function setPageMetadata(page) {
  if (!page) return;

  document.title = page.title;
  upsertMeta("description", page.description);
  upsertProperty("og:title", page.title);
  upsertProperty("og:description", page.description);
  upsertProperty("og:type", "website");
  upsertProperty("og:site_name", "Sharon Fellowship Church of Albany");
}
