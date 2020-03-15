const express = require('express');
const {Post} = require('../models');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');


// Aws s3 버켓에 이미지 저장 
AWS.config.update({
  accessKeyId:process.env.AWSAccessKeyId,
  secretAccessKey:process.env.AWSSecretKey,
  region: 'ap-northeast-2',
});

const uploadS3 = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'sublogs3',
    key(req, file, cb) {
      cb(null, `original/${+new Date()}${path.basename(file.originalname)}`);
    },
  }),
  limits: {fileSize: 5 * 1024 * 1024},
});

// local 환경 프로젝트 내부에 이미지 저장
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'posterImage/')
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);  
      cb(null, path.basename(file.originalname, ext) + "1" + Date.now() + ext); 
    }
  })

var upload = multer({ storage: storage })



if( process.env.NODE_ENV === 'production') {
  router.post('/fetchFile', uploadS3.single('image'), (req,res) => {
    console.log(req.file);
    res.json(req.file.location);
  })
  router.post('/tumnail',uploadS3.single('poster'), (req,res) => {
    res.json(req.file.location);
  })
} else {
  router.post('/fetchFile', upload.single('image'), (req,res) => {
    res.json(req.file.filename);  
  })
  router.post('/tumnail',upload.single('poster'), (req,res) => {
    res.json(req.file.filename);
  })
}


router.post('/fetchUrl',(req,res) => {
    res.json(req.body.url)
})



module.exports = router;