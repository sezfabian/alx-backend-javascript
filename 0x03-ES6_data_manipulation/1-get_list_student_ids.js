export default function getListStudentsIds(arg) {
  if (!Array.isArray(arg)) {
    return [];
  }
  return arg.map((element) => element.id);
}
