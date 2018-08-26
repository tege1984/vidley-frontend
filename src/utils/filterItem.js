import _ from "lodash";

export function filterItem(items, filter) {
  if (!filter) return items;
  return items.filter(item => item.genre.name === filter);
}
