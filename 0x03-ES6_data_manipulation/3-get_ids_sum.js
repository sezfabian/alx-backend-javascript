export default function getStudentIdsSum(array) {
  return array.reduce((acc, current) => acc + current.id, 0);
}
