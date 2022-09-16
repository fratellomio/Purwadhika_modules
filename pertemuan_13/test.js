const tryPromise = new Promise((resolve, reject) => {
  let isError = false;
  if (isError) reject('Error');
  else resolve('Success');
});

const tryAndCatch = async () => {
  try {
    let result = await tryPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

tryAndCatch();
