export const defaultValues = {
  thumbnail: {},
  specialThumbnail: {},
  model: "",
  dimensions: "",
  movement: "",
  sku: "",
  description: "",
  color: "",
  numberWatches: 0,
  bracelet: "",
  images: {},
};

export const defaultValues1 = (createData: any) => {
  return {
    thumbnail: createData?.thumbnail || [],
    specialThumbnail: createData?.specialThumbnail || [],
    model: createData?.model || "",
    dimensions: createData?.dimensions || "",
    movement: createData?.movement || "",
    sku: createData?.sku || "",
    description: createData?.description || "",
    color: createData?.color || "",
    numberWatches: createData?.numberWatches || "",
    bracelet: createData?.bracelet || "",
    images: createData?.images || [],
  };
};
