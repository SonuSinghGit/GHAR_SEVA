"use client";

import { Suspense } from "react";
import BookServices from "@/components/Service/BookServices";

const BookServicePage = () => {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading service booking please Wait...</div>}>
      <BookServices />
    </Suspense>
  );
};

export default BookServicePage;
