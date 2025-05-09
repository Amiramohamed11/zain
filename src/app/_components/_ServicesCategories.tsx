"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ServicesCategories() {
  const [categories, setCategories] = useState([]);
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
      {categories.map((item: any) => (
        <div key={item.id} className="bg-white p-4 rounded shadow text-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-cover rounded mb-2"
          />
          <h2 className="text-lg font-bold">{item.name}</h2>
        </div>
      ))}
    </div>
  );
}
