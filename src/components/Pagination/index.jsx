import React from "react"
import styles from "./Pagination.module.css"
import ReactPaginate from "react-paginate"

const Pagination = ({ pageCount, onPageChange }) => {
    return (
        <ReactPaginate 
            pageCount={pageCount}
            onPageChange={onPageChange}
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            containerClassName={styles.pagination}
            activeClassName={styles.active}
        />
    )
}

export default Pagination