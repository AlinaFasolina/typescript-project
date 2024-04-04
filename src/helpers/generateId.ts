function* generateId(): Generator<number> {
  let id = 11;
  while (true) {
    yield id;
    id++;
  }
}
export const generateIdHandler = generateId();
