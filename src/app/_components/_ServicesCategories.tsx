"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Category = {
  id: number;
  name: string;
  image: string;
};
export default function ServicesCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://services.zaindev.com.sa/api/v2/services-categories")
      .then((response) => {
        setCategories(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("حدث خطأ أثناء جلب التصنيفات:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>جاري التحميل...</p>;

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded shadow text-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-cover rounded mb-2 transition-transform duration-300 hover:scale-105"
          />
          <h2 className="text-lg font-bold">{item.name}</h2>
        </div>
      ))}
    </div>
  );
}
