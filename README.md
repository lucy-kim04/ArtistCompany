# 🎬 Artist Company Clone

이 프로젝트는 [ArtistCompany 공식 웹사이트](https://www.artistcompany.co.kr/)의 클론으로,  
Next.js 기반으로 UI를 리디자인하고 재구성하는 리뉴얼 연습 프로젝트입니다.

---

## 🔧 Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context
- **Data Fetching**: TanStack Query
- **Deploy**: Vercel

---

## 📁 Folder Structure

```
📁 src/
├── 🏠 app/                    # Next.js App Router
│   ├── 🗂️ (routes)/           # 라우트 관련 페이지
│   ├── 📄 page.tsx           # 메인 페이지
│   ├── 📐 layout.tsx         # 공통 레이아웃
│   └── 🎨 globals.css        # 전역 스타일
│
├── 🧩 components/            # 컴포넌트
│   ├── 🧱 common/            # 공통 컴포넌트
│   │   ├── 🔘 Button/        # 버튼 컴포넌트
│   │   ├── ⌨️ Input/         # 입력 컴포넌트
│   │   └── 🔤 Typography/    # 타이포그래피 컴포넌트
│   └── 🎯 features/          # 기능별 컴포넌트
│       ├── 👤 artists/       # 아티스트 관련
│       └── 🏡 home/          # 홈페이지 관련
│
├── 📌 constants/             # 상수 값
│
├── 🪝 hooks/                 # 커스텀 훅
│   ├── 🧱 common/            # 공통 훅
│   └── 🎯 features/          # 기능별 훅
│
├── 🚀 services/              # API 서비스
│   ├── 📡 api/               # API 엔드포인트
│   └── 📄 types/             # API 타입 정의
│
├── 🎨 styles/                # 스타일
│   └── 🖍️ theme/             # 테마 관련
│
└── 🧰 utils/                 # 유틸리티
    ├── 🧹 format/            # 포맷터
    └── 🛠️ helpers/           # 헬퍼 함수

```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install

# Run the dev server
npm run dev
# 로컬 서버: http://localhost:3000
```

## 🌐 Deployment

이 프로젝트는 Vercel을 통해 배포됩니다.

배포 주소: https://artist-redesign.vercel.app (예시)

## 📝 Notes

이 프로젝트는 연습용/비상업용 클론 프로젝트입니다.

디자인과 UI 구성은 창작 또는 오마주 기반입니다.

```

```
