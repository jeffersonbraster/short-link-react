export const getLinkSave = async (key) => {
  const myLinks = localStorage.getItem(key);

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
};

export const saveLink = async (key, newLink) => {
  let linksStored = await getLinkSave(key);

  const hasLink = linksStored.some((link) => link.id === newLink.id);

  if (hasLink) {
    return;
  }

  linksStored.push(newLink);

  localStorage.setItem(key, JSON.stringify(linksStored));
};

export const deleteLink = (links, id) => {
  let myLinks = links.filter((item) => {
    return item.id !== id;
  });

  localStorage.setItem("@shortLink", JSON.stringify(myLinks));

  return myLinks;
};
