const s3 = require('./aws-s3-connection');

const uploadFile = async (fileRef) => {
  const uploadParams = { Bucket: 'testing', Key: '', Body: Buffer.from(fileRef.data)};
  uploadParams.Key = `${ Date.now() }_${ fileRef.name }`;
  return await new Promise((resolve, reject) => {
    s3.upload(uploadParams, (error, data) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log(`Upload success: ${decodeURI(data.Location)}`);
        resolve(data);
      }
    });
  });
};

const isBucketCreated = async (bucket) => {
  return s3.headBucket({Bucket: 'testing'}).promise();
}
  // return await s3.listBuckets((err, data) => {
  //   if (err) console.log(err);
  //   else console.log(data);
  // }).promise();
  // });
// }

// TODO: remove it
  // return s3.listObjects({ Bucket: bucket }, (err, data) => {
  //   console.log(err, data);
  // });


module.exports = { uploadFile, isBucketCreated };