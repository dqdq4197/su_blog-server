# Su_blog
> 웹/모바일을 지원하는 개발자들을 위한 블로그입니다. 여러분의 개발 지식과 여러가지 정보들을 이 블로그를 통해 공유해보세요!
>> As a web/mobile developer, you can start a blog to share your knowledge with others who want to make big in this industry.

client 프로젝트는 다음 Repository에서 확인하실 수 있습니다. <br/>
client: https://github.com/dqdq4197/su_blog-client 
## Su_blog 사용하기

현재 [sublog](http://www.sublog.co) 웹 사이트를 통해 확인하실 수 있습니다. 
```
// 기능 테스트를 위한 테스터 계정입니다.

email: test@sublog.co
password: test
```

## 프로젝트 스택

### Server
다음 항목은 이 프로젝트에 사용된 핵심 백엔드 기술입니다.
- Nodejs 
- Express
- Mysql
- DB ORM (Sequelize)
- Passport를 이용한 로그인 구현 (local + Oouth)
- nodemailer
- Aws S3

### Deploy
다음 항목은 이 프로젝트를 배포하는데 사용된 기술입니다.
- Aws ec2 - ubuntu운영체제 
- nginx 
- Aws router53 
- Docker
- ~~Let’s encrypt  certbot -> ssl~~ 