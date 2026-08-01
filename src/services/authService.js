export const loginUser = async (credentials) => {
  return Promise.resolve({ success: true, data: credentials });
};

export const registerUser = async (formData) => {
  return Promise.resolve({ success: true, data: formData });
};
