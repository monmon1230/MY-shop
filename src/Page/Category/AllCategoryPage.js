import React from "react"
import CategoryContainer from "../../Components/Category/CategoryContainer"
import PaginationComponent from "../Home/Uitily/pagination"

const AllCategoryPage = () => {
  return (
    <div style={{minHeight:'670px'}}>
        <CategoryContainer />
        <PaginationComponent/>
    </div>
  )
}

export default AllCategoryPage