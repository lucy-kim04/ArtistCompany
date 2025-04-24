'use client';

import Image from 'next/image';

export default function AuditionPage() {
  return (
    <main className="max-w-4xl mx-auto py-10 text-gray-500 text-sm leading-relaxed space-y-12">
      <h1 className="text-center text-[20px] text-[#222222] mb-20 tracking-[0.15em]">
        Audition
      </h1>
      <hr className="border-t border-gray-200 mb-8" />

      <div className="w-full flex justify-center">
        <Image
          src="/images/audition.jpg"
          alt="Artist Audition"
          width={800}
          height={400}
          className="rounded w-full max-w-3xl"
          priority
        />
      </div>

      <section className="text-center space-y-2 text-gray-400 py-10">
        <p>아티스트컴퍼니가 열정 가득한 신인배우를 기다립니다.</p>
        <p>오디션 지원은 우편 및 이메일을 통해 지원하실 수 있으며</p>
        <p>보내주신 모든 자료는 신중하게 검토됩니다.</p>
        <p>
          오디션을 희망하시는 모든 분들은 다음 사항을 꼼꼼히 확인 후 지원
          바랍니다.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-base font-semibold mb-2 text-gray-600">
            지원안내
          </h2>
          <ul className="space-y-1">
            <li>
              <strong>모집부문:</strong> 연기자
            </li>
            <li>
              <strong>모집분야:</strong> 수시모집
            </li>
            <li>
              <strong>신청자격:</strong> 배우에 대한 꿈과 열정이 있는 누구나
              <p>(성별, 연령, 국적 제한 없음)</p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-semibold mb-2 text-gray-600">
            전형안내
          </h2>
          <div className="space-y-2">
            <p>오디션은 연기자 부문만 진행하며, E-mail을 통한</p>
            <p>
              1차 접수 후 합격자에 한해 개별 연락 및 2차 비공개 오디션을
              진행합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-base font-semibold mb-2 text-gray-600">
            지원방법
          </h2>
          <ol className="list-decimal pl-4 space-y-1">
            <li>오디션 신청서 작성 및 필요한 자료 준비</li>
            <li>이메일로 신청서와 자료 접수</li>
          </ol>
          <div className="mt-4 bg-gray-50 p-4 rounded space-y-3">
            <p>
              <strong>이메일접수:</strong> audition@artistcompany.co.kr
            </p>
            <p>
              <strong>제목:</strong> [오디션신청] 이름 / 생년월일 / 성별
            </p>
            <p>
              <strong>내용:</strong> 첨부자료 기재 (오디션 신청서, 사진,
              포트폴리오 등 동반서류 기재)
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-base font-semibold mb-2 text-gray-600">
            주의사항
          </h2>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              1차 서류 전형은 이메일 접수 후 합격자에 한해 전화로 개별연락
              드립니다.
            </li>
            <li>과도한 포토샵 사진은 탈락 사유가 될 수 있습니다.</li>
            <li>
              오디션 결과는 별도의 메일로 회신되지 않으며, 합격자에 한해 개별
              연락됩니다.
            </li>
            <li>온·오프라인으로 접수된 모든 자료는 반환되지 않습니다.</li>
            <li>별도의 오디션 신청서 양식은 없습니다.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
