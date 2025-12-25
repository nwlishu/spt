"use client";

import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
  useCallback,
  Suspense,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";


type Product = {
  id: number;
  title: string;
  description: string;
  image: string[];
  price?: number;
  originalPrice?: number;
  category: string;
  inStock?: boolean;
  rating?: number;
};

function ProductsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [categories, setCategories] = useState<string[]>(["ทั้งหมด"]);
  const [loading, setLoading] = useState(true);
  const [categoryQuery, setCategoryQuery] = useState("");
  const pageSize = 9;
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [expandedCat, setExpandedCat] = useState<string | null>(null);
  const catRef = useRef<HTMLDivElement | null>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Subcategories data
  const categorySubcategories: Record<string, string[]> = {
    "อะไหล่เครื่องตัดหญ้า": [
      "กระบอกเพลา", "ขาตั้งเครื่อง", "คลัชผ้า", "คอยล์ CDI", "คาร์บูเรเตอร์",
      "จานเอ็นตัดหญ้า", "ชุดสตาร์ท", "ถังน้ำมัน", "ถ้วยคลัช", "ถ้วยยึดใบมีด",
      "ที่กันหญ้า", "ท่อไอเสีย", "ที่ล็อคเพลา", "น็อตเกลียวซ้าย", "ปะเก็นชุด",
      "มือเร่งพร้อมสวิทช์", "สกรูเกลียวซ้าย", "สายข้ออ่อน", "สายคันเร่ง",
      "สายสะพาย", "สายเอ็นตัดหญ้า", "อุปกรณ์ป้องกัน", "หน้าแปลนกกหาง",
      "หม้อกรองอากาศ", "หัวเกียร์", "หัวเทียน TTK", "หูเกี่ยวสายสะพาย",
      "เสื้อสูบ+ชุดลูกสูบ", "แกนเพลา", "ใบมีดตัดหญ้า"
    ],
  };

  // Get current page and category from URL params
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const urlCategory = searchParams.get("category") || "ทั้งหมด";
  const urlSearch = searchParams.get("search") || "";
  const urlSubcategory = searchParams.get("subcategory") || "";

  // Use URL params as state
  const [selectedCategory, setSelectedCategory] = useState<string>(urlCategory);
  const [search, setSearch] = useState(urlSearch);
  const [subcategory, setSubcategory] = useState(urlSubcategory);

  // Sync state with URL params when they change
  useEffect(() => {
    setSelectedCategory(urlCategory);
    setSearch(urlSearch);
    setSubcategory(urlSubcategory);
  }, [urlCategory, urlSearch, urlSubcategory]);

  // Handle search with debounce and reset to page 1
  const handleSearchChange = useCallback(
    (value: string) => {
      setSearch(value);

      // Clear existing timeout
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }

      // Set new timeout to reset page after user stops typing
      searchTimeoutRef.current = setTimeout(() => {
        const params = new URLSearchParams();
        params.set("page", "1");
        if (selectedCategory !== "ทั้งหมด") {
          params.set("category", selectedCategory);
        }
        if (subcategory.trim()) {
          params.set("subcategory", subcategory);
        }
        if (value.trim()) {
          params.set("search", value);
        }
        router.push(`/products?${params.toString()}`);
      }, 500);
    },
    [selectedCategory, subcategory, router]
  );

  // Fetch categories on mount
  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("category");

        if (error) throw error;

        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set((data || []).map((item) => item.category))
        ).sort();
        setCategories(["ทั้งหมด", ...uniqueCategories]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  // Fetch products with server-side pagination
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        // Build query
        let query = supabase
          .from("products")
          .select("*", { count: "exact" })
          .order("id", { ascending: true });

        // Apply category filter
        if (selectedCategory !== "ทั้งหมด") {
          query = query.eq("category", selectedCategory);
        }

        // Apply subcategory filter (filters by description field)
        if (subcategory.trim()) {
          query = query.eq("description", subcategory);
        }

        // Apply search filter
        if (search.trim()) {
          query = query.or(
            `title.ilike.%${search}%,description.ilike.%${search}%`
          );
        }

        // Apply pagination
        const from = (currentPage - 1) * pageSize;
        const to = from + pageSize - 1;
        query = query.range(from, to);

        const { data, error, count } = await query;

        if (error) throw error;

        // Transform data to match the Product type
        const transformedProducts: Product[] = (data || []).map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description || "",
          image: item.image_urls || [],
          price: item.price,
          originalPrice: item.original_price,
          category: item.category,
          inStock: item.in_stock ?? true,
          rating: item.rating,
        }));

        setProducts(transformedProducts);
        setTotalCount(count || 0);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [currentPage, selectedCategory, search, subcategory, pageSize]);

  // Close dropdown on outside click
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!catRef.current) return;
      if (!catRef.current.contains(e.target as Node)) setIsCatOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // Cleanup search timeout on unmount
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  // Filter categories for dropdown search
  const filteredCategories = useMemo(() => {
    const q = categoryQuery.trim().toLowerCase();
    return categories.filter((c) => c.toLowerCase().includes(q));
  }, [categoryQuery, categories]);

  // Pagination calculations using server-side count
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const safePage = Math.min(currentPage, totalPages);

  const startItem = totalCount === 0 ? 0 : (safePage - 1) * pageSize + 1;
  const endItem = Math.min(totalCount, safePage * pageSize);

  // Go to page - update URL while preserving other params
  const goToPage = useCallback(
    (page: number) => {
      if (page < 1) page = 1;
      if (page > totalPages) page = totalPages;

      const params = new URLSearchParams();
      params.set("page", page.toString());
      if (selectedCategory !== "ทั้งหมด") {
        params.set("category", selectedCategory);
      }
      if (subcategory.trim()) {
        params.set("subcategory", subcategory);
      }
      if (search.trim()) {
        params.set("search", search);
      }
      router.push(`/products?${params.toString()}`);
    },
    [totalPages, router, selectedCategory, subcategory, search]
  );

  // Pagination numbers
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 1;
    const left = Math.max(2, safePage - delta);
    const right = Math.min(totalPages - 1, safePage + delta);

    pages.push(1);
    if (left > 2) pages.push("...");
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < totalPages - 1) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);
    return pages;
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // optional: smooth scroll
    });
  }, [currentPage]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Account for fixed navbar */}
      <div className="pt-20" />

      {/* Header */}
      <div className="bg-[#21286E]">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28 ">
          <div className="text-center mb-6 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffff]">
              สินค้าของเรา
            </h1>
            <p className="text-white text-lg mt-2 sm:mt-3 max-w-2xl mx-auto">
              เลือกชมสินค้าของเราและกรองตามหมวดหมู่
            </p>
          </div>
        </section>
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-16 z-40 border-y border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col gap-3">
          {/* Active Filters Display */}
          {subcategory && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-600">กรองโดย:</span>
              <div className="flex items-center gap-2 bg-[#21286E] text-white px-3 py-1 rounded-full text-sm">
                <span>{subcategory}</span>
                <button
                  onClick={() => {
                    const params = new URLSearchParams();
                    params.set("page", "1");
                    if (selectedCategory !== "ทั้งหมด") {
                      params.set("category", selectedCategory);
                    }
                    if (search.trim()) {
                      params.set("search", search);
                    }
                    router.push(`/products?${params.toString()}`);
                  }}
                  className="hover:bg-white/20 rounded-full p-0.5"
                  aria-label="Clear subcategory filter"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
          {/* Category Dropdown */}
          <div ref={catRef} className="relative w-full sm:w-80">
            <button
              type="button"
              onClick={() => setIsCatOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-xl border border-[#21286E]/30 bg-white px-4 py-2.5 text-sm font-semibold text-[#21286E] hover:border-[#21286E]"
              aria-haspopup="listbox"
              aria-expanded={isCatOpen}
            >
              <span className="truncate">{selectedCategory}</span>
              <span
                className={`transition-transform ${
                  isCatOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M36 18L24 30L12 18"
                  />
                </svg>
              </span>
            </button>

            {isCatOpen && (
              <div className="absolute z-50 mt-2 w-full rounded-2xl border border-gray-200 bg-white shadow-lg">
                {/* <div className="p-2">
                  <input
                    value={categoryQuery}
                    onChange={(e) => setCategoryQuery(e.target.value)}
                    placeholder="ค้นหาหมวดหมู่หรือสินค้า..."
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#21286E]"
                    onKeyDown={(e) => e.key === "Escape" && setIsCatOpen(false)}
                    autoFocus
                  />
                </div> */}
                <div className="max-h-96 overflow-auto p-1">
                  {filteredCategories.map((cat) => {
                    // Filter subcategories based on search query
                    const filteredSubcats = categorySubcategories[cat]
                      ? categorySubcategories[cat].filter((subcat) =>
                          subcat.toLowerCase().includes(categoryQuery.toLowerCase())
                        )
                      : [];

                    // Show category if it matches OR if any subcategory matches
                    const showCategory = cat.toLowerCase().includes(categoryQuery.toLowerCase()) || filteredSubcats.length > 0;

                    if (!showCategory) return null;

                    return (
                    <div key={cat} className="space-y-1">
                      {/* Category Button */}
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => {
                            setSelectedCategory(cat);
                            setIsCatOpen(false);
                            setCategoryQuery("");
                            // Update URL with new category (clear subcategory when changing category)
                            const params = new URLSearchParams();
                            params.set("page", "1");
                            if (cat !== "ทั้งหมด") {
                              params.set("category", cat);
                            }
                            if (search.trim()) {
                              params.set("search", search);
                            }
                            router.push(`/products?${params.toString()}`);
                          }}
                          className={`flex-1 flex items-center justify-between rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-50 ${
                            selectedCategory === cat
                              ? "bg-gray-100 font-semibold"
                              : ""
                          }`}
                          role="option"
                          aria-selected={selectedCategory === cat}
                        >
                          <span className="truncate">{cat}</span>
                          {selectedCategory === cat && (
                            <span className="text-[#21286E]">✓</span>
                          )}
                        </button>
                        {/* Expand/Collapse for subcategories */}
                        {categorySubcategories[cat] && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedCat(expandedCat === cat ? null : cat);
                            }}
                            className="p-2 hover:bg-gray-50 rounded-lg"
                          >
                            <svg
                              className={`w-4 h-4 transition-transform ${
                                expandedCat === cat ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                        )}
                      </div>

                      {/* Subcategories */}
                      {categorySubcategories[cat] && (expandedCat === cat || (categoryQuery.trim() && filteredSubcats.length > 0)) && (
                        <div className="pl-6 space-y-1">
                          {(categoryQuery.trim() ? filteredSubcats : categorySubcategories[cat]).map((subcat) => (
                            <button
                              key={subcat}
                              onClick={() => {
                                setIsCatOpen(false);
                                setCategoryQuery("");
                                // Navigate to subcategory filter
                                const params = new URLSearchParams();
                                params.set("page", "1");
                                params.set("subcategory", subcat);
                                if (search.trim()) {
                                  params.set("search", search);
                                }
                                router.push(`/products?${params.toString()}`);
                              }}
                              className="w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-lg"
                            >
                              {subcat}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    );
                  })}
                  {filteredCategories.length === 0 && (
                    <div className="px-3 py-6 text-center text-sm text-gray-500">
                      ไม่พบหมวดหมู่ที่ค้นหา
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Search */}
          <div className="flex items-center gap-2">
            <div className="relative w-full sm:w-80">
              <input
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="ค้นหาสินค้า..."
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none ring-0 focus:border-[#21286E]"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M19 3C13.488 3 9 7.488 9 13c0 2.395.84 4.59 2.25 6.313L3.281 27.28l1.439 1.44l7.968-7.969A9.92 9.92 0 0 0 19 23c5.512 0 10-4.488 10-10S24.512 3 19 3m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {loading ? (
          <div className="py-16 text-center text-gray-600">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#21286E] border-r-transparent"></div>
            <p className="mt-4">Loading products...</p>
          </div>
        ) : totalCount === 0 ? (
          <div className="py-16 text-center text-gray-600">
            No products found.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {products.map((p) => (
                <article
                  key={`${p.id}-${safePage}`}
                  className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg transition-shadow"
                >
                  {/* Image */}
                  <Link
                    href={`/products/${p.id}`}
                    className="relative h-52 md:h-96 block"
                  >
                    <Image
                      src={p.image[0]}
                      alt={p.title}
                      fill
                      className="object-contain p-2"
                    />
                    <div className="absolute left-3 top-3 flex items-center gap-2">
                      <span className="rounded-full bg-yellow-400/95 text-[#21286E] px-3 py-1 text-xs font-bold">
                        {p.category}
                      </span>
                      {/* {!p.inStock && (
                        <span className="rounded-full bg-red-500 text-white px-3 py-1 text-xs font-semibold">
                          Out of Stock
                        </span>
                      )} */}
                    </div>
                    {/* {p.originalPrice && p.originalPrice > p.price && (
                      <div className="absolute right-3 top-3 rounded-full bg-red-500 text-white px-3 py-1 text-xs font-semibold">
                       kkk
                      </div>
                    )} */}
                  </Link>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      <Link
                        href={`/products/${p.id}`}
                        className="hover:underline"
                      >
                        {p.title}
                      </Link>
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {p.description}
                    </p>

                    {/* Push price + button down */}
                    <div className="mt-auto">
                      <div className="mt-4">
                        <Link
                          href={`/products/${p.id}`}
                          className="block rounded-xl px-4 py-2.5 text-sm font-semibold border text-center bg-yellow-400 text-[#21286E] hover:bg-yellow-300"
                        >
                          ดูรายละเอียด
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-600">
                Showing {startItem}-{endItem} of {totalCount}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => goToPage(safePage - 1)}
                  disabled={safePage === 1}
                  className={`cursor-pointer px-3 py-2 rounded-lg border text-sm font-medium ${
                    safePage === 1
                      ? "text-gray-400 border-gray-200 cursor-not-allowed"
                      : "text-[#21286E] border-[#21286E]/30 hover:border-[#21286E]"
                  }`}
                >
                  Prev
                </button>

                {getPageNumbers().map((p, idx) =>
                  typeof p === "number" ? (
                    <button
                      key={idx}
                      onClick={() => goToPage(p)}
                      className={`cursor-pointer min-w-9 px-3 py-2 rounded-lg border text-sm font-semibold ${
                        safePage === p
                          ? "bg-[#21286E] text-white border-[#21286E]"
                          : "bg-white text-[#21286E] border-[#21286E]/30 hover:border-[#21286E]"
                      }`}
                    >
                      {p}
                    </button>
                  ) : (
                    <span
                      key={idx}
                      className="cursor-poniter px-2 text-gray-400 select-none"
                    >
                      {p}
                    </span>
                  )
                )}

                <button
                  onClick={() => goToPage(safePage + 1)}
                  disabled={safePage === totalPages}
                  className={`cursor-pointer px-3 py-2 rounded-lg border text-sm font-medium ${
                    safePage === totalPages
                      ? "text-gray-400 border-gray-200 cursor-not-allowed"
                      : "text-[#21286E] border-[#21286E]/30 hover:border-[#21286E]"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#21286E] border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
