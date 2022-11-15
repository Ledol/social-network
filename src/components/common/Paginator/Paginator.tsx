import React from 'react';
import style from "./Paginator.module.css";

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map((page, index) => {
                return (
                    <span
                        key={index}
                        onClick={() => props.onPageChanged(page)}
                        className={props.currentPage === page ? style.selectedPage : ""}
                    >
              {page}
            </span>
                );
            })}
        </div>
    );
};
