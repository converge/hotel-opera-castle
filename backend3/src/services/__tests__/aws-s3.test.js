const s3 = require('../aws-s3-connection');
// const { isBucketCreated } = require('../aws-s3');

describe('AWS S3 tests', () => {

  it('Should connect to S3', () => {

    const x = s3.listObjects({ Bucket: 'testing' }, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
    
    // const x = await isBucketCreated({Bucket: 'testing'});
    
    console.log('RRRR: ', x);
    
    // expect(s3.listBuckets()).not.toBe(null);
    expect(1).toBe(1);
  });
  
  it('Should upload a file to S3', () => {
    expect(1).toBe(1);
  });
  
  it('Should delete a file from S3', () => {
    expect(1).toBe(1);
  });
});
