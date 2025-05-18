'use client';

import React, { useEffect, useState } from 'react';

interface VisitorCount {
  total: number;
}

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState<VisitorCount>({
    total: 0,
  });

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const updateResponse = await fetch('/api/visitor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'no-store',
        });

        const updateData = await updateResponse.json();

        if (!updateResponse.ok) {
          throw new Error(updateData.error || 'Failed to update visitor count');
        }

        setVisitorCount({ total: updateData.total });
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <footer className="w-full mt-[200px] tracking-[0.15em]">
      <div className="mt-2 max-w-[1200px] mx-auto py-4 border-t border-[#DDDDDD]">
        <h2 className="text-center text-[20px] font-[400] mb-[25px]">
          Contact us
        </h2>

        <div className="text-center">
          <h3 className="text-[#999999] text-[14px] font-bold mb-[15px]">
            OUR INFORMATION
          </h3>

          <div className="space-y-4 text-[14px] text-[#999999]">
            <div className="text-[11px] mb-[10px]">
              <h4>Address</h4>
              <p>(우)06062 서울특별시 강남구 도산대로 430</p>
              <p>430, Dosan-daero, Gangnam-gu, Seoul, Republic of Korea</p>
            </div>

            <div className="mb-2.5">
              <h4>
                E-mail
                <br />
                info@artistcompany.co.kr
              </h4>
            </div>

            <div className="text-[11px]">
              <h4>대표이사 황 경 주</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center border-t border-[#DDDDDD] text-[11px] text-[#999999] py-5">
          <div className="w-1/3"></div>
          <p className="w-1/3 text-center">
            copyright © 2017 Artist Company Inc.
            <br />
            all rights reserved. - Designed by{' '}
            <a href="https://github.com/lucy-kim04" target="_blank">
              heeju
            </a>
          </p>
          <p className="w-1/3 text-right">
            Visitor {visitorCount.total.toLocaleString()}
          </p>
        </div>
      </div>
    </footer>
  );
}
