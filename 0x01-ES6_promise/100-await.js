import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const userRes = await createUser();
    const photoRes = await uploadPhoto();
    return { photo: photoRes, user: userRes };
  } catch (error) {
    return { photo: null, user: null };
  }
}
