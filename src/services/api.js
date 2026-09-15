const BIN_URL = 'https://api.jsonbin.io/v3/b/6aa79008ffd5d1605303c32f';

export const getDogs = async () => {
  const response = await fetch(BIN_URL);

  // fetch does NOT throw on 404 or 500 - we have to check ourselves
  if (!response.ok) {
    throw new Error(`Could not load the dogs (error ${response.status}).`);
  }

  const data = await response.json();

  // jsonbin wraps the file in "record", and our file has its own "record"
  return data.record.record;
};

