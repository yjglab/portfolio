export const projectsDev = [
  {
    name: 'BlooBolt',
    href: 'bloobolt',
    imageSrc: '',
    imageAlt: '소프트웨어 개발자와 기획자, 디자이너들의 소통 스퀘어',
    date: 2023,
    skills: ['TypeScript', 'React', 'Next', 'Redux-Toolkit', 'TailwindCSS', 'Express', 'Sequelize', 'AWS'],
    subtitle: '소프트웨어 개발자와 기획자, 디자이너들의 소통 스퀘어',

    details: {
      version: '0.2.0',
      link: {
        production: 'https://bloobolt.com',
        github: 'https://github.com/yjglab/BlooBolt',
        wiki: 'https://github.com/yjglab/BlooBolt/wiki',
      },
      skills: [
        {
          name: 'Frontend',
          content: 'TypeScript, React, Redux Toolkit, Next, Tailwind',
        },
        {
          name: 'Backend',
          content: 'Express, Sequelize(MySQL)',
        },
        {
          name: 'Deploy',
          content: 'AWS(EC2+S3+Lambda)',
        },
        {
          name: 'Secure',
          content: 'Nginx + HTTPS',
        },
      ],
      description:
        '서비스 개발에 필요한 개발자들, 기획자, 디자이너들이 모여서 직무에 관한 질문을 통해서 지식을 얻어가거나 최신 트렌드 같은 이야기들을 주제로 소통을 할 수 있는 커뮤니티 공간입니다. 기획부터 디자인/퍼블리싱, 프론트, 백엔드 개발을 모두 진행했고 현재 aws로 배포되어있는 반응형 SPA 웹 서비스입니다. 포스트를 만들고 글과 사진, 코멘트를 통해 소통하며 프로필 만들기, 팔로우, 랭크 시스템 등 여러가지 기능을 넣은 프로젝트이며 꾸준히 새로운 기능 및 버전 업데이트를 진행하고 있습니다.',
      implements: [
        {
          name: '사용자',
          content: [
            '일반/소셜 회원 가입',
            '로그인',
            '비밀번호 변경/재발급',
            '프로필 아바타 및 내용 제작',
            '사용자 랭크',
            '트레이스(팔로우)',
            '사용자 신고',
            '밴',
          ],
        },
        {
          name: '포스트',
          content: [
            '포스트 생성/삭제/수정/블라인드',
            '다중 이미지 업로드',
            '이미지 슬라이더',
            '이미지 압축',
            '포스트 공감 기능',
            '코멘트 생성/수정/삭제',
            '포스트 검색',
            '해시태그 검색',
            '무한 스크롤링 포스트 로드',
            '추천 포스트 로드',
          ],
        },
        {
          name: '공통',
          content: ['반응형 웹 스크린'],
        },
      ],
      images: [
        {
          name: '1',
          src: 'https://user-images.githubusercontent.com/70316567/244946346-3dfd6ee7-5051-45f9-8596-f566d2f669e4.gif',
        },
        {
          name: '2',
          src: 'https://user-images.githubusercontent.com/70316567/244888544-af3068a5-a581-4014-b604-d9e831ec79da.gif',
        },
        {
          name: '3',
          src: 'https://user-images.githubusercontent.com/70316567/244886246-3d82eddb-7fe4-4441-8346-b17354806997.gif',
        },
        {
          name: '프로필',
          src: 'https://user-images.githubusercontent.com/70316567/244889548-238d3104-af3c-4de1-82bc-2639540840ea.gif',
        },
      ],
    },
  },
  {
    name: 'BlooWays',
    href: 'blooways',
    imageSrc: '',
    imageAlt: '실시간 온라인 라이브 토크 메시지',
    date: 2023,
    skills: [
      'TypeScript',
      'React',
      'SWR',
      'TailwindCSS',
      'Styled-components',
      'Express',
      'Socket.io',
      'Sequelize',
      'AWS',
    ],
    subtitle: '실시간 온라인 라이브 토크 메시지',

    details: {
      version: '0.0.0',
      link: {
        production: 'https://blooways.online',
        github: 'https://github.com/yjglab/BlooWays',
        wiki: 'https://github.com/yjglab/BlooWays/wiki',
      },
      skills: [
        {
          name: 'Frontend',
          content: 'TypeScript, React, React-Router, SWR, Tailwind, Styled-Components',
        },
        {
          name: 'Backend',
          content: 'Express, Sequelize(MySQL), Socket.io',
        },
        {
          name: 'Deploy',
          content: 'AWS(EC2+S3)',
        },
        {
          name: 'Secure',
          content: 'Nginx + HTTPS',
        },
      ],
      description: 'BlooWays는 소켓을 이용한 실시간 라이브 토크 기능을 제공하는 웹 서비스입니다.',
      implements: [
        {
          name: '사용자',
          content: ['일반/소셜 회원 가입', '로그인', '사용자명 변경'],
        },
        {
          name: '블루웨이 및 에리어(소켓 네임스페이스)',
          content: [
            '블루웨이 생성',
            '에리어 생성',
            '멤버 초대하기',
            '실시간 메시지 통신',
            '접속중인 사용자 인디케이팅',
            '포스트 공감 기능',
            '멤버 언급하기',
            '이미지 전송',
            '미확인 메시지 인디케이팅',
            '무한 스크롤링',
          ],
        },
        {
          name: '공통',
          content: ['반응형 웹 스크린'],
        },
      ],
      images: [
        {
          name: '1',
          src: '',
        },
        {
          name: '2',
          src: '',
        },
        {
          name: '3',
          src: '',
        },
        {
          name: '프로필',
          src: '',
        },
      ],
    },
  },
  {
    name: 'Museum Union Gallery',
    href: 'mug',
    imageSrc: '',
    imageAlt: '전시 정보를 한 페이지에서 쉽게 확인할 수 있는 인터랙티브 웹 서비스',
    date: 2022,
    skills: ['JavaScript', 'JQuery', 'Express', 'Pug', 'SCSS', 'MongoDB'],
    subtitle: '전시 정보를 한 페이지에서 쉽게 확인할 수 있는 인터랙티브 웹 서비스',

    details: {
      version: '0.3.0',
      link: {
        production: 'https://mug-lab.fly.dev',
        github: 'https://github.com/yjglab/MuG',
        wiki: 'https://github.com/yjglab/MuG/wiki',
      },
      skills: [
        {
          name: 'Frontend',
          content: 'JavaScript, JQuery, Pug, SCSS',
        },
        {
          name: 'Backend',
          content: 'Express, MongoDB',
        },
        {
          name: 'Deploy',
          content: 'Flyio',
        },
      ],
      description:
        '미리 크롤링해놓은 전시 정보 데이터를 한 페이지에서 쉽게 확인할 수 있는 인터랙티브 반응형 웹 서비스입니다. 파이썬 Selenium을 이용해 Robot 배제 프로토콜 허용 범위안에서 전시 데이터를 모았으며 이 데이터를 카드 형식으로 디자인하여 페이지에 로드합니다. 사용자 인터랙션과 애니메이션 구현, 퍼블리싱에 집중한 프로젝트입니다. 컨트롤러에서 사용자가 페이지를 요청하면 셔플된 MongoDB 데이터를 불러와서 객체로 전송해줍니다. Pug에서 전달받은 데이터를 페이지에 렌더링합니다.',
      implements: [
        {
          name: '공통',
          content: [
            '스크롤 애니메이션',
            '카드 소팅 애니메이션',
            '전시명/전시관/전시국 검색 필터링',
            '박물관/미술관 필터링',
            '카드 클릭 애니메이션.',
            '반응형 웹 스크린',
          ],
        },
      ],
      images: [
        {
          name: '1',
          src: '',
        },
        {
          name: '2',
          src: '',
        },
        {
          name: '3',
          src: '',
        },
        {
          name: '프로필',
          src: '',
        },
      ],
    },
  },
  {
    name: 'Tira',
    href: 'tira',
    imageSrc: '',
    imageAlt: '티라미수 케이크 쇼핑몰 사이트',
    date: 2021,
    skills: ['JavaScript', 'JQuery', 'Express', 'Pug', 'SCSS'],
    subtitle: '티라미수 케이크 쇼핑몰 사이트',

    details: {
      version: '0.0.0',
      link: {
        production: 'https://tira-santorini.fly.dev',
        github: 'https://github.com/yjglab/tira-santorini',
        wiki: 'https://github.com/yjglab/tira-santorini/wiki',
      },
      skills: [
        {
          name: 'Frontend',
          content: 'JavaScript, JQuery, Pug, SCSS',
        },
        {
          name: 'Backend',
          content: 'Express, MongoDB',
        },
        {
          name: 'Deploy',
          content: 'Flyio',
        },
      ],
      description:
        'TIRA는 그리스 산토리니에 존재하는 여섯 마을을 배경으로 한 티라미수 전문 디저트 브랜드입니다. 산토리니 마을들의 특징과 색상, 형태 등을 반영하여 패키지의 디자인과 제품의 맛이 각 마을과 가장 잘 부합하도록 선정된 다양한 티라미수 패키지를 제공합니다.',
      implements: [
        {
          name: '공통',
          content: ['브랜드 소개 페이지 및 서비스 가입', '스크롤 애니메이션', '장바구니 및 가격 조정 기능'],
        },
      ],
      images: [
        {
          name: '1',
          src: '',
        },
        {
          name: '2',
          src: '',
        },
        {
          name: '3',
          src: '',
        },
        {
          name: '프로필',
          src: '',
        },
      ],
    },
  },
];