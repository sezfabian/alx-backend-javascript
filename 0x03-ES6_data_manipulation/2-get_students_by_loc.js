export default function getStudentsByLocation(array, query) {
  return array.filter((element) => element.location === query);
}
