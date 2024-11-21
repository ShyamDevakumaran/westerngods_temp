import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Product from "../../components/Product/Product";
import SelectFilter from "../../components/Filters/SelectFilter";
import { Loader } from "../../components/Component";
import { getAllItems } from "../../redux/thunks/product";
import WhatsApp from "../../components/ProductEnquiry/WhatsApp";

const AllItems = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedprice, setSelectedprice] = useState("");
  const [filter, setfilter] = useState(null);
  const [selectedrate, setSelectedrate] = useState("");
  const [index, setIndex] = useState(1); // Starting from page 2 as you have initial data
  const { allItemsList, isLoading: loading } = useSelector(
    (state) => state.productReducer
  );

  // Extract unique categories for the filter options

  const categories = [
    ...new Set(allItemsList?.map((item) => item.category)),
  ].map((category) => ({
    value: category,
    label: category.charAt(0).toUpperCase() + category.slice(1),
  }));

  const prices = [...new Set(allItemsList?.map((item) => item.cost_price))].map(
    (cost_price) => ({
      value: cost_price,
      label: cost_price,
    })
  );

  // Filter data based on selected category
  const filteredData = selectedCategory
    ? allItemsList?.filter((item) => item.category === selectedCategory)
    : selectedprice
    ? allItemsList?.filter((item) => item.cost_price === selectedprice)
    : allItemsList;

  const maxPages = 1; // Assuming there are only 5 pages of data

  const fetchMoreData = async () => {
    try {
      const fetchedData = await dispatch(getAllItems({ index: index }));

      // Determine if there's more data to load
      if (fetchedData.payload.length === 0) {
        setHasMore(false);
      } else {
        setIndex((prevIndex) => prevIndex + 1); // Move to the next page
      }
    } catch (error) {
      setHasMore(false); // Stop further loading on error
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    selectedrate == 1
      ? dispatch(getAllItems({ index: "asc" }))
      : selectedrate == 2
      ? dispatch(getAllItems({ index: "desc" }))
      : dispatch(getAllItems({ index: null }));
  }, [selectedrate]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="mt-10">
          <div className="container mx-auto">
            <div className="justify-center">
              <SelectFilter
                options={categories}
                rate={selectedrate}
                setrate={setSelectedrate}
                value={selectedCategory}
                onChange={setSelectedCategory}
                placeholder="Filter "
                // label="Category"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 font-medium font-basefont lg:grid-cols-4 xl:grid-cols-4 lg:mx-10 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {filteredData?.map((product) => (
                <Product
                  product={product}
                  dispatchFunc={getAllItems()}
                  key={product.id}
                />
              ))}
            </div>
            {/* //         </InfiniteScroll> */}
          </div>
        </section>
      )}
      <WhatsApp />
    </>
  );
};

export default AllItems;
