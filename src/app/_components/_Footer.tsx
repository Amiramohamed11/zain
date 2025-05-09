"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white py-10 px-6 text-sm" dir="rtl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-right">
        {/* تابعنا */}
        <div>
          <img
            src="/zen.webp"
            alt="Logo"
            width={100}
            height={100}
            className=" w-auto"
          />
        </div>

        <div>
          <h3 className="font-bold mb-3">روابط مهمة</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">سياسة الخصوصية</li>
            <li className="hover:underline cursor-pointer">الشروط والأحكام</li>
            <li className="hover:underline cursor-pointer">
              سياسة الاستبدال والاسترجاع
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">روابط عامة</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">الصيانة</li>
            <li className="hover:underline cursor-pointer">منتجاتنا</li>
            <li className="hover:underline cursor-pointer">عروضنا</li>
            <li className="hover:underline cursor-pointer">خدماتنا</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">تواصل معنا</h3>
          <p className="font-bold">920010535</p>
          <p className="text-sm">ALI.BAHRANI@ZAINDEV.COM.SA</p>
          <p className="text-sm">العزيز، الاحساء، المنطقة الشرقية</p>
          <Image
            src="/logo.webp"
            alt="Logo"
            width={100}
            height={100}
            className="h-8 w-auto "
          />
        </div>
      </div>

      <div className="mt-6 text-center border-t border-white/30 pt-4 text-xs">
        جميع الحقوق محفوظة لزين التنموية © 2025
      </div>
    </footer>
  );
}
