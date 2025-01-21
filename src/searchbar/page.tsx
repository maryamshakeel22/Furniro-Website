import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import { client } from "@/sanity/lib/client"; // Update the path to your client
import { FiX } from "react-icons/fi"; // React Icon for close button
import Image from "next/image"; // For optimized image rendering
import { useRouter } from "next/navigation"; // For navigation

interface Product {
  _id: string;
  title: string;
  imageUrl: string;
}
// Define the type for the props
interface ProductSearchProps {
  searchQuery?: string;
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
  onChange?: ()=> void
  onClick?: ()=> void
}


const ProductSearch: React.FC<ProductSearchProps> = ({  onChange, onClick }) => {
  const [query, setQuery] = useState<string>(""); // Search input state
  const [results, setResults] = useState<Product[]>([]); // Filtered results
  const [allProducts, setAllProducts] = useState<Product[]>([]); // All products
  const searchRef = useRef<HTMLDivElement>(null); // For handling clicks outside
  const router = useRouter(); // For navigation
  const  handlesearch = () => {
    onChange
  }

  // Fetch all products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: Product[] = await client.fetch(
          `*[_type == "product"]{
            _id,
            title,
            "imageUrl": productImage.asset->url
          }`
        );
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle search input and filter results
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(value)
    );
    setResults(filtered);
  };

  // Close search dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setQuery(""); // Clear the search query
      setResults([]); // Clear results
    }
  };

  // Attach and detach click event listener
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Navigate to the product's page
  const handleProductClick = (productId: string) => {
    router.push(`/pages/${productId}`); // Assuming your product pages are at /product/[id]
  };

  return (
    <div ref={searchRef} className="relative p-4">
      {/* Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for products..."
          className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
        {query && (
          <button
            onClick={() => {
              setQuery(""); // Clear search bar
              setResults([]); // Clear results
            }}
            className="p-2 text-gray-500 hover:text-red-500"
          >
            <FiX size={20} />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {query && results.length > 0 && (
        <div className="absolute top-14 left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
          {results.map((product) => (
            <div
              key={product._id}
              className="flex items-center p-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => handleProductClick(product._id)}
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={40}
                height={40}
                className="rounded-md mr-2"
              />
              <span className="text-sm font-medium">{product.title}</span>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {query && results.length === 0 && (
        <div className="absolute top-14 left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg p-2 text-center text-gray-500 z-10">
          No products found.
        </div>
      )}
    </div>
  );
};

export default ProductSearch;