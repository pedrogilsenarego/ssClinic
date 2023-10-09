import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const handleAddThumbnail = async (
  title: string,
  files: any,
  onProgressUpdate: (progress: number) => void
) => {
  const storage = getStorage();

  const a = Array.prototype.slice.call(files);
  const c: any = [];
  let incrementLoad = 100 / a.length;
  let loadProgress = 0;

  const uploadImageAsPromise = (imageFile: any) => {
    return new Promise<void>((resolve, reject) => {
      const storageRef = ref(storage, `products/${title}/${imageFile.name}`);
      uploadBytes(storageRef, imageFile)
        .then(() => {
          getDownloadURL(storageRef).then((url) => {
            console.log(url);
            loadProgress = loadProgress + incrementLoad;
            onProgressUpdate(~~loadProgress);
            c.push(url);
            resolve();
          });
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  };

  for (var i = 0; i < a.length; i++) {
    var imageFile = a[i];
    await uploadImageAsPromise(imageFile);
  }
  return c;
};
