import {
  AcademicCapIcon,
  CodeBracketIcon,
  RectangleGroupIcon,
  ServerIcon,
  SignalIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';
import { avatar } from './global';

export const me = {
  name: 'Jaekyeong Yuk',
  title: '어디서든 변화하는 반응형 프론트엔드 개발자 육재경입니다',
  avatar: avatar,
  description: {
    brief: [''],
  },
  informations: [
    {
      name: 'Front-end Engineering',
      description: [
        '풀스택 프로젝트(Frontend + Backend), 인터랙션 웹사이트 개발',
        'TypeScript, React 이용한 SPA웹 개발, Next.js 이용한 SSR 적용, Redux 전역 상태관리 사용',
        'TailwindCSS, SCSS를 이용한 반응형 웹 페이지 개발',
      ],
      links: [],
      icon: RectangleGroupIcon,
    },
    {
      name: 'Back-end Engineering',
      description: [
        'Express, Sequelize + MySQL2를 기반으로 Backend API서버와 데이터베이스 구축',
        'AWS(EC2, S3, Route53, Lambda), Nginx를 이용한 서비스 배포',
        'Socket.io를 이용한 실시간 데이터 전송 기능 개발',
      ],
      links: [],
      icon: ServerIcon,
    },
    {
      name: 'Channels',
      description: '',
      links: [
        { title: 'email', url: 'yjgdesign@gmail.com' },
        { title: 'github', url: 'https://github.com/yjglab' },
        { title: 'blog', url: 'https://yjg-lab.tistory.com' },
        { title: 'behance', url: 'https://www.behance.net/yukjaegyong' },
      ],
      icon: SignalIcon,
    },
    {
      name: 'Skills',
      description:
        'TypeScript, React, Redux, Next, TailwindCSS, SCSS, Pug, Express, Sequelize, MySQL, MongoDB, Python, Socket.io, AWS',
      links: [],
      icon: CodeBracketIcon,
    },
    {
      name: 'Major',
      description: '컴퓨터공학 / 시각디자인학 복수전공',
      links: [],
      icon: AcademicCapIcon,
    },
    {
      name: 'Experiences',
      description: [
        'ICT이노베이션 스퀘어 코딩경진대회 대상 (2023.06, 전주)',
        '정보처리기사 (2022.09, 한국산업인력공단)',
        '파이썬 선형대수 모듈 학습법 강의 제작. 누적 수강생 3000여명, 평점 4.9/5.0 (유명 강의 플랫폼으로부터 업로드 섭외, 인프런 / 프로그래머스)',
      ],
      links: [],
      icon: TrophyIcon,
    },
  ],
};

export const activities = [
  {
    name: 'ICT 이노베이션 스퀘어 코딩경진대회',
    href: 'coding-competition',
    imageAlt: 'ICT 이노베이션 스퀘어 코딩경진대회',
    date: 2023,
    month: '2023.06',
    tags: ['알고리즘', '코딩경진대회'],
    subtitle: '전주문화산업진흥원 주관으로 진행된 코딩경진대회에서 대상 수상.',
    thumb: 'https://github.com/yjglab/tira-santorini/assets/70316567/0e0e16f9-a156-47d1-a1be-41c2b9ceb6e8',
    details: {
      banner: 'https://github.com/yjglab/tira-santorini/assets/70316567/0e0e16f9-a156-47d1-a1be-41c2b9ceb6e8',
      link: [],
      description:
        '전주 ICT 교육사업부에서 진행한 코딩경진대회입니다. 총 2시간의 제한 시간 내로 원하는 언어를 골라 주어진 3개의 알고리즘 문제를 풀어내는 것이 대회 목표입니다. 가지고 있던 코딩 능력을 발휘해볼 소중한 기회였으며 대상이라는 값진 성과를 만들었습니다.',

      images: [
        {
          name: '1',
          src: 'https://github.com/yjglab/tira-santorini/assets/70316567/c1e5de19-e831-495c-a51a-25dfbace0487',
        },
      ],
    },
  },
  {
    name: 'Python NumPy 모듈 강의 제작',
    href: 'python-numpy',
    imageAlt: 'Python NumPy 모듈 강의 제작',
    date: 2021,
    month: '2021.08',
    tags: ['Python', 'NumPy', '행렬연산'],
    subtitle: '데이터 분석과 처리에 흥미를 느껴, 자가 복습용으로 만든 강의 영상',
    thumb:
      'https://asset.programmers.co.kr/production/course_intro/16290/%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.jpeg',
    details: {
      banner: 'https://asset.programmers.co.kr/production/course_intro/16290/banner-01-01.jpg',
      link: [
        'https://inf.run/iQee',
        'https://school.programmers.co.kr/learn/courses/16290/16290-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B3%BC%ED%95%99%EC%9D%84-%EC%9C%84%ED%95%9C-%ED%8C%8C%EC%9D%B4%EC%8D%AC-numpy',
      ],
      description:
        '빅데이터 과목을 수강하면서 데이터 분석 분야에 관심이 생겨, 파이썬 모듈 강의를 제작하였습니다. 이 강의는 NumPy 모듈의 메서드 활용법을 학습할 수 있는 내용으로 구성되었습니다. 강의는 인프런에 업로드되어 있으며, 프로그래머스 스쿨에서도 업로드 제안이 들어와 내용을 업데이트하고 추가로 업로드하였습니다. 현재까지 약 2,800여 명이 신청하여 도움을 받아갔습니다. 개인적으로, 내가 알고 있는 내용을 다른 사람에게 설명해보는 것이 최고의 학습법이라고 생각합니다.',
      images: [
        {
          name: '1',
          src: 'https://github.com/yjglab/tira-santorini/assets/70316567/b6898dcd-a81f-44e3-90b4-bdd632eab4c2',
        },
        {
          name: '2',
          src: 'https://github.com/yjglab/tira-santorini/assets/70316567/4a9e541b-b61d-4753-9e00-78d827dac777',
        },
        {
          name: '3',
          src: 'https://github.com/yjglab/tira-santorini/assets/70316567/6a3b8564-404e-450a-810f-7341497bb493',
        },
        {
          name: '4',
          src: 'https://github.com/yjglab/tira-santorini/assets/70316567/5cfb1ab5-c078-43c6-9cce-31b05021c5e1',
        },
      ],
    },
  },
  {
    name: '개인 기술블로그',
    href: 'blog',
    imageAlt: '',
    date: 2020,
    month: '2020.07~',
    tags: ['기술 블로그', 'CS공부'],
    subtitle: '공부한 내용을 기록해두는 개인 블로그.',
    thumb: 'https://github.com/yjglab/tira-santorini/assets/70316567/acafa791-0ef8-4466-b3ee-70383e28e638',
    details: {
      banner: '',
      link: ['https://yjg-lab.tistory.com'],
      description:
        '개발 공부를 시작한 후부터 지금까지 지속적으로 공부했던 내용을 기록해두는 개인 블로그입니다. 주로 CS지식, Python과 JavaScript로 풀이한 알고리즘 문제 풀이 등을 기록하고 있으며 언제 어디서든 기록한 내용들을 복습하기 위해 관리하고 있습니다.',
      images: [
        {
          name: '1',
          src: 'https://github.com/yjglab/tira-santorini/assets/70316567/a011fea6-8e80-4916-be3c-d3c23131bc77',
        },
      ],
    },
  },
];
export const projectsDev = [
  {
    name: 'Nebaram Web Solution',
    href: 'nebaram',
    imageAlt: 'nebaram thumbnail',
    date: 2023,
    month: '7월~(개발 중)',
    tags: [
      'TypeScript',
      'React',
      'Next',
      'React-query',
      'Framer-motion',
      'TailwindCSS',
      'Express',
      'Sequelize',
      'Firebase',
    ],
    subtitle: '네 개의 기술력이 모여 거대한 돌풍을 만듭니다',
    thumb: `${process.env.PUBLIC_URL}/images/nebaram_thumb.png`,
    details: {
      version: '0.0.0',
      banner: '',
      link: {
        production: '',
        github: '',
        wiki: '',
      },
      issues: {
        name: '',
        description: [''],
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
      description: '',
      implements: [
        {
          name: '',
          content: [''],
        },
        {
          name: '',
          content: [''],
        },
        {
          name: '전체',
          content: [''],
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
          name: '4',
          src: '',
        },
      ],
    },
    progress: true,
  },
  {
    name: 'BlooWays',
    href: 'blooways',
    imageAlt: '실시간 온라인 라이브 토크 메시지',
    date: 2023,
    month: '5월',
    tags: [
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
    thumb: `${process.env.PUBLIC_URL}/images/blooways_thumb.png`,

    details: {
      version: '0.0.0',
      banner: 'https://github.com/yjglab/BlooWays/assets/70316567/b52d8eec-1d73-4f94-938c-656922c47217',
      link: {
        production: 'https://blooways.online',
        github: 'https://github.com/yjglab/BlooWays',
        wiki: 'https://github.com/yjglab/BlooWays/wiki',
      },
      issues: {
        name: '수신하지 않은 메시지에 대한 알림 처리',
        description: [
          'A에리어에 있는 사용자가 B에리어에서 전송된 메시지에 대한 수신 알림을 받지 못하는 상황',
          '사용자가 각 에리어별로 입장한 시간, 마지막으로 메시지를 전송한 시간을 저장 후 API 요청',
          '전송된 시간 보다 데이터 생성일이 더 큰 메시지의 개수를 체크, 클라이언트로 전송하여 해결',
        ],
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
      description:
        'BlooWays는 소켓 통신을 활용하여 1대1 또는 다수의 멤버들과 실시간 라이브 메시지를 주고받을 수 있는 서비스입니다. 블루웨이와 에리어는 각각 크고 작은 개념의 대화 공간이며, 사용자는 여러 개의 대화 공간을 생성하고 원하는 멤버를 초대하여 자신과 유사한 성향을 가진 멤버들과 소통할 수 있습니다.',
      implements: [
        {
          name: '사용자',
          content: ['일반/소셜 회원 가입', '로그인', '사용자명 변경'],
        },
        {
          name: '블루웨이 및 에리어(NSP)',
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
          name: '전체',
          content: ['반응형 웹 스크린'],
        },
      ],
      images: [
        {
          name: '1',
          src: 'https://user-images.githubusercontent.com/70316567/244487699-dad71027-af44-48bd-98ef-c30cf4f2fe69.gif',
        },
        {
          name: '2',
          src: 'https://user-images.githubusercontent.com/70316567/244768288-dd6edabe-0ac3-4f7f-bc31-6c69163c5949.gif',
        },
        {
          name: '3',
          src: 'https://user-images.githubusercontent.com/70316567/244759560-68cc8b61-84dd-46d5-a029-9a758f0663c4.gif',
        },
        {
          name: '4',
          src: 'https://user-images.githubusercontent.com/70316567/244943925-9ce4dc95-8e95-408d-ba52-d833c3d4d95d.gif',
        },
      ],
    },
  },
  {
    name: 'BlooBolt',
    href: 'bloobolt',
    imageAlt: '서비스 개발자와 기획자, 디자이너들의 소통 스퀘어',
    date: 2023,
    month: '3월',
    tags: ['TypeScript', 'React', 'Next', 'Redux-Toolkit', 'TailwindCSS', 'Express', 'Sequelize', 'AWS'],
    subtitle: '서비스 개발자와 기획자, 디자이너들의 소통 스퀘어',
    thumb: `${process.env.PUBLIC_URL}/images/bloobolt_thumb.png`,
    details: {
      version: '0.2.0',
      banner: 'https://github.com/yjglab/BlooBolt/assets/70316567/3735aca2-828b-4c46-9b91-f80f51f2e851',
      link: {
        production: 'https://bloobolt.com',
        github: 'https://github.com/yjglab/BlooBolt',
        wiki: 'https://github.com/yjglab/BlooBolt/wiki',
      },
      issues: {
        name: '스크롤 시 데이터가 몇차례 추가 로드되지 않는 현상',
        description: [
          '기존 scroll 메서드를 사용함에 따라 분기 처리가 많은 이벤트 핸들러에서 데이터 로드 요청이 누락되는 상황.',
          'Intersection Observer를 적용해 코드 리팩토링, 여러번의 이벤트 요청 방식 제거 및 성능 개선.',
        ],
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
          name: '전체',
          content: ['서버사이드 렌더링', '반응형 웹 스크린'],
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
    name: 'Museum Union Gallery',
    href: 'mug',
    imageAlt: '전시 정보를 한 페이지에서 쉽게 확인할 수 있는 인터랙티브 웹 서비스',
    date: 2022,
    month: '7월',
    tags: ['JavaScript', 'JQuery', 'Express', 'Pug', 'SCSS', 'MongoDB'],
    subtitle: '전시 정보를 한 페이지에서 쉽게 확인할 수 있는 인터랙티브 웹 서비스',
    thumb: `${process.env.PUBLIC_URL}/images/mug_thumb.png`,

    details: {
      version: '0.3.0',
      banner: 'https://github.com/yjglab/yjglab/assets/70316567/cc40ae6c-db72-4adb-b5db-6688f3b87b2e',
      link: {
        production: 'https://mug-lab.fly.dev',
        github: 'https://github.com/yjglab/MuG',
        wiki: 'https://github.com/yjglab/MuG/wiki',
      },
      issues: {
        name: '카드 클릭/닫기 클릭 시 위치 조정',
        description: [
          '카드 클릭 시 카드별 위치에서 천천히 확대되며 중앙 배치, 닫기 클릭 시 원위치로 조정해야 하는 상황.',
          '사용자 브라우저의 Viewport 크기를 계산, 클릭한 카드의 좌푯값(X, Y)을 감산하여 해결.',
        ],
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
          name: '전체',
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
          src: 'https://user-images.githubusercontent.com/70316567/246902735-ad6c4f25-e2d1-4497-a794-b1a1e325da8c.gif',
        },
        {
          name: '2',
          src: 'https://user-images.githubusercontent.com/70316567/246904605-908ca20c-4c32-44f9-be62-492cb43e206f.gif',
        },
        {
          name: '3',
          src: 'https://user-images.githubusercontent.com/70316567/246907465-60c5bfaa-ae5a-4865-aca3-3518273110da.gif',
        },
        {
          name: '4',
          src: 'https://user-images.githubusercontent.com/70316567/246910780-49bfc411-765f-43ce-ab53-23a66297a262.gif',
        },
      ],
    },
  },
  {
    name: 'Tira',
    href: 'tira',
    imageAlt: '티라미수 케이크 쇼핑몰 사이트',
    date: 2021,
    month: '9월',
    tags: ['JavaScript', 'JQuery', 'GSAP', 'Express', 'Pug', 'SCSS', 'MongoDB'],
    subtitle: '티라미수 케이크 쇼핑몰 사이트',
    thumb: `${process.env.PUBLIC_URL}/images/tira_thumb.png`,

    details: {
      version: '0.0.0',
      banner: 'https://github.com/yjglab/yjglab/assets/70316567/dbc717b1-ad83-4f1a-9ea9-1d9469fba0a0',
      link: {
        production: 'https://tira-santorini.fly.dev',
        github: 'https://github.com/yjglab/tira-santorini',
        wiki: 'https://github.com/yjglab/tira-santorini/wiki',
      },
      issues: {
        name: '가로 스크롤 구현과 화면 스냅 기능',
        description: [
          '사용자 스크롤 시 세로가 아닌 가로로 화면이 자연스럽게 스냅 되는 독특한 UX를 제공하기 위한 의도',
          '각 섹션의 요소들을 가로로 배치 후 GSAP의 to 메서드를 이용해 요소가 X축으로 이동하도록 설정',
          'ScrollTrigger의 snap과 pin속성을 이용해 화면 고정 시 부드러운 동작을 구현하여 해결',
        ],
      },
      skills: [
        {
          name: 'Frontend',
          content: 'JavaScript, JQuery, GSAP, Pug, SCSS',
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
          name: '전체',
          content: ['브랜드 소개 페이지 및 서비스 가입', '스크롤 애니메이션', '장바구니 및 가격 조정 기능'],
        },
      ],
      images: [
        {
          name: '1',
          src: 'https://user-images.githubusercontent.com/70316567/247320856-21132a08-6982-4291-b7e8-281f86e7b31d.gif',
        },
        {
          name: '2',
          src: 'https://user-images.githubusercontent.com/70316567/247320819-d3e4e7dd-dd49-4ce8-9616-f38875fcdfcc.gif',
        },
        {
          name: '3',
          src: 'https://user-images.githubusercontent.com/70316567/247320897-aa7fda01-8601-4ec9-ba67-d385523b7167.gif',
        },
        {
          name: '4',
          src: 'https://user-images.githubusercontent.com/70316567/247320934-58ee70db-4fc0-4210-8e4d-cfe89a7b5691.gif',
        },
      ],
    },
  },

  {
    name: 'Journet',
    href: 'journet',
    imageAlt: 'Journey On the Internet',
    date: 2020,
    month: '11월',
    tags: ['JavaScript', 'HTML', 'CSS'],
    subtitle: 'Journey On the Internet',
    thumb: `https://github.com/yjglab/journet/assets/70316567/dd7edc67-a865-4d9d-898a-a1e95aff3f82`,

    details: {
      version: '0.0.0',
      banner: 'https://github.com/yjglab/journet/assets/70316567/b9066384-b756-4e4b-8567-16a4b0e88138',
      link: {
        production: 'https://yjglab.github.io/journet',
        github: 'https://github.com/yjglab/journet',
        wiki: 'https://www.behance.net/gallery/109969189/Journet-Journey-On-the-Internet',
      },
      skills: [
        {
          name: 'Frontend',
          content: 'JavaScript, HTML, CSS',
        },
        {
          name: 'Deploy',
          content: 'github',
        },
      ],
      description:
        '웹 전시회를 진행합니다. 이번 전시회는 여행이라는 키워드를 중심으로 journey와 internet을 연결한 전시명으로 Journet을 제작하였습니다. 여행은 인간이 가장 높은 수준의 즐거움을 얻을 수 있는 유람입니다. 바이러스로 인해 고통스럽고 우울한 삶을 지내왔던 이들에게 시각적으로나마 유의미한 경험을 제공하고자 합니다.',
      implements: [
        {
          name: '전체',
          content: ['Basic Interaction / Animations'],
        },
      ],
      images: [
        {
          name: '1',
          src: 'https://github.com/yjglab/journet/assets/70316567/964ec1fd-db9e-48ef-98a4-c27ee323da8a',
        },
      ],
    },
  },
  {
    name: 'TROIS-COLEURS',
    href: 'trois-coleurs',
    imageAlt: 'trois-coleurs',
    date: 2020,
    month: '9월',
    tags: ['JavaScript', 'HTML', 'CSS'],
    subtitle: 'Krzysztof Kieslowski 감독의 세 가지 색 3부작 Web Poster',
    thumb: `https://github.com/yjglab/TROIS-COLEURS/assets/70316567/204c562a-ae4f-45c3-8e4f-443c59ea62c1`,

    details: {
      version: '0.0.0',
      banner: 'https://github.com/yjglab/TROIS-COLEURS/assets/70316567/c88061a0-d46e-4877-a9be-7a31bd1bdffd',
      link: {
        production: 'https://yjglab.github.io/TROIS-COLEURS/',
        github: 'https://github.com/yjglab/TROIS-COLEURS',
        wiki: 'https://www.behance.net/gallery/107300171/Trois-Couleurs-Motion-Poster',
      },
      skills: [
        {
          name: 'Frontend',
          content: 'JavaScript, HTML, CSS',
        },
        {
          name: 'Deploy',
          content: 'github',
        },
      ],
      description:
        '곡선형 글자 위주로 배치해 자유를 표현. 평행하게  배치된 요소들로 장면을 구성해 평등을 표현. 다양한 크기의 배경 서체 형태의 모음, 화면 전체의 FADE IN 효과를 통해 박애를 표현. 색상 선택에 따른 요소 색상 변화. 종이 포스터의 질감적 특징을 활용.',
      implements: [
        {
          name: '전체',
          content: ['Basic Interaction / Animations'],
        },
      ],
      images: [
        {
          name: '1',
          src: 'https://github.com/yjglab/TROIS-COLEURS/assets/70316567/a391da02-c705-4441-bd10-4f3bf77c9278',
        },
        {
          name: '2',
          src: 'https://github.com/yjglab/TROIS-COLEURS/assets/70316567/c1040101-7e19-4f2f-913a-5abe8ad785de',
        },
      ],
    },
  },
];

export const projectsDesign = [
  {
    name: '',
    href: '',
    imageAlt: '',
    date: 202,
    skills: [''],
    subtitle: '',
    thumb: `${process.env.PUBLIC_URL}/images/a.png`,

    details: {
      version: '0.0.0',
      banner: '',
      link: {
        production: '',
        github: '',
        wiki: '',
      },
      skills: [
        {
          name: '',
          content: '',
        },
        {
          name: '',
          content: '',
        },
        {
          name: '',
          content: '',
        },
        {
          name: '',
          content: '',
        },
      ],
      description: '',
      implements: [
        {
          name: '',
          content: [''],
        },
      ],
      images: [
        {
          name: '1',
          src: '',
        },
      ],
    },
  },
];
